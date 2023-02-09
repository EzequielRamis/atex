import pt from 'node:path'

export function isJsPath(path: string): boolean {
  return pt.extname(path) === '.js' || pt.extname(path) === '.ts'
}

export function isJsxPath(path: string): boolean {
  return pt.extname(path) === '.jsx' || pt.extname(path) === '.tsx'
}

export function isJsonPath(path: string): boolean {
  return pt.extname(path) === '.json'
}

export function isSupportedPath(path: string): boolean {
  return isJsPath(path) || isJsxPath(path) || isJsonPath(path)
}

export function isHiddenPath(path: string): boolean {
  return pt.basename(path).startsWith('_')
}

export function isWritablePath(path: string): boolean {
  return isJsxPath(path) || (!isHiddenPath(path) && isJsonPath(path))
}
