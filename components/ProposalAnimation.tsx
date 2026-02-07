
import React, { useState } from 'react';

const ProposalAnimation: React.FC = () => {
  const [stage, setStage] = useState<'standing' | 'proposing' | 'accepted'>('standing');

  const handlePropose = () => {
    setStage('proposing');
    setTimeout(() => setStage('accepted'), 2500);
  };

  const Face = ({ type, person }: { type: 'standing' | 'proposing' | 'accepted'; person: 'boy' | 'girl' }) => {
    if (type === 'standing') {
      return (
        <g>
          {/* Calm eyes */}
          <circle cx="36" cy="28" r="1.5" fill="#333" />
          <circle cx="44" cy="28" r="1.5" fill="#333" />
          {/* Gentle smile */}
          <path d="M37 34 Q40 37 43 34" stroke="#333" strokeWidth="1" fill="none" />
        </g>
      );
    }
    if (type === 'proposing') {
      if (person === 'boy') {
        return (
          <g>
            {/* Nervous eyes */}
            <circle cx="36" cy="28" r="1.5" fill="#333" />
            <circle cx="44" cy="28" r="1.5" fill="#333" />
            {/* Nervous straight mouth */}
            <path d="M37 35 L43 35" stroke="#333" strokeWidth="1" fill="none" />
            {/* Slight blush */}
            <circle cx="30" cy="32" r="3" fill="#fbcfe8" opacity="0.6" />
            <circle cx="50" cy="32" r="3" fill="#fbcfe8" opacity="0.6" />
          </g>
        );
      } else {
        return (
          <g className="animate-pulse">
            {/* Surprised wide eyes */}
            <circle cx="35" cy="27" r="2.5" fill="#333" />
            <circle cx="45" cy="27" r="2.5" fill="#333" />
            {/* Gasp mouth */}
            <circle cx="40" cy="35" r="3" fill="#333" />
          </g>
        );
      }
    }
    // Accepted Stage
    return (
      <g>
        {/* Happy closed eyes (^ ^) */}
        <path d="M34 29 Q36 25 38 29" stroke="#333" strokeWidth="1.5" fill="none" />
        <path d="M42 29 Q44 25 46 29" stroke="#333" strokeWidth="1.5" fill="none" />
        {/* Big happy smile */}
        <path d="M35 34 Q40 40 45 34" stroke="#333" strokeWidth="1.5" fill="none" />
        {/* Deep blush */}
        <circle cx="30" cy="33" r="4" fill="#f472b6" opacity="0.8" />
        <circle cx="50" cy="33" r="4" fill="#f472b6" opacity="0.8" />
      </g>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="font-serif-elegant text-4xl text-rose-800 mb-12">The Eternal Question</h2>
      
      <div className="relative h-80 flex items-end justify-center gap-20 mb-12">
        {/* Background Scenery */}
        <div className="absolute bottom-0 w-full h-1 bg-rose-200/50"></div>
        <div className="absolute bottom-1 left-1/4 transform -translate-x-1/2 opacity-30">
            <svg width="100" height="150" viewBox="0 0 100 150">
                <path d="M50 150 L50 100 M20 100 Q50 20 80 100" stroke="#4a3728" strokeWidth="8" fill="none" />
                <circle cx="50" cy="70" r="40" fill="#2d5a27" />
            </svg>
        </div>

        {/* Boy Figure */}
        <div className={`transition-all duration-1000 transform ${stage !== 'standing' ? 'translate-x-10' : ''}`}>
          <svg width="80" height="160" viewBox="0 0 80 160">
            <g>
              <circle cx="40" cy="30" r="15" fill="#fce4ec" />
              <Face type={stage} person="boy" />
            </g>
            <rect x="30" y="45" width="20" height="60" fill="#1e3a8a" rx="5" />
            
            {stage === 'standing' ? (
              <g>
                <rect x="32" y="105" width="8" height="40" fill="#1e293b" />
                <rect x="40" y="105" width="8" height="40" fill="#1e293b" />
              </g>
            ) : (
              <g>
                {/* Kneeling pose */}
                <rect x="32" y="105" width="8" height="20" fill="#1e293b" />
                <path d="M40 105 L60 145 L40 145 Z" fill="#1e293b" />
              </g>
            )}
            
            {stage === 'proposing' || stage === 'accepted' ? (
                <path d="M50 60 L75 55" stroke="#fce4ec" strokeWidth="6" strokeLinecap="round" className="animate-pulse" />
            ) : (
                <path d="M30 60 L20 85" stroke="#fce4ec" strokeWidth="6" strokeLinecap="round" />
            )}
            
            {(stage === 'proposing' || stage === 'accepted') && (
                <g className="animate-bounce">
                    <path d="M75 55 L80 45" stroke="#166534" strokeWidth="2" />
                    <circle cx="82" cy="42" r="6" fill="#dc2626" />
                    <circle cx="82" cy="42" r="3" fill="#ef4444" />
                </g>
            )}
          </svg>
        </div>

        {/* Girl Figure */}
        <div className="transition-all duration-1000">
          <svg width="80" height="160" viewBox="0 0 80 160">
            <g>
              <circle cx="40" cy="30" r="15" fill="#fce4ec" />
              <Face type={stage} person="girl" />
            </g>
            <path d="M25 45 L55 45 L65 110 L15 110 Z" fill="#db2777" />
            <rect x="32" y="110" width="6" height="35" fill="#fce4ec" />
            <rect x="42" y="110" width="6" height="35" fill="#fce4ec" />
            
            {stage === 'accepted' && (
                <g className="animate-ping">
                    <path d="M40 -10 L42 -15 A3 3 0 0 1 45 -15 A3 3 0 0 1 47 -12 L40 -5 L33 -12 A3 3 0 0 1 35 -15 A3 3 0 0 1 38 -15 Z" fill="#ef4444" />
                </g>
            )}
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        {stage === 'standing' && (
          <button 
            onClick={handlePropose}
            className="bg-rose-600 text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-rose-700 transition-all hover:scale-110 active:scale-95"
          >
            Speak Your Heart 🌹
          </button>
        )}
        
        {stage === 'proposing' && (
          <p className="font-romantic text-4xl text-rose-500 animate-pulse">The world stands still...</p>
        )}

        {stage === 'accepted' && (
          <div className="animate-fade-in">
            <p className="font-romantic text-5xl text-rose-600 font-bold drop-shadow-md">She Said Yes! ❤️</p>
            <p className="text-rose-400 mt-2 italic text-lg font-light">"A moment that blooms forever."</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProposalAnimation;
