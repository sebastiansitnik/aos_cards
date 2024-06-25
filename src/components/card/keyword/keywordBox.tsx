import React, { FC } from "react";
import { KeywordsInterface } from "../CardType";

const KeywordsBox : FC<KeywordsInterface>  = (keywords : KeywordsInterface) => {

  const renderKeywords = (keys : string[]) => {
    let properKeywords : string = ''

      keys.map((key: string) => {
      properKeywords = properKeywords + key + ', '
    })

    return properKeywords.substring(0,properKeywords.length-2).toUpperCase();
  }


  return (
    <div className={'keywords'}>
      <div className={'keywords-label'}>KEYWORDS</div>
      <div className={'both-keywords'}>
        <div className={'unit-keywords'}>
          {renderKeywords(keywords.unitKeywords || [])}
        </div>
        <div className={'faction-keywords'}>
          {renderKeywords(keywords.factionKeywords || [])}
        </div>
      </div>
    </div>
  )
}

export default KeywordsBox;
