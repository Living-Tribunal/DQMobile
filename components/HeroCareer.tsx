import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, View, Modal, Text} from "react-native";
import ClickButtonText from "./HeaderText";
import { SelectList } from 'react-native-dropdown-select-list';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Career from "../constants/PathCareer/Career";
import Passive from "../constants/passive/Passive";

interface PressableButtonTextProps {
    value: string;
    statKey: string;
}

export default function PressableButtonText({ value, statKey }: PressableButtonTextProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedHeroCareer, setSelectedHeroCareer] = useState("");

    const save = async () => {
        try {
            await AsyncStorage.setItem(statKey, selectedHeroCareer);
        } catch (err) {
            alert(err);
        }
    };

    const load = async () => {
        try {
            let inventory = await AsyncStorage.getItem(statKey);
            if (inventory !== null) {
                setSelectedHeroCareer(inventory);
            }
        } catch (err) {
            alert(err);
        }
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed ? "gold" : "transparent",
                    },
                ]}
                onPress={() => setIsModalVisible(true)}
            >
                <ClickButtonText value={value} />
            </Pressable>
            <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
                animationType="slide"
            >
                <View style={styles.heroModalContainer}>
                <SelectList
                    setSelected={(val) => setSelectedHeroCareer(val)}
                    data={Career}
                    save="value"
                    fontFamily="monospace"
                    boxStyles={{borderRadius:5, borderWidth:2, backgroundColor: "gold"}}
                    dropdownTextStyles={{color: 'white'}}
                    inputStyles={{color: '#000000'}}
                    searchPlaceholder='Career'
                    placeholder="Select Career"
                    />
                    <View style={styles.heroModalContainerButtons}>
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed
                                        ? "gold"
                                        : "rgb(20, 20, 20)",
                                },
                            ]}
                            onPress={() => {
                                setIsModalVisible(false);
                                save();
                            }}
                        >
                            <Text style={styles.modalButton}>Save</Text>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed
                                        ? "#ff0000"
                                        : "rgb(20, 20, 20)",
                                },
                            ]}

                            onLongPress={() => {setSelectedHeroCareer(""), setIsModalVisible(false), save() }}>
                        
                            <Text style={styles.modalButton}>Delete</Text>
                        </Pressable>
                    </View>
                    <Text style={styles.textStyle}>
                        {selectedHeroCareer === 'Alchemist' ? `Career Details for ${selectedHeroCareer}: \n\n${Passive[60].value},\n\n${Passive[85].value}`: ``}
                        {selectedHeroCareer === 'Assassin' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[57].value},\n\n${Passive[34].value}`: ``}
                        {selectedHeroCareer === 'Berserker' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[113].value},\n\n${Passive[98].value}`: ``}
                        {selectedHeroCareer === 'Cavalier' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[118].value},\n\n${Passive[119].value}`: ``}
                        {selectedHeroCareer === 'Gladiator' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[10].value},\n\n${Passive[65].value}`: ``}
                        {selectedHeroCareer === 'Icelock' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[67].value},\n\n${Passive[68].value}`: ``}
                        {selectedHeroCareer === 'Inquisitor' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[22].value},\n\n${Passive[3].value}`: ``}
                        {selectedHeroCareer === 'Medic' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[83].value},\n\n${Passive[139].value}`: ``}
                        {selectedHeroCareer === 'Necromancer' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[115].value},\n\n${Passive[107].value}`: ``}
                        {selectedHeroCareer === 'Pyromancer' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[69].value},\n\n${Passive[16].value}`: ``}
                        {selectedHeroCareer === 'Ranger' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[77].value},\n\n${Passive[87].value}`: ``}
                        {selectedHeroCareer === 'Shadow Ranger' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[8].value},\n\n${Passive[136].value}`: ``}
                        {selectedHeroCareer === 'Shadowstalker' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[117].value},\n\n${Passive[116].value}`: ``}
                        {selectedHeroCareer === 'Swordsmaster' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[134].value},\n\n${Passive[2].value}`: ``}
                        {selectedHeroCareer === 'Witchfinder' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[73].value},\n\n${Passive[48].value}`: ``}
                        {selectedHeroCareer === 'Pickpocket' ? `Career Details for ${selectedHeroCareer} \n\n${Passive[91].value},\n\n${Passive[81].value}`: ``}
                    </Text>
                </View>
            </Modal>
            <Text style={styles.textStyle}>{selectedHeroCareer}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
    },
    dropDownStyle: {
        backgroundColor: "rgb(255, 255, 255)",
        color: 'gold',

    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: 'white',
        margin: 2,
        borderRadius: 2,
        padding: 5
    },
    modalTextInput: {
        backgroundColor: '#ffffff',
        width: 300,
        textAlign: 'center',
        borderColor: 'gold',
        margin: 10
    },
    heroModalContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(20, 20, 20)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroModalContainerButtons: {
        flexDirection: 'row',
        backgroundColor: 'rgb(20, 20, 20)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 15,
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalButton: {
        color: 'white',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 13,
        padding: 10,
    }
});



