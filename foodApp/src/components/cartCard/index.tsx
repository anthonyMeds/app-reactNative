import { useCart } from "@/src/CartContext";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

export function CartCard({ item }: any) {

  const { decrementQuantity, incrementQuantity } = useCart();




  return (
    <View className="flex-row items-center p-4 m-2 bg-white rounded-2xl shadow-lg shadow-slate-950">
      <Image source={{ uri:item.image}} className="w-20 h-20 rounded-full" />
      <View className="flex-1 ml-4 py-2 gap-5">
        <Text className="text-xl font-black">{item.name}</Text>
        <Text className="text-xl font-bold">R${(item.price * item.quantity).toFixed(2)}</Text>
      </View>
      <View className="mr-5 items-center">
        <Text className="text-xl font-bold mb-1">{item.quantity}</Text>
        <View className="flex-row items-center justify-center mt-2">
          <View className="bg-orange-600 p-2 mt rounded-l-3xl">
            <MaterialIcons
              name="remove"
              size={20}
              color="white"
              onPress={() => decrementQuantity(item.id)}
            />
          </View>
          <View className="bg-orange-600 p-2 rounded-r-3xl">
            <MaterialIcons
              name="add"
              size={20}
              color="white"
              onPress={() => incrementQuantity(item.id)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};