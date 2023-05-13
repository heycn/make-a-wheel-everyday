import { assert } from 'chai'
import { describe } from 'mocha'
import Promise from '../src'

describe("Promise", () => {
  it("是一个类", () => {
    assert.isFunction(Promise)
    assert.isObject(Promise.prototype)
  })
  it("new Promise() 如果接受的不是一个函数就报错", () => {
    assert.throw(() => {
      // @ts-ignore
      new Promise()
    })
    assert.throw(() => {
      // @ts-ignore
      new Promise(1)
    })
    assert.throw(() => {
      // @ts-ignore
      new Promise('1')
    })
    assert.throw(() => {
      // @ts-ignore
      new Promise(false)
    })
  })
  it("new Promise(fn) 会生成一个对象，对象有 then 方法", () => {
    const promise = new Promise(() => {})
    assert.isFunction(promise.then)
  })
  it("new Promise(fn) 中的 fn 是立即执行的", () => {
    let called = false
    const promise = new Promise(() => {
      called = true
    })
    // @ts-ignore
    assert(called === true)
  })
})
