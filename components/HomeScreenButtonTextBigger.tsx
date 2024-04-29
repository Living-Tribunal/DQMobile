import React from 'react'; 
import { StyleSheet, Text } from "react-native";
import { Colors } from '../constants/colors/Colors';

interface HomeScreenButtonTextBiggerProps {
    value: string;
}

function HomeScreenButtonTextBigger({ value }: HomeScreenButtonTextBiggerProps) {
    return (
        <Text style={styles.topText}>{value}</Text>
    );
}

export default HomeScreenButtonTextBigger;

const styles = StyleSheet.create({
    topText: {
        color: Colors.backgroundGold,
        fontFamily: "SteelworksVintageDemo",
        fontSize: 55,
        textAlign: "center",
    },  
});
