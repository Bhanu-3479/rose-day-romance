
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-900 text-rose-100 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="font-romantic text-4xl mb-4">Rose Day Romance</h3>
        <p className="mb-8 text-rose-300 max-w-md mx-auto">
          "A single rose can be my garden... a single friend, my world." — Leo Buscaglia
        </p>
        
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="hover:text-white transition-colors">About Love</a>
          <a href="#" className="hover:text-white transition-colors">Contact Hearts</a>
        </div>
        
        <div className="border-t border-rose-800 pt-8 text-sm text-rose-500">
          <p>&copy; {new Date().getFullYear()} Rose Day Romance. Created with 💖 for special moments.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
