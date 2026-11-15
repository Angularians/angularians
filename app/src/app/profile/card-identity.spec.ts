import { identityQuery, parseCardIdentity } from './card-identity'

describe('card identity options', () => {
  it('shows the avatar and the username unless the query says off', () => {
    expect(parseCardIdentity(undefined, undefined)).toEqual({ avatar: true, username: true })
    expect(parseCardIdentity(['off'], 'on')).toEqual({ avatar: true, username: true })
    expect(parseCardIdentity('off', 'off')).toEqual({ avatar: false, username: false })
  })

  it('writes an option only when it is off', () => {
    expect(identityQuery({ avatar: true, username: true })).toEqual({})
    expect(identityQuery({ avatar: false, username: true })).toEqual({ avatar: 'off' })
    expect(identityQuery({ avatar: true, username: false })).toEqual({ username: 'off' })
  })
})
