export interface WeaponsContainer {
  weapons: Weapons
}

export interface Weapons {
  meleeWeapons: Weapon[]
  rangedWeapons: Weapon[]
}

export interface Weapon {
  id: string,
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