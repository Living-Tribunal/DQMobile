import React, { useState } from "react";
import { StyleSheet, Pressable, View, Modal, Text } from "react-native";
import ClickButtonText from "../components/HeaderText";
import ButtonInfoText from "../components/ButtonInfoText";
import ResetHero from "../components/ResetHeroFunction";

interface ResetHeroButtonProp {
    value: string;
}

export default function ResetHeroButton({ value }: ResetHeroButtonProp) {
    const [isTextSet, setIsSetText ] = useState('');

    const handleButtonPress = () => {
        const value = "Your Hero was deleted.";
        setIsSetText(value);
    };

    const handleButtonPressOut = () => {
        const value = "";
        setIsSetText(value);
    };

    return (
        <View style={styles.container}>
            
                <View style={styles.modalContainer}>
                    <ButtonInfoText value={"Reset Your Hero"} />
                    <ClickButtonText
                        value={
                            "Before you click that button, make sure you want to do this. you CANNOT undo a Hero reset!"
                        }
                    />
                    <Text style={styles.delete}>{isTextSet}</Text>
                   <Pressable
                        onLongPress={() => {[ResetHero(),handleButtonPress()]}}
                        onPressOut={() => {handleButtonPressOut()}}
                        style={({ pressed }) => [
                            styles.button,
                            {
                                backgroundColor: pressed ? "#ff0000" : "transparent",
                            },
                        ]}
                        >
                        <Text style={styles.modalButton}>Reset Hero</Text>
                    </Pressable>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(20, 20, 20)",
    },
    button: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 1,
        marginTop: 10,
    },
    modalContainer: {
        flexDirection: "column",
        backgroundColor: "rgb(20, 20, 20)",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    textStyle: {
        color: "#ffffff",
        fontSize: 25,
        fontFamily: "monospace",
        textAlign: "center",
    },
    modalButton: {
        color: "white",
        fontFamily: "monospace",
        fontWeight: "bold",
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: "white",
    },
    delete:{
        color: 'red',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 20

    }
});
