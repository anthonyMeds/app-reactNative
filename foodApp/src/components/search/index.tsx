import { Feather } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';
import { router } from 'expo-router';

export function Search() {
    return (
        <Pressable
            className="w-full flex-row border-slate-500 h-14 rounded-full items-center gap-2 px-4 bg-transparent"
            style={{ borderWidth: 1, borderRadius: 20 }}
            onPress={() => router.push("/listaComidasVertical")}
        >
            <Feather name="search" size={24} color="#64748b" />
            <TextInput
                placeholder="Procure sua comida"
                className='w-full h-full flex-1 bg-transparent'
                editable={false} 
            />
        </Pressable>
    );
}