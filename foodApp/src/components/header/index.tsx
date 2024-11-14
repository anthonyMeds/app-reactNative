import React, { useState } from 'react';
import { View, Pressable, Text, Modal, TouchableOpacity } from "react-native";
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { router } from "expo-router";

export function Header() {
    const [isMenuVisible, setMenuVisible] = useState(false); // Estado para controlar a visibilidade do menu

    return (
        <View className="w-full flex flex-row items-center justify-between">
            {/* Botão de Menu */}
            <Pressable
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
                onPress={() => setMenuVisible(true)} // Abre o modal ao clicar
            >
                <Ionicons name="menu" size={20} color="#121212" />
            </Pressable>

            {/* Localização */}
            <View className="flex flex-col items-center justify-center">
                <Text className="text-center text-sm text-slate-700">Localização</Text>
                <View className="flex-row items-center justify-center gap-1">
                    <Feather name="map-pin" size={14} color="#FF0000" />
                    <Text className="text-lg font-bold">Aracaju</Text>
                </View>
            </View>

            {/* Carrinho */}
            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <MaterialIcons
                    name="shopping-cart"
                    size={20}
                    color="black"
                    onPress={() => router.push('/carrinho')}
                />
            </Pressable>

            {/* Modal do Menu */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={isMenuVisible}
                onRequestClose={() => setMenuVisible(false)} // Fecha o modal ao clicar fora ou pressionar o botão de voltar
            >
                <TouchableOpacity
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                    onPress={() => setMenuVisible(false)} // Fecha o modal ao clicar fora
                >
                    <View style={{ width: 200, backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Opções</Text>

                        <TouchableOpacity onPress={() => { setMenuVisible(false); router.push('/'); }}>
                            <Text style={{ fontSize: 16, paddingVertical: 8 }}>Retorne ao Menu</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { setMenuVisible(false); router.push('/restauranteVertical'); }}>
                            <Text style={{ fontSize: 16, paddingVertical: 8 }}>Restaurantes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { setMenuVisible(false); router.push('/listaComidasVertical'); }}>
                            <Text style={{ fontSize: 16, paddingVertical: 8 }}>Comidas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { setMenuVisible(false); router.push('/carrinho'); }}>
                            <Text style={{ fontSize: 16, paddingVertical: 8 }}>Carrinho</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}
