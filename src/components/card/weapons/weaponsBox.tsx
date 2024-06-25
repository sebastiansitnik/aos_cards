import React, { FC } from "react";
import { Weapon, WeaponsContainer } from "./WeaponTypes";
import './weaponsBox.scss'

const WeaponsBox: FC<WeaponsContainer> = ({
  weapons
}) => {

  const rangedWeapons = weapons.rangedWeapons;
  const meleeWeapons = weapons.meleeWeapons;

  const renderWeapons = () => {
    const renderedRangeWeapons : JSX.Element[] = [];

    rangedWeapons.map((weapon : Weapon) => {
      return renderedRangeWeapons.push(renderRangedWeapon(weapon))
    })

    const renderedMeleeWeapons : JSX.Element[] = [];

    meleeWeapons.map((weapon : Weapon) => {
      return renderedMeleeWeapons.push(renderMeleeWeapon(weapon))
    })

    const renderTableForRangedWeapons = () => {
      if (rangedWeapons.length < 0) {
        return <div></div>
      }

      return (
        <table>
          <thead>
          <tr>
            <th className={'ranged-label'}>RANGED WEAPONS</th>
            <th className={'range-label'}>Range</th>
            <th className={'attacks-label'}>Attacks</th>
            <th className={'hit-label'}>Hit</th>
            <th className={'wound-label'}>Wound</th>
            <th className={'rend-label'}>Rend</th>
            <th className={'damage-label'}>Damage</th>
            <th className={'ability-label'}>Ability</th>
          </tr>
          </thead>
          <tbody>
          {renderedRangeWeapons}
          </tbody>
        </table>
      )
    }

    const renderTableForMeleeWeapons = () => {
      if (meleeWeapons.length < 0) {
        return <div></div>
      }

      return (
        <table>
          <thead>
          <tr>
            <th className={'melee-label'}>MELEE WEAPONS</th>
            <th className={'hidden-label'}></th>
            <th className={'attacks-label'}>Attacks</th>
            <th className={'hit-label'}>Hit</th>
            <th className={'wound-label'}>Wound</th>
            <th className={'rend-label'}>Rend</th>
            <th className={'damage-label'}>Damage</th>
            <th className={'ability-label'}>Ability</th>
          </tr>
          </thead>
          <tbody>
          {renderedMeleeWeapons}
          </tbody>
        </table>
      )
    }

    return (
      <div>
        {renderTableForRangedWeapons()}
        {renderTableForMeleeWeapons()}
      </div>
    );
  }

  const renderRangedWeapon = (weapon: Weapon) => {
    return (
      <tr>
        <td>{weapon.name}</td>
        <td>{weapon.range}</td>
        <td>{weapon.attack}</td>
        <td>{weapon.hit}</td>
        <td>{weapon.wound}</td>
        <td>{weapon.rend}</td>
        <td>{weapon.damage}</td>
        <td>{weapon.ability}</td>
      </tr>
    )
  }

  const renderMeleeWeapon = (weapon: Weapon) => {
    return (
      <tr>
        <td>{weapon.name}</td>
        <td></td>
        <td>{weapon.attack}</td>
        <td>{weapon.hit}</td>
        <td>{weapon.wound}</td>
        <td>{weapon.rend}</td>
        <td>{weapon.damage}</td>
        <td>{weapon.ability}</td>
      </tr>
    )
  }


  return (
    <div className={'weapons-container'}>
      {renderWeapons()}
    </div>
  )

}



export default WeaponsBox;