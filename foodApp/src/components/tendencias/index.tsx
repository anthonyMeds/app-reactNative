import { View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { CardHorizontalFood } from './food';

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

//adicione aqui o endereco ipv4 - cmd: ipconfig
// rodar npx json-server db.json em um outro cmd 

export function Tendencias() {

    const [food, setFoods] = useState<FoodProps[]>([])

    useEffect(() => {
        async function getFoods() {
            const response = await fetch("http://192.168.1.8:3000/foods")
            const data = await response.json()
            setFoods(data);
        }

        getFoods();
    }, [])

    return (
        <FlatList
            data={food}
            renderItem={({ item }) =>
                <CardHorizontalFood food ={item}/>}
            horizontal={true}
            contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator= {false}
        />
    );
}