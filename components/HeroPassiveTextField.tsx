import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, View, Modal, Text} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from '../constants/colors/Colors';

interface HeroPassiveTextFieldProp {
    statKey: string,
}


function HeroPassiveTextField({ statKey }: HeroPassiveTextFieldProp) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedDropDown, setSelectedDropDown] = useState('');

    const save = async() => {
        try {
            await AsyncStorage.setItem( statKey, selectedDropDown )
        } catch(err){
            alert(err);
        }
    };

    const load = async() => {
        try{
            let inventory = await AsyncStorage.getItem( statKey )
            if (inventory !== null){
                setSelectedDropDown(inventory);
            }
        } catch(err){
            alert(err);
        }
    };

    useEffect(() => {
        load()
    }, [] )

    return(
        <View style={styles.buttonContainer}>
            <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
                animationType="slide">
                <View style={styles.heroModalContainer}>
                        <View style={styles.heroModalContainerButtons}>
                            <Pressable
                                style={({ pressed }) => [
                                    styles.button,
                                    {
                                        backgroundColor: pressed ? Colors.backgroundGold : Colors.backgroundBlack,
                                        color: pressed ? Colors.backgroundBlack : Colors.textColor,
                                    },
                                ]}
                                onPress={() => {
                                    setIsModalVisible(false);
                                    save();
                                }}>
                                <Text style={styles.modalButton}>Close</Text>
                            </Pressable>
                        </View>
                </View>
            </Modal>
            <Text style={styles.textStyle}>{selectedDropDown}</Text>
        </View> 
    )
};
export default HeroPassiveTextField;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.textColor,
        margin: 2,
        borderRadius: 2,
        padding: 5
    },
    modalTextInput: {
        backgroundColor: Colors.textColor,
        width: 300,
        textAlign: 'center',
        borderColor: Colors.backgroundGold,
        margin: 10
    },
    heroModalContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.backgroundBlack,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroModalContainerButtons: {
        flexDirection: 'row',
        backgroundColor: Colors.backgroundBlack,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textStyle: {
        color: Colors.textColor,
        fontSize: 10,
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalButton: {
        color: Colors.textColor,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
    },
});



