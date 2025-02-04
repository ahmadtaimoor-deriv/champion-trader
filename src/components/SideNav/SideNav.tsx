import React from "react";
import { BarChart2, Clock, Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const SideNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="hidden landscape:flex flex-col h-full w-16 border-r bg-white">
      <div className="flex flex-col items-center gap-6 py-6">
        <button 
          onClick={() => navigate('/trade')}
          className={`flex flex-col items-center gap-1 ${
            location.pathname === '/trade' ? 'text-primary' : 'text-gray-500'
          }`}
        >
          <BarChart2 className="w-5 h-5" />
          <span className="text-xs">Trade</span>
        </button>
        <button 
          onClick={() => navigate('/positions')}
          className={`flex flex-col items-center gap-1 ${
            location.pathname === '/positions' ? 'text-primary' : 'text-gray-500'
          }`}
        >
          <Clock className="w-5 h-5" />
          <span className="text-xs">Positions</span>
        </button>
        <button 
          onClick={() => navigate('/menu')}
          className={`flex flex-col items-center gap-1 ${
            location.pathname === '/menu' ? 'text-primary' : 'text-gray-500'
          }`}
        >
          <Menu className="w-5 h-5" />
          <span className="text-xs">Menu</span>
        </button>
      </div>
    </nav>
  );
};
