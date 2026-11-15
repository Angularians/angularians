import { badgeQuery, parseBadgeOptions, type BadgeOptions } from './card-badges'
import { identityQuery, parseCardIdentity, type CardIdentity } from './card-identity'

export interface CardOptions {
  badges: BadgeOptions
  identity: CardIdentity
}

export const parseCardOptions = (query: Record<string, unknown>): CardOptions => ({
  badges: parseBadgeOptions(query['hide'], query['names']),
  identity: parseCardIdentity(query['avatar'], query['username']),
})

export const cardOptionsQuery = ({ badges, identity }: CardOptions): Record<string, string> => ({ ...badgeQuery(badges), ...identityQuery(identity) })
