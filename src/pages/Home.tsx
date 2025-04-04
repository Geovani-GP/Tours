import React, { useEffect, useState } from 'react';
import { getTours , Tour } from '../api/tours';
import TourCard from '../components/TourCard'; // Asegúrate de importar el tip

const Home: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTours = async () => {
      const data = await getTours();
      setTours(data);
      setLoading(false);
    };
    loadTours();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tours en Cozumel
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Descubre las mejores experiencias en la isla
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.id_tour} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;