import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ClickerPage from './pages/ClickerPage';
import ShopPage from './pages/ShopPage';
import AchievementsPage from './pages/AchievementsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ClickerPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;