import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const profileImage = require('@/assets/images/snappy.png');

export default function Profik() {
    return (
        <View style={styles.profil}>
            <Image source={profileImage} style={styles.gambarProfil} />
            <View style={styles.textContainer}>
                <Text style={styles.textTebal}>Rifqi Hidayat</Text>
                <Text>alwats@email.com</Text>
                <Text>+628349384832</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    gambarProfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginEnd: 12,
    },
    profil: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        height: 72,
    },
    textTebal: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    textContainer: {
        justifyContent: 'space-around',
        flex: 1,
        height: "100%"
    }
})