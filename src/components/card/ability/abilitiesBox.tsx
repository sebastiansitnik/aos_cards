import React, { FC } from "react";
import { AbilitiesInterface, AbilityInterface } from "../CardType";
import meleeIcon from "../../../icons/melee.png"
import rangedIcon from "../../../icons/ranged.png"

const AbilitiesBox : FC<AbilitiesInterface> = (abilities) => {

  const createAbilityTitle = (ability : AbilityInterface) => {

    if (!ability.lore) {
      return (
        <div className={'ability-title'}>
          <p>{ability.name}</p>
        </div>
      )
    } else {

      return (
        <div className={'ability-title'}>
          <p><b>{ability.name}:</b> <i>{ability.lore}</i></p>
        </div>
      )
    }
  }

  const renderAbility = (ability: AbilityInterface) => {

    const boldInDesc = ability.description.split(':')[0]
    const cutDesc = ability.description.replace(boldInDesc,'')
    const icon = () => {
      switch (ability.icon) {
        case 'melee':
          return meleeIcon;
        case 'ranged':
          return rangedIcon;
      }
    }

    return (
      <div>
        <div className={'ability-header'}>
          <div className={'ability-icon'}>
            <img src={icon()} alt={ability.icon}></img>
          </div>
          <div className={'ability-type'}>{ability.type}</div>
        </div>
        <div className={'ability-text'}>
          {createAbilityTitle(ability)}
          <div><b>{boldInDesc}</b>{cutDesc}</div>
        </div>
      </div>
    )
  }

  const renderAbilities = () => {
    const renderedAbilities : JSX.Element[] = [];

    abilities.abilities.map((ability : AbilityInterface) => {
      return renderedAbilities.push(renderAbility(ability))
    })

    return renderedAbilities;
  }

  return (
    <div className={'abilities-box'}>
      {renderAbilities()}
    </div>
  )

}

export default AbilitiesBox;