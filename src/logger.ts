import {
  createLogger as createViteLogger,
  LogLevel,
  type Logger,
  LoggerOptions,
} from 'vite'
import pt from 'node:path'
import colors from 'picocolors'

const LOGGING = { timestamp: true }

export function createLogger(level?: LogLevel, options?: LoggerOptions) {
  const logger = createViteLogger(level, options)
  const loggerInfo = logger.info

  logger.info = (msg, options) => {
    if (msg.includes('page reload') || msg.includes('changed tsconfig')) return
    loggerInfo(msg, options)
  }

  return logger
}

export class AtexLogger {
  private logger: Logger

  constructor(logger: Logger) {
    this.logger = logger
  }

  blocks(path: string, clear: boolean = false) {
    this.info(`${colors.green('blocks written')} ${path}`, clear)
  }

  propagated(affected: string[]) {
    this.info(
      colors.bold(
        colors.yellow(
          `propagating changes to ${affected.length} module${
            affected.length > 1 ? 's' : ''
          }...`,
        ),
      ),
    )
  }

  content(path: string, clear: boolean = false) {
    this.info(`${colors.blue('content loaded')} ${path}`, clear)
  }

  removed(path: string, affected: string[]) {
    this.warn(colors.bold(colors.yellow('module deleted')) + ' ' + path, true)
    if (affected.length > 0) {
      this.warn(
        colors.bold(
          colors.yellow(
            `found ${affected.length} module${
              affected.length > 1 ? 's' : ''
            } to be fixed`,
          ),
        ),
      )
      affected.forEach((p) => {
        this.warn(colors.yellow(`- ${p}`))
      })
    }
  }

  unsupported(path: string, clear: boolean = false) {
    this.warn(
      colors.yellow(
        `File extension '${pt.extname(
          path,
        )}' is not supported. No operation at `,
      ) + path,
      clear,
    )
  }

  info(msg: string, clear: boolean = false) {
    if (clear) {
      this.logger.clearScreen('info')
    }
    this.logger.info(msg, LOGGING)
  }

  warn(msg: string, clear: boolean = false) {
    if (clear) {
      this.logger.clearScreen('warn')
    }
    this.logger.warn(msg, LOGGING)
  }

  error(err: Error, clear: boolean = false) {
    if (clear) {
      this.logger.clearScreen('error')
    }
    this.logger.error(err.stack, LOGGING)
  }
}
