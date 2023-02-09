import { Atex } from '../src/atex'
import { describe, test, expect, beforeEach } from 'vitest'

describe('Raw atex', () => {
  let a = new Atex()

  beforeEach(() => {
    a = new Atex()
  })

  // <></>
  test('unit', () => {
    expect(a.define(null)).toEqual([])
  })

  // <a/> | <a></a>
  test('literal', () => {
    expect(a.define('a')).toEqual(['a'])
  })

  // <a $id="b"/>
  test('literal with id', () => {
    expect(a.define('a', { $id: 'b' })).toEqual(['a#b'])
  })

  // <a $type="b"/>
  test('literal with variant', () => {
    expect(a.define('a', { $type: 'b' })).toEqual(['a.b'])
  })

  // <a $type="b" $id="c"/>
  test('literal with variant and hash', () => {
    expect(a.define('a', { $type: 'b', $id: 'c' })).toEqual(['a.b#c'])
  })

  // <>
  //   <a/>
  //   <b/>
  //   <a/>
  //   <c $id="d"/>
  //   <e $type="f" $id="g"/>
  // </>
  test('literal array', () => {
    expect(
      a.define(
        null,
        null,
        a.define('a'),
        a.define('b'),
        a.define('a'),
        a.define('c', { $type: 'd' }),
        a.define('e', { $type: 'f', $id: 'g' })
      )
    ).toEqual(['a', 'b', 'a', 'c.d', 'e.f#g'])
  })

  // <a b="c" d={true}/>
  test('component with props', () => {
    a.define('a', { b: 'c', d: true })
    expect(Object.fromEntries(a.definitions)).toEqual({
      a: { props: { b: 'c', d: true } },
    })
  })

  // <a>
  //   <b/>
  // </a>
  test('component with literal child', () => {
    a.define('a', null, a.define('b'))
    expect(Object.fromEntries(a.definitions)).toEqual({
      a: { children: ['b'] },
    })
  })

  // <a>
  //   <b/>
  //   <c/>
  // </a>
  test('component with literal children', () => {
    a.define('a', null, a.define('b'), a.define('c'))
    expect(Object.fromEntries(a.definitions)).toEqual({
      a: { children: ['b', 'c'] },
    })
  })

  // <a>
  //   <b/>
  //   <c key="value"/>
  // </a>
  test('component with defined child', () => {
    a.define('a', null, a.define('b'), a.define('c', { key: 'value' }))
    expect(Object.fromEntries(a.definitions)).toEqual({
      a: { children: ['b', 'c'] },
      c: { props: { key: 'value' } },
    })
  })

  // <a b="c" _blocks={<></>}/>
  test('component with empty blocks', () => {
    a.define('a', { b: 'c', _blocks: a.define(null) })
    expect(Object.fromEntries(a.definitions)).toEqual({
      a: { props: { b: 'c' }, blocks: [] },
    })
  })

  // <a b="c" _blocks={<><d/><e/></>}/>
  test('component with literal blocks', () => {
    a.define('a', {
      b: 'c',
      _blocks: a.define(null, null, a.define('d'), a.define('e')),
    })
    expect(Object.fromEntries(a.definitions)).toEqual({
      a: { props: { b: 'c' }, blocks: ['d', 'e'] },
    })
  })

  // <a b="c" _children={<></>}/>
  test('component with empty children', () => {
    a.define('a', {
      b: 'c',
      _children: a.define(null),
    })
    expect(Object.fromEntries(a.definitions)).toEqual({
      a: { props: { b: 'c' }, children: [] },
    })
  })

  // <a b="c" d={{ e:"f" }}/>
  test('component with deep props', () => {
    a.define('a', { b: 'c', d: { e: 'f' } })
    expect(Object.fromEntries(a.definitions)).toEqual({
      a: { props: { b: 'c', d: { e: 'f' } } },
    })
  })
})
