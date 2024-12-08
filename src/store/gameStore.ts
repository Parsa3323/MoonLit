import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  coins: number;
  multiplier: number;
  autoClickers: number;
  addCoins: (amount: number) => void;
  buyMultiplier: () => void;
  buyAutoClicker: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      coins: 0,
      multiplier: 1,
      autoClickers: 0,
      addCoins: (amount) => set((state) => ({ coins: state.coins + amount * state.multiplier })),
      buyMultiplier: () =>
        set((state) => {
          const cost = Math.floor(100 * Math.pow(1.5, state.multiplier - 1));
          if (state.coins >= cost) {
            return {
              coins: state.coins - cost,
              multiplier: state.multiplier + 1,
            };
          }
          return state;
        }),
      buyAutoClicker: () =>
        set((state) => {
          const cost = Math.floor(150 * Math.pow(1.8, state.autoClickers));
          if (state.coins >= cost) {
            return {
              coins: state.coins - cost,
              autoClickers: state.autoClickers + 1,
            };
          }
          return state;
        }),
    }),
    {
      name: 'hamster-game',
    }
  )
);