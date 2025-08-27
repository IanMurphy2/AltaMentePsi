import { useState } from "react";
import WhyPsi from "../whyPsi";

const AboutMe = () => {
    const [isWhyVisible, setIsWhyVisible] = useState(false);

    return (
        <>
            <section>
                <h3 className="merriweather text-2xl">👉Quién soy y cómo trabajo: </h3>
                <div className="openSans ml-8 my-10 flex flex-col gap-10">
                    <p>
                        Desde mis primeros pasos en la psicología me interesó crear espacios de escucha y confianza, donde cada persona pueda descubrir y fortalecer sus propios
                        recursos para afrontar los desafíos de la vida.
                    </p>
                    <p>A lo largo de los años he trabajado en el campo de la salud mental, acompañando a personas en diferentes etapas y situaciones vitales.</p>
                    <p>
                        Mi enfoque es integral, orientado a identificar y trabajar los puntos que generan tensión para favorecer una vida psíquica más saludable. Busco ofrecer un
                        espacio de respeto y acompañamiento, donde se construyan herramientas prácticas y aplicables a la vida cotidiana.
                    </p>
                    <p>
                        Cuento con experiencia clínica con niños, adultos y familias, así como en el acompañamiento a personas con discapacidad. Además, me especializo en la
                        articulación con instituciones educativas y equipos interdisciplinarios, lo que me permite aportar una mirada amplia sobre el desarrollo y los vínculos.
                    </p>
                    <p>
                        También ofrezco atención psicológica online, lo que me permite acompañar a personas en distintas partes del mundo con la misma cercanía y compromiso que en
                        la modalidad presencial.
                    </p>
                    <p>
                        Mi objetivo es que cada encuentro sea una oportunidad de crecimiento, bienestar y autonomía. Creo en un abordaje sencillo, humano y claro, que pueda
                        adaptarse a las necesidades de cada persona.
                    </p>
                </div>
                <button className="ml-8 merriweather hover:underline" onClick={() => setIsWhyVisible(!isWhyVisible)}>
                    👉 ¿Por qué Alta Mente Psi?
                </button>
            </section>
            {isWhyVisible && <WhyPsi />}
        </>
    );
};

export default AboutMe;
