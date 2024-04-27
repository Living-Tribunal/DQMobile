import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, View, Modal, TextInput, Text, Button } from "react-native";
import PressableStatText from "./PressableStatText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SelectList } from "react-native-dropdown-select-list";
import Numbers from "../constants/Numbers/Numbers";

interface QuestCompleteProps{
    value: string,
    statKey: string
}

export default function QuestComplete({ value, statKey }: QuestCompleteProps) {
    const [ text, setText] = useState("No")
    
    const save = async() => {
        try {
            await AsyncStorage.setItem (statKey, text )
        } catch (err) {
            alert(err);
        }
    };

    const load = async() => {
        try{
            let option = await AsyncStorage.getItem( statKey )
            if (option !== null) {
                setText(option);
            }
        } catch (err){
            alert(err);
        }
    };

    const handleButtonPress = () => {
        setText("Yes")
    }

    const handleLongPress = () => {
        setText("No")
    }

    useEffect(() => {
        load()
    }, [] )

    useEffect(() => {
        save()
    }, [text])

    return(
        <View style={styles.buttonContainer}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed ? "gold" : "transparent",
                    },
                ]}
                onPress={() => handleButtonPress()}
                onLongPress={() =>handleLongPress()}>
                <PressableStatText value={value} />
            </Pressable>
        <View>
        </View>
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



