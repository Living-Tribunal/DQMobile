import React from 'react'; 
import { StyleSheet, Text, TextStyle } from "react-native";

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
        color: "gold",
        fontFamily: "SteelworksVintageDemo",
        fontSize: 55,
        textAlign: "center",
    } as TextStyle,
});
