import { Button, ScrollView, View } from "react-native";
import { Header } from "../components/header";

import Constants from 'expo-constants';
import Banner from "../components/banner";
import { Search } from "../components/search";
import { Sections } from "../components/sections";
import { Tendencias } from "../components/tendencias";
import { Restaurants } from "../components/restaurants";
import Restaurante from "../components/restaurantsList/restauranteVertical";
import RestauranteVertical from "../components/restaurantsList/restauranteVertical";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

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
        action={() => console.log("clicou no veja mais")}
      />

      <Tendencias />

      <Sections
        name="Preferidos"
        label="veja mais"
        size="text-2x1"
        action={() => console.log("clicou no veja mais")}
      />

      <Restaurants />

      <Sections
        name="Restaurantes"
        label="veja mais"
        size="text-2x1"
        action={() => console.log("clicou no veja mais")}
      />

      <RestauranteVertical />

    </ScrollView>
  );
}