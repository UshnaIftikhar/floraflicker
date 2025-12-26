import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury candles"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/80 via-rose-100/70 to-amber-50/90"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 z-10 p-6 md:p-8">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="w-6 h-6 text-amber-700 animate-pulse" />
          <h1 className="text-2xl md:text-3xl font-serif text-amber-900">Flora Flicker</h1>
          <Sparkles className="w-6 h-6 text-amber-700 animate-pulse" />
        </div>
        <p className="text-center text-amber-800 text-sm md:text-base mt-2 font-light tracking-wide">
          Let nature glow with every flame
        </p>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8 relative inline-block">
          <div className="absolute -inset-4 bg-amber-200/30 blur-3xl rounded-full animate-pulse"></div>
          <h2 className="relative text-4xl md:text-6xl lg:text-7xl font-serif text-amber-950 leading-tight">
            Handcrafted scented candles
          </h2>
        </div>

        <p className="text-lg md:text-2xl text-amber-800 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          for calm moments & meaningful gifts
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#products"
            className="group relative px-8 py-4 bg-amber-900 text-amber-50 rounded-full font-light tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">Shop Candles</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-rose-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>

          <a
            href="#products"
            className="group px-8 py-4 bg-transparent border-2 border-amber-900 text-amber-900 rounded-full font-light tracking-wide transition-all duration-300 hover:bg-amber-900 hover:text-amber-50 hover:scale-105 hover:shadow-xl"
          >
            Choose a Gift Pack
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-900/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-amber-900/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
