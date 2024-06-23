import React from 'react';
import './card.scss';

import StatBox from './statBox/statBox';

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
    </div>
}

function RightColumn() {
    return <div className='right-column'>
        <Header
            scrollCategory={'Spearhead warscroll'}
            scrollName={'vampire lord'}/>

    </div>
}

function Header(props: any) {
    return <div className={'header'}>
        <h2>* {props.scrollCategory.toUpperCase()} *</h2>
        <h1>{props.scrollName.toUpperCase()}</h1>
    </div>
}