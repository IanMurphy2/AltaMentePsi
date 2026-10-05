import { useRef, type ReactNode } from "react";
import PaperCrane from "../../components/PaperCrane";
import { useFoldProgress } from "../../hooks/useFoldProgress";
import { CONTACT } from "../../content";

interface SectionProps {
    id: string;
    title?: string;
    className?: string;
    children: ReactNode;
}

// Every section is one fold of the crane.
const Section = ({ id, title, className = "", children }: SectionProps) => (
    <section id={id} data-fold className={`flex min-h-[65svh] flex-col justify-center py-14 lg:py-16 ${className}`}>
        {title && <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>}
        {children}
    </section>
);

const PrimaryButton = ({ children }: { children: ReactNode }) => (
    <a
        href={CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm tracking-wide text-white transition-colors duration-300 hover:bg-ink/85"
    >
        {children}
        <span aria-hidden="true">→</span>
    </a>
);

const services = [
    {
        title: "Atención psicológica individual",
        content: "Niños y adolescentes, a través del juego y la palabra. Adultos que atraviesan ansiedades, duelos, crisis vitales o decisiones.",
    },
    {
        title: "Acompañamiento en discapacidad",
        content: "Atención adaptada a cada persona, articulada con familia, escuela y equipos interdisciplinarios, para favorecer la autonomía y la inclusión.",
    },
    {
        title: "Atención psicológica online",
        content: "Por videollamada, con la misma cercanía y compromiso que en la modalidad presencial.",
    },
];

const nameMeanings = [
    { word: "Alta", meaning: "crecer" },
    { word: "Mente", meaning: "lo psíquico" },
    { word: "Psi", meaning: "la práctica clínica" },
];

const usefulData = [
    { label: "Modalidad", value: "Presencial en Bariloche · Online, Argentina y exterior" },
    { label: "Turnos", value: "Con reserva previa" },
];

const faqItems = [
    { question: "¿Duración de la sesión?", answer: "45–50 minutos." },
    { question: "¿Medios de pago?", answer: "Transferencia / efectivo / a convenir." },
    { question: "¿Obras sociales?", answer: "Atiendo pacientes con obra social y también de manera particular." },
];

const Home = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const progress = useFoldProgress(contentRef);

    return (
        <>
            <div className="sky" aria-hidden="true">
                <span className="cloud cloud--1" />
                <span className="cloud cloud--2" />
                <span className="cloud cloud--3" />
                <span className="cloud cloud--4" />
            </div>

            <main className="lg:grid lg:grid-cols-2">
                <aside className="crane-stage sticky top-0 z-10 flex h-[34svh] items-center justify-center lg:h-svh lg:self-start">
                    <div className="h-full w-full max-w-[min(34svh,420px)] p-4 lg:max-w-[min(80svh,560px)] lg:p-10">
                        <PaperCrane progress={progress} />
                    </div>
                </aside>

                <div ref={contentRef} className="prose-body px-6 sm:px-10 lg:pr-20 lg:pl-4 xl:pr-32">
                    <Section id="inicio" className="!min-h-svh lg:!pt-0">
                        <p className="eyebrow">Espacio de psicología</p>
                        <h1 className="mt-6 font-display text-5xl tracking-[0.12em] text-ink uppercase sm:text-6xl xl:text-7xl">Alta Mente Psi</h1>
                        <p className="mt-10 font-display text-2xl text-ink italic sm:text-3xl">Hola, soy Walter Cárcamo, Licenciado en Psicología.</p>
                        <p className="mt-5 max-w-xl">
                            Ofrezco un espacio de escucha y acompañamiento, presencial en Bariloche y online en toda Argentina, con experiencia en clínica psicológica, discapacidad y articulación educativa.
                        </p>
                        <div className="mt-10">
                            <PrimaryButton>Agendá tu consulta</PrimaryButton>
                        </div>
                    </Section>

                    <Section id="sobre-mi" title="Quién soy y cómo trabajo">
                        <div className="mt-8 max-w-xl space-y-5">
                            <p>
                                Desde mis primeros pasos en la psicología me interesó crear espacios de escucha y confianza, donde cada persona pueda descubrir y fortalecer sus propios
                                recursos para afrontar los desafíos de la vida.
                            </p>
                            <p>
                                Mi enfoque es integral: identificar y trabajar los puntos que generan tensión para favorecer una vida psíquica más saludable, construyendo herramientas
                                prácticas y aplicables a la vida cotidiana. Creo en un abordaje sencillo, humano y claro, que se adapte a las necesidades de cada persona.
                            </p>
                        </div>
                    </Section>

                    <Section id="servicios" title="Cómo puedo ayudarte">
                        <ul className="mt-8 max-w-xl divide-y divide-line border-y border-line">
                            {services.map((service) => (
                                <li key={service.title} className="py-6">
                                    <h3 className="font-display text-2xl text-ink">{service.title}</h3>
                                    <p className="mt-2">{service.content}</p>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section id="por-que" title="¿Por qué Alta Mente Psi?">
                        <div className="mt-8 max-w-xl space-y-5">
                            <p>Alta Mente Psi nace de la idea de elevar lo posible: una mente que se abre camino, aprende y se vuelve más flexible.</p>
                            <p>El nombre reúne tres sentidos:</p>
                        </div>
                        <dl className="my-10 grid max-w-xl grid-cols-3 border-y border-line">
                            {nameMeanings.map((item) => (
                                <div key={item.word} className="border-line py-6 text-center not-first:border-l">
                                    <dt className="font-display text-3xl text-ink sm:text-4xl">{item.word}</dt>
                                    <dd className="mt-1 text-sm">{item.meaning}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className="max-w-xl space-y-5">
                            <p>
                                La grulla es el símbolo porque representa resiliencia, cuidado y vuelo. Como en el origami, el camino terapéutico se construye pliegue a pliegue: con
                                paciencia, método y acompañamiento, aparecen nuevas formas de estar y vincularse.
                            </p>
                        </div>
                        <blockquote className="mt-10 max-w-xl border-l border-ink/40 pl-6 font-display text-2xl text-ink italic">
                            Alta Mente Psi es, en esencia, un lugar para que cada encuentro sea una oportunidad de crecimiento.
                        </blockquote>
                    </Section>

                    <Section id="contacto" title="Contacto">
                        <div className="mt-8 flex max-w-xl flex-wrap gap-3">
                            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="pill">
                                Agendar por WhatsApp
                            </a>
                            <a href={CONTACT.mailUrl} className="pill">
                                Escribirme por correo
                            </a>
                            <a href={CONTACT.phoneUrl} className="pill">
                                Llamarme
                            </a>
                        </div>

                        <h3 className="eyebrow mt-14">Datos útiles</h3>
                        <dl className="mt-4 max-w-xl divide-y divide-line border-y border-line">
                            {usefulData.map((item) => (
                                <div key={item.label} className="grid gap-1 py-3.5 sm:grid-cols-[8rem_1fr]">
                                    <dt className="text-sm opacity-70">{item.label}</dt>
                                    <dd className="text-ink">{item.value}</dd>
                                </div>
                            ))}
                        </dl>

                        <h3 className="eyebrow mt-14">Preguntas frecuentes</h3>
                        <div className="mt-4 max-w-xl divide-y divide-line border-y border-line">
                            {faqItems.map((item) => (
                                <details key={item.question} className="faq group py-4">
                                    <summary className="flex cursor-pointer list-none items-center justify-between text-ink">
                                        {item.question}
                                        <span className="text-xl leading-none transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                                            +
                                        </span>
                                    </summary>
                                    <p className="pt-3">{item.answer}</p>
                                </details>
                            ))}
                        </div>
                    </Section>

                    <section id="primer-paso" data-fold className="flex min-h-svh flex-col justify-end pt-12">
                        <h2 className="max-w-md font-display text-4xl leading-tight text-ink sm:text-5xl">¿Listo para dar el primer paso?</h2>
                        <div className="mt-6 grid items-end gap-8 sm:grid-cols-[1fr_auto]">
                            <div className="pb-6 sm:pb-20">
                                <p className="max-w-xs">Estoy aquí para acompañarte en tu proceso. Contáctame para coordinar una primera consulta.</p>
                                <div className="mt-8">
                                    <PrimaryButton>Contactar ahora</PrimaryButton>
                                </div>
                            </div>
                            <img src="/images/fotoWalter.png" alt="Walter Cárcamo, Licenciado en Psicología" className="mx-auto h-[55svh] w-auto max-w-full object-contain object-bottom" />
                        </div>
                        <footer className="flex flex-col gap-2 border-t border-line py-6 text-sm sm:flex-row sm:justify-between">
                            <span>
                                © {new Date().getFullYear()} Alta Mente Psi · Lic. Walter Cárcamo
                            </span>
                            <span className="flex gap-5">
                                <a href={`mailto:${CONTACT.email}`} className="hover:text-ink">
                                    {CONTACT.email}
                                </a>
                                <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                                    {CONTACT.phone}
                                </a>
                            </span>
                        </footer>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Home;
