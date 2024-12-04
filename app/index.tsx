import { FlatList, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Card from "@/components/Card";

let dataCard = {
  "error": false,
  "message": "Berhasil ambil data",
  "posts": [
    {
      "id": 1,
      "sumberGambar": "https://mirzayogy.github.io/assets/image/08.jpeg",
      "judul": "Luar Masjid Nabawi",
      "keterangan": "Pemandangan hotel di luar Masjid Nabawi"
    },
    {
      "id": 2,
      "sumberGambar": "https://mirzayogy.github.io/assets/image/02.jpeg",
      "judul": "Senja Masjid Nabawi",
      "keterangan": "Masjid Nabawi ketika senja melanda"
    },
    {
      "id": 3,
      "sumberGambar": "https://mirzayogy.github.io/assets/image/09.jpeg",
      "judul": "Masjid Nabawi Pagi",
      "keterangan": "Pemandangan Masjid Nabawi di pagi hari"
    },
    {
      "id": 4,
      "sumberGambar": "https://mirzayogy.github.io/assets/image/03.jpeg",
      "judul": "Payung Senja",
      "keterangan": "Payung Masjid Nabawi yang sedang tertutup"
    }
  ]
}


export default function Index() {
  return (
    // <View style={styles.container}>
    //   <Card
    //     sumberGambar={'https://mirzayogy.github.io/assets/image/08.jpeg'}
    //     judul={"Luar Masjid Nabawi"}
    //     keterangan={"Pemandangan hotel di luar Masjid Nabawi"}
    //   />
    //   <Card
    //     sumberGambar={'https://mirzayogy.github.io/assets/image/02.jpeg'}
    //     judul={"Luar Masjid Nabawi"}
    //     keterangan={"Pemandangan hotel di luar Masjid Nabawi"}
    //   />
    //   <Card
    //     sumberGambar={'https://mirzayogy.github.io/assets/image/09.jpeg'}
    //     judul={"Luar Masjid Nabawi"}
    //     keterangan={"Pemandangan hotel di luar Masjid Nabawi"}
    //   />
    // </View>
    <View style={styles.container}>
      <FlatList
        data={dataCard.posts}
        renderItem={({ item, index }) => (
          < Card
            id={item.id}
            sumberGambar={item.sumberGambar}
            judul={item.judul}
            keterangan={item.keterangan}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

})
