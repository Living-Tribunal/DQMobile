import React from 'react'; 
import { StyleSheet, Text } from "react-native";

interface ClickButtonTextProps {
    value: string;
}

function ClickButtonText({ value }: ClickButtonTextProps) {
    return (
        <Text style={styles.careerText}>{value}</Text>
    );
}

export default ClickButtonText;

const styles = StyleSheet.create({
    careerText: {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 13,
        color: '#ffffff',
        padding: 10,
    },  
});
