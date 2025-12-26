import Hero from './components/Hero';
import Products from './components/Products';
import WhyFloraFlicker from './components/WhyFloraFlicker';
import GiftSection from './components/GiftSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
      <Hero />
      <Products />
      <WhyFloraFlicker />
      <GiftSection />
      <Footer />
    </div>
  );
}

export default App;
