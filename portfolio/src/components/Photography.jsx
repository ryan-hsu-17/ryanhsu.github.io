import { useState } from 'react';

const Photography = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'portrait', 'landscape', 'event', 'product'];

  // Placeholder images - replace with your actual photography
  const photos = [
    { id: 1, category: 'portrait', title: 'Portrait 1', description: 'Professional portrait photography' },
    { id: 2, category: 'landscape', title: 'Landscape 1', description: 'Stunning landscape capture' },
    { id: 3, category: 'event', title: 'Event 1', description: 'Event photography' },
    { id: 4, category: 'product', title: 'Product 1', description: 'Product photography' },
    { id: 5, category: 'portrait', title: 'Portrait 2', description: 'Creative portrait' },
    { id: 6, category: 'landscape', title: 'Landscape 2', description: 'Nature photography' },
    { id: 7, category: 'event', title: 'Event 2', description: 'Special moments' },
    { id: 8, category: 'product', title: 'Product 2', description: 'Commercial photography' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section id="photography" className="min-h-screen py-20 bg-gradient-to-br from-jet via-black to-jet-200 relative overflow-hidden">
      {/* Blue accent circles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-non_photo_blue opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-tiffany_blue opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-tiffany_blue to-non_photo_blue bg-clip-text text-transparent mb-6 text-center">
          Photography
        </h2>
        <p className="text-center text-davy_gray-800 mb-12 max-w-2xl mx-auto">
          Capturing moments and telling stories through the lens. Browse through my portfolio
          of various photography styles and projects.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold capitalize transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-tiffany_blue to-non_photo_blue text-black shadow-lg'
                  : 'bg-jet-600 text-davy_gray-900 border border-tiffany_blue/50 hover:bg-jet-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-jet-400/50 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-tiffany_blue/50 hover:border-tiffany_blue transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-tiffany_blue/30"
            >
              {/* Placeholder for image - replace with actual images */}
              <div className="aspect-square bg-gradient-to-br from-jet-600 to-jet-500 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-davy_gray-700 text-sm">{photo.title}</p>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-center">
                  <h3 className="text-davy_gray-900 font-bold text-lg mb-2">{photo.title}</h3>
                  <p className="text-davy_gray-800 text-sm mb-3">{photo.description}</p>
                  <span className="px-3 py-1 bg-gradient-to-r from-tiffany_blue to-non_photo_blue text-black rounded-full text-xs font-semibold capitalize">
                    {photo.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-jet-400/50 backdrop-blur-sm p-8 rounded-lg border-2 border-non_photo_blue shadow-xl shadow-non_photo_blue/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-davy_gray-900 mb-4">
              Interested in working together?
            </h3>
            <p className="text-davy_gray-800 mb-6">
              I'm available for photography projects including portraits, events, and commercial work.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-block px-8 py-3 bg-gradient-to-r from-tiffany_blue to-non_photo_blue text-black font-semibold rounded-lg hover:from-tiffany_blue-400 hover:to-non_photo_blue-500 transition-all duration-300 shadow-lg shadow-tiffany_blue/50"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photography;
