import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useCart } from '@/src/CartContext';
import { Sections } from '../components/sections';
import { Tendencias } from '../components/tendencias';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export default function DetalhesComida() {
    const router = useRouter();
    const { food: foodParam } = useLocalSearchParams();
    const { addToCart } = useCart();

    // Converte o parâmetro `food` de volta para um objeto JavaScript
    const food = JSON.parse(foodParam as string);

    const handleAddToCart = () => {
        const product = { ...food, quantity: 1 };
        addToCart(product);
        Alert.alert("Produto adicionado ao carrinho");
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16, backgroundColor: 'white', marginTop: statusBarHeight + 8 }}>
            {/* Botão de Voltar */}
            <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 20 }}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Detalhes da Comida */}
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Image source={{ uri: food.image }} style={{ width: 200, height: 200, borderRadius: 10 }} />
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{food.name}</Text>
                <Text style={{ fontSize: 18, color: 'gray', marginVertical: 5 }}>{food.description}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>R$ {food.price}</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>Entrega: R$ {food.delivery}</Text>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#ff6a00',
                        padding: 10,
                        borderRadius: 5,
                        marginTop: 20,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={handleAddToCart}
                >
                    <MaterialIcons name="add-shopping-cart" size={18} color="white" />
                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 8 }}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </View>

            <Sections
                name="Comidas em alta"
                label="veja mais"
                size="text-2x1"
                action={() => router.push("/listaComidasVertical")}
            />

            <View style={{ marginBottom: 50 }}>
                <Tendencias />
            </View>

        </ScrollView>
    );
}
