import { IStat } from "../interfaces/stat";

export const attributes: IStat[][] = [
  [
    {
      label: 'Strength',
      type: 'Physical',
      val: [
        '• Poor: You can lift roughly 40 lb. (about 20 kg)',
        '•• Average: You lift around 100 lb. (about 50 kg)',
        '••• Good: You lift around 250 lb. (a little over 100 kg).',
        '•••• Exceptional: You can lift 400 lb. (close to 200 kg).',
        '••••• Outstanding: You can lift 650 lb. (nearly 300 kg)',
      ],
      description: 'A measure of sheer physical might, this Trait reflects your ability to move obstacles, lift things, and deal out damage with your fists and feet alone. High-Strength characters tend to be muscular and massive; that said, wiry folks can be surprisingly, even deceptively, strong.',
      specialty: 'Lean, Deceptive Strength, Raw Power, Iron Grip'
    },
    {
      label: 'Dexterity',
      type: 'Physical',
      val: [
        '• Poor: Fumble-fingers!',
        '•• Average: Coordinated enough for everyday life.',
        '••• Good: Quick-fingered and sure-footed.',
        '•••• Exceptional: Flowing poise and animal grace.',
        '••••• Outstanding: Cats regard you with envy.',
      ],
      description: 'A vital attribute for conjurers, dancers, martial artists, and street survivors, this Trait measures agility, coordination, reflexes, and physical grace. High-Dexterity individuals seem poised and flexible even at rest, whereas low-Dexterity folks trip – figuratively and literally – over their own feet.',
      specialty: 'Smooth, Graceful, Nimble, Feline Reflexes, Hand-Eye Coordination'
    },

    {
      label: 'Stamina',
      type: 'Physical',
      val: [
        '• Poor: Frail and sickly.',
        '•• Average: Typically healthy.',
        '••• Good: Hardy and tenacious.',
        '•••• Exceptional: Built for the long haul.',
        '••••• Outstanding: Nothing seems to wear you down',
      ],
      description: 'Reflecting toughness, endurance, and your tolerance for pain, disease, and fatigue, Stamina is a helpful Trait for mages on the go. Although the stereotypical tough customer is a massive human tank, wiry folks can be amazingly resilient.',
      specialty: 'Tireless, Tough, Tenacious, Inexhaustible, Energizer Bunny'
    },
  ],
  [
    {
      label: 'Charisma',
      type: 'Social',
      val: [
        '• Poor: Faint flower on bland wallpaper.',
        '•• Average: You seem likeable enough.',
        '••• Good: Folks feel drawn to you.',
        '•••• Exceptional: Shiny!',
        '••••• Outstanding: Your mere presence inspires trust, lust, and devotion.',
      ],
      description: 'Rooted in the Greek word for grace and favor, Charisma reflects the indefinable it that makes some folks stand out in a crowd. Game-wise, this Trait measures your presence and appeal. You might not be pretty if you have a high Charisma, but by all the gods, people notice you!',
      specialty: 'Charming, Sexy, Bold, Inspirational, Sophisticated, Regal'
    },
    {
      label: 'Manipulation',
      type: 'Social',
      val: [
        '• Poor: No one buys your bullshit.',
        '•• Average: Folks tend to trust what you tell them.',
        '••• Good: You’re a smooth operator when you want to be.',
        '•••• Exceptional: When you speak, folks listen.',
        '••••• Outstanding: “Dance, my puppets – dance!”',
      ],
      description: 'Life’s filled with players and pawns. A high-Manipulation character knows how to work her end of that spectrum for maximum effect. Whereas Charisma measures presence and Appearance reflects looks, Manipulation describes social cunning and innate psychology. We manipulate each other all the time, but no one likes to actually see the strings attached. As a result, a blown roll with this Trait can be disastrous.',
      specialty: 'Guile, Charm, Eloquence, Emotional Appeals, True Believer'
    },
    {
      label: 'Appearance',
      type: 'Social',
      val: [
        '• Poor: “Ew.”',
        '•• Average: “You’re okay.”',
        '••• Good: “Are you a model?”',
        '•••• Exceptional: “Here’s my number.”',
        '••••• Outstanding: “Make me your love-slave!”',
      ],
      description: 'Never underestimate the power of a pretty face! This Trait captures the appeal of sheer physical beauty… or the painful lack of it. Appearances can be deceiving, of course, especially among mages. Still, we’re hard-wired to respond well to a cute butt or a captivating grin.',
      specialty: 'Cute, Hawt, Captivating, Roguish, Adorable, Classic Hollywood Beauty'
    },
  ],
  [
    {
      label: 'Perception',
      type: 'Mental',
      val: [
        '• Poor: “Huh? What…?”',
        '•• Average: A typical eye for obvious things.',
        '••• Good: Unusually sensitive to the world nearby.',
        '•••• Exceptional: A keen sense of your surroundings.',
        '••••• Outstanding: More animal than man.',
      ],
      description: 'Magick demands clarity, so a high-Perception mage excels. This Trait measures your attention to detail, spatial awareness, sensual acuity, and that indefinable instinct that picks up the cues your conscious mind has not yet noticed. A reflection of intuition and awareness, the Perception Trait reveals clues more than it analyzes causes; that scent of roses nearby might be a rosebush, perfume, or a love spell’s lingering Resonance – Perception alone won’t tell you which one it is.',
      specialty: 'Uncanny Insight, Astute, Intuitive, Sharp Senses, Hawkeye'
    },
    {
      label: 'Intelligence',
      type: 'Mental',
      val: [
        '• Poor: A birthday candle in a halogen world.',
        '•• Average: A member of the majority.',
        '••• Good: Smart enough to hang at the big-kids’ table.',
        '•••• Exceptional: Utterly Brilliant.',
        '••••• Outstanding: The dazzling intellect of a born genius. ',
      ],
      description: 'Perhaps the most vital tool a mage can possess, this Trait reflects your ability to process information, retain impressions, envision possibilities, and think not merely outside the box but perhaps without a box at all. A low-Intelligence character might not be exactly stupid, but she’s blind to the complexities of life; one with a high Intelligence score, on the other hand, can wrap his head around sophisticated concepts and slippery facts. Despite preconceptions, you don’t need schooling to be smart. Still, it takes brains to tackle advanced education and study, so characters with such backgrounds ought to have a respectable Intelligence.',
      specialty: 'Book-Learning, Deep Thoughts, Bright, Creative, Keen-Edged Mind'
    },
    {
      label: 'Wits',
      type: 'Mental',
      val: [
        '• Poor: Muddled and scatter-brained.',
        '•• Average: A master of the obvious.',
        '••• Good: Ms./ Mr. Multi-task.',
        '•••• Exceptional: So quick on the uptake that you take other folks down.',
        '••••• Outstanding: A mental Shiva or Kali. ',
      ],
      description: 'Even the deepest minds can be oblivious to change. Survival, however, often demands sharp wits. A reflection of mental reflexes, this Trait determines your ability to react to sudden perils, subtle cues, and the twisted logic that often fills a mage’s world. Combat Initiative (see Chapter Nine, p. 399) depends upon a character’s Wits; without them, a great thinker might soon become dead meat.',
      specialty: 'Combat Reflexes, Street Survivor, Cunning, Feral, Fox-Witted'
    },
  ],
];
