import pt from 'node:path'

export function isJsPath(path: string): boolean {
  const ext = pt.extname(path)
  return ext === '.js' || ext === '.ts'
}

export function isJsxPath(path: string): boolean {
  const ext = pt.extname(path)
  return ext === '.jsx' || ext === '.tsx'
}

export function isJsonPath(path: string): boolean {
  const ext = pt.extname(path)
  return ext === '.json' || ext === '.jsonc' || ext === '.json5'
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
