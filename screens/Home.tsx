import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import ButtonTextBiggerHome from "../components/ButtonTextBiggerHome";


export default function Home() {
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
        color: 'white',
        fontFamily: 'SteelworksVintageDemo',
        fontSize: 55,
        backgroundColor: 'rgba(20, 20, 20, 0.550)',
        padding: 7
    },
    button: {
        fontFamily: 'monospace',
        color: 'white',
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
});
