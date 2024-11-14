import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, FlatList, Button, Pressable } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { CardHorizontalFood } from '../components/tendencias/food/index';
import { API_URL } from '../../config';
import Constants from 'expo-constants';

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
    const [filteredFoods, setFilteredFoods] = useState<FoodProps[]>([]); // Lista filtrada
    const [searchQuery, setSearchQuery] = useState(""); // Valor de busca
    const router = useRouter();

    // Buscar comidas na API
    useEffect(() => {
        async function getFoods() {
            const response = await fetch(`${API_URL}/foods`);
            const data = await response.json();
            setFoods(data);
            setFilteredFoods(data); // Inicia a lista filtrada com todas as comidas
        }

        getFoods();
    }, []);

    // Filtrar comidas em tempo real
    useEffect(() => {
        if (searchQuery === "") {
            setFilteredFoods(foods); // Exibir todas se não houver pesquisa
        } else {
            const filtered = foods.filter(food => 
                food.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredFoods(filtered);
        }
    }, [searchQuery, foods]);

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: 'white', marginTop: statusBarHeight + 8 }}>
            {/* Botão de Voltar */}
            <View className="flex-row items-center justify-between mb-4">
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

            {/* Campo de Pesquisa */}
            <View
                className="w-full flex-row border-slate-500 h-14 rounded-full items-center gap-2 px-4 bg-transparent"
                style={{ borderWidth: 1, borderRadius: 20 }}
            >
                <Feather name="search" size={24} color="#64748b" />
                <TextInput
                    placeholder="Procure sua comida"
                    className='w-full h-full flex-1 bg-transparent'
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)} // Atualiza a busca
                />
            </View>

            {/* Lista de Comidas Filtrada */}
            <FlatList
                data={filteredFoods} // Usa a lista filtrada
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
