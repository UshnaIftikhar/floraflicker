import { useState } from 'react';
import ProductCard from './ProductCard';

// Import images from assets
import BearCandle from './assets/bearcandle.jpg';
import FlowerCandle from './assets/flowercandle.jpg';
import ConeGlowCandle from './assets/coneglowcandle.jpg';
import HeartDomeStackCandle from './assets/heartdomestackcandle.jpg';
import BubbleShapeCandle from './assets/bubbleshapecandle.jpg';

const products = [
  {
    id: 1,
    name: 'Flower Candle',
    emoji: '🌹',
    priceWithGift: 699,
    priceWithoutGift: 399,
    image: FlowerCandle,
    description: 'Delicate rose-scented bloom'
  },
  {
    id: 2,
    name: 'Bear Candle',
    emoji: '🧸',
    priceWithGift: 599,
    priceWithoutGift: 399,
    image: BearCandle,
    description: 'Adorable vanilla embrace'
  },
  {
    id: 3,
    name: 'Cone Glow Candle',
    emoji: '🔺',
    priceWithGift: 450,
    priceWithoutGift: 250,
    image: ConeGlowCandle,
    description: 'Modern geometric elegance'
  },
  {
    id: 4,
    name: 'Heart Dome Stack Candle',
    emoji: '❤️',
    priceWithGift: 599,
    priceWithoutGift: 350,
    image: HeartDomeStackCandle,
    description: 'Layered love & warmth'
  },
  {
    id: 5,
    name: 'Bubble Shape Candle',
    emoji: '🫧',
    priceWithGift: 450,
    priceWithoutGift: 250,
    image: BubbleShapeCandle,
    description: 'Playful spherical charm'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-amber-950 mb-4">
            Our Collection
          </h2>
          <p className="text-amber-800 text-lg font-light max-w-2xl mx-auto">
            Each candle tells a story, hand-poured with love and intention
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
