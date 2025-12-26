export default function GiftSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/6551396/pexels-photo-6551396.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Gift candles"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-rose-950/80 to-amber-950/90"></div>
          </div>

          <div className="relative z-10 py-20 px-8 md:px-16 lg:px-24 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-amber-50 mb-6">
              The Perfect Gift
            </h2>

            <p className="text-xl md:text-2xl text-amber-100 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Perfect for birthdays, anniversaries, self-care & thoughtful surprises
            </p>

            <p className="text-amber-200 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              More than a candle, it's a moment of peace wrapped in warmth.
              Give the gift of calm, comfort, and beautiful memories that glow long after the flame fades.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-amber-100">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="font-light">Birthdays</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="font-light">Anniversaries</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="font-light">Self-Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="font-light">Thoughtful Surprises</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
