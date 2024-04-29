
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import Inventory from './screens/Inventory';
import SpecialAbilities from './screens/SpecialAbilities';
import Home from './screens/Home';
import Notes from './screens/Notes';
import Maps from './screens/Maps';
//import { CardStyleInterpolators } from '@react-navigation/stack';
import CombatTracker from './screens/CombatTracker';
import { Colors } from './constants/colors/Colors';
//import { createDrawerNavigator } from '@react-navigation/drawer';

SplashScreen.preventAutoHideAsync();

//drawer was messing with my asyncstorage and i dont know why. i went back to stack.

/* const Drawer = createDrawerNavigator();

function MyDrawer() {
    
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
        </Drawer.Navigator>
  
    );
} */

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName='Home' 
            screenOptions={{gestureEnabled:true, 
                gestureDirection: 'horizontal',
                headerStyle: {
                    backgroundColor: Colors.backgroundGold,
                  },
                  headerTitleAlign: 'center',
                  headerTintColor: Colors.backgroundBlack,
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                    justifyContent: 'center'
                  },}} 
        >
            <Stack.Screen name="Inventory" component={Inventory} />
            <Stack.Screen name="Special Abilities" component={SpecialAbilities} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notes" component={Notes} />
            <Stack.Screen name="Combat Tracker" component={CombatTracker} />
            <Stack.Screen name="Maps" component={Maps} />
        </Stack.Navigator>
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
        backgroundColor: Colors.scrollviewBackground,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topText: {
        color: Colors.textColor,
        fontFamily: 'SteelworksVintageDemo',
        fontSize: 55,
        justifyContent: 'center',
        alignContent: 'center',
    },
    button: {
        fontFamily: 'monospace',
        justifyContent: 'center',
        alignContent: 'center',
        color: Colors.textColor,
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
