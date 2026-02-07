
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const LoveNoteGenerator: React.FC = () => {
  const [partnerName, setPartnerName] = useState('');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);

  const generateNote = async () => {
    if (!partnerName.trim()) return;
    setLoading(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Write a short, heart-touching, and poetic Rose Day message for someone named ${partnerName}. Include mentions of roses and eternal love. Keep it romantic and elegant.`,
      });
      setNote(response.text || "You are the rose in the garden of my life. Happy Rose Day!");
    } catch (error) {
      console.error("AI Error:", error);
      setNote("My love for you grows like a red rose, deeper and more beautiful every day. Happy Rose Day, my dear!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl text-center border-4 border-rose-100">
        <h2 className="font-serif-elegant text-4xl text-rose-800 mb-6">Personalized Love Note</h2>
        <p className="text-rose-600 mb-8 italic">Let the AI capture your emotions in words...</p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input 
            type="text" 
            placeholder="Partner's Name"
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
            className="flex-1 px-6 py-4 rounded-full border-2 border-rose-100 focus:border-rose-400 focus:outline-none text-rose-800 text-lg"
          />
          <button 
            onClick={generateNote}
            disabled={loading}
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Generate Magic ✨'}
          </button>
        </div>

        {note && (
          <div className="mt-8 p-6 bg-rose-50 rounded-2xl border border-rose-200 animate-fade-in">
            <p className="font-romantic text-2xl md:text-3xl text-rose-700 leading-relaxed">
              "{note}"
            </p>
            <div className="mt-4 flex justify-center gap-4">
               <button 
                 onClick={() => navigator.clipboard.writeText(note)}
                 className="text-rose-400 hover:text-rose-600 text-sm font-semibold underline"
               >
                 Copy to Clipboard
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveNoteGenerator;
