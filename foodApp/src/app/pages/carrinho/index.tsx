import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CartCard from '../../../components/cart/cart_card'; 

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restauranteId: number;
}

export default function CartScreen()  {

  const [cartItems, setCartItems] = useState<FoodProps[]>([])

  useEffect(() => {
    async function getCartItems() {
      const response = await fetch("http://192.168.1.8:3000/foods")
      const data = await response.json()
      const updatedData = data.map(item => ({
        ...item,
        quantity: 1, 
      }));
      setCartItems(updatedData);
    }

    getCartItems();
  }, [])

  const updateQuantity = (id, type) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: type === 'increase' ? item.quantity + 1 : item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove o item se a quantidade for 0
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  return (
    <SafeAreaView className="flex-1 pt-7 bg-white">
      <View className="flex-row items-center p-4 mx-4">
        <MaterialIcons name="arrow-back-ios" size={28} />
        <Text className="text-lg font-bold">Carrinho</Text>
      </View>
      <View>
        <FlatList 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CartCard item={item} updateQuantity={updateQuantity} />}
          ListFooterComponent={() => (
            <View className="px-4 mt-5">
              <View className="flex-row justify-between mb-4">
                <Text className="text-xl font-bold">Preço Total</Text>
                <Text className="text-xl font-bold">R${getTotalPrice()}</Text>
              </View>
              <Button title="COMPRAR" />
            </View>
          )}
        />
      </View>

    </SafeAreaView>
  );
};