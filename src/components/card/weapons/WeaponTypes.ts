export interface WeaponsContainer {
  weapons: Weapons
}

export interface Weapons {
  meleeWeapons: Weapon[]
  rangedWeapons: Weapon[]
}

export interface Weapon {
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