export interface CardIdentity {
  avatar: boolean
  username: boolean
}

export const parseCardIdentity = (avatar: unknown, username: unknown): CardIdentity => ({ avatar: avatar !== 'off', username: username !== 'off' })

export const identityQuery = ({ avatar, username }: CardIdentity): Record<string, string> => ({
  ...(avatar ? {} : { avatar: 'off' }),
  ...(username ? {} : { username: 'off' }),
})
