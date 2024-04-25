import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';

import {
    SafeAreaView,
    StyleSheet,
    View,
    ScrollView,
    ImageBackground
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import ButtonText from '../components/ButtonText';
import ClickButtonText  from '../components/HeaderText';
import Dice from '../components/Dice'
import PressableStatButton from '../components/PressableStatButton';
import PressableCombatTrackHeroPassive from "../components/PressableCombatTrackHeroPassive";
import PressableButtonText from '../components/PressableButtonText';

export default function CombatTracker() {
    const [fontsLoaded] = useFonts({
        'SteelworksVintageDemo': require("../assets/fonts/SteelworksVintageDemo.otf"),
    });
    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    if (!fontsLoaded) {
        return undefined;
    } else {
        SplashScreen.hideAsync();
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden/>
            <ScrollView style={styles.scrollView}>
            <ImageBackground imageStyle={{ opacity: 0.3, resizeMode: 'repeat', }} source={require("../assets/images/texture.jpg")}>
                    <View>
                        <View style={styles.combatContainer}>
                            <View>
                                <ButtonText value={'-Your Hero-'} />
                                <View style={styles.statsContainer}>
                                    <PressableStatButton value={'Speed'} statKey={"Speed"} />
                                    <PressableStatButton value={'Brawn'} statKey={"Brawn"} />
                                    <PressableStatButton value={'Magic'} statKey={"Magic"} />
                                    <PressableStatButton value={'Armor'} statKey={"Armor"} />
                                    <PressableStatButton value={'Health'} statKey={"Health"} />
                                </View>
                            </View>
                            <View>
                                <PressableCombatTrackHeroPassive />
                            </View>
                            <View>
                                <ButtonText value={'-Your Opponent-'} />
                                <PressableButtonText statKey={'Opponent Name'} value={'Enter Opponents Name'} />
                                <View style={styles.statsContainer}>
                                    <PressableStatButton value={'Speed'} statKey={"OppSpeed"} />
                                    <PressableStatButton value={'Brawn'} statKey={"OppBrawn"} />
                                    <PressableStatButton value={'Magic'} statKey={"OppMagic"} />
                                    <PressableStatButton value={'Armor'} statKey={"OppArmor"} />
                                    <PressableStatButton value={'Health'} statKey={"OppHealth"} />
                                </View>
                            </View>
                            <View>
                                <PressableButtonText statKey={'Opponent Passive1'} value={'Passive 1'} />
                                <PressableButtonText statKey={'Opponent Passive2'} value={'Passive 2'}/>
                                <PressableButtonText statKey={'Opponent Passive3'} value={'Passive 3'}/>
                            </View>
                            <View>
                                <ButtonText value='Dice Roller (2D6)' />
                            <View style={styles.buttonContainer}>
                                <View style={styles.buttonGroup}>
                                    <ClickButtonText value={'-Hero Dice-'} />
                                    <Dice />
                                </View>
                                <View style={styles.buttonGroup}>
                                    <ClickButtonText value={'-Opponent Dice-'} />
                                    <Dice />
                                </View>
                            </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(20, 20, 20)',
    },
    scrollView: {
        marginHorizontal: 1,
        backgroundColor: 'black'
    },
    heroSheetContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        flex: 1,
    },
    menuItem: {
        flex: 1,
        marginHorizontal: 5,
    },
    combatContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },

    buttonGroup: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});