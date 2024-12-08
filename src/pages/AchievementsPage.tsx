import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Trophy, Lock } from 'lucide-react';

const AchievementsPage: React.FC = () => {
  const { coins, multiplier, autoClickers } = useGameStore();

  const achievements = [
    {
      title: 'Getting Started',
      description: 'Earn your first 100 coins',
      requirement: coins >= 100,
    },
    {
      title: 'Power Up',
      description: 'Reach multiplier level 5',
      requirement: multiplier >= 5,
    },
    {
      title: 'Automation Master',
      description: 'Own 3 auto clickers',
      requirement: autoClickers >= 3,
    },
    {
      title: 'Coin Magnate',
      description: 'Accumulate 10,000 coins',
      requirement: coins >= 10000,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
        Achievements
      </h2>

      <div className="grid gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              achievement.requirement
                ? 'bg-gradient-to-r from-yellow-900/50 to-orange-900/50'
                : 'bg-gray-900/50'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-full ${
                achievement.requirement ? 'bg-yellow-500' : 'bg-gray-700'
              }`}>
                {achievement.requirement ? (
                  <Trophy className="w-6 h-6 text-yellow-900" />
                ) : (
                  <Lock className="w-6 h-6 text-gray-500" />
                )}
              </div>
              <div>
                <h3 className={`font-bold ${
                  achievement.requirement ? 'text-yellow-400' : 'text-gray-400'
                }`}>
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-400">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;