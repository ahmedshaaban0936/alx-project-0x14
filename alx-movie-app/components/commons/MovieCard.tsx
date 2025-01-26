import React from 'react';

type MovieCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md">
      <img src={imageUrl} alt={title} className="rounded-t-lg w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
