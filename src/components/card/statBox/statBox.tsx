import React from "react";
import './statBox.scss'

function StatBox() {
    return <div className="stat-box">
        <Box
            name={'MOVE'}
            nr={'9"'}
            position={'top'}/>
        <Box
            name='SAVE'
            nr='4+'
            position='right'
            /> 
        <Box
            name='CONTROL'
            nr='2'
            position='bottom'
            /> 
        <Box
            name='HEALTH'
            nr='7'
            position='left'
            /> 
    </div>
}

function Box(props : any){

    const className = `triangle ${props.position}`;

    return (
        <div className={className}>
            <div className="text-box">
                <h6>{props.name}</h6>
                <p className="nr">{props.nr}</p>
            </div>
            
        </div>
    )
}

export default StatBox;