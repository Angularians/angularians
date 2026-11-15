import { identityQuery, parseCardIdentity } from './card-identity'

describe('card identity options', () => {
  it('shows the avatar and the name unless the query says off', () => {
    expect(parseCardIdentity(undefined, undefined)).toEqual({ avatar: true, name: true })
    expect(parseCardIdentity(['off'], 'on')).toEqual({ avatar: true, name: true })
    expect(parseCardIdentity('off', 'off')).toEqual({ avatar: false, name: false })
  })

  it('writes an option only when it is off', () => {
    expect(identityQuery({ avatar: true, name: true })).toEqual({})
    expect(identityQuery({ avatar: false, name: true })).toEqual({ avatar: 'off' })
    expect(identityQuery({ avatar: true, name: false })).toEqual({ name: 'off' })
  })
})
