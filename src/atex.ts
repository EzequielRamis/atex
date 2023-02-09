import { isDeepStrictEqual } from 'node:util'

type Props = Record<string, any>

export class Atex {
  definitions: Map<string, Object>

  constructor() {
    this.definitions = new Map()
  }

  define(
    rawTag: string | Function | null,
    rawProps?: Props | null,
    ...rawChildren: (string[] | string[][])[]
  ): string[] {
    const children = rawChildren.flat(2)

    if (typeof rawTag === 'function')
      return rawTag(rawProps, children.length > 0 ? children : undefined)
    if (rawTag === null) return children

    const tag = normalizeTag(rawTag, rawProps)

    delete rawProps?.$id
    delete rawProps?.$type

    const entries = Object.entries(rawProps || {}).filter(
      ([_k, v]) => v !== undefined
    )

    const props: Record<string, any> = {}
    const _props: Record<string, any> = {}

    for (const [k, v] of entries) {
      if (k.startsWith('_')) {
        _props[k.slice(1)] = v
      } else {
        props[k] = v
      }
    }

    for (const [k, v] of Object.entries(_props?.props || {})) {
      props[k] = v
    }

    delete _props?.props

    if (entries.length > 0 || children.length > 0) {
      const definition = {
        props: empty(props) ? undefined : props,
        children: children.length > 0 ? children : undefined,
        ..._props,
      }
      if (this.definitions.has(tag)) {
        if (!isDeepStrictEqual(definition, this.definitions.get(tag)))
          throw new Error(
            `Block "${tag}" has already been defined in the same module.`
          )
      } else {
        this.definitions.set(tag, definition)
      }
    }

    return [tag]
  }
}

function normalizeTag(tag: string, props: Props | null): string {
  const { $id, $type } = props || {}
  return `${tag}${($type && '.' + $type) || ''}${($id && '#' + $id) || ''}`
}

// https://stackoverflow.com/a/59787784
function empty(obj: Object): boolean {
  for (let _i in obj) return false
  return true
}
