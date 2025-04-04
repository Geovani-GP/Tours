import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Blog de Viajes</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog Post Cards */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1590080669222-67da0a0a5485?auto=format&fit=crop&q=80" 
            alt="Playa en Cozumel"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Los Mejores Spots para Snorkel</h2>
            <p className="text-gray-600 mb-4">
              Descubre los lugares más increíbles para practicar snorkel en Cozumel...
            </p>
            <button className="text-blue-600 hover:text-blue-800">Leer más →</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1590080669222-67da0a0a5485?auto=format&fit=crop&q=80" 
            alt="Gastronomía local"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Gastronomía Local</h2>
            <p className="text-gray-600 mb-4">
              Explora los sabores únicos de la cocina tradicional de Cozumel...
            </p>
            <button className="text-blue-600 hover:text-blue-800">Leer más →</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1590080669222-67da0a0a5485?auto=format&fit=crop&q=80" 
            alt="Cultura Maya"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Historia Maya en Cozumel</h2>
            <p className="text-gray-600 mb-4">
              Conoce la rica historia maya que envuelve a nuestra isla...
            </p>
            <button className="text-blue-600 hover:text-blue-800">Leer más →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;