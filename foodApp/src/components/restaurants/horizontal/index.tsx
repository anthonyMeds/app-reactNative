import { View, Pressable, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsProps } from '..';

export function Horizontal({ restaurant }: { restaurant: RestaurantsProps }) {
    return (
        <Pressable
            className='flex flex-col items-center justify-center mb-6 '
            onPress={() => console.log("clicou no restautante")}
        >

            <Image
                source={{ uri: restaurant.image }}
                className="w-44 h-36 rounded-1x1"
            />

            <Text className='text-black text-center leading-2 font-semibold ' numberOfLines={2}>
                {restaurant.name}
            </Text>


        </Pressable>
    );
}