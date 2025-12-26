const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cozy candle setup'
  },
  {
    url: 'https://images.pexels.com/photos/6551421/pexels-photo-6551421.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Aesthetic candle arrangement'
  },
  {
    url: 'https://images.pexels.com/photos/7937470/pexels-photo-7937470.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Candle lighting moment'
  },
  {
    url: 'https://images.pexels.com/photos/6102072/pexels-photo-6102072.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Natural candle beauty'
  },
  {
    url: 'https://images.pexels.com/photos/8985128/pexels-photo-8985128.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Candle collection'
  },
  {
    url: 'https://images.pexels.com/photos/5722872/pexels-photo-5722872.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Peaceful candle scene'
  }
];

export default function Gallery() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-amber-950 mb-4">
            Moments of Glow
          </h2>
          <p className="text-amber-800 text-lg font-light max-w-2xl mx-auto">
            Capturing the warmth and beauty in every flicker
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
