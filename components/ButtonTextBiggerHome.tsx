import React from 'react'; 
import { StyleSheet, Text, TextStyle } from "react-native";
import { Colors } from '../constants/colors/Colors';

interface ButtonTextBiggerProps {
    value: string;
}

const ButtonTextBigger: React.FC<ButtonTextBiggerProps> = ({ value }) => {
    return (
        <Text style={styles.topText}>{value}</Text>
    );
};

export default ButtonTextBigger;

const styles = StyleSheet.create({
    topText: {
        color: Colors.backgroundGold,
        fontFamily: "SteelworksVintageDemo",
        fontSize: 55,
        textAlign: "center",
    },
});
