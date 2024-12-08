import React, { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import { Coins } from 'lucide-react';

const ClickerPage: React.FC = () => {
  const { coins, multiplier, autoClickers, addCoins } = useGameStore();

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoClickers > 0) {
        addCoins(autoClickers);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [autoClickers, addCoins]);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
        {coins.toFixed(0)} Coins
      </div>
      
      <div className="text-xl text-purple-300">
        Multiplier: x{multiplier} | Auto-Clickers: {autoClickers}
      </div>

      <button
        onClick={() => addCoins(1)}
        className="group relative w-48 h-48 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 p-1 transition-transform hover:scale-105 active:scale-95"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-75 blur-lg group-hover:opacity-100 transition-opacity" />
        <div className="relative h-full w-full rounded-full bg-gray-900 flex items-center justify-center">
          <Coins className="w-20 h-20 text-yellow-400 group-hover:scale-110 transition-transform" />
        </div>
      </button>

      <div className="text-sm text-gray-400 animate-pulse">
        Click the coin to earn more!
      </div>
    </div>
  );
};

export default ClickerPage;