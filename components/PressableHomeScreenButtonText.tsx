import React, { useState } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import ClickButtonText from "./HeaderText";

interface PressableHomeScreenButtonTextPro{
    value: string,
    onPress: () => void
}


export default function PressableHomeScreenButtonText({value, onPress}: PressableHomeScreenButtonTextPro) {
    return(
        <View style={styles.menuText}>
            <Pressable
            style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed ? "gold" : "transparent",
                },
            ]}
            onPress={(onPress)}>
            <ClickButtonText value={value} />
        </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        justifyContent: "space-between",
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1,
    },
    menuText: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20
    }
});



