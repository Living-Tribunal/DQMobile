import React, { useState, } from "react";
import { StyleSheet, Pressable, View, Modal, Text, ScrollView } from "react-native";
import ClickButtonText from "./HeaderText";
import ButtonInfoText from "./ButtonInfoText";
import HeaderText from "./HeaderText";
import { Colors } from '../constants/colors/Colors';

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
                        backgroundColor: pressed ? Colors.backgroundGold : "transparent",
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
                <ScrollView>    
                <View style={styles.heroModalContainer}>
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
                                backgroundColor: pressed ? Colors.backgroundGold : "transparent",
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
        borderColor: Colors.textColor,
        borderRadius: 5,
    },
    heroModalContainer: {
        flexDirection: 'column',
        backgroundColor: Colors.backgroundBlack,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    textStyle: {
        color: Colors.textColor,
        fontSize: 50,
        fontFamily: 'monospace',
        textAlign: 'center',
        padding: 10
    },
    modalButton: {
        color: Colors.textColor,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.textColor
    }
});


