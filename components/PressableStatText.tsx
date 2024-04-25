import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface PressableStatTextProp {
    value: string
}

function PressableStatText({value}: PressableStatTextProp){
    return(
        <Text style={styles.statText}>{value}</Text>
    )
};
export default PressableStatText;

const styles = StyleSheet.create({
    statText: {
        fontFamily: 'monospace',
            fontWeight: 'bold',
            textAlign: 'center',
            alignContent: 'center',
            fontSize: 11,
            color: '#ffffff',
    },
});