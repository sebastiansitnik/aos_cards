import React from 'react';
import './card.scss';

import StatBox from './statBox/statBox';
import WeaponsBox from "./weapons/weaponsBox";
import CardMock from "../../mock/cardMock";
import { weaponsContainer } from "./weapons/weaponHelper";

const card = CardMock;
const weapons = weaponsContainer(card.weapons).weaponsContainer;

function Card() {
    return <div className='card'>
        <LeftColumn/>
        <RightColumn/>
    </div>
}

export default Card;


function LeftColumn() {
    return <div className='left-column'>
        <StatBox></StatBox>
        <div className={'lore-text'}>
            {card.lore}
        </div>
    </div>
}

function RightColumn() {
    return <div className='right-column'>
        <Header
            scrollCategory={card.header.warscrollCategory}
            scrollName={card.header.unitName}/>
        <WeaponsBox
            weapons={weapons}/>
    </div>
}

function Header(props: any) {
    return <div className={'header'}>
        <h2>* {props.scrollCategory.toUpperCase()} *</h2>
        <h1>{props.scrollName.toUpperCase()}</h1>
    </div>
}