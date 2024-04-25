import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, View, Modal, Text} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
                                        backgroundColor: pressed ? "gold" : "rgb(20, 20, 20)",
                                        color: pressed ? "rgb(20, 20, 20)" : "white",
                                    },
                                ]}
                                onPress={() => {
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
        borderColor: 'white',
        margin: 2,
        borderRadius: 2,
        padding: 5
    },
    modalTextInput: {
        backgroundColor: '#ffffff',
        width: 300,
        textAlign: 'center',
        borderColor: 'gold',
        margin: 10
    },
    heroModalContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(20, 20, 20)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroModalContainerButtons: {
        flexDirection: 'row',
        backgroundColor: 'rgb(20, 20, 20)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textStyle: {
        color: '#ffffff',
        fontSize: 10,
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalButton: {
        color: 'white',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
    },
});



