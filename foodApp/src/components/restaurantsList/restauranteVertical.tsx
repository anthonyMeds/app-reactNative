import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { RestauranteItem } from './restauranteItemVertical';


export interface RestaurantsProps {
    id: string;
    name: string;
    image: string;
}

export default function restaurantsList() {

    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch("http://localhost:3000/restaurants")
            console.log(response)
            const data = await response.json()
            console.log(data);
            setRestaurants(data);
        }

        getRestaurants();
    }, [])

    return (
        <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
            {restaurants.map(item => (
                <RestauranteItem item={item} key={item.id} />
            ))}
        </View>
    );
}