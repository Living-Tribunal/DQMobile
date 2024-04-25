import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function ResetHero() {
    try {
        await AsyncStorage.clear();
    } catch (err) {
        console.error("Error clearing AsyncStorage:", err);
    }
}