
import { Image, Pressable, View } from 'react-native';

import PagerView from 'react-native-pager-view';

export default function banner() {
    return (
        <View className='w-full h-36 md:h-60  rounded-2x1 mt-5 mb-4'>

            <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>

                <Pressable
                    className='w-full h-36  md:h-60  rounded-2x1 '
                    key="1"
                    onPress={() => console.log("lalala")}
                >

                    <Image
                        source={require("../../assets/restaurantes/yaki.jpg")}
                        className='w-full h-36  md:h-60 rounded-2x1  ' />

                </Pressable>

                <Pressable
                    className='w-full h-36  md:h-60 rounded-2x1 '
                    key="2"
                    onPress={() => console.log("lalala")}
                >

                    <Image
                        source={require("../../assets/restaurantes/papaJon.jpg")}
                        className='w-full h-36  md:h-60 rounded-2x1  ' />

                </Pressable>

                <Pressable
                    className='w-full h-36  md:h-60 rounded-2x1 '
                    key="3"
                    onPress={() => console.log("lalala")}
                >

                    <Image
                        source={require("../../assets/restaurantes/kfc.webp")}
                        className='w-full h-36  md:h-60 rounded-2x1  ' />

                </Pressable>

            </PagerView>

        </View>
    );
}