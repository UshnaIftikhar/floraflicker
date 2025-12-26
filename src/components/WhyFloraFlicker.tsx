import { Leaf, Heart, Clock, Sparkles, Hand, Wind } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Unique Fragrance Blends',
    description: 'Carefully curated scents that transport you to tranquil gardens'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Materials',
    description: 'Sustainable soy wax and natural ingredients, kind to our planet'
  },
  {
    icon: Wind,
    title: 'Air-Purifying Properties',
    description: 'Essential oils that cleanse and refresh your living space'
  },
  {
    icon: Clock,
    title: 'Long-Lasting Burn',
    description: 'Up to 40 hours of continuous glow and fragrance'
  },
  {
    icon: Hand,
    title: 'Hand-Poured with Care',
    description: 'Each candle crafted individually with love and attention'
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Thoughtfully created to bring warmth to every moment'
  }
];

export default function WhyFloraFlicker() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-amber-950 mb-4">
            Why Flora Flicker
          </h2>
          <p className="text-amber-800 text-lg font-light max-w-2xl mx-auto">
            Every candle is a promise of quality, sustainability, and pure intention
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white/60 backdrop-blur-sm rounded-3xl hover:bg-white/90 transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-6 right-6 w-16 h-16 bg-amber-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-200 to-rose-200 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-amber-900" />
                  </div>

                  <h3 className="text-xl font-serif text-amber-950 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-amber-800 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
