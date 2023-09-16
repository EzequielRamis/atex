declare module '*.jsonc' {
  const values: Record<string, any>
  export default values
}

declare module '*.json5' {
  const values: Record<string, any>
  export default values
}
