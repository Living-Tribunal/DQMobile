import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, View, TextInput, Modal, Text, Image } from "react-native";
import ClickButtonText from "./HeaderText";
import RandomNames from "../constants/names/RandomNames";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface PressableButtonTextProps {
    value: string,
    statKey: string
}

export default function PressableButtonText({ value, statKey }: PressableButtonTextProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [text, setText] = useState("");

    function RandonNameGenerator() {
        const selected = Math.floor(Math.random() * RandomNames.length);
        return RandomNames[selected].value;
    }

    const save = async () => {
        try {
            await AsyncStorage.setItem(statKey, text);
        } catch (err) {
            alert(err);
        }
    };

    const load = async () => {
        try {
            let inventory = await AsyncStorage.getItem(statKey);
            if (inventory !== null) {
                setText(inventory);
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
                    <TextInput
                        style={styles.modalTextInput}
                        placeholder="Enter Your Hero's Info"
                        value={text}
                        onChangeText={(newText) => setText(newText)}
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
                                        ? "red"
                                        : "rgb(20, 20, 20)",
                                },
                            ]}
                            onLongPress={() => {setText(""), setIsModalVisible(false), save() }}>
                            <Text style={styles.modalButton}>Delete</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed
                                        ? "#1e6c93"
                                        : "rgb(20, 20, 20)",
                                },
                            ]}
                            onPress={() => {
                                setText(RandonNameGenerator());
                                save();
                            }}
                        >
                            <Text style={styles.modalButton}>
                                Random Character Name
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={styles.textStyle}>{text}</Text>
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
        borderRadius: 5,
        padding: 5
    },
    modalTextInput: {
        backgroundColor: '#ffffff',
        width: 300,
        textAlign: 'center',
        borderColor: 'gold',
        margin: 10,
        height: 50
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
        fontSize: 15,
        padding: 10,
    },
});



