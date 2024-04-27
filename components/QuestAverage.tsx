import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, View, Text} from "react-native";
import QuestCompleteText from "./QuestCompleteText";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface QuestAverageProps{
    value: string,
    statKey: string
}

export default function QuestAverage({ value, statKey}: QuestAverageProps) {
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
                        backgroundColor: pressed ? "gold" : "orange",
                    },
                ]}
                onPress={() => handleButtonPress()}
                onLongPress={() =>handleLongPress()}>
                <QuestCompleteText value={value} />
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
    textStyle: {
        color: '#ffffff',
        fontSize: 10,
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});



