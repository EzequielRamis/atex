import type { ModuleNode } from 'vite'

enum Mark {
  UNMARKED,
  TEMPORARY,
  PERMANENT,
}

// https://en.wikipedia.org/wiki/Topological_sorting
export async function sortModules(
  nodes: ModuleNode[],
  root?: ModuleNode
): Promise<ModuleNode[]> {
  const sorted: ModuleNode[] = []
  const marking = new Map<string, Mark>(
    nodes.map((n) => [n.file, Mark.UNMARKED])
  )

  if (root) {
    visit(root, marking, sorted)
    sorted.pop()
    sorted.reverse()
    return sorted
  }

  for (const n of nodes) {
    if (marking.get(n.file) === Mark.UNMARKED) {
      visit(n, marking, sorted)
    }
  }

  sorted.reverse()
  return sorted
}

function visit(
  n: ModuleNode,
  marking: Map<string, Mark>,
  sorted: ModuleNode[]
) {
  if (marking.get(n.file) === Mark.PERMANENT) {
    return
  }
  if (marking.get(n.file) === Mark.TEMPORARY) {
    throw new Error(`There is a circular dependency at ${n.file}`)
  }
  marking.set(n.file, Mark.TEMPORARY)
  for (const m of n.importers) {
    visit(m, marking, sorted)
  }
  marking.set(n.file, Mark.PERMANENT)
  sorted.push(n)
}
