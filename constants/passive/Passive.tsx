interface AbilitiesItems {
    key: string;
    value: string;
}

const Abilities: AbilitiesItems[] =[
    
    {
        key: "1",
        value: "Acid (mo):\n---------\n Add 1 to the result of each die you roll for your damage score, for the duration of the combat. (Note: if you have multiple items with acid, you can still only add 1 to the result.)"
    },
    {
        key: "2",
        value: "Adrenaline (sp):\n---------\n Use this ability to increase your speed by 2 for two combat rounds."
    },
    {
        key: "3",
        value: "Ambidextrous (pa):\n---------\n You can equip main-hand swords in your left hand, and vice versa."
    },
    {
        key: "4",
        value: "Avenging Spirit (co):\n---------\n When you take health damage from your opponent’s damage score/damage dice, you can inflict damage back to them equal to your armour. This ability ignores your opponent’s armour. (Note: you cannot use modifier abilities to increase this damage.)"
    },
    {
        key: "5",
        value: "Backfire (co):\n---------\n Instead of rolling for a damage score when you have won a round, you can use the backfire ability. This automatically inflicts 3 damage dice to your opponent, but it also does 2 damage dice to your hero, ignoring armour."
    },
    {
        key: "6",
        value: "Banshee Wail (co):\n---------\n Use this ability to stop your opponent rolling for damage when they have won a round."
    },
    {
        key: "7",
        value: "Barbs (pa):\n---------\n At the end of every combat round, you automatically inflict 1 damage to all of your opponents. This ability ignores armour."
    },
    {
        key: "8",
        value: "Beep! Beep! (pa):\n---------\n Whenever you discover gold on your travels, you may automatically double the amount. Gold that is given to you by another character (for example, as a reward) cannot be doubled."
    },
    {
        key: "9",
        value: "Black Rain (co):\n---------\n (Requires a bow in the left hand). Instead of rolling for a damage score after winning a round, you can use black rain to shower your enemies with dark magic. Roll 1 damage die and apply the result to each of your opponents, ignoring their armour."
    },
    {
        key: "10",
        value: "Bleed (pa):\n---------\n If your damage dice/damage score causes health damage to your opponent, they continue to take a further point of damage at the end of each combat round. This damage ignores armour."
    },
    {
        key: "11",
        value: "Blood Rage (mo):\n---------\n If you win two consecutive combat rounds and cause health damage in both rounds, you automatically go into a blood rage. This increases your brawn by 2 for the remainder of the combat."
    },
    {
        key: "12",
        value: "Bolt (co):\n---------\n Instead of rolling for damage, you can ‘charge up’ your wand. When you win your next round of combat you can then release the charge. This allows you to inflict 3 damage dice to one opponent, ignoring their armour."
    },
    {
        key: "13",
        value: "Brain Drain (mo):\n---------\n You may spend magic to increase your damage score. For each magic point you spend, you may increase your damage score by 1. You can spend up to a maximum of 5 magic points (increasing your damage score by 5). Your magic is restored at the end of the combat."
    },
    {
        key: "14",
        value: "Bright Shield (mo):\n---------\n Use this ability to raise your armour by 4 for one combat round."
    },
    {
        key: "15",
        value: "Brutality (co):\n---------\n This ability stops your opponent from rolling for damage, after they have won a round, and automatically inflicts 2 damage dice, ignoring armour, to your opponent."
    },
    {
        key: "16",
        value: "Bull’s Eye (mo):\n---------\n You may fire an arrow/bullet at your opponent before combat starts, automatically inflicting 1 damage die, ignoring armour. Bull’s eye will also inflict any harmful passive abilities you have, such as venom and bleed. (Note: An assassin using first strike cannot use this ability.)"
    },
    {
        key: "17",
        value: "Burn (pa):\n---------\n All opponents who have suffered health damage from ignite automatically lose 1 health at the end of every combat round. This ability ignores armour."
    },
    {
        key: "18",
        value: "Cat’s Speed (sp):\n---------\n This ability allows you to roll an extra die to determine your attack speed for one round of combat."
    },
    {
        key: "19",
        value: "Cauterise (mo):\n---------\n This ability can be used anytime in combat to remove all venom, bleed and disease effects that your hero is currently inflicted with."
    },
    {
        key: "20",
        value: "Charge (sp):\n---------\n In the first round of combat, you may increase your speed by 2."
    },
    {
        key: "21",
        value: "Charm (mo):\n---------\n You may re-roll one of your hero’s die anytime during a combat. You must accept the result of the second roll. If you have multiple items with the charm ability, each one gives you a re-roll."
    },
    {
        key: "22",
        value: "Chill Touch (sp):\n---------\n Use this ability to reduce your opponent’s speed by 2 for one combat round."
    },
    {
        key: "23",
        value: "Cleansing Light (pa):\n---------\n Automatically heals the hero for 2 health at the end of each combat round."
    },
    {
        key: "24",
        value: "Cleave (co):\n---------\n Instead of rolling for a damage score after winning a round, you can use cleave. Roll 1 damage die and apply the result to each of your opponents, ignoring their armour."
    },
    {
        key: "25",
        value: "Click Your Heels (sp):\n---------\n Raise your speed by 2 for one combat round."
    },
    {
        key: "26",
        value: "Command (co):\n---------\n When an opponent wins a combat round, use the command power to instantly halt their attack, allowing you to roll for damage instead, as if you had won the combat round."
    },
    {
        key: "27",
        value: "Consume (mo):\n---------\n Reduce the result of each of your opponent’s die results for attack speed by 1 (to a minimum of 1)."
    },
    {
        key: "28",
        value: "Corruption (co):\n---------\n If your damage score causes health damage to your opponent, you can inflict corruption on them, reducing either their brawn or magic by 2 points for the remainder of the combat."
    },
    {
        key: "29",
        value: "Courage (sp):\n---------\n Use this ability to increase your speed by 4 for one combat round."
    },
    {
        key: "30",
        value: "Cripple (co):\n---------\n If your damage score causes health damage to your opponent, you can also cripple them. This immediately lowers their speed score by 1 for the next three combat rounds."
    },
    {
        key: "31",
        value: "Critical Strike (mo):\n---------\n Change the result of all dice you have rolled for damage to a [6]."
    },
    {
        key: "32",
        value: "Curse (sp):\n---------\n This ability reduces the number of dice your opponent can roll for attack speed by 1, for one combat round only."
    },
    {
        key: "33",
        value: "Dark Claw (pa):\n---------\n For every double that you roll (before or after a re-roll), your hero automatically inflicts 4 damage to their opponent, ignoring armour."
    },
    {
        key: "34",
        value: "Dark Pact (co):\n---------\n Sacrifice 4 health to charge your strike with shadow energy, increasing your damage score by 4."
    },
    {
        key: "35",
        value: "Deadly Poisons (pa):\n---------\n If you have the venom special ability, its damage is increased by 1 (causing 3 points of damage instead of only 2)."
    },
    {
        key: "36",
        value: "Deceive (mo):\n---------\n You may swap one of your opponent’s speed die for your own."
    },
    {
        key: "37",
        value: "Deep Wound (co):\n---------\n You can use the deep wound ability to roll an extra die when determining your damage score."
    },
    {
        key: "38",
        value: "Deflect (co):\n---------\n This ability stops your opponent from rolling for damage, after they have won a round, and automatically inflicts 2 damage dice, ignoring armour, to your opponent."
    },
    {
        key: "39",
        value: "Demolish (sp):\n---------\n This ability reduces the number of dice your opponent can roll for attack speed by 1, for one combat round only. It also lowers their armour by 1 for the remainder of the combat."
    },
    {
        key: "40",
        value: "Disease (pa):\n---------\n If your damage dice/damage score causes health damage to your opponent, they continue to take 2 points of damage at the end of each combat round. This damage ignores armour."
    },
    {
        key: "41",
        value: "Disrupt (co):\n---------\n If your damage score causes health damage to your opponent, you can also disrupt them. This immediately lowers their magic score by 3 for the remainder of the combat."
    },
    {
        key: "42",
        value: "Dodge (co):\n---------\n Use this ability when you have lost a combat round, to avoid taking damage from your opponent. (Note: You will still take damage from passive abilities such as bleed or venom)."
    },
    {
        key: "43",
        value: "Dominate (mo):\n---------\n Change the result of one die you roll for damage to a [6]."
    },
    {
        key: "44",
        value: "Ebony and Ivory:\n---------\n If your hero is equipped with both swords (ebony and ivory) then you may use the cripple ability (see cripple)."
    },
    {
        key: "45",
        value: "Embers (pa):\n---------\n Your burn ability now does 2 damage to each opponent (instead of 1)."
    },
    {
        key: "46",
        value: "Ensnare (co):\n---------\n If your opponent has used a dodge ability (such as evade, vanish or sidestep) you can immediately ensnare them, allowing you to win back control of the round and roll for damage as normal (as if their ability had never been played)."
    },
    {
        key: "47",
        value: "Eureka (mo):\n---------\n Use anytime in combat to raise your speed, brawn or magic score by 1 for one combat round. You can only use this ability once per combat."
    },
    {
        key: "48",
        value: "Evade (co):\n---------\n Use this ability when you have lost a combat round, to avoid taking damage from your opponent. (Note: You will still take damage from passive abilities such as bleed or venom)."
    },
    {
        key: "49",
        value: "Execution (sp):\n---------\n (Requires a sword in the main hand). Once an opponent’s health is equal to or less than your speed score, you may automatically ‘execute’ them at the start of the combat round, reducing their health to zero. (Note: You can only execute a single opponent in each combat round.)"
    },
    {
        key: "50",
        value: "Expertise (mo):\n---------\n If, after winning a round, your opponent uses an ability that would strike back at you (such as sideswipe, retaliation, riposte, overpower, deflect and brutality) you can ignore the damage."
    },
    {
        key: "51",
        value: "Fallen Hero (mo):\n---------\n Use this ability to raise your brawn by 3 for one combat round and heal 10 health."
    },
    {
        key: "52",
        value: "Fatal Blow (co):\n---------\n Use fatal blow to ignore half of your opponent's armour, rounding up."
    },
    {
        key: "53",
        value: "Fearless (sp):\n---------\n Use this ability to raise your speed by 2 for one combat round."
    },
    {
        key: "54",
        value: "Feint (mo):\n---------\n You may re-roll some or all of your dice when rolling for attack speed."
    },
    {
        key: "55",
        value: "Feral Fury (co):\n---------\n You can use feral fury to roll an extra die when determining your damage score."
    },
    {
        key: "56",
        value: "Fire Aura (pa):\n---------\n You are surrounded by magical flames. All opponents take 1 damage, ignoring armour, at the end of every combat round."
    },
    {
        key: "57",
        value: "First Cut (pa):\n---------\n This ability allows you to inflict 1 health damage to your opponent before combat begins. This ability ignores armour. (This ability cannot be used by assassins.)"
    },
    {
        key: "58",
        value: "First Strike (pa):\n---------\n (Requires a dagger in the main hand). Before combat begins you may automatically inflict 1 damage die to an opponent, ignoring armour. This will also inflict any harmful passive abilities you have, such as venom and bleed."
    },
    {
        key: "59",
        value: "Focus (mo):\n---------\n Use anytime in combat to raise your magic score by 3 for one combat round."
    },
    {
        key: "60",
        value: "Fortitude (mo):\n---------\n Use anytime in combat to raise your brawn or armour score by 3 for one combat round."
    },
    {
        key: "61",
        value: "Good Taste (pa):\n---------\n Each time you use a backpack item to increase your magic in combat, roll 1 die and add the result to the item’s benefit."
    },
    {
        key: "62",
        value: "Gut Ripper (mo):\n---------\n Change the result of all dice you have rolled for damage to a [6]."
    },
    {
        key: "63",
        value: "Hamstring (co):\n---------\n If your opponent has used a dodge ability (such as evade, sidestep or vanish), you can immediately use your hamstring ability to cancel their dodge, allowing you to roll for damage as normal (as if the dodge ability had never been played)."
    },
    {
        key: "64",
        value: "Haste (sp):\n---------\n This ability allows you to roll an extra die to determine your attack speed for one round of combat."
    },
    {
        key: "65",
        value: "Haunt (co):\n---------\n Instead of rolling for a damage score, you can cast haunt. This summons a vengeful spirit to attack a single opponent. They will take 2 damage, ignoring armour, at the end of every combat round, until your hero rolls a double (for speed or damage). Then the spirit is dispelled."
    },
    {
        "key": "67",
        "value": "Head butt (co):\n---------\n Use this ability to prevent your opponent from rolling for damage. This automatically ends the combat round."
    },
    {
        "key": "68",
        "value": "Heal (mo):\n---------\n You may instantly restore 4 health during a combat. This ability can only be used once per combat. If you have multiple items with the heal ability, each one can be used to restore 4 health."
    },
    {
        "key": "69",
        "value": "Ice shards (co):\n---------\n If you win a combat round, instead of rolling for a damage score, you can shower a single opponent with ice shards. This automatically does damage equal to your magic score, ignoring your opponent’s armour."
    },
    {
        "key": "70",
        "value": "Ice shield (mo):\n---------\n Use this ability to add 1 die to your armour score for one combat round."
    },
    {
        "key": "71",
        "value": "Ignite (co):\n---------\n If you win a combat round, instead of rolling for a damage score, you can cast ignite. Roll 2 damage dice and apply the result to each of your opponents, ignoring their armour. It also causes them to burn. (Note: You cannot use modifier abilities to increase this damage.)"
    },
    {
        "key": "72",
        "value": "Immobilise (sp):\n---------\n This ability reduces the number of dice your opponent can roll for attack speed by 1, for one combat round only."
    },
    {
        "key": "73",
        "value": "Impale (co):\n---------\n A penetrating blow that increases your damage score by 3. In the next combat round, your opponent’s speed is lowered by 1."
    },
    {
        "key": "74",
        "value": "Iron will (mo):\n---------\n You may instantly increase your armour score by 3 for one combat round."
    },
    {
        "key": "75",
        "value": "Judgement (co):\n---------\n When you take health damage from your opponent’s damage score/damage dice, you can inflict damage back to your opponent equal to half your speed score, rounding up. This ability ignores armour."
    },
    {
        "key": "76",
        "value": "Kick start (pa):\n---------\n When you lose your last point of health, a magical shock automatically brings you back to life, restoring you to 15 health. This also removes all passive effects on your hero."
    },
    {
        "key": "77",
        "value": "Knockdown (sp):\n---------\n This ability reduces the number of dice your opponent can roll for attack speed by 1, for one combat round only."
    },
    {
        "key": "78",
        "value": "Last laugh (mo):\n---------\n You may force your opponent to re-roll all of their dice (for either their attack speed or for their damage score). You must accept the re-rolled results."
    },
    {
        "key": "79",
        "value": "Lay of the land (sp):\n---------\n You can now use the natural features of the land to your advantage. Add one extra die when rolling for your attack speed, for one combat round only."
    },
    {
        "key": "80",
        "value": "Leech (pa):\n---------\n Every time your damage score/damage dice causes health damage to your opponent, you may restore 2 health. This cannot take you above your maximum health."
    },
    {
        "key": "81",
        "value": "Life spark (pa):\n---------\n Every time you roll a double, you automatically heal 4 health. This cannot take you above your maximum health."
    },
    {
        "key": "82",
        "value": "Lightning (pa):\n---------\n Every time you take health damage as a result of an opponent’s damage score/damage dice, you automatically inflict 2 points of damage to them in return. This ability ignores armour. (Note: If you have multiple items with lightning, you still only inflict 2 damage.)"
    },
    {
        "key": "83",
        "value": "Loot master (pa):\n---------\n If you do not wish to choose a reward when you defeat an enemy, you may award yourself an extra 20 gold crowns instead."
    },
    {
        "key": "84",
        "value": "Martyr (mo):\n---------\n Instead of taking the result of your opponent’s damage, you can choose to lose 5 health instead."
    },
    {
        "key": "85",
        "value": "Mend (mo):\n---------\n You can cast this spell anytime in combat to automatically heal yourself or an ally for 15 health."
    },
    {
        "key": "86",
        "value": "Merciless (pa):\n---------\n You may add 1 to each die you roll for your damage score if your opponent has been inflicted with bleed, disease or venom."
    },
    {
        "key": "87",
        "value": "Midas touch (pa):\n---------\n Every time you destroy an item of equipment (by replacing it with a new item) you gain 30 gold crowns. This ability does not work on backpack items."
    },
    {
        "key": "88",
        "value": "Might of stone (mo):\n---------\n You may instantly increase your armour score by 3 for one combat round."
    },
    {
        "key": "89",
        "value": "Nature’s revenge (co):\n---------\n Use this ability instead of rolling for a damage score, to automatically bind a single opponent in deadly thorns. This inflicts 2 damage dice to your opponent, ignoring armour. It also reduces their speed by 1 for the next combat round."
    },
    {
        "key": "90",
        "value": "Overload (co):\n---------\n You can use the overload ability to roll an extra die when determining your damage score."
    },
    {
        "key": "91",
        "value": "Overpower (co):\n---------\n This ability stops your opponent from rolling for damage, after they have won a round, and automatically inflicts 2 damage dice, ignoring armour, to your opponent."
    },
    {
        "key": "92",
        "value": "Parry (co):\n---------\n Use this ability to stop your opponent rolling for damage after they have won a round."
    },
    {
        "key": "93",
        "value": "Patchwork pauper (pa):\n---------\n When replacing an item of equipment in your chest, feet, cloak or feet locations on your hero sheet, you can keep the special ability from the old item but replace its name and attributes with those of the new item."
    },
    {
        "key": "94",
        "value": "Piercing (co):\n---------\n Use piercing to ignore your opponent’s armour and apply your full damage score to their health."
    },
    {
        "key": "95",
        "value": "Poison mastery (pa):\n---------\n Health damage from the venom special ability is increased by 1 (causing 4 points of health damage instead of only 3)."
    },
    {
        "key": "96",
        "value": "Pound (co):\n---------\n A mighty blow that increases your damage score by 3. However, in the next combat round, you must lower your speed by 1."
    },
    {
        "key": "97",
        "value": "Puncture (co):\n---------\n Instead of rolling for a damage score, you can puncture an opponent with a well-aimed arrow. This does 2 dice of damage, ignoring armour. It also reduces your opponent's armour by 1 for the remainder of the combat."
    },
    {
        "key": "98",
        "value": "Quicksilver (sp):\n---------\n Increase your speed by 2 for one combat round."
    },
    {
        "key": "99",
        "value": "Radiance (sp):\n---------\n Dazzle your foes, temporarily blinding them. This lowers your opponent’s speed by 2 for one combat round."
    },
    {
        "key": "100",
        "value": "Raining blows (mo):\n---------\n Every time you get a [6] result when rolling for your damage score, you may automatically roll another die to add further damage. If you roll a [6] again, you may roll another die – and so on."
    },
    {
        "key": "101",
        "value": "Rake (co):\n---------\n Instead of rolling for a damage score after winning a round, you can rake an opponent. This inflicts 3 damage dice, ignoring armour. (Note: You cannot use modifiers with this ability.)"
    },
    {
        "key": "102",
        "value": "Rebound (co):\n---------\n When your opponent’s damage score causes health damage, you can use rebound to increase your speed by 2 for the next combat round."
    },
    {
        "key": "103",
        "value": "Reflect (co):\n---------\n If your opponent is a vampire then you can use the magic mirror to reflect any health damage that they would have inflicted, back onto the vampire."
    },
    {
        "key": "104",
        "value": "Regrowth (mo):\n---------\n You may instantly restore 6 health anytime during combat. If you have multiple items with the regrowth ability, each one can be used to restore 6 health."
    },
    {
        "key": "105",
        "value": "Retaliation (co):\n---------\n When your opponent’s damage score/damage dice causes health damage, you can immediately retaliate by inflicting 1 damage die back to them ignoring armour."
    },
    {
        "key": "106",
        "value": "Riposte (co):\n---------\n When your opponent’s damage score/damage dice causes health damage, you can immediately retaliate by inflicting 1 damage die back to them ignoring armour."
    },
    {
        "key": "107",
        "value": "Royal regalia:\n---------\n If your hero is wearing both pieces of the majesty set (shoulders and greaves) then you may use the cripple ability (see cripple)."
    },
    {
        "key": "108",
        "value": "Rust (co):\n---------\n If your damage score causes health damage to your opponent, you can also cast the spell rust. This lowers your opponent’s armour by 2 for the remainder of the combat."
    },
    {
        "key": "109",
        "value": "Sacrifice (co):\n---------\n You may use this ability after an opponent has rolled their damage dice/damage score, to instantly sacrifice your shades. The shades absorb all the damage instead and you are unharmed. This destroys your shades instantly."
    },
    {
        "key": "110",
        "value": "Savagery (mo):\n---------\n You may raise your brawn or magic score by 2 for one combat round."
    },
    {
        "key": "111",
        "value": "Sear (pa):\n---------\n Add 1 to the result of each die you roll for your damage score, for the duration of the combat. (Note: if you have multiple items with sear, you can still only add 1 to the result.)"
    },
    {
        "key": "112",
        "value": "Second sight (mo):\n---------\n Your reflexes are heightened. This lowers the result of all dice your opponent rolls for damage by 2."
    },
    {
        "key": "113",
        "value": "Second skin (pa):\n---------\n You are immune to the piercing ability. If an opponent uses piercing, you may use armour as normal to absorb the damage."
    },
    {
        "key": "114",
        "value": "Second wind (mo):\n---------\n You may use second wind at any time to restore one speed ability that you or an ally has already played. This allows you/your ally to use that speed ability a second time in the same combat."
    },
    {
        "key": "115",
        "value": "Seeing red (pa):\n---------\n If your health is reduced to 20 or less, you may add 2 to your speed. If you are healed and your health rises above 20, you lose your bonus."
    },
    {
        "key": "116",
        "value": "Shackle (sp):\n---------\n This ability reduces the number of dice your opponent can roll for attack speed by 1, for one combat round only. You can only use this ability once per combat."
    },
    {
        "key": "117",
        "value": "Shades (pa):\n---------\n At the start of combat, you automatically summon a group of shades to aid you. The shades add 2 to each die of damage you roll, for the duration of the combat. Once the shades have been summoned, they remain in play until you sacrifice them."
    },
    {
        "key": "118",
        "value": "Shadow fury (co):\n---------\n Use this ability to add the speed of both your weapons (main hand and left hand) to your damage score."
    },
    {
        "key": "119",
        "value": "Shadow speed (mo):\n---------\n When rolling for your attack speed, all results of [1] can be changed to a [3]."
    },
    {
        "key": "120",
        "value": "Shield spin (pa):\n---------\n (requires a shield in the left hand). Each time your opponent gets a [1] when rolling for attack speed, they are hit by your shield, taking 1 damage die, ignoring armour. They cannot use a re-roll to avoid this."
    },
    {
        "key": "121",
        "value": "Shield wall (co):\n---------\n (requires a shield in the left hand). Use this ability to double your armour score and inflict 1 damage die to your opponent, ignoring their armour."
    },
    {
        "key": "122",
        "value": "Shock! (co):\n---------\n If your damage score causes health damage to your opponent, you can also electrocute them with the shock! ability. This inflicts 1 extra damage for every 2 points of armour your opponent is wearing, rounding up. (If your opponent had an armour of 15 they would take an extra 8 damage.)"
    },
    {
        "key": "123",
        "value": "Sidestep (co):\n---------\n Use this ability when you have lost a combat round, to avoid taking damage from your opponent. (Note: You will still take damage from passive abilities such as bleed or venom)."
    },
    {
        "key": "124",
        "value": "Sideswipe (co):\n---------\n When your opponent’s damage score/damage dice causes health damage, you can immediately retaliate by inflicting 1 damage die back to them ignoring armour."
    },
    {
        "key": "125",
        "value": "Slam (co):\n---------\n Use this ability to stop your opponent rolling for damage when they have won a round. In the next combat round, your opponent’s speed is reduced by 1."
    },
    {
        "key": "126",
        "value": "Snakes alive! (sp):\n---------\n You may entangle your opponent in coils of dark magic, lowering their speed by 2 for one combat round."
    },
    {
        "key": "127",
        "value": "Spider sense (co):\n---------\n Use this ability when you have lost a combat round, to avoid taking damage from your opponent. (Note: You will still take damage from passive abilities such as bleed or venom)."
    },
    {
        "key": "128",
        "value": "Spore cloud (co):\n---------\n When your opponent's damage score/damage dice causes health damage, you can use spore cloud to inflict 2 damage dice back to them, ignoring armour."
    },
    {
        "key": "129",
        "value": "Stake (pa):\n---------\n If your opponent is a vampire and their health is reduced to 10 or less, you may immediately stake them. This reduces their health to zero and you automatically win the combat."
    },
    {
        "key": "130",
        "value": "Steadfast (pa):\n---------\n You are immune to knockdown. If an opponent has this ability, you can ignore it."
    },
    {
        "key": "131",
        "value": "Steal (mo):\n---------\n Use this ability anytime in combat to automatically raise one of your attributes (speed, brawn, magic or armour) to match your opponent’s. The effect wears off at the end of the combat round."
    },
    {
        "key": "132",
        "value": "Stun (sp):\n---------\n This ability reduces the number of dice your opponent can roll for attack speed by 1, for one combat round only. You can only use this ability once per combat."
    },
    {
        "key": "133",
        "value": "Surefooted (mo):\n---------\n You may re-roll all your hero’s speed dice. You must accept the result of the second roll."
    },
    {
        "key": "134",
        "value": "Surge (co):\n---------\n A powerful attack that increases your magic score by 3. However, in the next combat round, you must lower your speed by 1."
    },
    {
        "key": "135",
        "value": "Swamp legs (sp):\n---------\n Reduce your opponent’s speed by 1 for one combat round."
    },
    {
        "key": "136",
        "value": "Swift strikes (pa):\n---------\n (requires a sword in the main and left hand) For each [6] that you roll for your attack speed, you can inflict damage to any opponent, equal to the speed of your fastest weapon (either main or left hand). This ability ignores armour."
    },
    {
        "key": "137",
        "value": "Thorn armour (co):\n---------\n Use this ability to raise your armour by 3 for one combat round. It also inflicts 1 damage die, ignoring armour, to all your opponents (roll once and apply the same damage to each opponent)."
    },
    {
        "key": "138",
        "value": "Thorn fist (co):\n---------\n When your opponent’s damage score/damage dice causes health damage, you can immediately retaliate using your thorn fist. This inflicts 2 damage dice back to them, ignoring armour."
    },
    {
        "key": "139",
        "value": "Thorns (pa):\n---------\n At the end of every combat round, you automatically inflict 1 damage to all of your opponents. This ability ignores armour."
    },
    {
        "key": "140",
        "value": "Time shift (sp):\n---------\n You may raise your speed to match your opponent’s for three combat rounds. You cannot play another speed ability until time shift has faded."
    },
    {
        "key": "141",
        "value": "Tourniquet (mo):\n---------\n This spell can be cast at any time to remove any bleed, venom and/or disease effects that you or an ally have been inflicted with."
    },
    {
        "key": "142",
        "value": "Trickster (mo):\n---------\n You may swap one of your opponent’s speed die for your own."
    },
    {
        "key": "143",
        "value": "Vampirism (mo):\n---------\n When you inflict damage on your opponent, you can heal yourself for half the amount of health that your opponent has lost, rounding up."
    },
    {
        "key": "144",
        "value": "Vanish (co):\n---------\n Use this ability when you have lost a combat round, to avoid taking damage from your opponent. (Note: You will still take damage from passive abilities such as bleed or venom)."
    },
    {
        "key": "145",
        "value": "Vanquish (mo):\n---------\n You may raise your brawn score by 2 for one combat round."
    },
    {
        "key": "146",
        "value": "Venom (pa):\n---------\n If your damage dice/damage score causes health damage to your opponent, they lose a further 2 health at the end of every combat round, for the remainder of the combat. This ability ignores armour."
    },
    {
        "key": "147",
        "value": "Vitriol (pa):\n---------\n Use at the start of combat to coat your weapons in deadly bile. This does 1 damage to all opponents, including your hero, at the end of every combat round."
    },
    {
        "key": "148",
        "value": "Watchful (mo):\n---------\n Use any time in combat to change an opponent’s [6] result to a [1]."
    },
    {
        "key": "149",
        "value": "Webbed (sp):\n---------\n This ability reduces the number of dice your opponent can roll for attack speed by 1, for one combat round only."
    },
    {
        "key": "150",
        "value": "Windblast (sp):\n---------\n This ability reduces the number of dice your opponent can roll for attack speed by 1, for one combat round only."
    },
    {
        "key": "151",
        "value": "Windwalker (co):\n---------\n If you win a round, you can use all of your attack speed dice for your damage score (adding your brawn or magic as normal)."
    },
    {
        "key": "152",
        "value": "Zapped! (sp):\n---------\n Use this ability to automatically shrink your opponent, making them weaker. Your opponent’s speed, brawn, and magic are lowered by 3 until the end of the combat round. Then the ability wears off, and their stats are restored."
    }
     
]

export default Abilities
