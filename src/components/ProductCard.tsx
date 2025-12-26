import { useState } from 'react';
import { Gift, Package } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  emoji: string;
  priceWithGift: number;
  priceWithoutGift: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [withGift, setWithGift] = useState(true);

  return (
    <div
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-float"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4 text-4xl animate-pulse">
          {product.emoji}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-serif text-amber-950 mb-2">{product.name}</h3>
        <p className="text-amber-800 text-sm font-light mb-6">{product.description}</p>

        <div className="space-y-3 mb-6">
          <button
            onClick={() => setWithGift(true)}
            className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
              withGift
                ? 'border-amber-900 bg-amber-50 shadow-md scale-105'
                : 'border-amber-200 bg-white hover:border-amber-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Gift className={`w-5 h-5 ${withGift ? 'text-amber-900' : 'text-amber-700'}`} />
                <div>
                  <p className={`font-medium ${withGift ? 'text-amber-950' : 'text-amber-800'}`}>
                    With Gift Pack
                  </p>
                  <p className="text-xs text-amber-700 font-light">
                    Box + Chocolates + Fillers
                  </p>
                </div>
              </div>
              <p className={`text-lg font-serif ${withGift ? 'text-amber-950' : 'text-amber-800'}`}>
                ₹{product.priceWithGift}
              </p>
            </div>
          </button>

          <button
            onClick={() => setWithGift(false)}
            className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
              !withGift
                ? 'border-amber-900 bg-amber-50 shadow-md scale-105'
                : 'border-amber-200 bg-white hover:border-amber-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Package className={`w-5 h-5 ${!withGift ? 'text-amber-900' : 'text-amber-700'}`} />
                <div>
                  <p className={`font-medium ${!withGift ? 'text-amber-950' : 'text-amber-800'}`}>
                    Without Gift Pack
                  </p>
                  <p className="text-xs text-amber-700 font-light">
                    Clean minimal packaging
                  </p>
                </div>
              </div>
              <p className={`text-lg font-serif ${!withGift ? 'text-amber-950' : 'text-amber-800'}`}>
                ₹{product.priceWithoutGift}
              </p>
            </div>
          </button>
        </div>

        <button className="w-full py-3 bg-amber-900 text-amber-50 rounded-full font-light tracking-wide hover:bg-amber-800 transition-colors duration-300 hover:shadow-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
