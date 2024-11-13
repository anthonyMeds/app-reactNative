import '../styles/global.css';
import { Slot } from "expo-router";
import { CartProvider } from '../CartContext';

export default function RootLayout() {
  return (
    <CartProvider>
      <Slot />
    </CartProvider>
  );
}
