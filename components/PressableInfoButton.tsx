import React, { useState, } from "react";
import { StyleSheet, Pressable, View, Modal, Text, ScrollView, StatusBar } from "react-native";
import ClickButtonText from "./HeaderText";
import ButtonInfoText from "./ButtonInfoText";
import HeaderText from "./HeaderText";

interface PressableStatButtonProp{
    value: string
}

export default function PressableStatButton({ value }: PressableStatButtonProp) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        
        <View>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed ? "gold" : "transparent",
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
                <ScrollView contentContainerStyle={styles.scrollViewContent}>    
                <View style={styles.heroModalContainer}>
                    <StatusBar hidden={true} />
                    <Text style={styles.textStyle}>Welcome to the <ButtonInfoText value={'Destiny Quest'}/> Hero Sheet Companion App!</Text>
                    <ButtonInfoText value={'Manage Your Adventure:'} /> 
                    <HeaderText value={'Keep track of your heros stats, inventory, and quest progress as you journey through the sprawling lands of Valeron.'}/>
                    <ButtonInfoText value={'Customize Your Hero:'} />
                    <HeaderText value={'On the next few screens, you can personalize your character by choosing your class, abilities, and equipment. Tailor your playstyle to match your preferences and strategic approach.'}/>
                    <ButtonInfoText value={'Discover Your Destiny:'} />
                    <HeaderText value={'Dive into the epic world of Valeron as you embark on a heroic quest filled with danger, intrigue, and untold treasures. The fate of the realm rests in your hands!'}/>
                    <Pressable
                        style={({ pressed }) => [
                            styles.button,
                            {
                                backgroundColor: pressed ? "gold" : "transparent",
                            },
                        ]}
                        onPress={() => setIsModalVisible(false)}> 
                        <Text style={styles.modalButton}>Close</Text>
                    </Pressable>
                </View>
               </ScrollView>  
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
        backgroundColor: 'rgb(20, 20, 20)',
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
});


