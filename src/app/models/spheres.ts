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
      // specialty: "Conjuration, Scrying, Gates, Warding, Teleportation",
      explaination: [`Basic spatial understanding allows a mage to sense things
in her immediate vicinity even if she can’t perceive them with
her normal senses. Using that perception, she can estimate the
distances between objects; intuitively find a direction (North,
South, East, West); notice hidden objects or characters; and
spot spatial instabilities – warps, anomalies, wormholes, etc.
– especially the ones caused by other Correspondence Effects.`,
`That mage can now extend her senses across intervening
space, sensing things in other locations. Such extensions,
however, leave minor ripples in space… the kind noticed by 
Rank 1 Correspondence. Fortunately, she can also thicken space
to cover her tracks; each success used in doing so deducts one
success from the roll of a character who’s trying to spy on her
or notice her sensory Effects. </br></br>
By adding Life or Matter to Rank 2 Correspondence, the
mage can grasp small items or organisms (housecat-sized or
smaller) and then pull them through tiny holes in space. This
lets her snatch business cards, guns, rabbits, and such from
another location, apparently pulling them out of nowhere.`,
`Now the mage can tear holes in space, large enough for her
to step through. These minor gates are small and temporary, but
they allow that character to step from one place to another, so
long as she’s alone and lightly encumbered. (Teleporting large
items, or while carrying heavy loads, demands Correspondence
4.) Scoping out the new location is a good idea, of course.
A close, familiar destination requires fewer successes than a
distant, unfamiliar one.</br></br>
Using the Co-locality Perceptions Effect, the mage can
also perceive several places at once. Those locations all appear
as ghosts overlapping each other, as if they’d been layered on
top of the closest location.</br></br>
Also, by combining Correspondence 3 with Forces, Life,
or Matter, the mage can move things around from a distance,
levitating, manipulating or teleporting them without physical`,
`Creating larger holes in space, the mage can now open
permanent gates between locations (10 or more successes);
isolate forces, spaces, objects, or people into their own tiny
realms (by combining Correspondence 4 with Forces, Life,
Mind, or Matter); and ward certain locations against specific
Patterns (again, combining Forces, Life, Mind, or Matter with
Correspondence) or Resonance energies (combining this Sphere
with Prime 4). This warding effect can impede or even block the
forbidden elements from crossing into, or out of, the protected
space. (For extensive details about wards, see the sourcebook
How Do You DO That?)</br></br>
Using the Co-location Effect, that mage can also appear
in several different places at once. To function, however, she
must add Mind 1 to that Effect. Each self mirrors the original’s
actions unless she also adds Life 2 to that Effect, granting
independence to every self.`,
`Distance and dimensions become child’s play to a mage
at this Rank. She can distort space; alter sizes and stretch or
compress objects (Matter), bodies (Life), or forces (Forces);
connect different Patterns to one another across intervening
space; or even superimpose places or objects on top of one
another (extremely vulgar). Combining this Rank with Life 3,
the mage may also expand her senses to perceive many different
places at once. `]
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
      // specialty: "Fate, Fortune, Decay, Order, Chaos, Necromancy"
      explaination: [
        `Basic Entropic understanding allows a mage to see the
currents of probability, spot flaws in Patterns, and note the
subtle yet telling details in a person’s speech and behavior that
suggest whether or not she’s telling what she believes to be
the truth. Although he cannot yet control such phenomena,
the mage can predict dice throws, card draws, and other
apparently random events; spot weak spots in objects, people,
or arguments; and use those imperfect yet profound insights
to his advantage. `,
        `Now the mage can control the factors he could only
sense before. Pulling the strings of apparently random events,
he can influence activities and results – directing the fall of
dice or cards, repeatedly hitting weak spots, and directing
people and things toward a conclusion of his choice. Of
course, it’s easier to control small events (the winner of
a horse race) than large ones (causing a six-car pileup). In
game terms, large alterations demand more successes than
small ones do.`,
        `Things eventually break down. At this Rank, the mage can
control the speed at which material objects fail or decay. That’s
easier to do with complex machines (cars, computers) than it
is with simple ones (walls, stones) – after all, more things can
go wrong with complicated things.
</br></br>
At this Rank, the mage can also start controlling the fate
and fortune of objects and people, giving them good or bad
luck by controlling the probability of events around them.
Again, large feats demand more successes than smaller ones. `,
        `At this Rank, the mage assumes the awesome power of
blessing, cursing, and conferring outright health or decay. By
influencing the flow of entropy within a living body, that mage
can grant outstanding vitality to, or inflict sudden disease upon,
his subject. Such influence, as noted above, inflicts or heals
aggravated damage and may grant long-term luck or misfortune.
(Storyteller’s option as to how this manifests.)`,
        `The most esoteric applications of Entropy allow
the mage to alter ideas, strengthening or breaking down
concepts. Although he does not affect the actual workings of
consciousness, he can cause synapses to misfire (thus confusing
perceptions and mental processing, inflicting penalties on
an enemy’s dice rolls), bind someone to an oath, or degrade
the patterns of thought. By doing so, that Entropic Master
can craft, perpetrate, reinforce, and undermine arguments,
beliefs, and even memories.
</br></br>
To do such things, the Master merely speaks to, or glances
at, the subject of his attention. Chaos Masters can scramble
someone’s perceptions with a few weird utterances, and Masters
of Order can present arguments with apparently perfect logic.
By offering compelling statements, the Master can create or
destroy memes (see p. 594), thus influencing whole patterns of
belief. An oath, meanwhile, ties the subject’s fate to her loyalty;
if she breaks the oath, then her luck goes really, really bad.
</br></br>
In game terms, such feats demand a certain number of
successes. Inspiring a whim requires only one or two successes,
sparking a fancy takes three, setting or undermining a conviction
takes four or five successes, and setting up obsessions demands
five successes or more. Such activities are usually coincidental
and are typically rolled against a difficulty of the subject’s
Willpower +3 (threshold rules apply for Willpowers of 8, 9,
or 10) if that character tries to resist the Master’s influence.`,
      ]
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
      // specialty: "Alchemy, Motion, Elements (any or all), Technology, Physics, Weather, Weaponry"
      explaination: [
        `Unlocking basic perceptions of the elements, a Forcessavvy mage can sense the flow of forces in her environment.
She can boost her perceptions into the infrared or ultraviolet
spectrums, notice electrons, see in the dark, view X-rays, discern
the flow of sound or radio waves, spot kinetic energies, and
hear frequencies beyond the normal human range. `,
        `Although she cannot conjure energies just yet, the mage
may now alter the flow of existing forces. Sound can be muted
or amplified; shadows can be gathered, shaped, or dispelled.
The mage can warp light to make things invisible, change their
colors by altering the spectrum of localized light, or render them
silent by bending sound waves in their vicinity. With a wave of
her hand, she can disrupt electrical currents; flare flames; or
direct the course of winds, momentum, or gravity.
</br></br>
Combining this Rank with other Spheres, that mage
could also make an object (Matter) or organism (Life) attract
or repel forces. Thus, she could weave minor protection spells
or force-fields… or, conversely, turn that target into a magnet
(perhaps literally) for the forces in question. 
Despite its powers, this Rank is limited in scale. Assume
that the mage can command energies around a single humansized character or within a small area (20’ or less). To affect a
larger area, you need a higher Rank in Forces.`,
        `Now the mage can alter and invoke the energies she could
only touch before. By adding Prime 2, she may conjure winds,
fire, electricity, gravitational wells, and so forth. Combining
this Rank with Life or Matter, she can transform people into
electricity (Life 5/ Forces 3); change water into air (Forces 3/
Matter 3), or attach elemental force to material forms – making
them fly, pinning them to the ground, and having other, similar
effects (generally with Life or Matter 3). And by adding an
ephemeral Sphere to this Rank, she might erode or enhance
energies (Entropy 3); manifest thoughts into energies (Mind 3);
transmute spirit-stuff into physical energies (Spirit 3); or set
triggers for energy fluctuations at some later interval (Time 4)
</br></br>
At this Rank, the scale of effect grows larger, now
encompassing several dozen yards or a handful of characters`,
        `Larger Effects become possible. Our mage may now use the
lower-Rank Effects over larger areas – a mile or more – to change
weather patterns; conjure darkness; drop or raise temperatures;
protect locations… or destroy them; and otherwise employ the
previous levels on a much greater scale. For obvious reasons,
such Effects tend to be vulgar and demand many successes to
achieve.`,
        `With godlike power, a Forces Master works her Will upon
vast areas. She can conjure tornados on a clear day, calm tides,
and ignite the very air into a firestorm. Such mages earn the
title “Nuke,” though few of them survive long enough to enjoy
it. It’s easier to invoke such forces under the right conditions,
of course – a cold snap comes more easily in winter than in
summer – and such radical alterations have repercussions that
often outlast the original Effect. In game terms, massive Forces
spells should disrupt the weather and leave massive Resonance
echoes behind.`,
      ]
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
      // specialty: "Transformation, Shapeshifting, Healing, Improvement, Creation, Cloning, Evolution, Injury"
      explaination: [
        `Basic Life knowledge allows a person to read the presence
and health of nearby life-forms. With such knowledge, the
mage can discern a living being’s age, sex, and overall health.
By combining those perceptions with other Spheres, he can
also sense distant organisms (Correspondence 2), guess their
potential for sickness or misfortune (Entropy 1), perceive them
through past or future states (Time 2), or read the streams of
Quintessence that bind them to the universe (Prime 1). `,
        `Simple organisms – viruses, mollusks, insects, plants, etc.
– become clay in the mage’s hands. He learns to adjust their
Patterns (giving a crab wings, for example), and heal or kill
them. Although he can’t yet transmute them into other states
of being, he can cause flowers to bloom or wither, help trees
bear fruit, and so on. Focusing on his own Pattern, he can also
heal himself or perform small alterations (hair color, skin tone,
height, weight, and so on) to his basic form. `,
        `Advanced understanding allows the mage to radically
alter simple organisms (turning a tree inside-out); transform
one into another (changing fruit into insects); or – with Prime 2 – conjure
them from raw energy. 
</br></br>
Working with his own Pattern, that mage can work substantial alterations
on himself, growing gills, claws, armor and so forth. He remains essentially
human, but begins to master the definition of “human.” Meanwhile, he
also gains the ability to heal damage to other complex organisms, put
them to sleep, or inflict harm upon their living Pattern forms. `,
        `At this Rank, the mage may enact radical changes on any complex
organism – people, dogs, horses, and so forth. He can uplift other
species with new limbs, opposable thumbs, increased brain capacity,
etc., so long as he doesn’t change their intrinsic nature. 
</br></br>
Working with his own Pattern, that mage can transform himself
into other life-forms of similar size and mass; he could become a Great
Dane, for example, but not a hummingbird. Special abilities of that
form (flight, water breathing, and the like) do not carry over, however,
unless he builds them into that new form with additional Life Effects,
and the new body might require an adjustment period before the mind
and reflexes reflect the new form. `,
        `Now the Master of Life may adopt any form he wishes to achieve
and may transform other complex organisms the same way. His
expertise allows him to make permanent changes to life-Patterns, create
complex life-forms from energy (with Prime 2), give them consciousness
(with Mind 5), transmute them into other elements (Forces or Matter 3)
or raw energy (Prime 5), radically age or de-age them (Entropy
4 or Time 3), or instill them with spirits (Spirit 3 or 5).
Without such measures, however, his creations remain
mindless, soulless sacks of life – alive, but nothing
more.`,
      ]
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
      // specialty: "Transmutation, Shaping, Conjuration, Refinement, Complex Patterns"
      explaination: [
        `A Primary understanding of Matter allows the initiate
to perceive the intrinsic properties of base materials – their
underlying structure, innate properties, and integral stability
or lack thereof. With that knowledge, she can view the
material composition of an object, note its less-obvious
structures, find its hidden layers or – when combining this
perception with Entropy – spot its weak points. Combined
with Life, this Sphere detects implants, enhancements, and
other integrations of living tissue and inert materials. 
`,
        `With advanced knowledge, the mage can transmute
one substance into another, so long as she doesn’t alter its
essential shape, temperature, or basic state (gas, liquid, solid).
Depending upon that mage’s practice, she might reshape
lead into gold through alchemy, wood into stone through a
hyperpetrification process, or water into wine (and, with Life
3, wine into blood) through a sacred miracle. Rare and/ or
complex materials are more difficult to fabricate than simple
ones; it’s easier to turn stone into iron, for example, than
into gold. To reflect that challenge, such refinement requires
a greater number of successes than a transmutation into a
common material. 
</br></br>
(On a related note, the mage cannot yet fabricate
radioactive materials. Such elements merge their essence
into the Sphere of Forces, and thus demand a greater level
of expertise.) 
</br></br>
When combined with other Spheres, this basic level
of understanding allows a mage to conjure base materials
from energy or dissolve them into Quintessence (Prime 2),
transmute matter into living tissue (Life 4 or higher), move
an object through space (Correspondence 2 or higher) or
time (Time 3 or higher), change ephemera into matter and
matter into ephemera, or awaken the slumbering spirit within
material objects (Spirit 3 or higher). In all cases, Matter 2
allows the mage to work with simple, homogenous, non-living
substances. Complex mixtures of various elements usually
require Rank 3 or higher, although simple combinations
(like those found in bread, milk, paper, or gunpowder) are
possible if the player rolls plenty of successes.`,
        `At this Rank, the mage can alter the shape of materials in
whatever ways she desires, and she can temporarily transform
their essential state into a different one – steel, for example,
into fog or water into glass. (Permanent changes require
Matter 5.) That crafter may change an item’s density, fuse
broken pieces together, or rip solid ones apart. 
</br></br>
By mixing Matter 3 with other Spheres, the mage can
join inert matter with living tissue, disintegrate it into dust,
shift objects with the power of thought, or otherwise perform
amazing transformations upon apparently solid materials.`,
        `Complex and radical transformations now become possible,
especially with the addition of other Spheres. Pumpkins can
be changed into carriages (Life 2), people into thrones (Life 5),
cars into robots (combinations of Forces and Prime), or thin
air into banquets, so long as the mage doesn’t mind racking
up a little (or a lot…) of Paradox. Different principles can be
combined in complicated ways, creating cybernetic machines
or electrified gold. Complicated devices (guns, cars, computers)
may be conjured out of empty space if the mage understands
the principles behind such things (in game terms, possesses
the proper Abilities). As usual, though, complicated creations
demand extended rituals and many successes. `,
        `With Mastery, the crafter can create substances that
transcend the limitations of scientific possibility, conjure
materials unknown to Earthly reality, or share the deadly legacies
of radioactive matter. Such Masters can shape armor out of air
(with Prime 2), turn vampires into lawn furniture (Life 5), or
melt steel with a thought (Mind 3). Again, such deeds remain
incredibly vulgar, but they recall the godlike feats of legendry.`,
      ]
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
      // specialty: "Communication, Illusion, Emotion, Social Programming, Self-Empowerment, Astral Travel, Mind-Shielding, Psychodynamics, Psychic Combat"
      explaination: [
        `With basic mental magick, the mage learns to sense the
emotions and surface impulses of other people. Although he
cannot read specific thoughts, he’s able to perceive psychic
impressions about a person or (with Matter 1) a place or object.
Through this perception, he can guess at the nature of weak
Resonance signatures and read the stronger ones outright.
Even without Resonance, that mage can scan auras, note mood
shifts, discern truth from lies, or grasp someone’s overall state
of mind by way of a successful Arete roll. 
</br></br>
Meanwhile, the mage also learns to shield his own mind
from the thoughts and emotions of other people, constructing
mental barriers around his aura, emotions, and consciousness.
Each success on a coincidental Arete roll removes one success
from any other character’s attempt to read those psychic
elements. 
</br></br>
On a related note, he also learns how to multitask and
absorb data with startling acuity. Each success he rolls allows him
to either consider an additional subject or speed the processing
time that a normal person might require. For scene or two, he
can even raise one of his Mental Traits by one dot per success,
thanks to a Mind Empowerment Effect that concentrates his
mental faculties. `,
        `Now the mage begins to skim the contents of unshielded
minds, discern emotional states, read memories that have been
left behind on objects or places, and project single words or
emotional impulses to other people. The simpler the emotional
content, the easier it is to send or read; a flash of rage, for
instance, is easy to project or receive, but the complex stew of
reflective melancholy presents a challenge to inexperienced
Mind-mages. (Game-wise, such complex feats demand more
successes than a simple feat does.) `,
        `With increasing skill, the mage learns to link minds,
forge telepathic communications, read or influence another
person’s thoughts, craft mental illusions, enter someone’s
dreams and explore dream Realms, and blast psychic assaults
into an unwilling rival’s consciousness. At this stage, Mind
attacks can inflict painful – though rarely fatal – damage.
Combined with Correspondence, Forces, Matter, or Life, he
is able to employ telekinesis, pyrokinetics, and psychophysical
assault, influencing objects, elements, or people with the power
of his mind. Unlike most other Effects, this sort of thing is
not coincidental, although such talents do have a place within
popular culture. `,
        `The fearsome power of Black Suits and psychic assailants
allows the mage to command another person’s actions as well as
her thoughts, alter her perceptions or mental state, and project
his own mind from his physical form. At this Rank, a mage can
change someone’s memories, drive her crazy (or sane), overlay
her aura with a desired impression, and set up posthypnotic
suggestions and commands. (See Social Conditioning and
Reprogramming, pp. 605-607.) And by using internal rather
than external powers, he can also project his astral form, as
detailed in Chapter Nine, pp. 476-478.`,
        `A true Mind Master commands not only his own conscious
but other minds as well. He may alter someone’s mind forever,
raising (or lowering) her Traits, rewriting her personality,
changing her Nature Trait, or (with Life 4) switching her mind
into another body. He can do the same things to his own mind
as well, and he can untether that mind to explore the deeper
reaches of astral space for hours or even days at a time. His greatest
power, though, is the ability to fabricate entire consciousnesses,
creating minds where no mind had been before. `,
      ]
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
      // specialty: "Resonance, Artifice, Perceptions, Channeling, Creation, Destruction"
      explaination: [
        `A beginning study of Prime allows the mage to perceive and
channel Quintessence from Nodes, Tass, Wonders, and magickal
Effects. She may spot energetic ebbs and flows, can sense and at
least try to read Resonance and Synergy signatures, and could
also absorb Quintessence into her personal Pattern. Mages
without at least one dot in Prime cannot absorb Quintessence
beyond their Avatar Background rating. A Prime-skilled mage,
however, may do so. 
</br></br>
When infusing her Quintessence into an object, that
mage may also consecrate the object with her personal energy.
When she shapeshifts, steps sideways, or otherwise alters her
Pattern’s metaphysical nature, that consecrated object will then
change with her. In the process, it also picks up her personal
Resonance… which, because it both identifies her and becomes
essentially connected to her, is not always a good thing. `,
        `Attaining a degree of control over Prime energies, the mage
may divert Quintessence into new or existing forms. Combined
with other Spheres, this allows that mage to create new Forces,
Life, or Matter Patterns (conjuring them from thin air), and to
infuse existing items with Primal Force to strengthen them or
enhance their protective or destructive power. 
</br></br>
Weapons or attacks infused with Quintessence through
Prime 2 Effects may hurt spirits or inflict aggravated damage,
and substances infused the same way may protect against such
harm. (See Chapter Nine’s Combat section for details.) On a
related note, she may also – with Life 2 for simple organisms,
or Life 3 for complex ones – consecrate a living thing at this
Rank, as if that life-form were an object described above. 
</br></br>
Through similar applications of energy, the mage can also
conjure a simple Body of Light: an idealized self projected
from ephemeral energy. Although this Body of Light has no
substance or special properties (unlike the astral form described
in Chapter Nine, p. 477), it presents a glowing holograph of
the mage herself. `,
        `By tapping into the flow of Quintessence around her, the
Prime-skilled mage can draw both free and raw Quintessence
from Nodes, Junctures (special times), and Tass (solidified
Quintessence)… and she may also channel that energy into new
and existing Patterns as well. With such powers, she could (with
Life 3) enchant a living thing so that it could inflict or endure
aggravated damage; inflict aggravated damage by shaking up 
that organism’s life force; pull small amounts of life force from
a living sacrifice or (with Matter 2) from inert objects; instill
Quintessence into a vessel called a Periapt; or – with other
Spheres – craft temporary Talismans or Devices by infusing
them with Primal Force. (Permanent enchantments require
Prime 4 – see Crafting Wonders on p. 508, and Quintessence
Amounts on p. 507.)
</br></br>
In desperate circumstances, a Prime-schooled mage can also
create temporary weapons out of pure concentrated energy –
blasts of Quintessence or swords of light. Such weapons inflict
aggravated damage (as per the Base Damage or Duration chart)
and cost one point of Quintessence per use… or, for weapons
that last for a length of time, one point per turn. When the
mage runs of out Quintessence, the weapon disappears. Unless
channeled through energy-guns or conjured as miracles among
the faithful, such attacks are inevitably vulgar. `,
        `The terrible power of draining Quintessence from objects
or forces (though not yet from living things) can disintegrate
those targets, consume them in Primal flames, or decay them
almost instantly. Reversing that flow, the mage can craft objects
that cannot be broken, or bond organic and inorganic materials
together to create cybernetic implants, nanotech, and other
Wonders. At this stage, she is able to enchant items permanently
and draw Quintessence from the energetic Wellsprings of exciting
events. By infusing her personal Quintessence into a Periapt,
the mage might use Matter 4 to craft a Soulgem: a portable vessel
that’s filled with her own Resonance and energy. `,
        `A Prime Master can draw Quintessence from anywhere,
at any time, and channel it into other vessels as well. A dark,
vulgar aspect of that power allows her to obliterate a living
being by consuming all of his life force, whereas the reverse
of that power infuses him with life force so strong that he’s
essentially blessed. Combining that ability with Life 5, she
may turn complex organisms into Soulflowers: living Periapts
who become walking batteries of boosted Quintessence. Such
Mastery also allows the mage to create Nodes in significant
places, and to nullify Paradox as described under Nullifying
Paradox, p. 549.`,
      ]
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
      // specialty: "Umbral Travel, Spirit Dealings, Gauntlet Manipulation, Primal Spirits, Tech Spirits, Celestials, Infernals, Possession"
      explaination: [
        `To most of humanity, the spirit world remains invisible.
Not to a mage who knows the Spirit Sphere. Although he’ll be
most attuned to spirits with Resonance similar to his own, that
mage can read the local Gauntlet’s thickness, discern auras,
sense spirits of all types, peek into the Penumbra through the
Vidare (see Chapters Three and Four), and determine whether
or not a material object has a spiritual component (as mystic
Fetishes do). 
</br></br>
Combined with other Spheres, that mage can spot forces,
places, or items with unusual ties to the spirit world, such as
Awakened objects, elemental spirits, possessed organisms,
Shallowings, Nodes, and so forth. 
`,
        `Perception moves to contact. The Spirit-savvy mage can
now reach through the Gauntlet for a turn or two; call across
the Gauntlet; speak to spirit entities, or touch them for a brief
moment; and thin or thicken the local Gauntlet. In the latter
case, each success lowers or raises the Gauntlet rating by +1
for each success rolled. (Four successes would raise or lower it
by four levels, for example.) That said, a human mage cannot
lower the Gauntlet to less than 4 within the mortal world. 
</br></br>
By adding other Spheres, that mage could project thoughts
across the barrier (Mind 4 or 5); stir up elemental disturbances
within the Otherworlds (Forces 2 or higher); imbue material
objects with ephemeral power (Matter 2); drain Essence from a
spirit (Prime 3); or help other living creatures sense or contact
the spirit realms (Life 2). `,
        `Now the mage can cross over, transmuting his living
tissue to ephemera. He may carry a few material possessions,
although transmuting them as well raises both the difficulty
of the roll and the number of successes required for the trip.
(Normal clothing and items raise both factors by +1; bulky
clothing and items raise them by +2.) That traveler must step
sideways on his own; bringing large items or other people
across demands a higher Spirit Rank. Meanwhile, a combined
</br></br>
Spirit 3/ Mind 2 Effect allows the mage to read Resonance,
Synergy, and other spiritual energies (Essence, a spirit’s place
within a hierarchy, etc.). 
</br></br>
At this Rank, a mortal mage can also harm an Umbral
entity as if he was using Life 3 against that entity. While Spirit
2 allows the mage to touch that entity, Spirit 3 lets him actually
damage its ephemeral Pattern’s integrity the way that Life 3
damages a physical creature’s form. 
</br></br>
By combining this Rank with Matter 3 and Prime 2, the
mage can also create short-lived objects from ephemera; such
creations must be constructed as if they were material things,
and they fade away at the end of the Effect’s duration.
Finally, this Rank helps the mage rouse the slumbering
spirits within objects or places, or else put active spirits to
sleep. (See Awakening Substances in Chapter Nine, p. 443). 
`,
        `As the mage approaches Mastery, he can tear Gateways in
the Gauntlet, allowing groups or large objects to pass through…
or close such breaches, too. Both applications, of course, are
deeply vulgar.
</br></br>
At this Rank, the mage may also compel spirits to appear, bind
them into Fetish objects, or tie them to certain spots or prisons.
For obvious reasons, such bondage is risky, especially if the spirit
is powerful. A brave or foolish Spirit mage can even turn himself
into a temporary Fetish, channeling a spirit entity into his mortal
body; in such cases, he loses his ability to use true magick, but
he may employ the capabilities of the spirit inside him. On the
flipside, he can also exorcise a spirit that has possessed a mortal
host. In all cases, the mage enters a series of resisted rolls against
the spirit, pitting his Willpower against that spirit’s own. 
`,
        `The Spirit Master is now able to command ephemera itself,
creating, challenging, and destroying spirit matter as he Wills.
With such power, he may craft Realms, imbue or drain a spirit
of Essence, instill a soul within an empty shell of Life or Matter,
and bestow the awful sentence of Gilgul – the destruction of
a mage’s Avatar. Such powers are always vulgar and feature
devastating consequences even when the mage succeeds.
</br></br>
This power also allows the mage to break the Dreamshell
and venture beyond the Horizons, wandering into the Deepest
of Umbrae. Such tasks demand at least 10 successes, but a
courageous Master can travel as far as his soul wants to go.`,
      ]
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
    
      // specialty: "Perceptions, Prophecy, Triggers, Time Travel, Temporal Control"
      explaination: [
        `Temporal understanding begins with the mage’s own
perceptions of time. At this stage, she develops a precise
internal clock and can spot the temporal ripples left behind
by (or, in many cases, developing ahead of) Time Effects. Other
phenomena, too, leave disturbances in the time-stream, and
the mage can notice them as well. Combined with additional
Spheres, this Rank allows the mage to detect the influence of
the Time Sphere on other spells or Patterns too. `,
        `Now the mage can look forward or backward through
time. Although those impressions are fleeting, hazy, not entirely
accurate, and bound by the limitations of that time and place
(that is, what a bystander in that specific time and location
could sense under the circumstances), they allow the Time-seer
to catch glimpses of the past or future.</br></br>
</br></br>
By itself, this Effect allows the mage to see in her present
location only. By combining Past/ Future Sight with other
Spheres, however, she could read the probable past or future
impressions of objects or places (Matter), living things (Life),
and alternate locations (Correspondence). Entropy 2 even 
allows her to glimpse multiple futures and pick out the one
most likely to occur. 
</br></br>
Reversing her powers of perception, that same mage can
thicken the walls of time, which makes other Time Effects more
difficult. Each success she rolls deducts one success from the
attempts of other Time-savvy characters. `,
        `Speeding or slowing her relationship with time, the
mage can now gain multiple actions, slow other characters or
phenomena, or rewind small snatches of time. In game terms,
every two successes allow the character to take one additional
action that does not involve casting magick (only one Arete roll
may be made per turn); or else slow another character, object,
or even herself down by one increment per success. (Four
successes, for example, would slow a person down to a quarter
of his normal speed.) 
</br></br>
By rewinding time, the mage can also move her immdiate
surroundings back one turn for every two successes – an Effect
that pulls her out of the normal flow of time and allows her
to retcon an action or two. (See above.) 
</br></br>
Combining this Rank with other Spheres, the mage can
affect other Patterns (Forces, Life, or Matter 2), cast Effects
across distance and time (Correspondence 3), move back in 
time while recalling events from the future she just left (Life 3/
Mind 1), or even invoke multiple probabilities (Entropy 3).
Again, such attempts are Paradox magnets with awful longterm consequences. `,
        `Now the mage learns to withdraw herself from the normal
flow of time, hold Effects until they get triggered by events,
or – by adding in Correspondence, Forces, Life, Matter, and/
or Spirit – capture other beings or phenomena in bubbles of
time. Thus, a mighty (vulgar) Time/ Forces/ Entropy Effect
could capture a tornado and shunt it off into no-time space
until some trigger sets it free. At this level of expertise, the mage
can also set a temporal anchor point for herself for when she
dares to travel through time at Rank 5.`,
        `The “Dr. Who Effect” allows the mage to exist outside of
time; immunize people, places or things from time’s passage;
or travel forward or backward through time. Such godlike
feats… feats that often cause a mage to become forever lost
to history… are often best left to the Storyteller’s discretion.
Even for Masters, Time travel is a mysterious and maddeningly
imprecise art. For extensive details about such things, see the
sourcebook How Do You DO That? `,
      ]
    },
  ],
];
