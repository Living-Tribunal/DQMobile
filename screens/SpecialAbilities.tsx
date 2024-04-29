import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
    SafeAreaView,
    StyleSheet,
    View,
    ScrollView,
    ImageBackground
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ButtonText from "../components/ButtonText";
import PressableInventoryAction from "../components/PressableInventoryAction";
import Passive from "../constants/passive/Passive";
import PressableButtonInventory from "../components/PressableButtonInventory";
import { Colors } from '../constants/colors/Colors';

export default function SpecialAbilities({ navigation }) {
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
            <StatusBar hidden />
            <ScrollView style={styles.scrollView}>
                <ImageBackground imageStyle={{ opacity: 0.2, resizeMode: 'repeat', }} source={require("../assets/images/texture.jpg")}>
                   {/*  <View>
                        <View style={styles.menuContainer}>
                            <View style={styles.menuItem}>
                                <PressableInventoryAction value="Inventory" onPress={() => navigation.navigate("Inventory")} />
                            </View>
                            <View style={styles.menuItem}>
                                <PressableInventoryAction value="Combat Tracker" onPress={() => navigation.navigate("Combat Tracker")} />
                            </View>
                        </View>
                        <View style={styles.menuContainer}>
                            <View style={styles.menuItem}>
                                <PressableInventoryAction value="Maps" onPress={() => navigation.navigate("Maps")} />
                            </View>
                            <View style={styles.menuItem}>
                                <PressableInventoryAction value="Notes" onPress={() => navigation.navigate("Notes")} />
                            </View>
                            <View style={styles.menuItem}>
                                <PressableInventoryAction value="Home" onPress={() => navigation.navigate("Home")} />
                            </View>
                        </View>
                    </View> */}
                    <ButtonText value={'-Speed (sp)-'} />
                    <View>
                        <PressableButtonInventory statKey={'Speed Mod 1'} value={'Speed Modifier 1'} data={Passive} />
                        <PressableButtonInventory statKey={'Speed Mod 2'} value={'Speed Modifier 2'} data={Passive} />
                        <PressableButtonInventory statKey={'Speed Mod 3'} value={'Speed Modifier 3'} data={Passive} />
                        <PressableButtonInventory statKey={'Speed Mod 4'} value={'Speed Modifier 4'} data={Passive} />
                        <PressableButtonInventory statKey={'Speed Mod 5'} value={'Speed Modifier 5'} data={Passive} />
                        <PressableButtonInventory statKey={'Speed Mod 6'} value={'Speed Modifier 6'} data={Passive} />
                    </View>
                    <ButtonText value={'-Combat (co)-'} />
                    <View>
                        <PressableButtonInventory statKey={'Combat Mod 1'} value={'Speed Modifier 1'} data={Passive} />
                        <PressableButtonInventory statKey={'Combat Mod 2'} value={'Speed Modifier 2'} data={Passive} />
                        <PressableButtonInventory statKey={'Combat Mod 3'} value={'Speed Modifier 3'} data={Passive} />
                        <PressableButtonInventory statKey={'Combat Mod 4'} value={'Speed Modifier 4'} data={Passive} />
                        <PressableButtonInventory statKey={'Combat Mod 5'} value={'Speed Modifier 5'} data={Passive} />
                        <PressableButtonInventory statKey={'Combat Mod 6'} value={'Speed Modifier 6'} data={Passive} />
                    </View>
                    <ButtonText value={'-Passive (pa)-'} />
                    <View>
                        <PressableButtonInventory statKey={'Passive Mod 1'} value={'Passive Mod 1'} data={Passive} />
                        <PressableButtonInventory statKey={'Passive Mod 2'} value={'Passive Mod 2'} data={Passive} />
                        <PressableButtonInventory statKey={'Passive Mod 3'} value={'Passive Mod 3'} data={Passive} />
                        <PressableButtonInventory statKey={'Passive Mod 4'} value={'Passive Mod 4'} data={Passive} />
                        <PressableButtonInventory statKey={'Passive Mod 5'} value={'Passive Mod 5'} data={Passive} />
                        <PressableButtonInventory statKey={'Passive Mod 6'} value={'Passive Mod 6'} data={Passive} />

                    </View>
                    <ButtonText value={'-Modifier (mo)-'} />
                    <View >
                        <PressableButtonInventory statKey={'Mod1'} value={'Modifier 1'} data={Passive} />
                        <PressableButtonInventory statKey={'Mod2'} value={'Modifier 2'} data={Passive} />
                        <PressableButtonInventory statKey={'Mod3'} value={'Modifier 3'} data={Passive} />
                        <PressableButtonInventory statKey={'Mod4'} value={'Modifier 4'} data={Passive} />
                        <PressableButtonInventory statKey={'Mod5'} value={'Modifier 5'} data={Passive} />
                        <PressableButtonInventory statKey={'Mod6'} value={'Modifier 6'} data={Passive} />
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
    menuItem: {
        flex: 1,
        marginHorizontal: 5,
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
        borderColor: Colors.scrollviewBackground,
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
});