import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useCart } from '../CartContext';
import { useRouter } from 'expo-router';
import { CartCard } from '../components/cartCard';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function Carrinho() {
  const insets = useSafeAreaInsets();
  const { cart, getTotalPrice } = useCart();
  const router = useRouter();

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1">
      <View className="flex-row items-center p-4 mx-4">
        <MaterialIcons name="arrow-back-ios" size={28} onPress={() => router.push('/')} />
        <Text className="text-lg font-bold">Carrinho</Text>
      </View>

      {cart.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg text-gray-500">Seu carrinho está vazio.</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CartCard item={item} />}
          contentContainerStyle={{ paddingBottom: 100 }} 
        />
      )}

      <View className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
        <View className="flex-row justify-between mb-4">
          <Text className="text-xl font-bold">Preço Total</Text>
          <Text className="text-xl font-bold">R${getTotalPrice()}</Text>
        </View>

        <TouchableOpacity className="items-center justify-center bg-orange-600 p-4 rounded-full" onPress={() => alert("Você acabou de efetuar sua compra")
        }>
          <Text className="text-white text-lg font-bold">COMPRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
