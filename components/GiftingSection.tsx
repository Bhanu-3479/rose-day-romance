
import React from 'react';

const GIFTS = [
  {
    id: 1,
    name: "Midnight Passion Red Roses",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2073&auto=format&fit=crop",
    type: "rose"
  },
  {
    id: 2,
    name: "Velvet Belgian Truffles",
    price: "$34.50",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1935&auto=format&fit=crop",
    type: "chocolate"
  },
  {
    id: 3,
    name: "Eternal Blush Pink Bouquet",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1562690862-30bb548301c3?q=80&w=1973&auto=format&fit=crop",
    type: "rose"
  },
  {
    id: 4,
    name: "Artisan Dark Pralines",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=1935&auto=format&fit=crop",
    type: "chocolate"
  }
];

const GiftingSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-serif-elegant text-5xl text-rose-800 mb-4">Gifts of Affection</h2>
        <p className="text-rose-600 font-romantic text-2xl">Because some things are better said with flowers and sweets.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {GIFTS.map((gift) => (
          <div key={gift.id} className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={gift.image} 
                alt={gift.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                {gift.type}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif-elegant text-xl text-rose-900 mb-2">{gift.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-rose-600 font-bold text-lg">{gift.price}</span>
                <button className="bg-rose-100 text-rose-600 hover:bg-rose-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftingSection;
