import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    SafeAreaView,
    StyleSheet,
    View,
    ScrollView,
    Pressable,
    Image,
    ImageBackground
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import PressableInventoryAction from "../components/PressableInventoryAction";
import ClickButtonText from '../components/HeaderText';
import QuestComplete from "../components/QuestComplete";

export default function Maps({ navigation }) {
    const bone = require("../assets/images/bone.jpg")
    const mist = require("../assets/images/mist.jpg")
    const tithe = require("../assets/images/tithe.jpg")
    const [imageBoneAsset, setImageBoneAsset] = useState(bone)
    const [imageMistAsset, setImageMistAsset] = useState(mist)
    const [imageTitheAsset, setImageTitheAsset] = useState(tithe)

    const handleImageBoneChangeIn = () => {
        const newBoneImg = require("../assets/images/legend.jpg")
        setImageBoneAsset(newBoneImg)
    }

    const handleImageBoneChangeOut = () => {
        const returnBoneImage = require("../assets/images/bone.jpg")
        setImageBoneAsset(returnBoneImage)
    }

    const handleImageMistChangeIn = () => {
        const newMistImg = require("../assets/images/legend.jpg")
        setImageMistAsset(newMistImg)
    }

    const handleImageMistChangeOut = () => {
        const returnMistImage = require("../assets/images/mist.jpg")
        setImageMistAsset(returnMistImage)
    }

    const handleImageTitheChangeIn = () => {
        const newTitheImg = require("../assets/images/legend.jpg")
        setImageTitheAsset(newTitheImg)
    }

    const handleImageTitheChangeOut = () => {
        const returnTitheImage = require("../assets/images/tithe.jpg")
        setImageTitheAsset(returnTitheImage)
    }

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
            <StatusBar hidden />
            <ScrollView style={styles.scrollView}>
                <ImageBackground
                    style={styles.backgroundImage}
                    imageStyle={{ opacity: 0.2, resizeMode: 'repeat' }}
                    source={require("../assets/images/texture.jpg")}>
                    <View>
                        <View>
                            <View style={styles.menuContainer}>
                                <View style={styles.menuItem}>
                                    <PressableInventoryAction value="Inventory" onPress={() => navigation.navigate("Inventory")} />
                                </View>
                                <View style={styles.menuItem}>
                                    <PressableInventoryAction value="Special Abilities" onPress={() => navigation.navigate("Special Abilities")} />
                                </View>
                            </View>
                            <View style={styles.menuContainer}>
                                <View style={styles.menuItem}>
                                    <PressableInventoryAction value="Combat Tracker" onPress={() => navigation.navigate("Combat Tracker")} />
                                </View>
                                <View style={styles.menuItem}>
                                    <PressableInventoryAction value="Notes" onPress={() => navigation.navigate("Notes")} />
                                </View>
                                <View style={styles.menuItem}>
                                    <PressableInventoryAction value="Home" onPress={() => navigation.navigate("Home")} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <ClickButtonText value="Here are the maps and legend from the center of the book." />
                    <ClickButtonText value="Hold your finger on an image to see the legend." />
                    <View style={styles.imagesContainer}>                        
                        <Pressable
                            onLongPress={handleImageTitheChangeIn}
                            onPressOut={handleImageTitheChangeOut}
                            style={styles.button}>
                            <Image source={imageTitheAsset} />
                        </Pressable>
                        <View>
                            <ClickButtonText value="Tithebury: Quest Completion Tracker" />
                        </View>
                        <View style={styles.comp}>
                            <QuestComplete statKey="15" value="15" />
                            <QuestComplete statKey="16" value="16" />
                            <QuestComplete statKey="17" value="17" />
                            <QuestComplete statKey="18" value="18" />
                        </View>
                        <Pressable
                            onLongPress={handleImageMistChangeIn}
                            onPressOut={handleImageMistChangeOut}
                            style={styles.button}>
                            <Image source={imageMistAsset} />
                        </Pressable>
                        <Pressable
                            onLongPress={handleImageBoneChangeIn}
                            onPressOut={handleImageBoneChangeOut}
                            style={styles.button}>
                            <Image source={imageBoneAsset} />
                        </Pressable>

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
        backgroundColor: 'black'
    },
    imagesContainer: {
        backgroundColor: 'transparent',
    },
    images: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuItem: {
        flex: 1,
        marginHorizontal: 5,
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: 'gold',
        padding: 5
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    heroSheetContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'transparent'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    scrollView: {
        marginHorizontal: 1,
    },
    comp: {
        flex: 1,
        flexDirection: "row"
    },
});