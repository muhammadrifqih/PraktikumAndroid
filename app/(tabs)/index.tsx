import { FlatList, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Card from "@/components/Card";

const dataCard = require('@/assets/dataCard.json');


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
