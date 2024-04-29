import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
    SafeAreaView,
    StyleSheet,
    View,
    ScrollView,
    ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ButtonText from "../components/ButtonText";
import PressableButtonText from "../components/PressableButtonText";
import PressableInventoryAction from "../components/PressableInventoryAction";
import PressableStatButton from "../components/PressableStatButton";
import PressableButtonInventory from "../components/PressableButtonInventory"
import GenerateRandomName from "../components/GenerateRandomName";
import Cloak from "../constants/gear/Cloak";
import Head from "../constants/gear/Head"
import Gloves from "../constants/gear/Gloves";
import Chest from "../constants/gear/Chest";
import Feet from "../constants/gear/Feet";
import LeftHand from "../constants/gear/LeftHand";
import Talisman from "../constants/gear/Talisman";
import Necklace from "../constants/gear/Necklace";
import MainHand from "../constants/gear/MainHand";
import Rings from "../constants/gear/Rings";
import HeroPath from "../components/HeroPath";
import HeroCareer from "../components/HeroCareer";
import PressableCrownsButton from "../components/PressableCrownsButton";
import PressableHealthButton from "../components/PressableHealthButton"
import { Colors } from '../constants/colors/Colors';

export default function Inventory({ navigation }) {

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
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar  hidden/>
            <ScrollView style={styles.scrollView}>
                <ImageBackground imageStyle={{ opacity: 0.2, resizeMode: 'repeat'}} source={require("../assets/images/texture.jpg")}>
                    <View>
                        <View style={styles.menuContainer}>
                            <View style={styles.menuItem}> 
                                <PressableInventoryAction value="Special Abilities" onPress={() => navigation.navigate("Special Abilities")} />
                            </View>
                            <View style={styles.menuItem}>
                                <PressableInventoryAction value="Combat Tracker" onPress={() => navigation.navigate("Combat Tracker")} />
                            </View>
                        </View>
                        <View style={styles.menuContainer}>
                            <View style={styles.menuItem}>
                                <PressableInventoryAction value="Notes" onPress={() => navigation.navigate("Notes")} />
                            </View>
                            <View style={styles.menuItem}>
                                <PressableInventoryAction value="Maps" onPress={() => navigation.navigate("Maps")} />
                            </View>
                            <View style={styles.menuItem}>
                                <PressableInventoryAction value="Home" onPress={() => navigation.navigate("Home")} />
                            </View>
                        </View>
                    </View>
                    <ButtonText value={'-Hero-'} />
                    <View style={styles.randomName}>
                        <GenerateRandomName statKey={'Name'} value={'Name'} />
                    </View>
                    <View style={styles.nameContainer} >
                        <HeroPath statKey={'Path'} value={'Path'} />
                        <HeroCareer statKey={'Career'} value={'Career'} />
                    </View>
                    <ButtonText value={'-Gear-'} />
                    <View style={styles.backpackContainer} >
                        <PressableButtonInventory statKey={'Cloak'} value={'Cloak'} data={Cloak} />
                        <PressableButtonInventory statKey={'Head'} value={'Head'} data={Head}  />
                        <PressableButtonInventory statKey={'Gloves'} value={'Gloves'} data={Gloves} />
                    </View>
                    <View style={styles.backpackContainer}>
                        <PressableButtonInventory statKey={'Main Hand'} value={'Main Hand'} data={MainHand} />
                        <PressableButtonInventory statKey={'Chest'} value={'Chest'} data={Chest}  />
                        <PressableButtonInventory statKey={'Left Hand'} value={'Left Hand'} data={LeftHand} />
                    </View>
                    <View style={styles.backpackContainer}>
                        <PressableButtonInventory statKey={'Talisman'} value={'Talisman'} data={Talisman} />
                        <PressableButtonInventory statKey={'Feet'} value={'Feet'} data={Feet} />
                    </View>
                    <View style={styles.backpackContainer}>
                        <PressableButtonInventory statKey={'LeftRing'} value={'Left Ring'} data={Rings} />
                        <PressableButtonInventory statKey={'Necklace'} value={'Necklace'} data={Necklace} />
                        <PressableButtonInventory statKey={'RightRing'} value={'Right Ring'} data={Rings} />
                    </View>
                    <ButtonText value={'-Stats-'} />
                    <View style={styles.statsContainer}>
                        <PressableStatButton value={'Speed'} statKey={"Speed"}  />
                        <PressableStatButton value={'Brawn'} statKey={"Brawn"} />
                        <PressableStatButton value={'Magic'} statKey={"Magic"} />
                    </View>
                    <View style={styles.statsContainer}>    
                        <PressableStatButton value={'Armor'} statKey={"Armor"} />
                        <PressableHealthButton value={'Health'} statKey={"Health"} />
                        <PressableCrownsButton value={'Crowns'} statKey={"Money Pouch"} />
                    </View>
                    <ButtonText value={'-Backpack-'} />
                    <View style={styles.backpackContainer} >
                        <PressableButtonText statKey={'Item 1'} value={'Item 1'} />
                        <PressableButtonText statKey={'Item 2'} value={'Item 2'} />
                    </View>
                    <View style={styles.backpackContainer} >
                        <PressableButtonText statKey={'Item 3'} value={'Item 3'} />
                        <PressableButtonText statKey={'Item 4'} value={'Item 4'} />
                    </View>
                    <View style={styles.backpackContainer} >
                        <PressableButtonText statKey={'Item 5'} value={'Item 5'} />
                        <PressableButtonText statKey={'Item 6'} value={'Item 6'} />
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
        backgroundColor: Colors.backgroundBlack,
    },
    heroSheetContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    heroNameTextInput: {
        backgroundColor: Colors.textColor,
        fontFamily: "monospace",
        textAlign: "center",
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.backgroundBlack,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20
    },
    menuItem: {
        flex: 1,
        marginHorizontal: 5,
    },
    nameContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    careerPathContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: Colors.backgroundGold,
        padding: 5
    },
    modalTextInput: {
        backgroundColor: Colors.textColor,
        width: 180,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.backgroundBlack,
    },
    heroModalText: {
        color: Colors.backgroundBlack,
        backgroundColor: Colors.backgroundGold,
        borderWidth: 2,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10
    },
    inventoryContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
    scrollView: {
        marginHorizontal: 1,
        backgroundColor: Colors.backgroundBlack
    },
    backpackContainer: {
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    randomName: {
        flexDirection: "row"
    },
    imagestyle: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center'

    }

});