// components/TierList.tsx
'use client';

import { useState } from 'react';
import BrandCard from './BrandCard';

const ayranBrands = [
  {
    name: 'Özerhisar',
    description: "The nectar of the gods! One sip, and you're in Ayran heaven.",
    rank: 1,
    imageUrl: '/images/ozerhisar.png',
  },
  {
    name: 'Homemade Ayran Your Mother Makes',
    description: 'Made with love and secret family techniques. Unbeatable!',
    rank: 1,
    imageUrl: '/images/homemade.webp',
  },
  {
    name: 'Tunaoğlu',
    description: "A solid choice when you can't get the top-tier stuff.",
    rank: 2,
    imageUrl: '/images/tunaoglu.png',
  },
  // ... other brands
  {
    name: 'Sütaş Ayran',
    description: 'Best used as plant fertilizer. Maybe.',
    rank: 'The Worst',
    imageUrl: '/images/sutas.jpg',
  },
];

const TierList = () => {
  const [brands, setBrands] = useState(ayranBrands);

  const shuffleBrands = () => {
    const shuffled = [...brands].sort(() => Math.random() - 0.5);
    setBrands(shuffled);
    alert('The Ayran gods have shuffled the rankings!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={shuffleBrands}
        className="bg-orange-400 text-white px-6 py-3 rounded-full mb-6 hover:bg-orange-500 transition-colors"
      >
        Shake for Surprise 🌀
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brands
          .sort((a, b) => {
            if (a.rank === 'The Worst') return 1;
            if (b.rank === 'The Worst') return -1;
            return Number(a.rank) - Number(b.rank);
          })
          .map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
      </div>
    </div>
  );
};

export default TierList;
