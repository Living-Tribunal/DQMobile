import React from "react";
import { StyleSheet, Pressable, View } from "react-native";
import PressableMenuText from "./PressableMenuText";

interface PressableInventoryActionProps{
    value: string
    onPress: () => null
}


export default function PressableInventoryAction({value, onPress}: PressableInventoryActionProps) {
    return(
        <View style={styles.menuText}>
            <Pressable
            style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed ? "gold" : "rgb(255, 255, 255)",
                },
            ]}
            onPress={onPress}>
            <PressableMenuText value={value} />
        </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 5
    },
    menuText: {
        flex: 1,
        justifyContent: 'space-around',
    }
});



