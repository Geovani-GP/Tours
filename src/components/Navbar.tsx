import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              Atracciones Turísticas Cozumel
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Inicio
              </Link>
              <Link to="/tours" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Tours
              </Link>
              <Link to="/experiences" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Experiencias
              </Link>
              <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Quiénes Somos
              </Link>
              <Link to="/blog" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;