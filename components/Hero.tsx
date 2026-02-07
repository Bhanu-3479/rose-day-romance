
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop" 
          alt="Roses Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/20 via-rose-50/40 to-rose-50"></div>
      </div>
      
      <div className="relative z-10">
        <h1 className="font-serif-elegant text-6xl md:text-8xl text-rose-800 mb-4 animate-fade-in">
          Happy Rose Day
        </h1>
        <p className="font-romantic text-3xl md:text-5xl text-rose-600 mb-8">
          Where love blooms in every petal...
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#proposal" 
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:scale-105"
          >
            See Our Story
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
