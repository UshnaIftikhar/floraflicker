import Hero from './components/Hero';
import Products from './components/Products';
import WhyFloraFlicker from './components/WhyFloraFlicker';
import GiftSection from './components/GiftSection';
import Footer from './components/Footer';
import SideCart from './components/SideCart';
import { CartProvider } from './context/CartContext';  // <-- Import CartProvider

function App() {
  return (
    <CartProvider> {/* <-- Wrap your app with CartProvider */}
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
        <Hero />
        <Products />
        <WhyFloraFlicker />
        <GiftSection />
        <Footer />
        <SideCart /> {/* Slide-in side cart */}
      </div>
    </CartProvider>
  );
}

export default App;
