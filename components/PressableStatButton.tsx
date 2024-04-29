import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, View, Modal, TextInput, Text, Button } from "react-native";
import PressableStatText from "./PressableStatText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SelectList } from "react-native-dropdown-select-list";
import Numbers from "../constants/Numbers/Numbers";
import { Colors } from '../constants/colors/Colors';

interface PressableStatButtonProps{
    value: string,
    statKey: string
}

export default function PressableStatButton({ value, statKey }: PressableStatButtonProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [ text, setText] = useState("0")

    const save = async() => {
        try {
            await AsyncStorage.setItem (statKey, text )
        } catch (err) {
            alert(err);
        }
    };

    const load = async() => {
        try{
            let stat = await AsyncStorage.getItem( statKey )
            if (stat !== null) {
                setText(stat);
            }
        } catch (err){
            alert(err);
        }
    };

    useEffect(() => {
        load()
    }, [] )

    return(
        <View style={styles.buttonContainer}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed ? Colors.backgroundGold : "transparent",
                    },
                ]}
                onPress={() => setIsModalVisible(true)}>
                <PressableStatText value={value} />
            </Pressable>
            <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
                animationType="slide">
                <View style={styles.heroModalContainer}>
                <SelectList
                    setSelected={(val) => setText(val)}
                    data={Numbers}
                    fontFamily="monospace"
                    boxStyles={{borderRadius:5, borderWidth:2, backgroundColor: Colors.backgroundGold}}
                    dropdownTextStyles={{color: Colors.textColor}}
                    inputStyles={{color: Colors.scrollviewBackground}}
                    searchPlaceholder='Search'
                    placeholder="Select"
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
                                onLongPress={() => {setText("0"), setIsModalVisible(false), save() }}>
                                    <Text style={styles.modalButton}>Delete</Text>
                            </Pressable>
                        </View>
                </View>
            </Modal>
            <Text style={styles.textStyle}>{text}</Text>
        </View> 
    )
};

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
        fontSize: 15,
        padding: 10,
    },
    heroModalContainerButtons: {
        flexDirection: 'row',
        backgroundColor: Colors.backgroundBlack,
        alignItems: 'center',
        justifyContent: 'center',
    },
});



