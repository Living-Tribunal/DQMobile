import React, { useState, } from "react";
import { StyleSheet, Pressable, View, Modal, Text } from "react-native";
import ClickButtonText from "./HeaderText";
import ButtonInfoText from "./ButtonInfoText";
import ResetHero from "./ResetHeroFunction";

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
                        backgroundColor: pressed ? "red" : "transparent",
                    },
                ]}
                onPress={() => setIsModalVisible(true)}>
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
                                backgroundColor: pressed ? "#ff0000" : "transparent",
                            },
                        ]}
                        onLongPress={() => {ResetHero(), setIsModalVisible(false) }}>
                        <Text style={styles.modalButton}>Reset Hero</Text>
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
        marginTop: 10
    },
    heroModalContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(20, 20, 20)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'monospace',
        textAlign: 'center',
    },
    modalButton: {
        color: 'white',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white'
    }
});


