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
import ClickButtonText  from '../components/HeaderText';

export default function Inventory({ navigation }) {
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

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar hidden/>
            <ScrollView style={styles.scrollView}>
            <ImageBackground
                    style={styles.backgroundImage}
                    imageStyle={{ opacity: 0.3, resizeMode: 'repeat' }}
                    source={require("../assets/images/texture.jpg")}>            
                <View>
                <View style={styles.heroSheetContainer}>
                    </View>
            </View>
            <ClickButtonText value="Here are the maps and legend from the center of the book." />
            <ClickButtonText value="Hold your finger on an image to see the legend." />
                <View style={styles.imagesContainer}>
                    <Pressable
                            onLongPress={handleImageTitheChangeIn}
                            onPressOut={handleImageTitheChangeOut}
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed ? "gold" : "rgb(20, 20, 20)",
                                },
                            ]}>
                        <Image source={imageTitheAsset} />  
                    </Pressable>
                    <Pressable
                            onLongPress={handleImageMistChangeIn}
                            onPressOut={handleImageMistChangeOut}
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed ? "gold" : "rgb(255, 0, 0)",
                                },
                            ]}>
                        <Image source={imageMistAsset} />  
                    </Pressable>
                    <Pressable
                            onLongPress={handleImageBoneChangeIn}
                            onPressOut={handleImageBoneChangeOut}
                            style={({ pressed }) => [
                                styles.button,
                                {
                                    backgroundColor: pressed ? "gold" : "rgb(255, 0, 0)",
                                },
                            ]}>
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
        marginHorizontal: 10,
        backgroundColor: 'transparent',
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
});