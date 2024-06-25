import { Weapon } from "./WeaponTypes";
import { WeaponsInterface } from "../CardType";

const weaponsInterfaceToWeaponsContainer = (weaponsInterface: WeaponsInterface) => {

  const rangedWeaponsFromInterface = weaponsInterface.rangedWeapons;
  const meleeWeaponsFromInterface = weaponsInterface.meleeWeapons;

  const rangedWeapons: Weapon[] = [];
  const meleeWeapons: Weapon[] = [];

  for (let i = 0; i < rangedWeaponsFromInterface.length; i++) {
    rangedWeapons[i] = {
      id: rangedWeaponsFromInterface[i].name || '-',
      name: rangedWeaponsFromInterface[i].name || '-',
      type: rangedWeaponsFromInterface[i].type || '-',
      range: rangedWeaponsFromInterface[i].range || '-',
      attack: rangedWeaponsFromInterface[i].attack || '-',
      hit: rangedWeaponsFromInterface[i].hit || '-',
      wound: rangedWeaponsFromInterface[i].wound || '-',
      rend: rangedWeaponsFromInterface[i].rend || '-',
      damage: rangedWeaponsFromInterface[i].damage || '-',
      ability: rangedWeaponsFromInterface[i].ability || '-'
    };
  }

  for (let i = 0; i < meleeWeaponsFromInterface.length; i++) {
    meleeWeapons[i] = {
      id: rangedWeaponsFromInterface[i].name || '-',
      name: meleeWeaponsFromInterface[i].name || '-',
      type: meleeWeaponsFromInterface[i].type || '-',
      range: meleeWeaponsFromInterface[i].range || '-',
      attack: meleeWeaponsFromInterface[i].attack || '-',
      hit: meleeWeaponsFromInterface[i].hit || '-',
      wound: meleeWeaponsFromInterface[i].wound || '-',
      rend: meleeWeaponsFromInterface[i].rend || '-',
      damage: meleeWeaponsFromInterface[i].damage || '-',
      ability: meleeWeaponsFromInterface[i].ability || '-'
    };
  }

  return {
    weaponsContainer : {
      rangedWeapons: rangedWeapons,
      meleeWeapons: meleeWeapons
    }
  }
}

export const weaponsContainer = (weaponsInterface: WeaponsInterface) => {
  return weaponsInterfaceToWeaponsContainer(weaponsInterface);
}