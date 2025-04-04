import React from 'react';
import { Tour } from '../api/tours';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const handleWhatsApp = () => {
    const phone = '9531090222';
    const message = `¡Hola! Quiero reservar ${tour.title} para [fecha].\n\n` +
                   `Adultos: [cantidad]\nNiños: [cantidad]\n` +
                   `Mi correo: [email]`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{tour.title}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            ★ {tour.rating}
          </span>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-lg font-semibold text-gray-900">
            ${tour.price_adult} <span className="text-sm font-normal text-gray-600">(Adulto)</span>
          </p>
          <p className="text-lg font-semibold text-gray-900">
            ${tour.price_child} <span className="text-sm font-normal text-gray-600">(Niño)</span>
          </p>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-4">
          <h4 className="font-medium text-gray-900">Horario:</h4>
          <ul className="mt-1 text-sm text-gray-600">
            <li>Check-in: {tour.schedule.check_in}</li>
            <li>Salida: {tour.schedule.departure}</li>
            <li>Regreso: {tour.schedule.return}</li>
          </ul>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
          <div>
            <h4 className="font-medium text-green-700">Incluye:</h4>
            <ul className="list-disc list-inside mt-1">
              {tour.included_items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700">No incluye:</h4>
            <ul className="list-disc list-inside mt-1">
              {tour.not_included_items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={handleWhatsApp}
          className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
        >
          Reservar ahora
        </button>
      </div>
    </div>
  );
};

export default TourCard;