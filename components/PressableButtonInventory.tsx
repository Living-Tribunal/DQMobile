import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, View, Modal, Text } from "react-native";
import ClickButtonText from "./HeaderText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SelectList } from 'react-native-dropdown-select-list';
import { Colors } from "../constants/colors/Colors";

interface PressableButtonTextProps {
    value: string;
    statKey: string;
    data: any[];
}

function PressableButtonText({ value, statKey, data }: PressableButtonTextProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedDropDown, setSelectedDropDown] = useState('');

    const save = async () => {
        try {
            await AsyncStorage.setItem(statKey, selectedDropDown)
        } catch (err) {
            alert(err);
        }
    };

    const load = async () => {
        try {
            let inventory = await AsyncStorage.getItem(statKey)
            if (inventory !== null) {
                setSelectedDropDown(inventory);
            }
        } catch (err) {
            alert(err);
        }
    };

    useEffect(() => {
        load()
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
                onPress={() => setIsModalVisible(true)}>
                <ClickButtonText value={value} />
            </Pressable>
            <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
                animationType="slide">
                <View style={styles.heroModalContainer}>
                    <SelectList
                        setSelected={(val) => setSelectedDropDown(val)}
                        data={data}
                        save="value"
                        fontFamily='monospace'
                        boxStyles={{ borderRadius: 5, borderWidth: 2, backgroundColor: Colors.backgroundGold }}
                        dropdownTextStyles={{ color: Colors.textColor }}
                        inputStyles={{ color: Colors.scrollviewBackground }}
                        searchPlaceholder='Search for Item/Passive'
                        placeholder='Select Item'
                    />
                    <View style={styles.heroModalContainerButtons}>
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed ? Colors.backgroundGold : Colors.backgroundBlack,
                                },
                            ]}
                            onPress={() => {
                                setIsModalVisible(false);
                                save();
                            }}>
                            <Text style={styles.modalButton}>Save</Text>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed ? Colors.deleteRed : Colors.backgroundBlack,
                                },
                            ]}
                            onLongPress={() => { setSelectedDropDown(""), setIsModalVisible(false), save() }}>
                            <Text style={styles.modalButton}>Delete</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={styles.textStyle}>{selectedDropDown}</Text>
        </View>
    );
}

export default PressableButtonText;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
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
        fontSize: 10,
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalButton: {
        color: Colors.textColor,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
    },
});
