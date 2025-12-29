import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-50 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
        {/* Brand */}
        <h3 className="text-2xl font-serif">Flora Flicker</h3>
        <p className="text-sm text-amber-200">
          Handcrafted Scented Candles 🌸
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/923088602387"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <MessageCircle size={26} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/flora_flicker56?igsh=MWdvNml3MGtnN20xcg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <Instagram size={26} />
          </a>

          {/* TikTok (Custom SVG) */}
          <a
            href="https://www.tiktok.com/@scentcandles56?_r=1&_t=ZS-92VDTKn6JZY"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.004 2h3.063c.097.91.34 1.814.719 2.651.381.837.89 1.588 1.5 2.219.61.63 1.323 1.132 2.101 1.48.778.347 1.614.533 2.464.547v3.086c-1.248-.04-2.484-.287-3.654-.732-1.171-.445-2.261-1.08-3.215-1.875v7.916c0 1.03-.202 2.051-.595 3-.394.95-.97 1.813-1.697 2.54-.728.728-1.59 1.304-2.54 1.697-.95.394-1.971.595-3 .595-2.08 0-4.075-.826-5.546-2.297C.826 19.306 0 17.31 0 15.23c0-2.08.826-4.076 2.297-5.547 1.471-1.47 3.466-2.297 5.546-2.297.379 0 .754.03 1.123.088v3.197c-.37-.126-.758-.19-1.148-.19-1.02 0-2 .405-2.721 1.127-.721.721-1.126 1.7-1.126 2.72 0 1.021.405 2 .126 2.721.721.721 1.7 1.126 2.721 1.126 1.02 0 2-.405 2.721-1.126.721-.721 1.126-1.7 1.126-2.721V2z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-amber-300 mt-6">
          © 2025 Flora Flicker. All rights reserved by Aksely.
        </p>
      </div>
    </footer>
  );
}
