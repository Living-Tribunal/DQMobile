import React, { useState } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import ClickButtonText from "./HeaderText";
import { Colors } from '../constants/colors/Colors';

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
                    backgroundColor: pressed ? Colors.backgroundGold : "transparent",
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
        borderRadius: 5,
        borderColor: Colors.textColor,
        borderWidth: 1,
    },
    menuText: {
        padding: 20,
    }
});



