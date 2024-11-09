import { View, Pressable, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { FoodProps } from '..';

export function CardHorizontalFood({ food }: { food: FoodProps }) {
    return (
        <Pressable className='flex flex-col rounded-x1'>
            <Image
                source={{ uri: food.image }}
                className="w-44 h-36 rounded-x1"
            />

            <View className='flex flex-row bg-neutral-900/90 w-fit gap-1' >
                <Ionicons name="star" size={14} color={"#ca8a04"} />
                <Text className='text-white text-sm '>
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

        </Pressable>
    );
}