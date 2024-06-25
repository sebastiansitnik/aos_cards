import React from "react";
import { CardStatsInterface } from "../CardType";

function StatBox(props : CardStatsInterface) {
    return <div className="stat-box">
        <Box
            name={'MOVE'}
            nr={props.move}
            position={'top'}/>
        <Box
            name='SAVE'
            nr={props.save}
            position='right'
            /> 
        <Box
            name='CONTROL'
            nr={props.control}
            position='bottom'
            /> 
        <Box
            name='HEALTH'
            nr={props.health}
            position='left'
            /> 
    </div>
}

function Box(props : any){

    const className = `triangle ${props.position}`;

    return (
        <div className={className}>
            <div className="text-box">
                <h4>{props.name}</h4>
                <p className="nr">{props.nr}</p>
            </div>
            
        </div>
    )
}

export default StatBox;