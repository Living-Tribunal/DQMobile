import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, View, Modal, Text } from "react-native";
import ClickButtonText from "./HeaderText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SelectList } from 'react-native-dropdown-select-list';

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
                        backgroundColor: pressed ? "gold" : "transparent",
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
                        boxStyles={{ borderRadius: 5, borderWidth: 2, backgroundColor: "gold" }}
                        dropdownTextStyles={{ color: 'white' }}
                        inputStyles={{ color: '#000000' }}
                        searchPlaceholder='Search for Item/Passive'
                        placeholder='Select Item'
                    />
                    <View style={styles.heroModalContainerButtons}>
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed ? "gold" : "rgb(20, 20, 20)",
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
                                    backgroundColor: pressed ? "#ff0000" : "rgb(20, 20, 20)",
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
        borderColor: 'white',
        margin: 2,
        borderRadius: 5,
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
        fontSize: 10,
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalButton: {
        color: 'white',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
    },
});
