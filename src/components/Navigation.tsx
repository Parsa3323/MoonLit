import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ShoppingCart, Trophy } from 'lucide-react';

const Navigation: React.FC = () => {
  const linkClass = "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:bg-white/10";
  const activeClass = "bg-white/20";

  return (
    <nav className="bg-black/30 backdrop-blur-sm p-4">
      <div className="container mx-auto flex justify-center gap-8">
        <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}>
          <Home size={20} />
          <span>Clicker</span>
        </NavLink>
        <NavLink to="/shop" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}>
          <ShoppingCart size={20} />
          <span>Shop</span>
        </NavLink>
        <NavLink to="/achievements" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}>
          <Trophy size={20} />
          <span>Achievements</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;