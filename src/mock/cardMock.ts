import { CardInterface } from "../components/card/CardType";

export default {
  cardStats: {
    move: '6"',
    save: '5+',
    control: '1',
    health: '2'
  },
  lore: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lacinia magna, et placerat velit. Curabitur vehicula nibh sit amet purus semper, eget tincidunt nunc pharetra. Proin a nibh ut justo vestibulum mollis nec vel lorem. Pellentesque posuere justo nec lacus rhoncus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pulvinar justo urna, eu lacinia justo finibus et. Integer porttitor ',
  header : {
    warscrollCategory: 'Skaven Warscroll',
    unitName: 'Rat ogors'
  },
  weapons : {
    rangedWeapons: [
      {
        id: '1',
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
        id: '1',
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
        id: '1',
        type: 'Any Combat Phase',
        name: 'Unleashed Warp-Fury',
        description: "Effect: Inflict D3 mortal damage on this unit. Then add 1 to Attacks characteristic of This unit`s melee weapons for the rest of the turn",
        icon: 'melee',
        lore: 'The warpstone hammered into the flesh of these creatures crackles with volatile energies, driving tchem into a frenzy.'
      }
    ]
  },
  keywords : {
    unitKeywords: ['infantry'],
    factionKeywords: ['chaos', 'skaven', 'moulder']
  }
} as CardInterface