import React, { useState, type JSX } from "react";

interface AccordionItemProps {
    id: number;
    emoji: string;
    title: string;
    content: string | JSX.Element;
    isOpen: boolean;
    onToggle: (id: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, emoji, title, content, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-200">
            <button className="w-full text-left py-4 px-2 flex items-center gap-3 hover:bg-gray-50 transition-colors" onClick={() => onToggle(id)}>
                <span className="text-2xl">{emoji}</span>
                <span className="font-open-sans text-lg font-medium text-gray-800">{title}</span>
                <span className="ml-auto text-gray-500">{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && <div className="px-2 pb-4 font-open-sans text-gray-600 leading-relaxed">{content}</div>}
        </div>
    );
};

const ServicesPage: React.FC = () => {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const toggleItem = (id: number) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    const services = [
        {
            id: 1,
            emoji: "🧑‍⚕️",
            title: "Atención psicológica individual",
            content: (
                <div>
                    <div className="mb-3">
                        <h4 className="font-semibold mb-2">Niños y adolescentes</h4>
                        <p>Acompañamiento en procesos de desarrollo, aprendizaje y vínculos, a través del juego y la palabra.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Adultos</h4>
                        <p>Espacios de escucha y trabajo clínico orientados a afrontar ansiedades, duelos, crisis vitales y toma de decisiones.</p>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            emoji: "♿",
            title: "Acompañamiento en discapacidad",
            content:
                "Atención adaptada a cada persona, con articulación con la familia, instituciones educativas y equipos interdisciplinarios. Busco favorecer la autonomía, la inclusión y la calidad de vida, con intervenciones claras y aplicables a la vida cotidiana.",
        },
        {
            id: 3,
            emoji: "🌐",
            title: "Atención psicológica online",
            content: "Sesiones por videollamada con la misma cercanía y compromiso que en la modalidad presencial. Disponible para personas en todo el país.",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="text-center mb-8 sm:mb-12">
                <h1 className="merriweather text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">👉 Cómo puedo ayudarte</h1>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
            </div>

            <div className="bg-white gap-5 rounded-lg shadow-sm border border-gray-200">
                {services.map((service) => (
                    <AccordionItem
                        key={service.id}
                        id={service.id}
                        emoji={service.emoji}
                        title={service.title}
                        content={service.content}
                        isOpen={openItems.has(service.id)}
                        onToggle={toggleItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
