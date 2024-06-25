export interface Card {
  cardStats: CardStatsInterface,
  lore: string,
  header: HeaderInterface,
  weapons: WeaponsInterface,
  abilities: AbilitiesInterface,
  keywords: KeywordsInterface,
  image: string
}

export interface CardStatsInterface {
  move: string,
  save: string,
  control: string,
  health: string
}

export interface HeaderInterface {
  warscrollCategory: string,
  unitName: string
}

export interface WeaponsInterface {
  rangedWeapons: WeaponInterface[]
  meleeWeapons: WeaponInterface[]
}

export interface WeaponInterface {
  name: string,
  type: string,
  range?: string,
  attack: string,
  hit: string,
  wound: string,
  rend: string,
  damage: string,
  ability?: string
}

export interface AbilitiesInterface {
  abilities: AbilityInterface[]
}

export interface AbilityInterface {
  type: string,
  name: string,
  description: string
  icon: string
}

export interface KeywordsInterface {
  unitKeywords?: string[]
  factionKeywords?: string[]
}