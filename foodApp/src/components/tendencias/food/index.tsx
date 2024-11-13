import { View, Pressable, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FoodProps } from '..';
import { useCart } from '@/src/CartContext';

export function CardHorizontalFood({ food }: { food: FoodProps }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Converte FoodProps para Product, adicionando a propriedade 'quantity'
    const product = { ...food, quantity: 1 };
    
    // Chama a função de adicionar ao carrinho
    addToCart(product);
    
    // Exibe o alerta de sucesso
    Alert.alert("Produto adicionado no carrinho");
  };

  return (
    <Pressable className='flex flex-col rounded-x1'>
      <Image
        source={{ uri: food.image }}
        className="w-44 h-36 rounded-x1"
      />

      <View className='flex flex-row bg-neutral-900/90 w-fit gap-1 items-center'>
        <Ionicons name="star" size={18} color={"#ca8a04"} />
        <Text className='text-white text-base'>
          {food.rating}
        </Text>
      </View>
      
      <Text className='text-green-700 font-medium text-lg'>
        R$ {food.price}
      </Text>

      <Text className='text-black mt-1 font-bold'>
        {food.name}
      </Text>

      <Text className='text-neutral-600 mt-1 text-sm'>
        {food.time} - {food.delivery}
      </Text>

      <TouchableOpacity
        className='bg-orange-600 p-2 rounded-lg flex flex-row items-center mt-2'
        onPress={handleAddToCart}
      >
        <MaterialIcons name="add-shopping-cart" size={18} color="white" />
        <Text className='text-white font-bold ml-8'>Carrinho</Text>
      </TouchableOpacity>
    </Pressable>
  );
}
