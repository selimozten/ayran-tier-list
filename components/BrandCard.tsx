// components/BrandCard.tsx
import Image from 'next/image';
import { FC } from 'react';

interface BrandCardProps {
  name: string;
  description: string;
  rank: number | string;
  imageUrl: string;
}

const BrandCard: FC<BrandCardProps> = ({ name, description, rank, imageUrl }) => {
  const getMedal = () => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 'The Worst') return '💩';
    return '';
  };

  return (
    <div className="rounded-lg shadow-lg p-6 bg-white hover:scale-105 transition-transform">
      <h2 className="text-2xl font-bold mb-2">
        {name} {getMedal()}
      </h2>
      <Image
        src={imageUrl}
        alt={name}
        width={500}
        height={300}
        className="w-full h-auto object-cover rounded-md mb-4"
      />
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default BrandCard;
