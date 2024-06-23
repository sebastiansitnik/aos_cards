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
    return <div>RightColumn</div>
}