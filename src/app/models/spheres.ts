import { EStat, IStat } from "../interfaces/stat";

export const spheres: IStat[][] = [
  [
    {
      label: 'Correspondence',
      type: EStat.SPHERE,
      val: [
        '• Immediate Spatial Perceptions/Landscape of the Mind',
        '•• Sense, Touch, Thicken & Reach Through Space/ Correspondence Sensing',
        '••• Pierce Space/ Open or Close Gates/Co-locality Perceptions',
        '•••• Rend Space/ Ward/ Co-locate Self',
        '••••• Spatial Mutation / Co-Location',
      ],
      specialty: "Conjuration, Scrying, Gates, Warding, Teleportation"
    },
    {
      label: 'Entropy',
      type: EStat.SPHERE,
      val: [
        '• Sense Flaws, Fate & Fortune/Ring of Truth',
        '•• Control Probability',
        '••• Affect Predictable Patterns',
        '•••• Affect Living Things',
        '••••• Affect Thought/ Shape Memes/Binding Oath',
      ],
      specialty: "Fate, Fortune, Decay, Order, Chaos, Necromancy"
    },

    {
      label: 'Forces',
      type: EStat.SPHERE,
      val: [
        '• Perceive Forces',
        '•• Manipulate Forces/ Elemental Touch',
        '••• Transmute Minor Forces/ Telekinetics/The Dragon’s Touch',
        '•••• Control Major Forces/ Gift of Zeus/Weather-Witching',
        '••••• Transmute Major Forces/Conjuring Infernos',
      ],
      specialty: "Alchemy, Motion, Elements (any or all), Technology, Physics, Weather, Weaponry"
    },
  ],
  [
    {
      label: 'Life',
      type: EStat.SPHERE,
      val: [
        '• Sense Life',
        '•• Alter Simple Life-Forms/ Heal Self',
        '••• Transform Simple Life-Forms/Alter Self/ Heal Others',
        '•••• Alter Complex Life-Forms/ Transform Self',
        '••••• Transform & Create Complex Life-Forms/Perfect Metamorphosis',
      ],
      specialty: "Transformation, Shapeshifting, Healing, Improvement, Creation, Cloning, Evolution, Injury"
    },
    {
      label: 'Matter',
      type: EStat.SPHERE,
      val: [
        '• Matter Perceptions',
        '•• Basic Transmutation',
        '••• Alter Form',
        '•••• Complex Transmutation',
        '••••• Alter Properties',
      ],
      specialty: "Transmutation, Shaping, Conjuration, Refinement, Complex Patterns"
    },
    {
      label: 'Mind',
      type: EStat.SPHERE,
      val: [
        '• Sense Thoughts & Emotions/Mind Shield/ Empower Self',
        '•• Read Surface Thoughts/ Empathic Bond/Create Impressions/ Mental Impulse',
        '••• Mental Link/ Project Illusions/Dreamwalk/ Psychic Blast',
        '•••• Control Conscious Mind/Alter Consciousness/ Astral Projection',
        '••••• Control Subconscious/ Forge Psyche/Untether Consciousness',
      ],
      specialty: "Communication, Illusion, Emotion, Social Programming, Self-Empowerment, Astral Travel, Mind-Shielding, Psychodynamics, Psychic Combat"
    },
  ],
  [
    {
      label: 'Prime',
      type: EStat.SPHERE,
      val: [
        '• Etheric Senses/ Consecration/ Infuse Personal Quintessence',
        '•• Fuel Pattern/ Construct Patterns/ Enchant Patterns/ Body of Light',
        '••• Channel Quintessence/ Enchant Life/ Energy Weapon/ Craft Periapts & Temporary Wonders',
        '•••• Expel or Infuse Energy/ Tap Wellspring/ Craft Tass & Permanent Wonders',
        '••••• Infuse or Withdraw Life Force/ Create Node & Soulflower/ Nullify Paradox',
      ],
      specialty: "Resonance, Artifice, Perceptions, Channeling, Creation, Destruction"
    },
    {
      label: 'Spirit',
      type: EStat.SPHERE,
      val: [
        '• Spirit Sight/ Spirit Sense',
        '•• Touch Spirit/ Manipulate Gauntlet',
        '••• Pierce Gauntlet/ Step Sideways/ Rouse & Lull Spirit',
        '•••• Rend Gauntlet/ Seal Breach/ Bind Spirit',
        '••••• Forge Ephemera/ Gilgul/ Break the Dreamshell',
      ],   
      specialty: "Umbral Travel, Spirit Dealings, Gauntlet Manipulation, Primal Spirits, Tech Spirits, Celestials, Infernals, Possession"
    },
    {
      label: 'Time',
      type: EStat.SPHERE,
      val: [
        '• Time Sense',
        '•• Past & Future Sight Thicken the Walls of Time',
        '••• Time Contraction or Dilation/ “Bullet Time”/ Rewind Time',
        '•••• Time Determinism/ Trigger Effect/ Time Bubble/ Anchor Point',
        '••••• Temporal Travel/ Time Immunity',
      ],
    
      specialty: "Perceptions, Prophecy, Triggers, Time Travel, Temporal Control"
    },
  ],
];
