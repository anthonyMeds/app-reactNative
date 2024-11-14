import { Image, Pressable, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

export default function Banner() {
    const pagerRef = useRef<PagerView>(null); // Referência ao PagerView
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(0); // Estado para a página ativa

    // Navegação automática entre banners
    useEffect(() => {
        const interval = setInterval(() => {
            if (pagerRef.current) {
                const nextPage = (currentPage + 1) % 3; // Total de 3 banners
                pagerRef.current.setPage(nextPage);
                setCurrentPage(nextPage);
            }
        }, 5000); // Trocar banner a cada 5 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, [currentPage]);

    return (
        <View className='w-full h-36 md:h-60 rounded-2x1 mt-5 mb-4'>
            <PagerView
                ref={pagerRef}
                style={{ flex: 1 }}
                initialPage={0}
                pageMargin={14}
                onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)} // Atualiza página ativa ao deslizar manualmente
            >
                {/* Banner 1 */}
                <Pressable
                    className='w-full h-36 md:h-60 rounded-2x1'
                    key="1"
                    onPress={() => router.push("/restauranteVertical")}
                >
                    <Image
                        source={require("../../assets/restaurantes/yaki.jpg")}
                        className='w-full h-36 md:h-60 rounded-2x1'
                    />
                </Pressable>

                {/* Banner 2 */}
                <Pressable
                    className='w-full h-36 md:h-60 rounded-2x1'
                    key="2"
                    onPress={() => router.push("/restauranteVertical")}
                >
                    <Image
                        source={require("../../assets/restaurantes/papaJon.jpg")}
                        className='w-full h-36 md:h-60 rounded-2x1'
                    />
                </Pressable>

                {/* Banner 3 */}
                <Pressable
                    className='w-full h-36 md:h-60 rounded-2x1'
                    key="3"
                    onPress={() => router.push("/restauranteVertical")}
                >
                    <Image
                        source={require("../../assets/restaurantes/kfc.webp")}
                        className='w-full h-36 md:h-60 rounded-2x1'
                    />
                </Pressable>
            </PagerView>
        </View>
    );
}
