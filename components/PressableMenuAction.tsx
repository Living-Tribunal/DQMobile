import React, { useState } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import PressableMenuText from "./PressableMenuText";
import { Colors } from '../constants/colors/Colors';

interface PressableMenuActionProps {
    value: string
}

export default function PressableMenuAction({value}: PressableMenuActionProps) {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [isSelected, setIsSelected] = useState(false);
    return(
        <View style={styles.menuText}>
            <Pressable
            style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed ? Colors.hard : Colors.textColor,
                },
            ]}
            onPressIn={() => setIsSelected(true)}
            onPress={() => setIsModalVisible(true)}
            onPressOut={() => setIsSelected(false)}>
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
    },
    menuText: {
        flex: 1,
        justifyContent: 'space-around',
    }
});



