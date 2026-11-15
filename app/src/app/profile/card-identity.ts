export interface CardIdentity {
  avatar: boolean
  name: boolean
}

export const parseCardIdentity = (avatar: unknown, name: unknown): CardIdentity => ({ avatar: avatar !== 'off', name: name !== 'off' })

export const identityQuery = ({ avatar, name }: CardIdentity): Record<string, string> => ({
  ...(avatar ? {} : { avatar: 'off' }),
  ...(name ? {} : { name: 'off' }),
})
