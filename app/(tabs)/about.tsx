import Profil from "@/components/Profil";
import { StyleSheet, View } from "react-native";

export default function About() {
    return (
        <View>
            <Profil />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    }
})