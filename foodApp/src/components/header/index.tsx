import { View, Pressable, Text } from "react-native";

import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons'
import { router } from "expo-router";

export function Header() {
    return (
        <View className="w-full flex flex-row items-center justify-between">
            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <Ionicons name="menu" size={20} color="#121212" />
            </Pressable>

            <View className="flex flex-col items-center justify-center ">
                <Text className="text-center text-sm text-slate-700">Localização</Text>
                <View className="flex-row itens-center justify-center gap-1 ">
                    <Feather name="map-pin" size={14} color="#FF0000" />
                    <Text className="text-lg font-bold">Aracaju</Text>
                </View>
            </View>

            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <MaterialIcons
                    name="shopping-cart"
                    size={20}
                    color="black"
                    onPress={() => router.push('/carrinho')}
                />
            </Pressable>
        </View>
    )
}