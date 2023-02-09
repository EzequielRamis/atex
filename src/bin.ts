#!/usr/bin/env node

import fs from 'node:fs'
import pt from 'node:path'
import { fileURLToPath } from 'node:url'
import { cac } from 'cac'
import { createServer } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import {
  loadJsonModule,
  writeModule,
  loadJsModule,
  INPUTDIR,
  OUTPUTDIR,
} from './io'
import { version } from '../package.json'
import { sortModules } from './graph'
import { AtexLogger, createLogger } from './logger'
import {
  isHiddenPath,
  isJsPath,
  isJsonPath,
  isJsxPath,
  isSupportedPath,
  isWritablePath,
} from './path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ATEX_SRC = pt.resolve(__dirname, './atex')

const cli = cac('atex')

cli.usage('[options]')

cli
  .option('-w, --watch', '[boolean] Watch changes from "atex/src" directory', {
    default: false,
  })
  .option(
    '--clearScreen',
    '[boolean] Allow/disable clear screen when logging',
    {
      default: false,
    },
  )
  .option('-l, --logLevel <level>', '[string] info | warn | error | silent', {
    default: 'info',
  })

cli.version(version)
cli.help()

const parsed = cli.parse()

if (!parsed.options.help) {
  ;(async () => {
    const server = await createServer({
      plugins: [
        tsconfigPaths({
          root: '..',
        }),
      ],
      configFile: false,
      envFile: false,
      optimizeDeps: {
        disabled: true,
      },
      publicDir: false,
      resolve: {
        alias: {
          __atex: ATEX_SRC,
        },
      },
      root: INPUTDIR,
      esbuild: {
        jsx: 'transform',
        jsxSideEffects: true,
        jsxFactory: '__atex.define',
        jsxFragment: 'null',
        jsxInject: `;import { Atex } from '__atex';const __atex = new Atex();`,
        footer: `;export const __defs = typeof __atex !== 'undefined' ? __atex.definitions : false;`,
      },
      appType: 'custom',
      customLogger: createLogger(parsed.options.logLevel, {
        prefix: '[atex]',
        allowClearScreen: parsed.options.clearScreen,
      }),
      server: {
        watch: {
          persistent: true,
        },
      },
    })

    const logger = new AtexLogger(server.config.logger)

    const normalizePath = (p: string) => pt.relative(server.config.root, p)

    async function touch(
      path: string,
      recursive: boolean = true,
      clear: boolean = true,
    ) {
      const npath = normalizePath(path)
      if (npath.startsWith('..')) {
        return
      }
      if (isJsxPath(path)) {
        await loadJsModule(server, path)
          .then((json) => {
            writeModule(npath, json)
            logger.blocks(npath, clear)
          })
          .catch((e) => logger.error(e, clear))
      } else if (isJsPath(path)) {
        await loadJsModule(server, path)
          .then(() => {
            logger.content(npath, clear)
          })
          .catch((e) => logger.error(e, clear))
      } else if (isJsonPath(path)) {
        await loadJsonModule(server, path)
          .then((json) => {
            if (isHiddenPath(path)) {
              logger.content(npath, clear)
            } else {
              writeModule(npath, json)
              logger.blocks(npath, clear)
            }
          })
          .catch((e) => logger.error(e, clear))
      } else {
        logger.unsupported(npath, clear)
        return
      }
      if (recursive) {
        const [mod] = server.moduleGraph.getModulesByFile(
          path.replaceAll(pt.sep, pt.posix.sep),
        )
        await sortModules(
          Array.from(server.moduleGraph.idToModuleMap.values()),
          mod,
        )
          .then(async (importers) => {
            if (importers.length > 0) {
              logger.propagated(importers.map((i) => normalizePath(i.file)))
              for (const i of importers) {
                await touch(i.file, false, false)
              }
            }
          })
          .catch((e) => logger.error(e))
      }
    }

    server.watcher.on('ready', async () => {
      function traversePath(curr: string): string[] {
        const paths = (server.watcher.getWatched()[curr] || []).map((p) =>
          pt.join(curr, p),
        )
        return paths.length === 0 ? [curr] : paths.flatMap(traversePath)
      }

      const watched = traversePath(
        server.config.root.replaceAll(pt.posix.sep, pt.sep),
      )
        .filter((p) => fs.lstatSync(p).isFile())
        .map(normalizePath)

      if (watched.length === 0) {
        logger.warn('There is no ATEX files found. Try creating one!')
      }

      for (const w of watched) {
        await server.ssrLoadModule(w).catch((e) => {
          logger.error(e)
          process.exitCode = 1
        })
      }

      if (process.exitCode === 1) {
        await server.close()
        return
      }

      await sortModules(Array.from(server.moduleGraph.idToModuleMap.values()))
        .then(async (modules) => {
          for (const m of modules) {
            await touch(m.file, false, false)
          }
        })
        .catch((e) => {
          logger.error(e)
          process.exitCode = 1
        })

      if (!parsed.options.watch) {
        await server.close()
      }
    })

    server.watcher.on('add', touch)
    server.watcher.on('change', touch)

    server.watcher.on('unlink', async (path) => {
      const npath = normalizePath(path)
      if (!isSupportedPath(npath)) {
        logger.removed(npath, [])
        return
      }

      if (isWritablePath(npath)) {
        fs.unlinkSync(
          pt.format({
            dir: pt.join(OUTPUTDIR, pt.dirname(npath)),
            name: pt.basename(npath, pt.extname(npath)),
            ext: '.json',
          }),
        )
      }

      const [mod] = server.moduleGraph.getModulesByFile(
        path.replaceAll(pt.sep, pt.posix.sep),
      )

      for (const imported of mod.importedModules) {
        imported.importers.delete(mod)
      }
      for (const importer of mod.importers) {
        importer.importedModules.delete(mod)
        importer.ssrImportedModules.delete(mod)
      }

      logger.removed(
        npath,
        Array.from(mod.importers.values()).map((i) => normalizePath(i.file)),
      )
    })

    process.on('SIGINT', async () => {
      await server.close()
    })

    process.on('SIGTERM', async () => {
      await server.close()
    })

    await server.listen()
  })()
}
