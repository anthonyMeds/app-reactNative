import { View, Pressable, Text, Image } from 'react-native';

import { RestaurantsProps } from '../../../app/restauranteVertical';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

export function RestauranteItem({ item }: { item: RestaurantsProps }) {
    return (
        <Pressable className='flex flex-row items-center justify-start gap-2'
            onPress={() => router.push("/listaComidasVertical")}>

            <Image
                source={{ uri: item.image }}
                className='w-20 h-20 rounded-full'

            />

            <View className='flex-row gap-2'>

                <Ionicons name='star' size={14} color="#ca8a04" />

                <Text className='text-base text-black leading-4 font-bold' numberOfLines={2}>
                    {item.name}
                </Text>

            </View>

        </Pressable>
    );
}