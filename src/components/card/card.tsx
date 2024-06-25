import React from 'react';
import './card.scss';

import StatBox from './statBox/statBox';
import WeaponsBox from "./weapons/weaponsBox";
import CardMock from "../../mock/cardMock";
import { weaponsContainer } from "./weapons/weaponHelper";
import { HeaderInterface } from "./CardType";
import AbilitiesBox from "./ability/abilitiesBox";
import KeywordsBox from "./keyword/keywordBox";

const card = CardMock;
const weapons = weaponsContainer(card.weapons).weaponsContainer;
const abilities = card.abilities;
const keywords = card.keywords;

function Card() {
    return <div className='card'>
        <LeftColumn/>
        <RightColumn/>
    </div>
}

export default Card;


function LeftColumn() {
    return <div className='left-column'>
        <StatBox
          move={card.cardStats.move}
          save={card.cardStats.save}
          control={card.cardStats.control}
          health={card.cardStats.health}/>
        <div className={'lore-text'}>
            {card.lore}
        </div>
    </div>
}

function RightColumn() {
    return <div className='right-column'>
        <Header
            headerInterface={card.header}/>
        <WeaponsBox
            weapons={weapons}/>
        <div className={'abilities-and-keywords-box'}>
            <AbilitiesBox
              abilities={abilities.abilities}/>
            <KeywordsBox
              unitKeywords={keywords.unitKeywords}
              factionKeywords={keywords.factionKeywords}/>
        </div>

    </div>
}

const renderMountInHeader = (mount : string) => {
    if (mount) {
        return (
          <h3>{mount}</h3>
        )
    } else {
        return <div></div>
    }
};

function Header(props: any) {
    const header : HeaderInterface = props.headerInterface;

    return (
      <div className={'header'}>
        <h2>* {header.warscrollCategory?.toUpperCase()} *</h2>
        <h1>{header.unitName.toUpperCase()}</h1>
        {renderMountInHeader(header.mount)}
    </div>
    )
}