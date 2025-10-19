import React from 'react';

const AboutMePage: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Sección: Quién soy y cómo trabajo */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="merriweather text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              👉 Quién soy y cómo trabajo
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
            <div className="openSans text-base sm:text-lg leading-relaxed text-gray-700 space-y-4 sm:space-y-6">
              <p>
                Desde mis primeros pasos en la psicología me interesó crear espacios de escucha y confianza, donde cada persona pueda descubrir y fortalecer sus propios recursos para afrontar los desafíos de la vida.
              </p>
              
              <p>
                A lo largo de los años he trabajado en el campo de la salud mental, acompañando a personas en diferentes etapas y situaciones vitales.
              </p>
              
              <p>
                Mi enfoque es integral, orientado a identificar y trabajar los puntos que generan tensión para favorecer una vida psíquica más saludable. Busco ofrecer un espacio de respeto y acompañamiento, donde se construyan herramientas prácticas y aplicables a la vida cotidiana.
              </p>
              
              <p>
                Cuento con experiencia clínica con niños, adultos y familias, así como en el acompañamiento a personas con discapacidad. Además, me especializo en la articulación con instituciones educativas y equipos interdisciplinarios, lo que me permite aportar una mirada amplia sobre el desarrollo y los vínculos.
              </p>
              
              <p>
                También ofrezco atención psicológica online, lo que me permite acompañar a personas en distintas partes del mundo con la misma cercanía y compromiso que en la modalidad presencial.
              </p>
              
              <p>
                Mi objetivo es que cada encuentro sea una oportunidad de crecimiento, bienestar y autonomía. Creo en un abordaje sencillo, humano y claro, que pueda adaptarse a las necesidades de cada persona.
              </p>
            </div>
          </div>
        </section>

        {/* Sección: Por qué Alta Mente Psi */}
        <section>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="merriweather text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              👉 ¿Por qué Alta Mente Psi?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
            <div className="openSans text-base sm:text-lg leading-relaxed text-gray-700 space-y-4 sm:space-y-6">
              <p>
                Alta Mente Psi nace de la idea de elevar lo posible: una mente que se abre camino, aprende y se vuelve más flexible.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 my-6">
                <p className="font-medium mb-3">El nombre reúne tres sentidos:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-blue-500 font-semibold mb-1">Alta:</div>
                    <div className="text-sm">crecer</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-teal-500 font-semibold mb-1">Mente:</div>
                    <div className="text-sm">lo psíquico</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-purple-500 font-semibold mb-1">Psi:</div>
                    <div className="text-sm">la práctica clínica</div>
                  </div>
                </div>
              </div>
              
              <p>
                La grulla es el símbolo porque representa resiliencia, cuidado y vuelo. Como en el origami, el camino terapéutico se construye pliegue a pliegue: con paciencia, método y acompañamiento, aparecen nuevas formas de estar y vincularse.
              </p>
              
              <p>
                En mi práctica clínica busco lo simple, humano y claro, con acuerdos de trabajo concretos y, cuando es necesario, articulación con familia, escuela y equipos interdisciplinarios. Trabajo con niños, adultos y familias, con experiencia en el abordaje de la discapacidad y una mirada integral del desarrollo y las relaciones.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="merriweather text-lg sm:text-xl text-center text-gray-800 italic font-medium">
                Alta Mente Psi es, en esencia, un lugar para que cada encuentro sea una oportunidad de crecimiento.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMePage;
