import { assignObjDefaultValue } from '@/obj'
import { describe, it, expect } from 'vitest'

describe('example: test obj ========>', () => {
  it('assignObjDefaultValue:', () => {
    interface User {
      username?: string
      password?: string
    }
    const defaultObj: User = {
      password: '123',
      username: 'admin',
    }
    const testObj: User = {}
    assignObjDefaultValue(testObj, defaultObj)
    // console.log(testObj)
    expect(testObj).toStrictEqual(defaultObj)
  })
})
