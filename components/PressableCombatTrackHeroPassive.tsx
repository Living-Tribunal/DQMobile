import React, { useState, } from "react";
import { StyleSheet, Pressable, View, Modal, Text, ScrollView } from "react-native";
import ClickButtonText from "./HeaderText";
import ButtonText from "../components/ButtonText";
import HeroPassiveTextField from "./HeroPassiveTextField";
import HeaderText from "../components/HeaderText"

export default function PressableCombatTrackHeroPassive({ }) {
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
                <ClickButtonText value={"Click Here To See Your Passive Abilities"} />
            </Pressable>
            <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
                animationType="slide">
                <ScrollView>    
                <View style={styles.heroModalContainer}>
                    <HeaderText value={'Your Heros Passive Abilities Are Shown Here'}/>
                    <ButtonText value={'-Speed (sp)-'} />
                    <HeroPassiveTextField statKey={'Speed Mod 1'} />
                    <HeroPassiveTextField statKey={'Speed Mod 2'} />
                    <HeroPassiveTextField statKey={'Speed Mod 3'} />
                    <HeroPassiveTextField statKey={'Speed Mod 4'} />
                    <HeroPassiveTextField statKey={'Speed Mod 5'} />
                    <HeroPassiveTextField statKey={'Speed Mod 6'} />


                    <ButtonText value={'-Combat (co)-'} />
                    <HeroPassiveTextField statKey={'Combat Mod 1'} />
                    <HeroPassiveTextField statKey={'Combat Mod 2'} />
                    <HeroPassiveTextField statKey={'Combat Mod 3'} />
                    <HeroPassiveTextField statKey={'Combat Mod 4'} />
                    <HeroPassiveTextField statKey={'Combat Mod 5'} />
                    <HeroPassiveTextField statKey={'Combat Mod 6'} />

                    <ButtonText value={'-Passive (pa)-'} />
                    <HeroPassiveTextField statKey={'Passive Mod 1'} />
                    <HeroPassiveTextField statKey={'Passive Mod 2'} />
                    <HeroPassiveTextField statKey={'Passive Mod 3'} />
                    <HeroPassiveTextField statKey={'Passive Mod 4'} />
                    <HeroPassiveTextField statKey={'Passive Mod 5'} />
                    <HeroPassiveTextField statKey={'Passive Mod 6'} /> 

                    <ButtonText value={'-Modifier (mo)-'} />
                    <HeroPassiveTextField statKey={'Mod1'} />
                    <HeroPassiveTextField statKey={'Mod2'} />
                    <HeroPassiveTextField statKey={'Mod3'} />
                    <HeroPassiveTextField statKey={'Mod4'} />
                    <HeroPassiveTextField statKey={'Mod5'} />
                    <HeroPassiveTextField statKey={'Mod6'} />


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
    }
});


