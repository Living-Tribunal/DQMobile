import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import ButtonTextBiggerHome from "../components/ButtonTextBiggerHome";
import PressableHomeScreenButtonText from "../components/PressableHomeScreenButtonText";
import ResetHeroButton from '../components/ResetHeroButton';
import { Colors } from '../constants/colors/Colors';

export default function Home({navigation}) {
    const [fontsLoaded] = useFonts({
        'SteelworksVintageDemo': require('../assets/fonts/SteelworksVintageDemo.otf'),
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
            <ImageBackground source={require("../assets/images/background2.jpg")} style={styles.container}>
            <View style={styles.topText}>
                    <ButtonTextBiggerHome value={'Destiny Quest'} />
                    <Text style={styles.button}>-Companion App-</Text>
                <View style={styles.heroButtonContent}>
                    <PressableHomeScreenButtonText value="Enter, Hero!" onPress={() => navigation.navigate("Inventory")} />
                </View>
                <View style={styles.resetButtonContent}>
                    <ResetHeroButton value="Reset Hero" />
                </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topText: {
        color: Colors.textColor,
        fontFamily: 'SteelworksVintageDemo',
        fontSize: 55,
        backgroundColor: Colors.home,
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        fontFamily: 'monospace',
        color: Colors.textColor,
        textAlign: 'center',
        fontSize: 30,
    },
    background: {
        position: 'relative',
        left: 0,
        right: 0,
        top: 0,
        height: 15,
      },
      heroButtonContent: {
        justifyContent: 'center',
    },
    resetButtonContent: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});