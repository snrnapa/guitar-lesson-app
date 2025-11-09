"use client";

import { useState } from 'react';

type Difficulty = 'beginner' | 'intermediate' | 'advanced';

// ダミーのコード進行データ
const dummyChordSheet = [
  { time: 0, chord: 'G' },
  { time: 2, chord: 'C' },
  { time: 4, chord: 'G' },
  { time: 6, chord: 'D' },
  { time: 8, chord: 'G' },
];

export default function PlayPage() {
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStartPractice = () => {
    setIsPlaying(true);
    // TODO: Implement audio playback
    // TODO: Implement chord scrolling animation
    // TODO: Implement microphone input and analysis
  };

  const getDifficultyButtonClass = (level: Difficulty) => {
    const baseClass = 'px-6 py-2 rounded-lg text-white font-semibold transition-all';
    if (difficulty === level) {
      switch (level) {
        case 'beginner':
          return `${baseClass} bg-green-500 shadow-lg scale-105`;
        case 'intermediate':
          return `${baseClass} bg-yellow-500 shadow-lg scale-105`;
        case 'advanced':
          return `${baseClass} bg-red-500 shadow-lg scale-105`;
      }
    }
    return `${baseClass} bg-gray-600 hover:bg-gray-500`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-white p-4">
      {!isPlaying ? (
        // 画面: 練習開始前
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold">Guitar Practice</h1>
          
          <div className="flex gap-4">
            <button
              onClick={() => setDifficulty('beginner')}
              className={getDifficultyButtonClass('beginner')}
            >
              Beginner
            </button>
            <button
              onClick={() => setDifficulty('intermediate')}
              className={getDifficultyButtonClass('intermediate')}
            >
              Intermediate
            </button>
            <button
              onClick={() => setDifficulty('advanced')}
              className={getDifficultyButtonClass('advanced')}
            >
              Advanced
            </button>
          </div>

          <button
            onClick={handleStartPractice}
            className="mt-8 px-12 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-2xl font-bold shadow-lg transform hover:scale-105 transition-transform"
          >
            Start Practice
          </button>
        </div>
      ) : (
        // 画面: 練習中
        <div className="w-full max-w-4xl flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Playing...</h2>
          <div className="w-full h-48 bg-gray-900 rounded-lg border-2 border-gray-700 relative overflow-hidden">
            {/* TODO: Implement actual scrolling chord animation */}
            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-red-500 text-4xl font-mono">
              |
            </div>
            <div className="flex absolute top-1/2 transform -translate-y-1/2 animate-scroll">
                {dummyChordSheet.map((c, index) => (
                    <div key={index} className="w-32 text-center text-5xl font-bold">
                        {c.chord}
                    </div>
                ))}
            </div>
          </div>
          <p className="mt-4 text-lg">Listen and play along!</p>
          <button
            onClick={() => setIsPlaying(false)}
            className="mt-8 px-8 py-3 bg-red-700 hover:bg-red-600 rounded-full text-xl font-bold shadow-lg"
          >
            Stop
          </button>
        </div>
      )}
    </div>
  );
}
