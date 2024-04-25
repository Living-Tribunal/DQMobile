import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
    SafeAreaView,
    StyleSheet,
    View,
    ScrollView,
    ImageBackground,
    Image,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import PressableButtonText from "../components/PressableButtonText";
import ClickButtonText from "../components/HeaderText";


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
            <StatusBar hidden/>
            <ScrollView style={styles.scrollView}>
                <ImageBackground imageStyle={{ opacity: 0.3, resizeMode: 'repeat', }} source={require("../assets/images/texture.jpg")}>
                    <View style={styles.heroSheetContainer}>
                    </View>
                    <View>
                    </View>
                    <View>
                        <ClickButtonText value={'Where did you leave off?'} />
                        <PressableButtonText value={'Section #'} statKey={"Section"} />
                    </View>
                    <View>
                        <ClickButtonText value={'Figured it might be helpful if you could take some notes as you adventure!'} />
                        <PressableButtonText statKey={'Notes1'} value={'Notes'} />
                    </View>
                    <View>
                        <PressableButtonText statKey={'Notes2'} value={'Notes'} />
                    </View>
                    <View>
                        <PressableButtonText statKey={'Notes3'} value={'Notes'} />
                    </View>
                    <View>
                        <PressableButtonText statKey={'Notes4'} value={'Notes'} />
                    </View>
                    <View>
                        <PressableButtonText statKey={'Notes5'} value={'Notes'} />
                    </View>
                    <View>
                        <PressableButtonText statKey={'Notes6'} value={'Notes'} />
                    </View>
                    <View>
                        <PressableButtonText statKey={'Notes7'} value={'Notes'} />
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
    heroSheetContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    heroNameTextInput: {
        backgroundColor: "white",
        fontFamily: "monospace",
        textAlign: "center",
        flex: 1,
        borderWidth: 1,
        borderColor: "black",
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
        marginHorizontal: 10,
        flex: 1,
    },
    modalTextInput: {
        backgroundColor: 'white',
        width: 180,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },
    heroModalText: {
        color: '#000000',
        backgroundColor: 'gold',
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
        backgroundColor: 'black'
    },
});