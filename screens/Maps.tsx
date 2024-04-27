import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import PressableInventoryAction from "../components/PressableInventoryAction";
import ClickButtonText from "../components/HeaderText";
import QuestEasy from "../components/QuestEasy";
import QuestAverage from "../components/QuestAverage";
import QuestHard from "../components/QuestHard";
import QuestHardest from "../components/QuestHardest";
import QuestBoss from "../components/QuestBoss";
import QuestLegendary from "../components/QuestLegendary";

export default function Maps({ navigation }) {
  const bone = require("../assets/images/bone.jpg");
  const mist = require("../assets/images/mist.jpg");
  const tithe = require("../assets/images/tithe.jpg");
  const [imageBoneAsset, setImageBoneAsset] = useState(bone);
  const [imageMistAsset, setImageMistAsset] = useState(mist);
  const [imageTitheAsset, setImageTitheAsset] = useState(tithe);

  const handleImageBoneChangeIn = () => {
    const newBoneImg = require("../assets/images/legend.jpg");
    setImageBoneAsset(newBoneImg);
  };

  const handleImageBoneChangeOut = () => {
    const returnBoneImage = require("../assets/images/bone.jpg");
    setImageBoneAsset(returnBoneImage);
  };

  const handleImageMistChangeIn = () => {
    const newMistImg = require("../assets/images/legend.jpg");
    setImageMistAsset(newMistImg);
  };

  const handleImageMistChangeOut = () => {
    const returnMistImage = require("../assets/images/mist.jpg");
    setImageMistAsset(returnMistImage);
  };

  const handleImageTitheChangeIn = () => {
    const newTitheImg = require("../assets/images/legend.jpg");
    setImageTitheAsset(newTitheImg);
  };

  const handleImageTitheChangeOut = () => {
    const returnTitheImage = require("../assets/images/tithe.jpg");
    setImageTitheAsset(returnTitheImage);
  };

  const [fontsLoaded] = useFonts({
    SteelworksVintageDemo: require("../assets/fonts/SteelworksVintageDemo.otf"),
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
        <ImageBackground
          style={styles.backgroundImage}
          imageStyle={{ opacity: 0.2, resizeMode: "repeat" }}
          source={require("../assets/images/texture.jpg")}
        >
          <View>
            <View>
              <View style={styles.menuContainer}>
                <View style={styles.menuItem}>
                  <PressableInventoryAction
                    value="Inventory"
                    onPress={() => navigation.navigate("Inventory")}
                  />
                </View>
                <View style={styles.menuItem}>
                  <PressableInventoryAction
                    value="Special Abilities"
                    onPress={() => navigation.navigate("Special Abilities")}
                  />
                </View>
              </View>
              <View style={styles.menuContainer}>
                <View style={styles.menuItem}>
                  <PressableInventoryAction
                    value="Combat Tracker"
                    onPress={() => navigation.navigate("Combat Tracker")}
                  />
                </View>
                <View style={styles.menuItem}>
                  <PressableInventoryAction
                    value="Notes"
                    onPress={() => navigation.navigate("Notes")}
                  />
                </View>
                <View style={styles.menuItem}>
                  <PressableInventoryAction
                    value="Home"
                    onPress={() => navigation.navigate("Home")}
                  />
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
              style={styles.button}
            >
              <Image source={imageTitheAsset} />
            </Pressable>
            <View>
              <ClickButtonText value="Tithebury: Quest Completion Tracker" />
            </View>
            <View style={styles.comp}>
              <QuestEasy statKey="10" value="10" />
              <QuestEasy statKey="15" value="15" />
              <QuestEasy statKey="22" value="22" />
              <QuestAverage statKey="4" value="4" />
              <QuestAverage statKey="66" value="66" />
              <QuestHard statKey="25" value="25" />
              <QuestHard statKey="111" value="111" />
              <QuestHardest statKey="87" value="87" />
              <QuestBoss statKey="97" value="97" />
              <QuestLegendary statKey="18" value="18" />
              <QuestLegendary statKey="29" value="29" />
              <QuestLegendary statKey="49" value="49" />
            </View>
            <Pressable
              onLongPress={handleImageMistChangeIn}
              onPressOut={handleImageMistChangeOut}
              style={styles.button}
            >
              <Image source={imageMistAsset} />
            </Pressable>
            <View>
              <ClickButtonText value="Mistwood/BlackMarsh: Quest Completion Tracker" />
            </View>
            <View style={styles.comp}>
              <QuestEasy statKey="305" value="305" />
              <QuestAverage statKey="321" value="321" />
              <QuestAverage statKey="326" value="326" />
              <QuestHard statKey="315" value="315" />
              <QuestHardest statKey="345" value="345" />
              <QuestBoss statKey="419" value="419" />
              <QuestLegendary statKey="313" value="313" />
              <QuestLegendary statKey="335" value="335" />
              <QuestLegendary statKey="350" value="350" />
              <QuestLegendary statKey="357" value="357" />
              <QuestLegendary statKey="364" value="364" />
            </View>
            <Pressable
              onLongPress={handleImageBoneChangeIn}
              onPressOut={handleImageBoneChangeOut}
              style={styles.button}
            >
              <Image source={imageBoneAsset} />
            </Pressable>
            <View>
              <ClickButtonText value="The Bone Fields: Quest Completion Tracker" />
            </View>
            <View style={styles.comp}>
              <QuestEasy statKey="575" value="575" />
              <QuestAverage statKey="589" value="589" />
              <QuestAverage statKey="864" value="864" />
              <QuestHard statKey="618" value="618" />
              <QuestHardest statKey="613" value="613" />
              <QuestBoss statKey="635" value="635" />
              <QuestLegendary statKey="557" value="557" />
              <QuestLegendary statKey="564" value="564" />
              <QuestLegendary statKey="582" value="582" />
              <QuestLegendary statKey="595" value="595" />
              <QuestLegendary statKey="817" value="817" />
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
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  imagesContainer: {
    backgroundColor: "transparent",
  },
  images: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuItem: {
    flex: 1,
    marginHorizontal: 5,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "gold",
    padding: 5,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  heroSheetContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "transparent",
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
    flexDirection: "row",
  },
  questComplete15: {
    backgroundColor: "blue",
  },
});
