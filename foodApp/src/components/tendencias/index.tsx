import { View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { CardHorizontalFood } from './food';
import {API_URL} from '../../../config'

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


export function Tendencias() {

    const [food, setFoods] = useState<FoodProps[]>([])

    useEffect(() => {
        async function getFoods() {
            const response = await fetch(`${API_URL}/foods`)
            console.log(response)
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