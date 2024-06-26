interface leftHandItem {
    key: string;
    value: string;
}

const leftHand: leftHandItem[] =[
    {
        key: '1',
        value: 'Scaled defender\n-----------------\nBR: 2\nAR: 1'
    },
    {
        key: '2',
        value: 'Murder of crows\n-----------------\nSP: 1\nBR: 1'
    },
    {
        key: '3',
        value: 'Crock’s tooth\n-----------------\nBR: 1'
    },
    {
        key: '4',
        value: 'Rennie’s slicer\n-----------------\nSP: 1\nBR: 2\nSA: First cut'
    },
    {
        key: '5',
        value: 'Stone shield\n-----------------\nSP: 1\nAR: 2\nSA: Slam'
    },
    {
        key: '6',
        value: 'Essence of shadow\n-----------------\nSP: 1\nMG: 1\nSA: Slam'
    },
    {
        key: '7',
        value: 'Ghoul claw\n-----------------\nSP: 1\nBR: 1\nSA: Piercing'
    },
    {
        key: '8',
        value: 'Dented buckler\n-----------------\nSP: 1\nAR: 1'
    },
    {
        key: '9',
        value: 'Spider’s spinneret\n-----------------\nSP: 1\nMG: 1\nSA: Webbed'
    },
    {
        key: '10',
        value: 'Rage claw\n-----------------\nSP: 1\nBR: 1\nSA: Dominate'
    },
    {
        key: '11',
        value: 'Ardent edge\n-----------------\nSP: 1\nBR: 2\nSA: Parry'
    },
    {
        key: '12',
        value: 'Champion’s blade\n-----------------\nSP: 2\nBR: 1\nSA: Bleed'
    },
    {
        key: '13',
        value: 'Ridgeback (W)\n-----------------\nSP: 1\nAR: 2\nSA: Slam'
    },
    {
        key: '14',
        value: 'Razorback (W)\n-----------------\nSP: 2\nAR: 2\nSA: Slam'
    },
    {
        key: '15',
        value: 'Rockbiter\n-----------------\nSP: 1\nBR: 2\nSA: Piercing'
    },
    {
        key: '16',
        value: 'Shrink ray\n-----------------\nSP: 1\nMG: 1\nSA: Zapped!'
    },
    {
        key: '17',
        value: 'Book of black deeds (M)\n-----------------\nSP: 2\nMG: 2'
    },
    {
        key: '18',
        value: 'Vampire’s kiss\n-----------------\nSP: 1\nBR: 2\nSA: Leech'
    },
    {
        key: '19',
        value: 'Ivory (R + W)\n-----------------\nSP: 2\nBR: 2\nSA: Ebony and ivory'
    },
    {
        key: '20',
        value: 'T-Bone wand (M)\n-----------------\nSP: 1\nBR: 1\nSA: Bolt'
    },
    {
        key: '21',
        value: 'Wreekin net\n-----------------\nSP: 1\nBR: 2\nSA: Webbed'
    },
    {
        key: '22',
        value: 'Twin furies (R)\n-----------------\nSP: 1\nBR: 3'
    },
    {
        key: '23',
        value: 'Blackout\n-----------------\nSP: 2\nBR: 2\nSA: Stun'
    },
    {
        key: '24',
        value: 'Tome of deep thought (M)\n-----------------\nSP: 2\nMG: 3'
    },
    {
        key: '25',
        value: 'Deliverance (W)\n-----------------\nSP: 1\nBR: 3\nSA: Deep wound'
    },
    {
        key: '26',
        value: 'Witching hour (R)\n-----------------\nSP: 2\nBR: 3\nSA: Bulls eye'
    },
    {
        key: '27',
        value: 'Ebenezer’s spellbook (M)\n-----------------\nSP: 2\nMG: 2\nSA: Sear'
    },
    {
        key: '28',
        value: 'St Elmo’s fire\n-----------------\nSP: 2\nMG: 2\nSA: Lightning'
    },
    {
        key: '29',
        value: 'Vorpal sword (R)\n-----------------\nSP: 2\nBR: 3\nSA: Vanquish'
    },
    {
        key: '30',
        value: 'Dour claws (W)\n-----------------\nSP: 1\nBR: 4\nSA: Rake'
    },
    {
        key: '31',
        value: 'Tome of intellect (M)\n-----------------\nSP: 2\nMG: 2\nSA: Focus'
    },
    {
        key: '32',
        value: 'Stone crescent (W)\n-----------------\nSP: 2\nAR: 2\nSA: Slam'
    },
    {
        key: '33',
        value: 'Left hook\n-----------------\nSP: 1\nBR: 2\nSA: Immobilise'
    },
    {
        key: '34',
        value: 'Deathstrike\n-----------------\nSP: 1\nSP: 3\nSA: Bulls eye'
    },
    {
        key: '35',
        value: 'Sprig of corruption\n-----------------\nSP: 2\nMG: 3\nSA: Corruption'
    },
    {
        key: '36',
        value: 'Spine tooth (R)\n-----------------\nSP: 2\nBR: 2\nSA: Critical strike'
    },
    {
        key: '37',
        value: 'Hydra’s wing (W)\n-----------------\nSP: 2\nAR: 2\nSA: Deflect'
    },
    {
        key: '38',
        value: 'Hydra’s guard (W)\n-----------------\nSP: 2\nAR: 3\nSA: Deflect'
    },
    {
        key: '39',
        value: 'Dragonslayer\n-----------------\nSP: 2\nBR: 4\nSA: Deep wound'
    },
    {
        key: '40',
        value: 'Shadowblade\n-----------------\nSP: 2\nMG: 3\nSA: Retaliation'
    },
    {
        key: '41',
        value: 'Talanost’s wall (W)\n-----------------\nSP: 2\nAR: 5\nSA: Deflect'
    },
    {
        key: '42',
        value: 'Talanost’s reach (M)\n-----------------\nSP: 3\nMG: 4\nSA: Critical strike'
    },
    {
        key: '43',
        value: 'Tor shield\n-----------------\nSP: 2\nAR: 2\nSA: Deflect'
    },
    {
        key: '44',
        value: 'Spite\n-----------------\nSP: 2\nBR: 3\nSA: Venom'
    },
    {
        key: '45',
        value: 'Iron curtain (W)\n-----------------\nBR: 3\nAR: 2\nSA: Iron will'
    },
    {
        key: '46',
        value: 'Chains of binding (M)\n-----------------\nSP: 2\nMG: 3\nSA: Shackle'
    },
    {
        key: '47',
        value: 'Shallow grave\n-----------------\nSP: 2\nBR: 3\nSA: Savagery'
    },
    {
        key: '48',
        value: 'Raven eye\n-----------------\nSP: 2\nBR: 3\nSA: Bolt'
    },
    {
        key: '49',
        value: 'Witch’s finger\n-----------------\nSP: 2\nMG: 3\nSA: Curse'
    },
    {
        key: '50',
        value: 'Meat grinder\n-----------------\nSP: 2\nBR: 3\nSA: Pound'
    },
    {
        key: '51',
        value: 'Steel gear solid (W)\n-----------------\nSP: 2\nAR: 3\nSA: Retaliation'
    },
    {
        key: '52',
        value: 'Justice\n-----------------\nSP: 2\nBR: 3\nSA: Knockdown'
    },
    {
        key: '53',
        value: 'Twilight claw\n-----------------\nSP: 2\nBR: 3\nSA: Rake'
    },
    {
        key: '54',
        value: 'Black death (R)\n-----------------\nSP: 2\nBR: 4\nSA: Critical strike'
    },
    {
        key: '55',
        value: 'Grasping grimm (M)\n-----------------\nSP: 3\nMG: 3\nSA: Rake'
    },
    {
        key: '56',
        value: 'Grimoire of entropy (M)\n-----------------\nSP: 3\nMG: 3\nSA: Sear'
    },
    {
        key: '57',
        value: 'Dark tower (W)\n-----------------\nSP: 2\nAR: 4\nSA: Impale'
    },
    {
        key: '58',
        value: 'Thunder hammer (W)\n-----------------\nSP: 2\nBR: 4\nSA: Shock!'
    },
    {
        key: '59',
        value: 'Shield of bones (W)\n-----------------\nBR: 4\nAR: 2\nSA: Piercing'
    },
    {
        key: '60',
        value: 'Archstrike (M)\n-----------------\nSP: 3\nMG: 3\nSA: Dominate'
    },
    {
        key: '61',
        value: 'Spitfire (R)\n-----------------\nSP: 2\nBR: 4\nSA: Sear'
    },
    {
        key: '62',
        value: 'Ice splinter (R)\n-----------------\nSP: 2\nBR: 4\nSA: Piercing'
    },
    {
        key: '63',
        value: 'Fall of angels\n-----------------\nSP: 1\nBR: 5\nSA: Windblast'
    },
    {
        key: '64',
        value: 'Lens of blasting (W)\n-----------------\nSP: 2\nAR: 3\nSA: Lightning'
    },
    {
        key: '65',
        value: 'Torment\n-----------------\nSP: 2\nMG: 4\nSA: Disease'
    },
    {
        key: '66',
        value: 'Fang of Vengos (R)\n-----------------\nSP: 2\nBR: 4\nSA: Venom'
    },
    {
        key: '67',
        value: 'Parasitic plate (W)\n-----------------\nSP: 2\nAR: 4\nSA: Leech'
    },
    {
        key: '68',
        value: 'Lexicon of bones (M)\n-----------------\nSP: 2\nMG: 5\nSA: Haunt'
    },
    {
        key: '69',
        value: 'Wrecking ball (W)\n-----------------\nSP: 2\nBR: 5\nSA: Demolish'
    },
    {
        key: '70',
        value: 'Cortical bulb (M)\n-----------------\nSP: 3\nMG: 5\nSA: Brain drain'
    },
    {
        key: '71',
        value: 'Bone bow of grief (W)\n-----------------\nSP: 2\nBR: 5\nSA: Puncture'
    },
    {
        key: '72',
        value: 'Final solution (R)\n-----------------\nSP: 2\nBR: 5\nSA: Acid'
    }
];

export default leftHand;
