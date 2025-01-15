import { EStat } from "../interfaces/stat";

export interface ISave {
  sheet_info: ISavedSheetInfo[];
  attributes: ISavedStat[][];
  skills: ISavedStat[][];
  spheres: ISavedStat[][]; 
}

export interface ISavedStat {label: string, type: string, value: number}
export interface ISavedSheetInfo {key: ESheetInfo, value: string, label: string}
export enum ESheetInfo { NAME = 'name', PLAYER = 'player', 
CHRONICLES = 'chronicles', NATURE = 'nature', DEMEANOR= 'demeanor', ESSENCE = 'essence', AFFILIATION = 'affiliation', SECT = 'sect', CONCEPT= 'concept' }

export const save: ISave = {
  "sheet_info": [
    {key: ESheetInfo.NAME, value: '' , label: 'Name' },
    {key: ESheetInfo.PLAYER, value: '', label: 'Player' },
    {key: ESheetInfo.CHRONICLES, value: '', label: 'Chronicles' },
    {key: ESheetInfo.NATURE, value: '', label: 'Nature' },
    {key: ESheetInfo.DEMEANOR, value: '', label: 'Demeanor' },
    {key: ESheetInfo.ESSENCE, value: '', label: 'Essence' },
    {key: ESheetInfo.AFFILIATION, value: '', label: 'Affiliation' },
    {key: ESheetInfo.SECT, value: '', label: 'Sect' },
    {key: ESheetInfo.CONCEPT, value: '', label: 'Concept' }
  ],
  "attributes": [
    [
      {
        "label": "Strength",
        "type": "Physical",
        "value": 0
      },
      {
        "label": "Dexterity",
        "type": "Physical",
        "value": 0
      },

      {
        "label": "Stamina",
        "type": "Physical",
        "value": 0
      }
    ],
    [
      {
        "label": "Charisma",
        "type": "Social",
        "value": 0
      },
      {
        "label": "Manipulation",
        "type": "Social",
        "value": 0
      },
      {
        "label": "Appearance",
        "type": "Social",
        "value": 0
      }
    ],
    [
      {
        "label": "Perception",
        "type": "Mental",
        "value": 0
      },
      {
        "label": "Intelligence",
        "type": "Mental",
        "value": 0
      },
      {
        "label": "Wits",
        "type": "Mental",
        "value": 0
      }
    ]
  ],
  "skills": [
    [
      {
        "label": "Alertness",
        "type": "Talents",
        "value": 0
      },
      {
        "label": "Art",
        "type": "Talents",
        "value": 0
      },
      {
        "label": "Athletics",
        "type": "Talents",
        "value": 0
      },
      {
        "label": "Awareness",
        "type": "Talents",
        "value": 0
      },
      {
        "label": "Brawl",
        "type": "Talents",
        "value": 0
      },
      {
        "label": "Empathy",
        "type": "Talents",
        "value": 0
      },
      {
        "label": "Expression",
        "type": "Talents",
        "value": 0
      },
      {
        "label": "Intimidation",
        "type": "Talents",
        "value": 0
      },
      {
        "label": "Leadership",
        "type": "Talents",
        "value": 0
      },
      {
        "label": "Streetwise",
        "type": "Talents",
        "value": 0
      },
      {
        "label": "Subterfuge",
        "type": "Talents",
        "value": 0
      }
    ],
    [
      {
        "label": "Crafts",
        "type": "Skills",
        "value": 0
      },
      {
        "label": "Drive",
        "type": "Skills",
        "value": 0
      },
      {
        "label": "Etiquette",
        "type": "Skills",
        "value": 0
      },
      {
        "label": "Firearms",
        "type": "Skills",
        "value": 0
      },
      {
        "label": "Martial Arts",
        "type": "Skills",
        "value": 0
      },
      {
        "label": "Meditation",
        "type": "Skills",
        "value": 0
      },
      {
        "label": "Melee",
        "type": "Skills",
        "value": 0
      },
      {
        "label": "Research",
        "type": "Skills",
        "value": 0
      },
      {
        "label": "Stealth",
        "type": "Skills",
        "value": 0
      },
      {
        "label": "Survival",
        "type": "Skills",
        "value": 0
      },
      {
        "label": "Technology",
        "type": "Skills",
        "value": 0
      }
    ],
    [
      {
        "label": "Academics",
        "type": "Knowledges",
        "value": 0
      },
      {
        "label": "Computer",
        "type": "Knowledges",
        "value": 0
      },
      {
        "label": "Cosmology",
        "type": "Knowledges",
        "value": 0
      },
      {
        "label": "Enigmas",
        "type": "Knowledges",
        "value": 0
      },
      {
        "label": "Esoterica",
        "type": "Knowledges",
        "value": 0
      },
      {
        "label": "Investigation",
        "type": "Knowledges",
        "value": 0
      },
      {
        "label": "Law",
        "type": "Knowledges",
        "value": 0
      },
      {
        "label": "Medicine",
        "type": "Knowledges",
        "value": 0
      },
      {
        "label": "Occult",
        "type": "Knowledges",
        "value": 0
      },
      {
        "label": "Politics",
        "type": "Knowledges",
        "value": 0
      },
      {
        "label": "Science",
        "type": "Knowledges",
        "value": 0
      }
    ]
  ],
  "spheres": [
    [
      {
        "label": 'Correspondence',
        "type": EStat.SPHERE,
        "value": 0
      },
      {
        "label": 'Entropy',
        "type": EStat.SPHERE,
        "value": 0
      },

      {
        "label": 'Forces',
        "type": EStat.SPHERE,
        "value": 0
      }
    ],
    [
      {
        "label": 'Life',
        "type": EStat.SPHERE,
        "value": 0
      },
      {
        "label": 'Matter',
        "type": EStat.SPHERE,
        "value": 0
      },
      {
        "label": 'Mind',
        "type": EStat.SPHERE,
        "value": 0
      }
    ],
    [
      {
        "label": 'Prime',
        "type": EStat.SPHERE,
        "value": 0
      },
      {
        "label": 'Spirit',
        "type": EStat.SPHERE,
        "value": 0
      },
      {
        "label": 'Time',
        "type": EStat.SPHERE,
        "value": 0
      }
    ]
  ],
}
