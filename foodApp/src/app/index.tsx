import { ScrollView, View } from "react-native";
import { Header } from "../components/header";

import Constants from 'expo-constants';
import Banner from "../components/banner";
import { Search } from "../components/search";
import { Sections } from "../components/sections";
import { Tendencias } from "../components/tendencias";
import { Restaurants } from "../components/restaurants";

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

      <Tendencias/>

      <Sections
        name="Restaurantes preferidos"
        label="veja mais"
        size="text-2x1"
        action={() => console.log("clicou no veja mais")}
      />

      <Restaurants/>

    </ScrollView>
  );
}
