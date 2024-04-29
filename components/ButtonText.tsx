import React from 'react'; 
import { StyleSheet, Text, TextStyle } from "react-native";
import { Colors } from '../constants/colors/Colors';

interface ButtonTextProps {
    value: string;
}

const ButtonText: React.FC<ButtonTextProps> = ({ value }) => {
    return (
        <Text style={styles.topText}>{value}</Text>
    );
};

export default ButtonText;

const styles = StyleSheet.create({
    topText: {
        color: Colors.backgroundGold,
        fontFamily: "SteelworksVintageDemo",
        fontSize: 35,
        textAlign: "center",
    }, 
});
