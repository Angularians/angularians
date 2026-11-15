import { cardOptionsQuery, parseCardOptions } from './card-options'

describe('card options', () => {
  it('reads the badge and identity options from one query', () => {
    expect(parseCardOptions({ hide: 'reviewer', names: 'official', avatar: 'off', username: 'off' })).toEqual({
      badges: { hidden: ['reviewer'], names: 'official' },
      identity: { avatar: false, username: false },
    })
  })

  it('writes them back as the same query', () => {
    const query = { hide: 'reviewer', names: 'official', avatar: 'off', username: 'off' }
    expect(cardOptionsQuery(parseCardOptions(query))).toEqual(query)
    expect(cardOptionsQuery(parseCardOptions({}))).toEqual({})
  })
})
