
// import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StyleSheet, View, SafeAreaView} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Inventory from './screens/Inventory';
import SpecialAbilities from './screens/SpecialAbilities';
import Home from './screens/Home';
import Notes from './screens/Notes';
import Maps from './screens/Maps';
// import { CardStyleInterpolators } from '@react-navigation/stack';
import CombatTracker from './screens/CombatTracker';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import ButtonTextBigger from './components/ButtonTextBiggerHome';
import ResetHeroButtonPage from './screens/ResetHeroButtonPage';

const Drawer = createDrawerNavigator();

function MyStack() {
    
    return (
        <Drawer.Navigator initialRouteName='Home' 
        screenOptions={{
            drawerStyle: {
            width: 300,
            backgroundColor: 'gold'
            },
            drawerActiveTintColor: "rgb(255, 255, 255)",
            headerTintColor: 'rgb(20, 20, 20)',
            headerTitleStyle: {
                fontFamily: 'monospace',
                backgroundColor:'gold',
                fontSize: 16,
                fontWeight: 'bold',
            },
            headerStyle: {
                backgroundColor: 'gold',
                
            },
            drawerContentStyle:{
                backgroundColor: 'gold',
            },
            drawerInactiveTintColor: '#282828',
            drawerActiveBackgroundColor: '#282828',
            headerTitleAlign: 'center',
            drawerLabelStyle:{
                fontFamily: 'monospace',
                fontWeight: 'bold'
            }
          }}
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Inventory" component={Inventory} />
            <Drawer.Screen name="Special Abilities" component={SpecialAbilities} />
            <Drawer.Screen name="Combat Tracker" component={CombatTracker} />
            <Drawer.Screen name="Maps" component={Maps} />
            <Drawer.Screen name="Notes" component={Notes} />
            <Drawer.Screen name="Reset Hero" component={ResetHeroButtonPage} />
        </Drawer.Navigator>
  
    );
}

export default function App() {
    const [fontsLoaded] = useFonts({
        'SteelworksVintageDemo': require('./assets/fonts/SteelworksVintageDemo.otf'),
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
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(0, 0, 0)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topText: {
        color: 'white',
        fontFamily: 'SteelworksVintageDemo',
        fontSize: 55,
        justifyContent: 'center',
        alignContent: 'center',
    },
    button: {
        fontFamily: 'monospace',
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    heroButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 200
    }
});
