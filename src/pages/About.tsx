import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Quiénes Somos</h1>
        
        <div className="prose lg:prose-xl">
          <p className="text-lg text-gray-700 mb-6">
            Somos una empresa dedicada a ofrecer las mejores experiencias turísticas en Cozumel, 
            con más de 10 años de experiencia en el sector turístico.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Nuestra Misión</h2>
            <p className="text-blue-800">
              Proporcionar experiencias únicas y memorables a nuestros visitantes, 
              mientras promovemos el turismo sustentable y la conservación de nuestros 
              recursos naturales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Valores</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Excelencia en el servicio</li>
                <li>Compromiso con la sustentabilidad</li>
                <li>Responsabilidad social</li>
                <li>Innovación continua</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Certificaciones</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Distintivo H</li>
                <li>Certificación UNWTO</li>
                <li>Empresa Socialmente Responsable</li>
                <li>Blue Flag Beach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;