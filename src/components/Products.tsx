import ProductCard from './ProductCard';

// ✅ Correct imports from src/assets (ONE level up)
import BearCandle from '../assets/bearcandle.jpg';
import FlowerCandle from '../assets/flowercandle.jpg';
import ConeGlowCandle from '../assets/coneglowcandle.jpg';
import HeartDomeStackCandle from '../assets/heartdomestackcandle.jpg';
import BubbleShapeCandle from '../assets/bubbleshapecandle.jpg';

const products = [
  {
    id: 1,
    name: 'Flower Candle',
    emoji: '🌹',
    priceWithGift: 699,
    priceWithoutGift: 399,
    image: FlowerCandle,
    description: 'Delicate rose-scented bloom',
  },
  {
    id: 2,
    name: 'Bear Candle',
    emoji: '🧸',
    priceWithGift: 599,
    priceWithoutGift: 399,
    image: BearCandle,
    description: 'Adorable vanilla embrace',
  },
  {
    id: 3,
    name: 'Cone Glow Candle',
    emoji: '🔺',
    priceWithGift: 450,
    priceWithoutGift: 250,
    image: ConeGlowCandle,
    description: 'Modern geometric elegance',
  },
  {
    id: 4,
    name: 'Heart Dome Stack Candle',
    emoji: '❤️',
    priceWithGift: 599,
    priceWithoutGift: 350,
    image: HeartDomeStackCandle,
    description: 'Layered love & warmth',
  },
  {
    id: 5,
    name: 'Bubble Shape Candle',
    emoji: '🫧',
    priceWithGift: 450,
    priceWithoutGift: 250,
    image: BubbleShapeCandle,
    description: 'Playful spherical charm',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-
