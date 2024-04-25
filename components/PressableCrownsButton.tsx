import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, View, Modal, TextInput, Text, Button } from "react-native";
import PressableStatText from "./PressableStatText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SelectList } from "react-native-dropdown-select-list";
import Numbers from "../constants/Numbers/Numbers";

interface PressableCrownsButtonProps{
    value: string,
    statKey: string,
}

export default function PressableCrownsButton({ value, statKey }: PressableCrownsButtonProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [ text, setText] = useState("10")


    
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
                        backgroundColor: pressed ? "gold" : "transparent",
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
                    boxStyles={{borderRadius:5, borderWidth:2, backgroundColor: "gold"}}
                    dropdownTextStyles={{color: 'white'}}
                    inputStyles={{color: '#000000'}}
                    searchPlaceholder='Search'
                    placeholder="Select"
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
                                onLongPress={() => {setText("10"), setIsModalVisible(false), save() }}>
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
        backgroundColor: "rgb(20, 20, 20)",
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
        fontSize: 15,
        padding: 10,
    },
    heroModalContainerButtons: {
        flexDirection: 'row',
        backgroundColor: 'rgb(20, 20, 20)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});



