import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, View, Modal, Text } from "react-native";
import ClickButtonText from "./HeaderText";
import { SelectList } from 'react-native-dropdown-select-list';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Path from "../constants/PathCareer/Path";
import { Colors } from '../constants/colors/Colors';

interface HeroPathProp{
    value: string,
    statKey: string
}

export default function HeroPath({ value, statKey }: HeroPathProp) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedHeroPath, setSelectedHeroPath] = useState('');


    const save = async () => {
        try {
            await AsyncStorage.setItem(statKey, selectedHeroPath);
        } catch (err) {
            alert(err);
        }
    };

    const load = async () => {
        try {
            let inventory = await AsyncStorage.getItem(statKey);
            if (inventory !== null) {
                setSelectedHeroPath(inventory);
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
                        backgroundColor: pressed ? Colors.backgroundGold : "transparent",
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
                    setSelected={(val) => setSelectedHeroPath(val)}
                    data={Path}
                    save="value"
                    fontFamily="monospace"
                    boxStyles={{borderRadius:5, borderWidth:2, backgroundColor: Colors.backgroundGold}}
                    dropdownTextStyles={{color: Colors.textColor}}
                    inputStyles={{color: Colors.scrollviewBackground}}
                    searchPlaceholder='Path'
                    placeholder="Select Path"
                    />
                    <View style={styles.heroModalContainerButtons}>
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed
                                        ? Colors.backgroundGold
                                        : Colors.backgroundBlack,
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
                                        ? Colors.deleteRed
                                        : Colors.backgroundBlack,
                                },
                            ]}
                            onLongPress={() => {setSelectedHeroPath(""), setIsModalVisible(false), save() }}>
                            <Text style={styles.modalButton}>Delete</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={styles.textStyle}>{selectedHeroPath}</Text>
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
        backgroundColor: Colors.textColor,
        color: Colors.backgroundGold,

    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.textColor,
        margin: 2,
        borderRadius: 5,
        padding: 5
    },
    modalTextInput: {
        backgroundColor: Colors.textColor,
        width: 300,
        textAlign: 'center',
        borderColor: Colors.backgroundGold,
        margin: 10
    },
    heroModalContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.backgroundBlack,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroModalContainerButtons: {
        flexDirection: 'row',
        backgroundColor: Colors.backgroundBlack,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: Colors.textColor,
        fontSize: 15,
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalButton: {
        color: Colors.textColor,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 13,
        padding: 10,
    }
});



