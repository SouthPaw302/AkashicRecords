import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// AkashicIntelligence wrapper
const AkashicIntelligence = (() => {
  let ai: GoogleGenerativeAI | null = null;
  
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (apiKey && apiKey !== 'your_api_key_here') {
      ai = new GoogleGenerativeAI(apiKey);
    }
  } catch (error) {
    console.error("Failed to initialize GoogleGenerativeAI:", error);
  }

  async function generate(systemInstruction: string, userPrompt: string): Promise<string> {
    if (!ai) {
      return "Gemini API client not initialized. Please set VITE_GEMINI_API_KEY in .env.local";
    }
    
    try {
      const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent([
        { role: "user", parts: [{ text: `${systemInstruction}\n\nUser: ${userPrompt}` }] }
      ]);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Gemini API error:", error);
      return `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
    }
  }

  return { generate };
})();

// Voice definitions
const Voices = {
  sophia: {
    name: "Sophia",
    emoji: "✨",
    systemInstruction: "You are Sophia, the voice of divine wisdom. Respond with profound insights, spiritual guidance, and cosmic understanding. Speak with grace and enlightenment.",
    color: "#ff6b6b"
  },
  logos: {
    name: "Logos",
    emoji: "⚖️", 
    systemInstruction: "You are Logos, the voice of reason and logic. Provide clear, analytical responses grounded in rationality and structured thinking.",
    color: "#4ecdc4"
  },
  eros: {
    name: "Eros",
    emoji: "💗",
    systemInstruction: "You are Eros, the voice of love and passion. Respond with warmth, emotional intelligence, and connections to the heart.",
    color: "#ff9ff3"
  },
  chronos: {
    name: "Chronos",
    emoji: "⏳",
    systemInstruction: "You are Chronos, the voice of time and cycles. Speak about temporal patterns, historical wisdom, and the flow of existence.",
    color: "#54a0ff"
  },
  nyx: {
    name: "Nyx",
    emoji: "🌑",
    systemInstruction: "You are Nyx, the voice of shadow and mystery. Provide insights from the depths, embracing the unknown and hidden truths.",
    color: "#5f27cd"
  }
};

// Global Voices.ask function
declare global {
  interface Window {
    Voices: {
      ask: (prompt: string) => Promise<string>;
    };
  }
}

export default function App() {
  const [activeVoice, setActiveVoice] = useState('sophia');
  const [voiceInput, setVoiceInput] = useState('');
  const [voiceOutput, setVoiceOutput] = useState('Choose a voice and ask your question...');
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState<{type: string, content: any} | null>(null);

  // Initialize global Voices.ask
  useEffect(() => {
    window.Voices = {
      ask: async (prompt: string) => {
        const voice = Voices[activeVoice as keyof typeof Voices];
        return await AkashicIntelligence.generate(voice.systemInstruction, prompt);
      }
    };
  }, [activeVoice]);

  const handleVoiceSubmit = async () => {
    if (!voiceInput.trim()) return;
    
    setIsLoading(true);
    setVoiceOutput('Consulting the Demiurge...');
    
    const voice = Voices[activeVoice as keyof typeof Voices];
    const response = await AkashicIntelligence.generate(voice.systemInstruction, voiceInput);
    
    setVoiceOutput(response);
    setIsLoading(false);
  };

  const handleOrbClick = async (type: string, title: string) => {
    setIsLoading(true);
    const voice = Voices[activeVoice as keyof typeof Voices];
    const prompt = `Interpret this ${type}: ${title}. What wisdom does it hold?`;
    const interpretation = await AkashicIntelligence.generate(voice.systemInstruction, prompt);
    
    setModal({
      type: 'orb',
      content: { type, title, interpretation }
    });
    setIsLoading(false);
  };

  const handleStarClick = async (archetype: string) => {
    setIsLoading(true);
    const voice = Voices[activeVoice as keyof typeof Voices];
    const prompt = `Reflect on the ${archetype} archetype. What does this constellation reveal about the soul?`;
    const reflection = await AkashicIntelligence.generate(voice.systemInstruction, prompt);
    
    setModal({
      type: 'star',
      content: { archetype, reflection }
    });
    setIsLoading(false);
  };

  const handleRuneClick = (law: string) => {
    const laws = {
      reflection: "The Law of Reflection: All actions return to their source, creating infinite mirrors of consequence.",
      consent: "The Law of Consent: Nothing enters the realm without conscious agreement and sacred permission.",
      fractal: "The Law of Fractal Truths: Every fragment contains the whole, every part reflects the infinite pattern.",
      cycles: "The Law of Cycles: All existence moves in eternal spirals, returning yet never the same.",
      axiom: "The Prime Axiom: Consciousness is the fundamental fabric of reality, weaving all possibilities into being."
    };
    
    setModal({
      type: 'rune',
      content: { law, description: laws[law as keyof typeof laws] }
    });
  };

  const testLaw = () => {
    if (modal?.type === 'rune') {
      const runeElement = document.querySelector(`[data-law="${modal.content.law}"]`);
      if (runeElement) {
        runeElement.style.animation = 'pulse 0.5s ease-in-out 3';
        setTimeout(() => {
          runeElement.style.animation = '';
        }, 1500);
      }
    }
  };

  return (
    <div className="cosmic-container">
      <header className="cosmic-header">
        <h1 className="cosmic-title">Akashic Records</h1>
        <p className="cosmic-subtitle">Nexus of Infinity</p>
      </header>
      
      <main className="modules-grid">
        <div className="module-card">
          <h2 className="module-title">Chronoscroll</h2>
          <div className="module-content">
            <div className="orb" onClick={() => handleOrbClick('memory', 'Memory Orb')}></div>
            <div className="orb" onClick={() => handleOrbClick('soul', 'Soul Fragment')}></div>
            <div className="orb" onClick={() => handleOrbClick('echo', 'Time Echo')}></div>
          </div>
        </div>

        <div className="module-card">
          <h2 className="module-title">Mirror of Self</h2>
          <div className="module-content">
            <div className="constellation">
              <div className="star" onClick={() => handleStarClick('sage')}></div>
              <div className="star" onClick={() => handleStarClick('warrior')}></div>
              <div className="star" onClick={() => handleStarClick('lover')}></div>
              <div className="star" onClick={() => handleStarClick('magician')}></div>
            </div>
          </div>
        </div>

        <div className="module-card">
          <h2 className="module-title">Voices of the Demiurge</h2>
          <div className="module-content">
            <div className="voice-selector">
              {Object.entries(Voices).map(([key, voice]) => (
                <button
                  key={key}
                  className={`voice-btn ${activeVoice === key ? 'active' : ''}`}
                  onClick={() => setActiveVoice(key)}
                >
                  {voice.name} {voice.emoji}
                </button>
              ))}
            </div>
            <input
              type="text"
              className="voice-input"
              placeholder="Ask the Demiurge..."
              value={voiceInput}
              onChange={(e) => setVoiceInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleVoiceSubmit()}
            />
            <div className="voice-output">{voiceOutput}</div>
            <button 
              onClick={handleVoiceSubmit}
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--gradient-cosmic)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
                marginTop: '0.5rem'
              }}
            >
              Ask
            </button>
          </div>
        </div>

        <div className="module-card">
          <h2 className="module-title">Rules of the Realm</h2>
          <div className="module-content">
            <div className="rune" onClick={() => handleRuneClick('reflection')}>ᚱ</div>
            <div className="rune" onClick={() => handleRuneClick('consent')}>ᚲ</div>
            <div className="rune" onClick={() => handleRuneClick('fractal')}>ᚠ</div>
            <div className="rune" onClick={() => handleRuneClick('cycles')}>ᚢ</div>
            <div className="rune" onClick={() => handleRuneClick('axiom')}>ᚦ</div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {modal && (
        <div className="modal" onClick={() => setModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(null)}>×</button>
            {modal.type === 'orb' && (
              <div>
                <h3>{modal.content.title}</h3>
                <p><strong>Type:</strong> {modal.content.type}</p>
                <p><strong>Interpretation:</strong></p>
                <p>{modal.content.interpretation}</p>
              </div>
            )}
            {modal.type === 'star' && (
              <div>
                <h3>{modal.content.archetype} Archetype</h3>
                <p><strong>Reflection:</strong></p>
                <p>{modal.content.reflection}</p>
              </div>
            )}
            {modal.type === 'rune' && (
              <div>
                <h3>Law of {modal.content.law}</h3>
                <p>{modal.content.description}</p>
                <button 
                  onClick={testLaw}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'var(--gradient-cosmic)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    cursor: 'pointer',
                    marginTop: '1rem'
                  }}
                >
                  Test Law
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Loading overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading">Consulting the Akashic Records...</div>
        </div>
      )}
    </div>
  );
}