import { Card } from "../components/card/CardType";

export default {
  cardStats: {
    move: '6"',
    save: '5+',
    control: '1',
  },
  lore: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lacinia magna, et placerat velit. Curabitur vehicula nibh sit amet purus semper, eget tincidunt nunc pharetra. Proin a nibh ut justo vestibulum mollis nec vel lorem. Pellentesque posuere justo nec lacus rhoncus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pulvinar justo urna, eu lacinia justo finibus et. Integer porttitor finibus diam in viverra. Cras molestie eros at vehicula feugiat. Donec ac erat iaculis, lobortis justo id, dictum sem. Maecenas mattis sodales rhoncus. Donec congue ut odio id cursus. Vestibulum posuere congue erat, in hendrerit libero consequat non. Phasellus egestas luctus ligula, in cursus augue bibendum in. Nunc aliquet nisi posuere eros auctor, vel tincidunt turpis semper.',
  header : {
    warscrollCategory: 'Skaven Warscroll',
    unitName: 'Rat ogors'
  },
  weapons : {
    rangedWeapons: [
      {
        name: 'Warpfire Gun',
        type: 'ranged',
        range: '10"',
        attack: '2d6',
        hit: '2+',
        wound: '4+',
        rend: '2',
        damage: '1',
        ability: 'Shoot in Combat'
      }
    ],
    meleeWeapons : [
      {
        name: 'Claws, Blades and Fangs',
        type: 'melee',
        attack: '5',
        hit: '4+',
        wound: '3+',
        rend: '1',
        damage: '2'
      }
    ]
  },
  abilities : {
    abilities : [
      {
        type: 'Any Combat Phase',
        name: 'Unleashed Warp-Fury',
        description: '<i>The warpstone hammered into the flesh of these creatures crackles with volatile energies, driving tchem into a frenzy</i><p><b>Effect: </b>Inflict D3 mortal damage on this unit. Then add 1 to Attacks characteristic of This unit`s melee weapons for the rest of the turn</p>',
        icon: 'hammer'
      }
    ]
  },
  keywords : {
    unitKeywords: ['infantry'],
    factionKeywords: ['chaos', 'skaven', 'moulder']
  }
} as Card