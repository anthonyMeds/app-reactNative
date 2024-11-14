import { ScrollView, View } from "react-native";
import { Header } from "../components/header";

import Constants from 'expo-constants';
import { router } from "expo-router";
import Banner from "../components/banner";
import { Restaurants } from "../components/restaurants";
import { Search } from "../components/search";
import { Sections } from "../components/sections";
import { Tendencias } from "../components/tendencias";
import RestauranteVertical from "./restauranteVertical";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >

      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }} >
        <Header />

        <Banner />

        <Search />

      </View>

      <Sections
        name="Comidas em alta"
        label="veja mais"
        size="text-2x1"
        action={() => router.push("/listaComidasVertical")}
      />

      <Tendencias />

      <Sections
        name="Restaurantes"
        label="veja mais"
        size="text-2x1"
        action={() => router.push("/restauranteVertical")}
      />

      <Restaurants />



    </ScrollView>
  );
}