import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Card from "@/components/Card";

const LocaImage = require('@/assets/images/08.jpeg');

export default function Index() {
  return (
    <View style={styles.container}>
      <Card
        sumberGambar={'https://mirzayogy.github.io/assets/image/08.jpeg'}
        judul={"Luar Masjid Nabawi"}
        keterangan={"Pemandangan hotel di luar Masjid Nabawi"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

})
