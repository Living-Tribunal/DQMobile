import React from "react";
import { StyleSheet, Text } from "react-native";

interface PressableMenuTextProps{
    value: string 
}

function PressableMenuText({value}: PressableMenuTextProps) {
    return(
           <Text style={styles.menuText}>{value}</Text>
    )
};
export default PressableMenuText;

const styles = StyleSheet.create({
    menuText: {
        fontFamily: 'monospace',
        color: '#000000',
        padding: 7,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 10,
    },
});

