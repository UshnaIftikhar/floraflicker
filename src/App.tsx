import { Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Products from './components/Products';
import WhyFloraFlicker from './components/WhyFloraFlicker';
import GiftSection from './components/GiftSection';
import Footer from './components/Footer';
import SideCart from './components/SideCart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
              <WhyFloraFlicker />
              <GiftSection />
              <Footer />
              <SideCart />
            </>
          }
        />

        {/* CHECKOUT PAGE */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
