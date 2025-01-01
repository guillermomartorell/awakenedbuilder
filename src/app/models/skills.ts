import { IStat } from "../interfaces/stat";

export const skills: IStat[][] = [
  [
    {
      label: "Alertness",
      type: "Talents",
      val: [
        "• Novice: “I’ve got a bad feeling about this…”",
        "•• Practiced: Your hackles rise at the first sign of trouble.",
        "••• Skillful: You catch the threat beneath a whispered voice.",
        "•••• Expert: You’ve already noted three attackersand mapped four avenues of escape.",
        "••••• Master: Those ninjas might as well be wearing pink neon clown suits.",
      ],
      description: "You sense things coming long before anyone else does. A combination of keen instincts and sharp thinking, this Ability helps you size up situations and respond accordingly. Beast-folk, survivors, bright courtiers and battle-honed veterans have high Alertness ratings.",
      possessed: "Spies, Bodyguards, Feral Kids, Street Survivors, Shapeshifters, War Veterans",
      specialty: "Ambushes, Instincts, Omens, Urban Wastelands, Combat Zones, Covert Pursuit, Warning Signs",
    },
    {
      label: "Art",
      type: "Talents",
      val: [
        "• Novice: You’re creative but unskilled.",
        "•• Practiced: You’ve put some time and work into your chosen medium.",
        "••• Skillful: Professional art could be a viable career option.",
        "•••• Expert: You’re a working pro whose work displays fascinating appeal and skill.",
        "••••• Master: You’re an acknowledged master of your field.",
      ],
      description: "Also known as Artistic Expression, this Talent reflects your ability with a visual or performing art: drawing, singing, acting, writing, painting, dance, sculpture, and so forth. Given such talents, you can work within your chosen medium to produce works of startling power. Depending on your idiom, you might create realistic renderings, engaging exaggerations, or wildly avant-garde experimental art. Higher levels reflect your ability to impress your audience; in art, that means striking a chord of Truth in people even when your work isn’t remotely realistic. As with other related general Abilities, each specialty reflects a different medium or field, of artistic endeavor. Each type of art – dance, painting, etc. – must be purchased as a separate specialty. However, because the principles of art are related even when the techniques differ, you can purchase additional specialties for only four points, assuming you have at least four dots in Art and one specialty already in place. See The Well- Skilled Craftsman (p. 279) for further details.",
      possessed: "Art Students, Fine Artists, Professional Artists, Talented Kids, Dedicated Hobbyists, Reclusive Geniuses, Meditative Ascetics, Mages Who Focus Magick Through Art",
      specialty: "Painting, Video, Singing, Acting, Dance, Mixed Media, CGI, Model-Making, Classical Art, Avant-Garde, Unrefined Intuition, Mad Brilliance, Uncanny Truths, Primitive Techniques, specific musical instruments (Guitar, Drums, Piano, etc.)",
    },
    {
      label: "Athletics",
      type: "Talents",
      val: [
        "• Novice: You were pretty decent in PE class.",
        "•• Practiced: Regular exercise is essential to your life.",
        "••• Skillful: You are one fit sonofabitch!",
        "•••• Expert: Gym-rats and pro athletes take notes from you.",
        "••••• Master: You could qualify for the Olympics… and you might actually compete!",
      ],
      description: "Fitness is your passion. While other folks sit on the sidelines, you’re running races, scoring touchdowns, biking to and from work, and developing prowess with intense practice. Folks don’t usually picture wizards hanging around the gym, but you’re an exception to that stereotype. “A sound mind in a sound body” is your motto. What good is it to be a master of reality, after all, if your reality involves a fat ass and flabby gut? Like Art, Athletics has many different specialties – running, climbing, swimming, and so forth. And like Art, Crafts, and other broad categories, you can buy specialties to reflect different athletic pursuits. (The Well-Skilled Craftsman option applies here as well.)",
      specialty: "Bodybuilding, Cycling, Climbing, Equestrian, Swimming, Survival Training, Extreme Endurance, Flow- Arts, Parkour, Skiing, specific sports (Football, Basketball, Hockey, etc.)",
      possessed: "Jocks, Cyborgs, Fitness Gurus, Personal Trainers, Professional Dancers, Martial Artists, Underwear Models, TV Stars",
    },
    {
      label: "Awareness",
      type: "Talents",
      val: [
        "• Novice: You possess a gift for spotting hiddentruths.",
        "•• Practiced: Magic exists, and you often senseits presence.",
        "••• Skillful: You can see auras, and you understand what those colors mean.",
        "•••• Expert: The supernatural world reveals itself to you in disturbing detail.",
        "••••• Master: You’re so attuned to the mystic realm that many folks consider you insane.",
      ],
      description: "You’ve got uncanny perceptions. While alert folks spot everyday clues, your instincts cue in on the so-called supernatural side of life. Perhaps you’ve simply got that feeling about things – some people do, even if they’re not Awakened as such. More likely, you’ve spent enough time around the magical world to sense its effects in your presence. At lower levels, this Talent grants a nebulous perception of uncanny phenomena; higher ratings in the Trait reveal auras, expose the secretive Night-Folk, and open your eyes to the spiritual Periphery. In game terms, you can use Perception + Awareness to spot paranormal effects, detect magick, recognize Resonance Echoes, and so forth, assuming they’re within close proximity of you. The more successes you roll, the more detailed your impressions become. For a reference chart of aura colors and textures, see Chapter Ten, (p.507).",
      possessed: "Canny Grannies, Wise Spies, Crazy Shamans, Demented Seers, Insightful Kids, Mad Scientists, Those Touched By God",
      specialty: "Omens, Auras, Resonance, Weird Feelings, Mystic Instincts, Hidden Magic, Spiritual Vidare",
    },
    {
      label: "Brawl",
      type: "Talents",
      val: [
        "• Novice: You had a tough childhood.",
        "•• Practiced: You’re from The Bad Part of Town.",
        "••• Skillful: When punches fly, you’re among the last folks standing.",
        "•••• Expert: Extreme fighting champs shiver when you enter the ring.",
        "••••• Master: “See me hit you, you go down.”",
      ],
      description: "You kick ass. Maybe you grew up hard and mean, or maybe you’re schooled in basic self-defense. Either way, your fists and feet are weapons – probably not deadly, but a lot more effective than random swings from unskilled brutes. Not only do you know how to fight, but you’re naturally good at it. You’ve got the skill, will, and training to hurt someone using nothing more than human cunning and animal ferocity. (For armed fighting, see the Melee Skill, and for refined unarmed techniques, see the Martial Arts Skill. Both appear below.)",
      possessed: "Bikers, Brawlers, Bullies, Former Punching Bags, Bodyguards, Military Veterans, Scary Folks With Bad Tempers",
      specialty: "Barroom, Boxing, Beast-Form Fighting, Dirty Fighting, Disarming, Peaceful Warrior",
    },
    {
      label: "Empathy",
      type: "Talents",
      val: [
        "• Novice: You’re pretty decent at noticing emotional cues.",
        "•• Practiced: You’re the crying shoulder for your friends.",
        "••• Skillful: It’s fairly hard to deceive you.",
        "•••• Expert: Even below the surface, a person’s true feelings seem obvious to you.",
        "••••• Master: To your eyes, most people are open books.",
      ],
      description: "An innate sense of emotional energies, this Talent provides you with insight – perhaps more insight than you might want – into how the people around you feel. Ideally, this helps you understand them better and perhaps allows you to calm, rouse, or otherwise adjust their emotional state. On the flipside, it might leave you vulnerable to their passions (a common fault among Ecstatic mages), or it could leave them vulnerable to your machinations. Combined with Mindbased Effects, Empathy can be a potent tool – or weapon – in the hands of an Awakened character. For details, see Mundane Skills and Magickal Effects in Chapter Ten, (pp. 532-535).",
      possessed: "Ecstatic Mages, Shamans, Healers, Seducers, Sales Reps, Therapists, Trusted Friends, Nephandi",
      specialty: "Hidden Feelings, Subtle Cues, Emotional Manipulation, Trust, Sensing Emotions, Life-Force Fluctuations, Interpersonal Psychology, Seeing Past the Mask, “I Know What You Need”",
    },
    {
      label: "Expression",
      type: "Talents",
      val: [
        "• Novice: When you speak, folks notice.",
        "•• Practiced: Your passions capture other people’s interest.",
        "••• Skillful: You rock the crowd with a voice that’s loud.",
        "•••• Expert: In this media-glutted world, you still blaze bright.",
        "••••• Master: Poets, prophets, and politicians wish they were you. Possessed By: Rock Stars,",
      ],
      description: "Life is your canvas, and you excel at making impressions upon it. Through theatrical flair and audience psychology, you can rouse emotions, shift opinions, and grab the spotlight in social situations. Although this Trait can be used to handle any social situation, it’s best used to make general impressions. For specific artistic endeavors, see Art, above.",
      possessed: "Rock Stars, Media Pundits, Ecstatic Mages, Executives, Poets, Leaders, Politicians, Bloggers, Rabble- Rousers, Hip-Hop MCs, Professional Celebrities",
      specialty: "Passion Plays, Poetic Eloquence, Motivational Speaking, Tactical Rhetoric, Preaching, Command, Shut-Downs, Rocking the Mic",
    },
    {
      label: "Intimidation",
      type: "Talents",
      val: [
        "• Novice: Playground terror.",
        "•• Practiced: Clique leader.",
        "••• Skillful: Professional dominant.",
        "•••• Expert: Alpha wolf.",
        "••••• Master: Queen or king of all you survey.",
      ],
      description: "You scare people – perhaps not through overt threats (although, of course, that works too), but by the simple virtue of your presence. When you choose to, you can dominate most situations. Maybe you understand the unconscious cues of social alpha-ism or have a way with cutting words. Or perhaps you’re simply big enough, mean enough or don’t-give-a-fuck enough to inspire submission. Whatever your secret might be, this Talent gives you an edge when staring down other people, beasts, and possibly other entities as well.",
      possessed: "Men in Black, Cyborgs, Cops, Witches, Mad Scientists, Outlaws, Bullies, Beast-Folk, Pro Doms, Drill Sergeants, Samuel L. Jackson",
      specialty: "Bad Cop, BDSM, Pack Hierarchy, Cold Stare, Brutal Threats, Topping From Below, Pants- Crapping Terror"
    },
    {
      label: "Leadership",
      type: "Talents",
      val: [
        "• Novice: Head cheerleader.",
        "•• Practiced: Quarterback.",
        "••• Skillful: Executive.",
        "•••• Expert: Tycoon.",
        "••••• Master: Nick Fury.",
      ],
      description: "A more refined sort of control, this Talent helps you inspire other folks to follow your lead. It might involve commanding presence, assertive words, clear determination, or simply the Right Stuff when said stuff is needed. When you bark, folks hop – not always with compliance, but with, at the very least, a grudging admission that you seem to know what you’re doing… even when you don’t.",
      possessed: "Officers, Managers, Pundits, Preachers, Teachers, Team Leaders, Cult Leaders, Gang Leaders, Politicians",
      specialty: "Competent, Inspiring, Regal, Harsh, Do-Or-Die, Soft-Voiced Command",
    },
    {
      label: "Streetwise",
      type: "Talents",
      val: [
        "• Novice: Rock musician.",
        "•• Practiced: Suburban dope dealer.",
        "••• Skillful: Hip-Hop MC.",
        "•••• Expert: Gang leader.",
        "••••• Master: Gang lord. Possessed By: Bartenders, Hookers,",
      ],
      description: "The underworld is your home, and you know it pretty well. Folks who normally don’t talk to no one will open up to you. Probably raised in or around the streets, you understand the codes and cues outside the law. In addition to some minor tricks of the trade (jimmying locks, fencing goods, swiping stuff when no one’s looking), you know how to move and speak and otherwise fit in where cops and angels fear to tread.",
      possessed: "Bartenders, Hookers, Hackers, Pimps, Street People, Cops, Detectives, Street Ministers, Musicians, Runaways, Drug Dealers, Activists, Journalists, Taxi Drivers",
      specialty: "Theft, Survival Skills, Outlaw Hacker Culture, Crash Space, Street Politics, Urban Tribes, Trust, Hiding Spots, Sex Trade, Drug Trade, Music Culture, Gangs, Seeing Nothing Yet Everything",
    },
    {
      label: "Subterfuge",
      type: "Talents",
      val: [
        "• Novice: Cute kid.",
        "•• Practiced: Small-time hustler.",
        "••• Skillful: Successful lawyer.",
        "•••• Expert: Career politician.",
        "••••• Master: Master spy.",
      ],
      description: "You’re good at winning people’s trust and then turning it to your advantage – and also good at spotting folks who try to do the same thing to you. (This second element, incidentally, replaces the old Ability Sense Deception.) Perhaps you use your powers for good… but probably not. A trade secret for sneaks, gossips, grifters, and frauds, this Talent helps you get around social barriers, figure out what people want, and then appeal to their desires. It doesn’t have to involve outright lying, but let’s just say you’re really good at lawyering the truth.",
      possessed: "Syndicate Agents, Secret Agents, Home- Wreckers, Ad Agency Personnel, Lobbyists, Crooks, Shapeshifters, Infiltrators, Embezzlers, Hustlers, Attorneys, Sociopaths",
      specialty: "Con Games, Sexual Manipulation, False Innocence, Politics, Law, Cheating, Undermining Opposition, Sensing Deceptions",
    }
  ],
  [
    {
      label: "Crafts",
      type: "Skills",
      val: [
        "• Novice: You sorta know what you’re doing.",
        "•• Practiced: Basic skills have given way to working knowledge.",
        "••• Skillful: You’re pretty damn good, if you must say so yourself!",
        "•••• Expert: You’re highly respected within your field.",
        "••••• Master: There’s little you can’t do when you set your mind to doing it.",
      ],
      description: "You know how to create and repair things with your hands. Pursuing a particular trade (and perhaps a number of other ones too), you’ve begun to master the techniques involved in carpentry, mechanics, leatherwork, metallurgy, or any other handicraft you could name. When purchasing this Skill, you must define a specialty for your character even if you don’t have the usual four dots in the Trait; this specialty defines a type of Craft you pursue, and you get the bonus once you achieve at least four dots in that field. If you want your character to have several Crafts, they should be purchased separately. A mechanic who’s also good with ceramics, woodworking, and home repair, for example, would have several different Craft specialties to reflect her ability with each one.",
      possessed: "Inventors, Mechanics, Artisans, Bohemians, Servants, Recreationists, Technicians, Wanderers, Survivalists, Mad Scientists, Obsessed Superheroes",
      specialty: "Armor, Weaponsmith, Carpentry, Invention, Tailoring, Design, Vehicle Repair, Home Repair, Leatherwork, High-Tech Tinkering"
    },
    {
      label: "Drive",
      type: "Skills",
      val: [
        "• Novice: Sunday driver.",
        "•• Practiced: Typical American.",
        "••• Skillful: New York taxi driver.",
        "•••• Expert: Professional racer.",
        "••••• Master: Bond – James Bond.",
      ],
      description: "Cars? You know cars. Maybe trucks too, if you’re good enough. This Skill reflects the everyday complexities of automobile handling: the higher your rating, the better you are behind the wheel. A single dot represents basic operation of an automatic transmission car. Higher levels open up a wider range of vehicles at your command. Typical driving doesn’t demand a roll, but if you find yourself in a race, a chase, or some other challenging circumstance, you’d best hope that you have a few dots in this Skill. The results otherwise could be… messy. For game rules that deal with driving and so forth, see Vehicle Systems in Chapter Nine, (pp. 458-462).",
      possessed: "Chauffeurs, Instructors, Truckers, Daredevils, Delivery Drivers, Secret Agents, Getaway Specialists, Stunt Artists",
      specialty: "Racing, Pursuit, Shadowing, Stunts, Vintage Cars, Heavy Trucks, Long-Distance, Shaking Tails, Bad Conditions, Snow and Ice, Off-Road, Showing Off"
    },
    {
      label: "Etiquette",
      type: "Skills",
      val: [
        "• Novice: You can attend fine restaurants without embarrassing yourself.",
        "•• Practiced: You’ve got impressive manners and a sense for saying the right things.",
        "••• Skillful: Wonderfully cultured, you know your way around a meal, party, or conversation.",
        "•••• Expert: A social chameleon, you put folks at ease almost anywhere.",
        "••••• Master: You’re a valued guest in nearly any situation.",
      ],
      description: "Social graces are your forté. Through a blend of cultured manners and people skills, you know how to make a good impression. Given the elaborate gamesmanship and baroque expectations found at certain levels of society (and the local customs of cultures other than your own), this can grant an extremely valuable edge in negotiations, seductions, and other forms of diplomacy. And because social rules often exclude everyone except “the right sort of people,” this Skill provides a passkey to many important engagements.",
      possessed: "Diplomats, Emissaries, Negotiators, Nobility, Executives, World Travelers, Social Climbers, Old-Money Heirs, Spies",
      specialty: "High Society, Royalty, Dining, Subcultures, International Travel, Umbral Courts, Master Mages, Internet Culture, Digital Web, Technocratic Politesse"
    },
    {
      label: "Firearms",
      type: "Skills",
      val: [
        "• Novice: Gun range newbie.",
        "•• Practiced: Hunter.",
        "••• Skillful: Typical cop or soldier.",
        "•••• Expert: Sharpshooter.",
        "••••• Master: Frank Castle.",
      ],
      description: "Guns are your thing. You might not be an expert marksman, but you’re at least familiar with the basics of shooting, cleaning, and maintaining firearms. A character with at least two dots in Firearms knows her way around a range, ammunition types, and the pros and cons of various makes and models. Because your average shooting range doesn’t carry plasma cannons, this Skill doesn’t cover energy-projector weapons. (For those chops, see Energy Weapons in the Secondary Skills section, below.) With the proper training and experience, however, specialties for the Firearms Skill can cover heavy weapons: machine guns, bazookas, rocket launchers, and so on; see The Well-Skilled Craftsman, above.",
      possessed: "Assassins, Survivalists, Washed-Up Rock Stars, Police, Military Personnel, Enforcers, Bodyguards, Militia Members, Gang Members, Black Suits, Self-Defense Enthusiasts, Pissed-Off Crazy People",
      specialty: "Sniper, Quick-Draw, Target Shooting, Rifles, Handguns, Drive-Bys, Military Hardware, Heavy Weapons, Vintage Firearms, Cybernetic Weaponry"
    },
    {
      label: "Martial Arts",
      type: "Skills",
      val: [
        "• Novice: Raw beginner.",
        "•• Practiced: Experienced student.",
        "••• Skillful: Devotee.",
        "•••• Expert: Accomplished combatant.",
        "••••• Master: Formidable master.",
      ],
      description: "The many refinements of hand-to-hand combat have produced thousands of martial art styles, from brutal Greek pankration to sublime t’ai chi. You pursue one or more of these disciplines, so your fighting techniques are more effective than simple punches and kicks. In game terms, the Martial Arts Skill reflects hard-won expertise in some combat form. Because of the intense training, specific techniques, and discipline involved, this Skill must be learned through practice and taught by a teacher who’s skilled in the same martial arts form you pursue. A savate teacher, after all, can’t teach you drunken-monkey kung fu. In return, this Skill grants access to a variety of special combat maneuvers described in the Combat section of Chapter Nine. An accomplished martial artist can also use her practice to focus magickal Effects: powerful strikes, healing techniques, Mind-based powers, and so on. (See the Martial Arts entries in Chapter Nine, pp. 423-426 and Chapter Ten, pp. 580-581.) And because martial arts involve scientific applications, and are very much a part of accepted reality, Technocrats often use them too. If it’s good enough for Agent Smith, after all, then any good Technocrat can employ such arts! In real life, most martial artists pursue many different styles. Rather than buy this Skill separately for every different form your character knows, you may choose the Well-Skilled Craftsman option to reflect a different style of combat. Someone with lots of dots and specialties also has lots of options when it comes to kicking ass. As suggested above under the Optional Rule: Minimum Abilities, a mage who uses martial arts as the practice and/ or instrument of her magickal focus should have at least one dot in Martial Arts for every dot she has in the highest Sphere she uses for martial arts-based Effects. Otherwise, the Effect-Ranks she can focus through her martial arts are limited to the dots she has in this Ability; a mage with Martial Arts 1, therefore, could not focus Rank 2-5 Effects through her martial arts. As noted earlier, Chapter Ten contains details about focus, Sphere Ranks, and Effects.",
      possessed: "Cops, Soldiers, Gang Members, Old Masters, Black Suits, Self-Defense Advocates, Athletes, Stunt Artists, The Most Unlikely People",
      specialty: "Soft Style (snake, monkey, drunken style, etc.), Hard Style (tiger, mantis, etc.), Aikido, Judo, Karate, Muay Thai, Kuei Lung Chuan, etc."
    },
    {
      label: "Meditation",
      type: "Skills",
      val: [
        "• Novice: You can ground and center for short periods of time.",
        "•• Practiced: Regular practice has deepened and extended your abilities.",
        "••• Skillful: Even under distracting conditions, you know how to find your center.",
        "•••• Expert: “Use the Force, Luke…”",
        "••••• Master: An island of calm is yours whenever you want or need it.",
      ],
      description: "Ground, center, breathe, and relax. This Skill helps you sweep aside the clutter of everyday existence and find a spot within yourself that offers calm. Depending on your preferred style, your background, and the purpose for which you practice meditation, this could involve simple quiet time, elaborate postures and breath control, religious devotion, and even ecstatic dance or prayer. In game terms, the Meditation Skill can help your character make up for lost sleep, hibernate, gain artistic or mystical insights, unravel patterns or enigmas, or refresh your Quintessence rating (see the Avatar and Quintessence Trait entries later in this chapter). A character with Meditation often has at least one dot in the Esoterica Knowledge Trait. Many forms of magick, or feats like astral travel, also use meditation as an instrument of focus – see Chapter Ten, (pp. 594-596), for details.",
      possessed: "Akashics, Yogis, Monks, Hypnotists, Therapists, Clergy, Martial Artists, Hippies",
      specialty: "Zen, Yoga, Do, Trance, Nodes, Relaxation, Therapy, Tantra, T’ai Chi, Virtual Reality, Focus, Meditative Movement, Grace Under Pressure"
    },
    {
      label: "Melee",
      type: "Skills",
      val: [
        "• Novice: You can swing a club or blade around without hurting yourself… much.",
        "•• Practiced: You’ve earned a bit of skill… maybe even enough for a real-life fight.",
        "••• Skillful: You’re kinda badass.",
        "•••• Expert: You’re seriously badass.",
        "••••• Master: Your skill intimidates the pros.",
      ],
      description: "Weapons are extensions of your own limbs, and you know how to use them with brutal efficiency. When fists and feet just aren’t enough to get the job done, this Skill literally gives you the fighting edge… or the blunt instrument, if need be. Melee grants your character a working knowledge of weaponry and its practical effects in combat. Certain groups, like gangs or martial arts fellowships, prize skill at arms; if you wanna hang with such people, this Trait is essential to your credibility… and perhaps your survival, too. Certain weapon maneuvers (again, see Combat in Chapter Nine) may be used only with certain weapons or with weapons based martial arts. As with other fighting skills, the Well-Skilled Craftsman option may apply.",
      possessed: "Cops, Military Personnel, Spies, Killers, Outlaws, Martial Artists, Street Folks, Barroom Brawlers, SCA Members",
      specialty: "Blades, Polearms, Staves, Stunts, Combat Sports, Weapons of Opportunity, Kendo, Fencing, Martial Arts Weapons"
    },
    {
      label: "Research",
      type: "Skills",
      val: [
        "• Novice: Buffy.",
        "•• Practiced: Anya.",
        "••• Skillful: Willow.",
        "•••• Expert: Giles.",
        "••••• Master: Fred.",
      ],
      description: "It ain’t glamorous, but if you’re a mage, you need to learn how to track things down. This Skill helps you locate sources of information – public libraries, private archives, Internet searches, occult collections, verbal lore, and so forth – and then skim them for the information you seek. You might not find exactly what you’re looking for; some things can be found only in special places. Still, a successful Research roll can help you get on the right track, even if specific facts remain elusive… at least for now.",
      possessed: "Monster Hunters, Research Assistants, Archive Keepers, Librarians, Detectives, Writers, Journalists, Scientists",
      specialty: "Arcane Collections, Forbidden Lore, Hidden Sources, Secrets, Net Searches, Oral Traditions, specific topics (Crime, Medicine, Politics, History, etc.)"
    },
    {
      label: "Stealth",
      type: "Skills",
      val: [
        "• Novice: With dark clothes, you might not be spotted at night.",
        "•• Practiced: You often sneak out past your parents.",
        "••• Skillful: A genuine sneak, you elude casual detection.",
        "•••• Expert: Just doin’ what a ninja’s gotta do…",
        "••••• Master: Batman’s taking notes.",
      ],
      description: "A vital proficiency for folks who want or need to get around without being noticed, this Skill helps you move in silence, take advantage of your environment, and spot potential hazards before they blow your cover. Other characters have a chance to notice you, of course (see Chapter Nine, p. 403), but a high rating in this Skill can beat most mundane forms of observation.",
      possessed: "Spies, Burglars, Runaways, Star-Crossed Lovers, Hunters, Assassins, Vigilantes",
      specialty: "Blending Into Shadows, Woodlands, Alleys, Concealment, Squeaky Floors, Moving Silently, Shadowing a Target"
    },
    {
      label: "Survival",
      type: "Skills",
      val: [
        "• Novice: You’ve done some day-hikes on established trails.",
        "•• Practiced: Plenty of time outdoors has taught you decent skills.",
        "••• Skillful: You can live off the land, make traps, and spot most obvious hazards.",
        "•••• Expert: You’d probably survive the Hunger Games.",
        "••••• Master: The wilderness is your full-time home.",
      ],
      description: "In the modern consumer age, most folks have forgotten how to survive without a store close by. Not you, though. A combination of learned knowledge and animal instinct helps you locate sources of food, water, shelter, and relative safety. You can probably find your way through the wilderness or urban wastelands, puzzling out the local hazards long enough to keep you alive… at least for now. Very basic survival skills apply to almost any environment; advanced tasks, however – or extremely harsh or alien environments – demand specific Survival specialties. A bit of backpacking experience, for example, won’t help you much in Death Valley or downtown Mumbai. A variant on this Skill, Urban Survival, gives you the expertise to live off the streets, dive Dumpsters, and figure out where – and where not – to grab a nap in the cities and suburbs of this World of Darkness. For rules about survival situations, see Environmental Hazards in Chapter Nine, (pp. 435-436).",
      possessed: "Hunters, Hikers, Shamans, Survivalists, Fugitives, Reality TV Contestants, Rural Folk, Rangers, Members of Indigenous Cultures",
      specialty: "Old-School Wisdom, Traps, Shelters, Weather Hazards, End-Times Preparedness, specific environments (Desert, Jungle, Woodlands, Suburbs, etc.)"
    },
    {
      label: "Technology",
      type: "Skills",
      val: [
        "• Novice: Normal household technology is a snap for you.",
        "•• Practiced: Basic household, IT, and automotive maintenance and repairs are easy enough to manage, and you know how to tinker around with simple electronic tech.",
        "••• Skillful: You’ve got enough mechanics savvy to create your own minor-league tech, repair most everyday items, and work simple technomagick with the goods at your command.",
        "•••• Expert: You’re a whiz with typical technology, invent some pretty advanced stuff, and whip up impressive gadgets outside the range of everyday Sleepertech.",
        "••••• Master: A technological artisan, you can design, construct, operate, and repair unique devices and astonishing inventions. If you employ technomagick, then your creations surpass Sleepertech by a pretty wide margin.",
      ],
      description: "In our high-tech world, this Skill often comes in handy. A catch-all group of familiar tech affinities, Technology reflects a working knowledge of typical developed-world gadgets. Most urbanized characters have at least one dot in Technology but seldom more than three. This Ability covers simple operations and repairs; for advanced forms of technology and hypertech, see Crafts above, or Computers and Secondary Skills below. For game systems that deal with mundane tech, see Inventing, Modifying, and Improving Technology in Chapter Nine, (pp. 463-464).",
      possessed: "Technicians, Inventors, Repair Specialists, Technomancers",
      specialty: "Electronics, Vehicles, Modification, Invention, Media Tech, Technomagick"
    },
  ],
  [
    {
      label: "Academics",
      type: "Knowledges",
      val: [
        "• Dabbler: Basic primary and secondary education.",
        "•• Student: Basic university education, equivalent to a two - year degree.",
        "••• Scholar: Advanced university education, equivalent to a four-year degree.",
        "•••• Professor: Advanced specialized study, plus an advanced university-level education.",
        "••••• Master: Refined and advanced scholarship, with highly respected academic achievements.",
      ],
      description: "Despite the failings of the American system, mages cannot afford to be ignorant. Whether they’re self-taught, unusually accomplished, or schooled in some system beyond the typical public education found in the U.S., most Awakened folks display an unusual degree of scholastic achievement. This Knowledge reflects your overall academic understanding – language skills, math, history, and so forth. As with Crafts, you should choose a specialty to reflect your greatest area of expertise. (The Well-Skilled Craftsman option applies.) Even outside that specialty, however, your Academics rating reflects your general competence for scholastic subjects. And though every mage ought to have at least one dot in this Trait, many groups (especially Hermetics, Etherites, Solificati, and the various branches of the Technocracy) advocate much higher levels of education and knowledge. “For scientific fields, see pp. 288-289. For languages, see that Merit in Appendix II, p. 643.",
      possessed: "Students, Scholars, Scientists, Journalists, Authors, Wizards",
      specialty: "Teaching, Liberal Arts, specific field of study (History, Language, Folklore, Politics, etc.)"
    },
    {
      label: "Computer",
      type: "Knowledges",
      val: [
        "• Dabbler: You know basic computer skills for your time and place.",
        "•• Student: You’ve studied IT systems and can do basic programming.",
        "••• Scholar: Study and experience make you pretty decent with essential systems.",
        "•••• Professor: You’re a respected pro in the computer tech field.",
        "••••• Master: When you’re not making existing systems play fetch for you, you’re crafting new stuff, reworking hardware, and being an overall master of your trade.",
      ],
      description: "One of the cornerstones of the world as we know it now, the computer was still a pretty strange device in 1993; by 2013, however, most industrial-world folks under 50 years old (and many people far older than that) knew their way around basic home and office computer systems. Computers are also far easier to use in 2015 than they were in 1993, and so the degree to which your character understands and employs a computer – and the degree to which such understanding is common knowledge – will depend a lot on your Mage chronicle’s timeframe. Basic proficiency with computers is a lot more typical in 2015, after all, than it was in the early ‘90s! This Knowledge reflects your understanding of Information Technology; a single dot involves basic computer use (whatever that looks like in your chronicle), whereas higher ratings show a deeper understanding of hardware, software, interface, the Internet, and IT culture in general. Certain tasks (like advanced programming or repair) and systems (especially the arcane tech employed by technomancers) demand at least three or four dots in this Trait before your character can even begin to understand them. As a general rule for mages who employ computers as instruments of focus, assume that a mage cannot channel a Sphere Effect through a computer unless he has at least as many dots in Computer as he has in that Sphere. If Max, for example, has only one dot in Computer Knowledge, then he cannot use Sphere Effects of Rank 2 or higher through a computer because he simply doesn’t understand computers well enough to do so. For details about Spheres, their Ranks, and their Effects, see Chapter Ten. For expanded game rules related to computer maintenance, hacking, and cracking, see The Book of Secretss.",
      possessed: "Virtual Adepts, Technocrats, Technomancers, Students, IT Pros, Hackers, Military Personnel, Almost Anyone in Current Tech Cultures",
      specialty: "General Use, Internet, Programming, Repair, IT Culture, Office Tech, Entertainment Tech, CGI, Data Systems, Hacking, Cracking, Organization, Current Market, Underground, Advanced Tech, Cryptanalysis"
    },
    {
      label: "Cosmology",
      type: "Knowledges",
      val: [
        "• Dabbler: Student of the mysteries.",
        "•• Student: Occasional voyager.",
        "••• Scholar: Experienced traveler.",
        "•••• Professor: Seasoned explorer.",
        "••••• Master: World-walker.",
      ],
      description: "Known by Technocrats and many hypertech mystics as Subdimensions, this trait reflects a working knowledge of the puzzling Otherworlds beyond the Earthly plane. With it, you stand a decent chance of finding your way around out there without getting yourself killed. (Without it, you’re seriously screwed.) The specific way in which you view the Otherworlds will depend a lot on what you expect to see there; this Knowledge simply gives you the tools to navigate paths, spot hazards, deal with entities, and recognize opportunities or threats when you run across them. For an overview of the Otherworlds, see Chapter Four. For game systems, see The Otherworlds in Chapter Nine, (pp. 474-485).",
      possessed: "Shamans, Witches, Hermetics, Void Engineers, Etherites, Werewolves, Astral Travelers, Archmages",
      specialty: "Astral Voyaging, Courts, Paths, Hazards, Omens, Realms, Navigation, Dimensional Exploration, Threat Factors, Otherworldly Etiquette"
    },
    {
      label: "Enigmas",
      type: "Knowledges",
      val: [
        "• Dabbler: Puzzles intrigue you.",
        "•• Student: Zen koans do not piss you off.",
        "••• Scholar: “You were not put here to ‘Get it,’ Mr. Burton.”",
        "•••• Professor: You clap with one hand inside Schrödinger’s box.",
        "••••• Master: You are an enigma.",
      ],
      description: "You can wrap your head around concepts that give other people headaches. Puzzles, riddles, artistic themes, uncanny entities, arcane secrets, bizarre methods of communication – you might not understand the specifics just yet, but you can hash out enough comprehension to get by. Especially in a mage’s world, many things transcend rational explanation… and that realm of strangeness is where the Enigmas Knowledge takes you. Whether you need to make jumps of logic, wade into metaphysical currents, spot clues in apparent chaos, or figure out what’s being said waaaaaaaay between the lines (or totally outside them), this Trait is essential",
      possessed: "Akashics, Ecstatics, Hermetics, Shamans, Mad Scientists, Detectives, Weird-Ass Metaphysicians, Gamers, Sifus, Professors, Crazy Fuckers, Annoying Old Masters",
      specialty: "Riddles, Puzzles, Metaphysics, Deduction, Zen, Arcane Enigmas, Codes and Ciphers, Classic Mysteries, Intuitive Leaps, Deciphering Madness"
    },
    {
      label: "Esoterica",
      type: "Knowledges",
      val: [
        "• Dabbler: You’ve skimmed some New Age books or taken a handful of classes in the subject.",
        "•• Student: You’ve devoted some time and energy to esoteric subjects.",
        "••• Scholar: A devoted esotericist, you’ve spent years building up a working knowledge of odd subjects.",
        "•••• Professor: Nowyouunderstandtheinterconnected patterns of arcane disciplines; knowing one allows you to master others more easily.",
        "••••• Master: You possess a profound understanding of esoteric subjects and the practical uses behind them.",
      ],
      description: "Esoteric knowledge comes in many forms: astrology, angelography, fortune-telling, yoga, herbalism, demonology, the lore of stones, even the secret code languages of occult societies. For centuries, such mysteries were the province of selected initiates; these days, it’s relatively easy to find the basics in any decent bookstore or website. Even so, the deeper levels remain obscure to all but the most devoted students of the art. Anyone can take a yoga class in the modern world, but the more arcane applications of that art demand years of practice, study, and devotion. Game-wise, the Esoterica Knowledge reflects your pursuit of esoteric disciplines and, by extension, provides instruments for your magickal focus. The Trait’s overall rating reflects your general knowledge of arcane subjects, whereas each specialty reflects your expertise within a certain field. Unlike the Occult Knowledge – which in Mage 20 reflects an understanding of “secret history” and shadow-cultures – Esoterica represents the practical application of unusual fields. Occult can teach your character who Aleister Crowley was, while Esoterica helps her understand what Crowley did… and to use those principles herself. In short, this Knowledge sums up a lot of previous editions’ Abilities into a single united Trait. Because esoteric disciplines are often interrelated, you can use the Well-Skilled Craftsman option to purchase a new specialty for only four experience points, assuming that you already have at least four dots in the Esoterica Knowledge, an existing specialty, and a story-based reason to learn that discipline. Say, for example, your character has four dots in Esoterica, with a specialty in Herbalism; if he gets some time to study yoga, he can spend four experience points and then add a specialty in Yoga to that Knowledge… after which time he can use yoga as a focus tool (assuming that it fits his magickal paradigm), and count 10s as two successes on mundane or magick-casting rolls that employ that practice. Given an opportunity to study and practice an art, any character can learn Esoterica. Although such disciplines don’t give magickal powers to unAwakened characters, the Knowledge lets them use mundane applications – teaching yoga classes, doing horoscopes, deciphering alchemical texts and so forth – and count 10s as two successes if and when they do so. Understanding the principles of bakemono-jutsu – the ninja “ghost technique” – won’t make you invisible, for instance, but a specialty in that esoteric technique would let you count 10s as two successes on your Stealth Skill roll. Even though they can’t employ mystic powers, non-mages can be far more knowledgeable about such subjects than mages are. Such mentors may teach a mage this Knowledge or allow him to add another specialty to his existing expertise. Let’s say that Dante needs to learn demonology; he goes to the best teacher he can find – an unAwakened monk named Brother Silence – and studies his ass off. In time, Dante understands the names and rituals associated with Infernal powers and can put them to practical use. In such cases, the student may indeed surpass the master, thanks to the Awakened understanding that unlocks the greatest potential of the art. Again, an Esoterica practice must fit the character’s belief system if you want to use it as a focus; a computer mage will have a hard time wedging her study of herbalism into a technomagickal hacking routine! This rule, however, helps flesh out your character’s belief system and gives you a practical use for the arcane disciplines that any mage worth that name understands. For details about various paradigms, practices, and instruments associated with esoteric practices, see Focus and the Arts in Chapter Ten, (pp. 565-600).",
      possessed: "Monks, Professors, Clergy, New Agers, Witches, Weirdoes, Artists, Occultists, Teachers, Transhumanists, Paranormal Researchers, Monster Hunters, Fantasy Authors and Editors, Students and Masters of Arcane Arts",
      specialty: "Yoga, Tantra, Herbalism, Kabbalah, Fortune-Telling, Hypnosis, Astrology, Celestiography, Demonology, Sacred Geometry, Gematria, Goetia, Prophecies, Omens, T’ai Chi, I Ching, Stone Lore, Alchemy, Symbolism, Transhumanist Theory, Esoteric Musicology, Bakemono-Jutsu, Iconology, Numerology, Voodoo, Crystalmancy, Tarot, specific arcane languages (Enochian, In-o-Musubi, the Language of Flowers, etc.)"
    },
    {
      label: "Investigation",
      type: "Knowledges",
      val: [
        "• Dabbler: You spend lots of time in the Mystery section of your favorite bookstore.",
        "•• Student: You’ve learned basic criminology.",
        "••• Scholar: Detective work is your trade and passion.",
        "•••• Professor: Clarice Starling comes to you for advice.",
        "••••• Master: Batman.",
      ],
      description: "Clues of a more mundane nature are yours to unravel. Whether you specialize in crime scenes, information retrieval, political intrigues, or other mysteries, you know what to look for, where to look for it, and how to piece it together once those pieces start becoming obvious. Your training might be informal (like, say, a taste for detective novels), but it features basic – and possibly advanced – criminology techniques as well as logistical guesswork, potential sources of information, deductive methodology, and well-honed instincts that turn raw data into potential conclusions.",
      possessed: "Crime Writers, Cops, Detectives, Stalkers, Journalists, Intelligence Agents, Smart Criminals, Black Suits, Refined Cannibal Geniuses With a Taste For Chianti",
      specialty: "Forensics, Deduction, Interrogation, Crime Scenes, Data Sorting, Criminal Psychology, Spotting Clues, Personal Details, Paranormal Investigations"
    },
    {
      label: "Law",
      type: "Knowledges",
      val: [
        "• Dabbler: Beat cop.",
        "•• Student: Police sergeant.",
        "••• Scholar: Chief or DA.",
        "•••• Professor: Federal bureau official.",
        "••••• Master: Attorney General.",
      ],
      description: "You might not be the Law, but you understand how it works. The ins and outs of cop-shops, police procedures, ranks and files, end-arounds, and other essential components of your local justice system are yours to know. Different regions, of course, have very different police systems; your grasp of New Orleans law enforcement won’t help much in Tokyo. Still, modern police departments have certain elements in common, and this Knowledge can help you suss them out even if you have to beat a much higher difficulty rating in order to do so.",
      possessed: "Cops, Lawyers, Government Agents, Criminals, Gang Bosses, Reporters",
      specialty: "Local Beat, Crimes, Customs, Procedures, Bribery, Internal Affairs, Courts, International Agencies, Occult Crimes, Jurisdiction, Chain of Command, Bending the Rules"
    },
    {
      label: "Medicine",
      type: "Knowledges",
      val: [
        "• Dabbler: You’ve learned basic First Aid and CPR.",
        "•• Student: You can treat minor traumas and illnesses.",
        "••• Scholar: Medical training allows you to pursue more serious treatments.",
        "•••• Professor: You’ve got a professional degree of skill in advanced medicine and surgical procedures.",
        "••••• Master: A noted and respected healer, you’re in demand for your extensive expertise.",
      ],
      description: "When folks get broken, you know more or less how to fix them. One or two dots in this Ability reflect basic First Aid skills, whereas higher ratings represent advanced training and experience. (Note that said training and experience might not be formal and licensed training and experience…) With Medicine, you’ve learned enough about human and humanoid bodies to treat, harm, and potentially diagnose their injuries and illnesses. Healing magicks often depend upon such understanding, and an angry mage with this Trait can be extremely dangerous! For details about injury and healing, see Health and Injury in Chapter Nine, (pp. 406-409). For information about medicine as a magickal practice, see Medicine Work in Chapter Ten, (p. 581).",
      possessed: "Healers, Paramedics, Medical Professionals, Survivalists, Midwives, Torturers, Witches, Euthanatos, Progenitors",
      specialty: "First Aid, Surgery, Nursing, BareBones Facilities, Improvised Techniques, Traditional Remedies, Alternative Medicine, Physical Deconstruction, Magickal Healing, Frankensteinian Techniques, “Live, Damn You – LIVE!”"
    },
    {
      label: "Occult",
      type: "Knowledges",
      val: [
        "• Dabbler: You think you know who Crowley was, and you have some New Age books on your shelves.",
        "•• Student: Some of the stuff you’ve heard or read is actually true.",
        "••• Scholar: You’ve got first-hand experience in the world of shadows.",
        "•••• Professor: Study and experience have taught you a respectable amount of genuine lore.",
        "••••• Master: Knowledgeable parties respect your accomplishments and consider you an authority in your own right.",
      ],
      description: "Aren’t mages occult by their very nature? Yes and no. This Knowledge represents a working comprehension of the mystic world as most people understand it; in short, then, such knowledge is often misleading, incomplete, or flat-out wrong. A decent rating in this Trait (three dots or higher) helps you sort the truth from the bullshit… but by then, you’ve also begun to understand how deep the occult rabbit-hole really goes. “Occult” means hidden for very good reasons, and even the most skillful occultists often don’t know nearly as much as they think they do. Being a mage does not automatically confer accurate understanding of other practices – in fact, it often muddies the waters even more! Still, this Ability grants you a decent overview of mystic practices, philosophies, lore, history, arcane cultures, and so-called secrets. Of course, they’re all secrets by definition… or at least that’s the theory, anyway.",
      possessed: "Moral Crusaders, Disaffected Teens, Metalheads, Goths, Pagans, New Agers, Parapsychologists, Fantasy Authors, RPG Designers, Students of Unhallowed Arts, Folks Who Spend Too Much Time on the Internet",
      specialty: "Neopaganism, Occult History, Conspiracy Theories, Secret Societies, New Age, Alternative Sciences, Mystic Lore, Folk Magic, Moral Panic, Urban Legends, Satanic Folklore, Pop-Culture Satanism, Actual Satanism, any specific occult discipline or field (Freemasonry, Voodoo, Stage Magic, etc.)"
    },
    {
      label: "Politics",
      type: "Knowledges",
      val: [
        "• Dabbler: Amateur power-broker.",
        "•• Student: Devotee of influence.",
        "••• Scholar: A skillful manipulator of civil institutions.",
        "•••• Professor: Magnificent bastard.",
        "••••• Master: Machiavelli’s ghost whispers in your ear.",
      ],
      description: "Political power can seem like magic. With a few words in the right person’s ear or a form filled out the proper way, you can make people disappear, change identities, incite scandals, and make or unmake kings. For certain mages – especially Technocrats, Hermetics, Ecstatics, and Virtual Adepts – such power is more effective than obvious spells; in a global era, the ability to throw lightning bolts pales in comparison to the clout to stage a riot ... or a coup. Literally the “art of cities,” this Knowledge helps your character work the reins of power – government agencies, law enforcement bureaus, celebrity culture, and so on. In game terms, this Trait combines a number of separate Knowledges from previous editions (Power-Brokering, Covert Culture, etc.) into a unified understanding of civil influence. As with several other Knowledges, you can use the Well-Skilled Craftsman option to purchase several specialties once you reach four dots in the Trait. Each specialty reflects a different sphere of influence. For coincidental Mind-based Effects, you could also use Politics as a focus instrument, assuming that you’re willing to let that Effect take a bit of time. A clever mage, for instance, could implant an otherwise ridiculous idea (“the President is a Muslim Nazi space alien”) in the minds of a few influential parties and then let that idea spread through political channels over time. This sort of thing cannot be done abruptly, though; political influence is a subtle tool, and vulgar Effects weaken its influence. Unlike stealth or violence, the Politics Trait demands a certain amount of patience and finesse. You can’t just charm a district attorney and then walk away from a murder rap – there are too many people and procedures involved  in law enforcement situations. Still, this Knowledge helps your character know who those people are and which strings can make them dance. Though it’s not a glamorous skill, it might be among the most potent tools in the modern world. For game systems involving social influence, see Social Occasions and Intrigue in Chapter Nine, (pp. 402-404). For magickal practices that employ political clout, see the Art of Desire and Dominion practices, the Management and Human Resources option, and their associated instruments, all in Chapter Ten, (pp. 573, 577, and 595).",
      possessed: "Politicians, Activists, Pundits, Lawyers, Journalists, Kingpins, Tycoons, Celebrities, Syndicate Ops, NWO Agents, Cult Gurus, Leaders of All Kinds",
      specialty: "Legal Codes, Law Enforcement, Gang Culture, Local Government, National Government, International Politics, Corporate Influence, Media Influence, Blogosphere, Loopholes, Dog Whistles, Radical Politics, Celebrity Media, Organized Crime, Power-Brokering, Specific Groups (U.S. Congress, News Corporation, Anonymous, the Mafia, etc.), Specific Cultures (Militia Movements, Neo-Communists, Conspiracy-Theorists, Jihadis, Anarchists), Specific Supernatural Groups (Traditions, Technocracy, Faerie Courts, Vampire Courts, etc.)"
    },
    {
      label: "Science",
      type: "Knowledges",
      val: [
        "• Dabbler: You’ve got a typical high school science education and understand the basic principles of your field.",
        "•• Student: You possess an advanced science education and understand the major theories, principles, and concepts of your preferred field.",
        "••• Scholar: You’ve dedicated yourself to scientific inquiry and possess a detailed knowledge of your chosen discipline.",
        "•••• Professor: Impressive scholarship, plus devoted study and research, make you an expert in your field and a master of generalized science.",
        "••••• Master: Very few peers can match your expertise, understanding, and respect within the field.",
      ],
      description: "A small word for vast ideas, science essentially means “to know.” In game terms, this Trait reflects an understanding of scientific principles, research, history, and applications. Every Technocrat or technomancer must have a few dots in this Ability, and most have quite a few of them. In the modern world, the majority of people have at least one dot in Science; even if you believe in God or magick, you can still accept science as a valid approach to reality. (Really? Yep – see the sidebar SCIENCE!!!) The Science Trait covers a rudimentary understanding of common principles, plus a given focus of specialization. High ratings reflect increasing knowledge about the various sciences, with deepening understanding of your specialization. As with Crafts, you define one specialty for your character’s primary Science and then purchase different specialties to reflect different sciences. Also, as with Crafts, your Storyteller may allow the Well-Skilled Craftsman option that lets you buy multiple Sciences for fewer points. This way, a well-trained scientist can master a variety of fields. For science- and tech-based practices see Alchemy, Art of Desire/ Hypereconomics, Cybernetics, Hypertech, RealityHacking and Weird Science under Practice: The Shape of Focus, Chapter Ten, (pp. 572-586).",
      possessed: "Teachers, Technicians, Would-Be Superheroes, Tech Geeks, Any Technocrat or Technomantic Mage",
      specialty: "Almost any hard scientific field. Soft or social sciences, like history or anthropology, fall under the Academics Knowledge instead."
    },
  ],
];
