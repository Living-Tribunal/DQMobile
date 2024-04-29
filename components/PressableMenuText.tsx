import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from '../constants/colors/Colors';

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
        color: Colors.textColor,
        padding: 7,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 9,
    },
});

