
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { RestauranteItem } from '../components/restaurantsList/restauranteItemVertical';
import { API_URL } from '../../config';
import { useRouter } from 'expo-router'; // Importar o hook useRouter
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string;
}

export default function RestaurantsList() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);
    const router = useRouter(); // Inicializar o router para navegação

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch(`${API_URL}/restaurants`);
            console.log(response);
            const data = await response.json();
            setRestaurants(data);
        }

        getRestaurants();
    }, []);

    return (
        <View className="px-4 flex-1 w-full h-full mb-11 gap-4" style={{ marginTop: statusBarHeight + 8 }}>
            <View className="flex-row items-center p-4 mx-4">
                <MaterialIcons name="arrow-back-ios" size={28} onPress={() => router.push('/')} />
                <Text className="text-lg font-bold">Menu</Text>
            </View>

            {/* Exibição dos restaurantes */}
            {restaurants.length > 0 ? (
                restaurants.map(item => (
                    <RestauranteItem item={item} key={item.id} />
                ))
            ) : (
                <Text>Carregando restaurantes...</Text>
            )}
        </View>
    );
}
