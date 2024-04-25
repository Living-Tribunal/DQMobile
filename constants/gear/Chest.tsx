interface ChestItem {
    key: string;
    value: string;
}

const Chest: ChestItem[] =[
    {
        key: '1',
        value: 'Silk Robe\n------------\nMG: 1',
    },
    {
        key: '2',
        value: 'Goblin Leathers\n------------\nAR: 1',
    },
    {
        key: '3',
        value: 'Huntsman’s Jerkin\n------------\nAR: 1',
    },
    {
        key: '4',
        value: 'Studded Leather\n------------\nAR: 2',
    },
    {
        key: '5',
        value: 'Rain-soaked Robe\n------------\nMG: 1\nAR: 1',
    },
    {
        key: '6',
        value: 'Web-coated Jerkin\n------------\nBR: 1\nAR: 1\nSA: Webbed',
    },
    {
        key: '7',
        value: 'Spindlesilk Mantle\n------------\nMG: 1\nAR: 1\nSA: Spindlesilk Set',
    },
    {
        key: '8',
        value: 'Crusader’s Vestments\n------------\nBR: 1\nAR: 1\nSA: Heal',
    },
    {
        key: '9',
        value: 'Hellfire Robes\n------------\nSP: 1\nMG: 1\nSA: Trickster',
    },
    {
        key: '10',
        value: 'Duskleaf Doubloon\n------------\nSP: 1\nBR: 1\nSA: Charm',
    },
    {
        key: '11',
        value: 'Chitinous Carapace\n------------\nSP: 1\nAR: 2\nSA: Charm',
    },
    {
        key: '12',
        value: 'Patchwork Jerkin\n------------\nSP: 1\nBR: 1\nSA: Evade',
    },
    {
        key: '13',
        value: 'Gown of Midnight\n------------\nSP: 1\nMG: 2\nSA: Evade',
    },
    {
        key: '14',
        value: 'Sanguine Gown\n------------\nSP: 1\nMG: 2\nSA: Evade',
    },
    {
        key: '15',
        value: 'Cinder’s Gown (M)\n------------\nSP: 1\nMG: 3\nSA: Sear',
    },
    {
        key: '16',
        value: 'Scorched Tunic\n------------\nSP: 1\nAR: 2\nSA: Charm',
    },
    {
        key: '17',
        value: 'Nightwalker Tunic (R)\n------------\nSP: 1\nBR: 2\nSA: Nightwalker Set',
    },
    {
        key: '18',
        value: 'Vigilant Chestguard (W)\n------------\nSP: 1\nAR: 3',
    },
    {
        key: '19',
        value: 'Scaled Vest\n------------\nSP: 1\nMG: 2\nSA: Swamp Legs',
    },
    {
        key: '20',
        value: 'Ink-stained Vest\n------------\nSP: 2\nBR: 1',
    },
    {
        key: '21',
        value: 'Navigator’s Waistcoat\n------------\nSP: 2\nAR: 2\nSA: Charm',
    },
    {
        key: '22',
        value: 'Channeler’s Robes (M)\n------------\nMG: 3\nAR: 2\nSA: Focus',
    },
    {
        key: '23',
        value: 'Lincoln Green (W)\n------------\nSP: 2\nBR: 2\nSA: Charm',
    },
    {
        key: '24',
        value: 'Skulker’s Coat (R)\n------------\nSP: 1\nAR: 3\nSA: Evade',
    },
    {
        key: '25',
        value: 'Spellplate\n------------\nSP: 1\nAR: 3\nSA: Focus',
    },
    {
        key: '26',
        value: 'Stone Coat (W)\n------------\nSP: 2\nAR: 2\nSA: Might of Stone',
    },
    {
        key: '27',
        value: 'Breastplate of the Bull\n------------\nBR: 3\nAR: 2\nSA: Charge',
    },
    {
        key: '28',
        value: 'Hunter’s Hide\n------------\nSP: 1\nAR: 2\nSA: Immobilise',
    },
    {
        key: '29',
        value: 'The Cage (W)\n------------\nSP: 2\nAR: 3\nSA: Iron Will',
    },
    {
        key: '30',
        value: 'Dragonscale Mail (W)\n------------\nSP: 2\nAR: 3\nSA: Second Skin',
    },
    {
        key: '31',
        value: 'Raider’s Tunic (W)\n------------\nSP: 2\nBR: 4\nSA: Retaliation',
    },
    {
        key: '32',
        value: 'Slipstream Gown (M)\n------------\nSP: 2\nMG: 4\nSA: Overload',
    },
    {
        key: '33',
        value: 'Confessor’s Coat (R)\n------------\nSP: 2\nBR: 4\nSA: Fortitude',
    },
    {
        key: '34',
        value: 'Titan Plate\n------------\nSP: 1\nAR: 2\nSA: Fearless',
    },
    {
        key: '35',
        value: 'Deathgrip Robes\n------------\nSP: 2\nMG: 3\nSA: Corruption',
    },
    {
        key: '36',
        value: 'Lions Tabard\n------------\nSP: 1\nBR: 2\nSA: Fearless',
    },
    {
        key: '37',
        value: 'Skullplate\n------------\nSP: 2\nAR: 3\nSA: Dominate',
    },
    {
        key: '38',
        value: 'Funeral Gown\n------------\nSP: 1\nMG: 3\nSA: Charm',
    },
    {
        key: '39',
        value: 'Redguard’s Tabard\n------------\nSP: 2\nAR: 4\nSA: Iron Will',
    },
    {
        key: '40',
        value: 'Stalker’s Jerkin (R)\n------------\nSP: 2\nAR: 3\nSA: Evade',
    },
    {
        key: '41',
        value: 'Silleer’s Robe (M)\n------------\nSP: 2\nMG: 3\nSA: Curse',
    },
    {
        key: '42',
        value: 'Plate of the Fallen (W)\n------------\nSP: 2\nAR: 4\nSA: Finery of the Fallen',
    },
    {
        key: '43',
        value: 'Funeral Wraps\n------------\nSP: 2\nBR: 3\nSA: Bleed',
    },
    {
        key: '44',
        value: 'Pacemaker (W)\n------------\nSP: 2\nAR: 4\nSA: Kick Start',
    },
    {
        key: '45',
        value: 'Shadow Bindings (R)\n------------\nSP: 2\nBR: 3\nSA: Evade',
    },
    {
        key: '46',
        value: 'Dark Slayer Vest (R)\n------------\nSP: 2\nBR: 4\nSA: Dominate',
    },
    {
        key: '47',
        value: 'Decayer’s Wraps\n------------\nSP: 2\nBR: 3\nSA: Disease',
    },
    {
        key: '48',
        value: 'Beast’s Harness (W)\n------------\nSP: 2\nAR: 4\nSA: Knockdown',
    },
    {
        key: '49',
        value: 'Beast’s Backbone (R)\n------------\nSP: 2\nBR: 4\nSA: Savagery',
    },
    {
        key: '50',
        value: 'Bloodied Chestguard (W)\n------------\nSP: 2\nAR: 4\nSA: Bleed',
    }
];

export default Chest;
