
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { CardHorizontalFood } from '../components/tendencias/food/index';
import { API_URL } from '../../config';

const statusBarHeight = Constants.statusBarHeight;

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

export default function HighDemandFoodsList() {
    const [foods, setFoods] = useState<FoodProps[]>([]);
    const router = useRouter();

    useEffect(() => {
        async function getFoods() {
            const response = await fetch(`${API_URL}/foods`);
            const data = await response.json();
            setFoods(data);
        }

        getFoods();
    }, []);

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: 'white', marginTop: statusBarHeight + 8 }}>
            {/* Botão de Voltar */}
            <View className="flex-row items-center justify-between  mb-4">

                <MaterialIcons name="arrow-back-ios" size={28} onPress={() => router.push('/')} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Comidas em Alta</Text>

                <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <MaterialIcons
                        name="shopping-cart"
                        size={20}
                        color="black"
                        onPress={() => router.push('/carrinho')}
                    />
                </Pressable>

            </View>



            {/* Lista de Comidas em Alta */}
            <FlatList
                data={foods}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} // Exibe duas colunas
                renderItem={({ item }) => (
                    <View style={{ flex: 1, padding: 8 }}>
                        <CardHorizontalFood food={item} />
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
