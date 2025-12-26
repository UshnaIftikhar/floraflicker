import { Instagram, MessageCircle, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-transparent via-amber-100/50 to-rose-100/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-amber-700 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-serif text-amber-950">Flora Flicker</h3>
            <Sparkles className="w-6 h-6 text-amber-700 animate-pulse" />
          </div>

          <p className="text-xl md:text-2xl text-amber-800 font-serif italic mb-8">
            "Let nature glow with every flame."
          </p>

          <p className="text-amber-800 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Hand-poured with intention. Crafted with care. Designed to bring warmth,
            peace, and beauty into every space. Because every moment deserves to glow.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500"
            >
              <Instagram className="w-6 h-6 text-amber-900 group-hover:text-white transition-colors duration-300" />
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-500"
            >
              <MessageCircle className="w-6 h-6 text-amber-900 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>

        <div className="border-t border-amber-300/30 pt-8 text-center">
          <p className="text-sm text-amber-700 font-light">
            © 2024 Flora Flicker. Handcrafted with love. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
