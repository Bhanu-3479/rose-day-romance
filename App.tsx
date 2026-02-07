
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProposalAnimation from './components/ProposalAnimation';
import LoveNoteGenerator from './components/LoveNoteGenerator';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [petals, setPetals] = useState<{ id: number; left: string; size: string; duration: string; delay: string }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 10}px`,
      duration: `${Math.random() * 5 + 5}s`,
      delay: `${Math.random() * 10}s`
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Petal Animation */}
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal bg-rose-400 opacity-20 rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            borderRadius: '100% 0% 100% 0% / 100% 0% 100% 0%'
          }}
        />
      ))}

      <div className="relative z-10">
        <Hero />
        <section id="proposal" className="py-20 bg-white/30 backdrop-blur-sm">
          <ProposalAnimation />
        </section>
        <section id="ai-note" className="py-20 bg-rose-100/50 backdrop-blur-sm">
          <LoveNoteGenerator />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default App;
