import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

type Props = {
    sumberGambar: string,
    judul: string,
    keterangan: string,
}

const PlaceholderImage = require('@/assets/images/08.jpeg');

export default function Card({ sumberGambar, judul, keterangan }: Props) {
    const imageSource = sumberGambar ? { uri: sumberGambar } : PlaceholderImage;
    return (
        <View style={styles.panel} >
            <Image style={styles.image} source={"https://mirzayogy.github.io/assets/image/02.jpeg"}></Image>
            <View>
                <Text style={styles.textWhite}>Senja Mesjid Nabawi</Text>
                <Text style={styles.textWhiteKecil}>Masjid Nabawi ketika senja melanda</Text>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    textWhite: {
        fontSize: 20,
        color: '#fff'
    },
    panel: {
        backgroundColor: '#25292e',
        padding: 18,
        borderRadius: 16,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    // lingkaran: {
    //     backgroundColor: 'teal',
    //     width: 70,
    //     height: 70,
    //     borderRadius: 35,
    //     padding: 8,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginRight: 16,
    // },
    image: {
        width: 80,
        height: 70,
        borderRadius: 2,
        marginEnd: 24,
    },
    textWhiteKecil: {
        fontSize: 12,
        color: '#fff'
    }
})
