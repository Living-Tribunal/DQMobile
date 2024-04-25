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
                    backgroundColor: pressed ? "#1e6c93" : "rgb(20, 20, 20)",
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
        borderRadius: 2
    },
    menuText: {
        flex: 1,
        justifyContent: 'space-around',
    }
});



