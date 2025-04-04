import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/background.jpg';

const Landing: React.FC = () => {
  return (
    <div className="relative">
      <div 
        className="bg-cover bg-center h-screen" 
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="h-full flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6 text-center">
              Descubre la Magia de Cozumel
            </h1>
            <p className="text-xl mb-8 max-w-2xl text-center">
              Explora las mejores experiencias y tours en la isla más hermosa del Caribe Mexicano
            </p>
            <div className="space-x-4">
              <Link 
                to="/tours" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Ver Tours
              </Link>
              <Link 
                to="/about" 
                className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-lg"
              >
                Conócenos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;