import type { ViteDevServer } from 'vite'
import pt from 'node:path'
import fs from 'node:fs'

export const INPUTDIR = pt.join('atex', 'src')
export const OUTPUTDIR = 'store'

export async function loadJsModule(
  server: ViteDevServer,
  path: string,
): Promise<string | null> {
  return server.ssrLoadModule(path).then((mod) => {
    if (mod.__defs) {
      if (mod.default && typeof mod.default === 'function') {
        mod.default()
        return JSON.stringify(Object.fromEntries(mod.__defs), null, 2)
      } else {
        throw new Error(
          `Module ${pt.relative(
            server.config.root,
            path,
          )} has no default exported function`,
        )
      }
    } else {
      return null
    }
  })
}

export async function loadJsonModule(
  server: ViteDevServer,
  path: string,
): Promise<string> {
  return server.ssrLoadModule(path).then((mod) => {
    return JSON.stringify(mod.default, null, 2)
  })
}

export function writeModule(path: string, content: string) {
  fs.mkdirSync(pt.join(OUTPUTDIR, pt.dirname(path)), {
    recursive: true,
  })

  fs.writeFileSync(
    pt.format({
      dir: pt.join(OUTPUTDIR, pt.dirname(path)),
      name: pt.basename(path, pt.extname(path)),
      ext: '.json',
    }),
    content,
  )
}
