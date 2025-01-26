import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <span className="loader animate-spin border-4 border-blue-600 border-t-transparent rounded-full w-8 h-8"></span>
    </div>
  );
};

export default Loading;
