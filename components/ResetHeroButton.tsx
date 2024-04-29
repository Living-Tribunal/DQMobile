import React, { useState, } from "react";
import { StyleSheet, Pressable, View, Modal, Text } from "react-native";
import ClickButtonText from "./HeaderText";
import ButtonInfoText from "./ButtonInfoText";
import ResetHero from "./ResetHeroFunction";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../constants/colors/Colors';

interface ResetHeroButtonProp {
    value: string
}

export default function ResetHeroButton({ value }: ResetHeroButtonProp) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        
        <View>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed ? Colors.deleteRed : "transparent",
                    },
                ]}
                onLongPress={() => setIsModalVisible(true)}>
                
                    <ClickButtonText value={value} /> 
                 
            </Pressable>
            <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
                animationType="slide">  
                <View style={styles.heroModalContainer}>
                    <ButtonInfoText value={'Reset Your Hero'} /> 
                    <ClickButtonText value={'Before you click that button, make sure you want to do this. you CANNOT undo a Hero reset!'}/>
                    <Pressable
                        style={({ pressed }) => [
                            styles.button,
                            {
                                backgroundColor: pressed ? Colors.deleteRed : "transparent",
                            },
                        ]}
                        onLongPress={() => {ResetHero(), setIsModalVisible(false) }}>
                        <View style={styles.resetContainer}>
                            <Text style={styles.modalButton}>Reset Hero</Text>
                            <Ionicons name="trash-sharp" size={32} color={Colors.textColor} />
                        </View>
                    </Pressable>
                </View>
            </Modal>
        </View>
        
    );
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
    },
    heroModalContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundBlack,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    textStyle: {
        color: Colors.textColor,
        fontSize: 25,
        fontFamily: 'monospace',
        textAlign: 'center',
    },
    modalButton: {
        color: Colors.textColor,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10
    },
    resetContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});


