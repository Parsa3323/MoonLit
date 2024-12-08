import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Zap, Clock } from 'lucide-react';

const ShopPage: React.FC = () => {
  const { coins, multiplier, autoClickers, buyMultiplier, buyAutoClicker } = useGameStore();

  const multiplierCost = Math.floor(100 * Math.pow(1.5, multiplier - 1));
  const autoClickerCost = Math.floor(150 * Math.pow(1.8, autoClickers));

  const ShopItem: React.FC<{
    title: string;
    description: string;
    cost: number;
    icon: React.ReactNode;
    onClick: () => void;
  }> = ({ title, description, cost, icon, onClick }) => (
    <button
      onClick={onClick}
      disabled={coins < cost}
      className="relative group w-full p-6 rounded-xl bg-gradient-to-r from-purple-900/50 to-violet-900/50 hover:from-purple-800/50 hover:to-violet-800/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-violet-500">
          {icon}
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <div className="text-yellow-400 font-bold">{cost} coins</div>
      </div>
    </button>
  );

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Upgrade Shop
      </h2>

      <div className="text-xl text-center text-yellow-400 mb-8">
        Your Coins: {coins.toFixed(0)}
      </div>

      <div className="space-y-4">
        <ShopItem
          title="Multiplier Upgrade"
          description={`Increase your click power (Current: ${multiplier}x)`}
          cost={multiplierCost}
          icon={<Zap className="w-6 h-6 text-white" />}
          onClick={buyMultiplier}
        />

        <ShopItem
          title="Auto Clicker"
          description={`Automatically earn coins (Current: ${autoClickers})`}
          cost={autoClickerCost}
          icon={<Clock className="w-6 h-6 text-white" />}
          onClick={buyAutoClicker}
        />
      </div>
    </div>
  );
};

export default ShopPage;