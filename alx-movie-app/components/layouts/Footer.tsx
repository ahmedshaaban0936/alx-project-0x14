import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 mt-auto">
      <p className="text-center text-sm">&copy; {new Date().getFullYear()} ALX MovieApp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
