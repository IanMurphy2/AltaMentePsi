import React, { useState, useCallback } from "react";

const ContactPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = useCallback((index: number) => {
        setOpenFaq((prev) => (prev === index ? null : index));
    }, []);

    const faqItems = [
        {
            question: "¿Duración de la sesión?",
            answer: "45–50 minutos.",
        },
        {
            question: "¿Medios de pago?",
            answer: "Transferencia / efectivo / a convenir.",
        },
        {
            question: "¿Obras sociales?",
            answer: "Atiendo pacientes con obra social y también de manera particular.",
        },
    ];

    return (
        <div className="min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Bloque A - Botones CTA */}
                <section className="text-center mb-12 sm:mb-16">
                    <div className="text-center mb-8 sm:mb-12">
                        <h1 className="merriweather text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">👉 Contacto</h1>
                        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                        <a
                            href="https://wa.me/5492966215003?text=Hola%20Walter,%20quiero%20consultar%20por%20un%20turno."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                        >
                            <span className="text-xl">📱</span>
                            Agendar por WhatsApp
                        </a>
                        <a
                            href="mailto:walter.carcamo.f@gmail.com?subject=Consulta%20-%20AltaMente%20Psi"
                            className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                        >
                            <span className="text-xl">📧</span>
                            Escribirme por correo
                        </a>
                        <a
                            href="tel:+5492966215003"
                            className="bg-gray-600 hover:bg-gray-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                        >
                            <span className="text-xl">📞</span>
                            Llamarme
                        </a>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {/* Bloque C - Datos útiles */}
                    <section className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
                        <h2 className="merriweather text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">Datos útiles</h2>
                        <div className="space-y-6 openSans text-gray-700">
                            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <span className="text-blue-500 text-2xl">📧</span>
                                <span className="text-lg">walter.carcamo.f@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <span className="text-green-500 text-2xl">📱</span>
                                <span className="text-lg">+54 9 2966 215003</span>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <span className="text-red-500 text-2xl">📍</span>
                                <span className="text-lg">CABA (zona a coordinar al reservar)</span>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <span className="text-purple-500 text-2xl">🕐</span>
                                <span className="text-lg">Turnos con reserva previa</span>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <span className="text-orange-500 text-2xl">💻</span>
                                <span className="text-lg">Presencial en CABA · Online (Argentina y exterior)</span>
                            </div>
                        </div>
                    </section>

                    {/* Bloque E - FAQ */}
                    <section className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
                        <h2 className="merriweather text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">Preguntas frecuentes</h2>
                        <div className="space-y-4">
                            {faqItems.map((item, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(index)}
                                        className="w-full text-left px-6 py-4 openSans font-medium text-gray-800 hover:bg-gray-50 transition-colors flex justify-between items-center"
                                    >
                                        <span className="text-lg">{item.question}</span>
                                        <span className={`transform transition-transform duration-200 text-xl ${openFaq === index ? "rotate-180" : ""}`}>▼</span>
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-6 pb-4 openSans text-gray-600 text-lg bg-gray-50">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Mensaje adicional centrado */}
                <section className="text-center mt-12 sm:mt-16">
                    <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 sm:p-10 max-w-4xl mx-auto">
                        <h3 className="merriweather text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                            ¿Listo para dar el primer paso?
                        </h3>
                        <p className="openSans text-gray-600 text-lg mb-6">
                            Estoy aquí para acompañarte en tu proceso. Contáctame para coordinar una primera consulta.
                        </p>
                        <a
                            href="https://wa.me/5492966215003?text=Hola%20Walter,%20quiero%20consultar%20por%20un%20turno."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <span className="text-xl">📱</span>
                            Contactar ahora
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;
