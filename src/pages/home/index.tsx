const Home = () => {
    return (
        <div className="min-h-screen ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
                
                {/* Header Section */}
                <section className="flex flex-col gap-8 sm:gap-12 lg:gap-16 sm:flex-row items-center justify-between mb-16 sm:mb-20 lg:mb-32">
                    <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                        <img 
                            src="./images/altaMenteLogo.png" 
                            alt="Logo de Alta Mente Psi" 
                            className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[400px] h-auto drop-shadow-lg" 
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center space-y-3 sm:space-y-4">
                        <h1 className="merriweather text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                            Alta Mente Psi
                        </h1>
                        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                        <h2 className="openSans text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light">
                            Espacio de psicología
                        </h2>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="flex flex-col-reverse gap-8 sm:gap-12 lg:gap-16 lg:flex-row items-center justify-between">
                    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 flex-1">
                        <h3 className="merriweather text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed">
                            Hola 👋, soy Walter Cárcamo, Licenciado en Psicología.
                        </h3>
                        
                        <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full lg:mx-0 mx-auto"></div>
                        
                        <p className="openSans text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                            Ofrezco un espacio de escucha y acompañamiento, presencial en CABA y online en toda Argentina, con experiencia en clínica psicológica, discapacidad y articulación educativa.
                        </p>
                        
                        <div className="pt-4">
                            <a
                                href="https://wa.me/5492966215003?text=Hola%20Walter,%20quiero%20consultar%20por%20un%20turno."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 openSans text-sm sm:text-base"
                            >
                                <span className="text-xl">📱</span>
                                👉 Agendá tu consulta
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                        <div className="relative ">
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-300 rounded-full transform scale-110 opacity-20 overflow-hidden"></div>
                            <img 
                                src="./images/fotoWalter.png" 
                                alt="Foto de Walter Cárcamo" 
                                className="relative w-48 sm:w-56 md:w-64 lg:w-80 xl:w-[400px] h-auto rounded-full" 
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
