import React from 'react';
import styles from './AboutSection.module.scss';
import { FaLaptopCode, FaMicrochip, FaUniversity } from 'react-icons/fa';

const aboutContent = {
    intro: "Soy Juan Gabriel Vargas Aliaga, un Ingeniero de Sistemas con una sólida base técnica en Electrónica Industrial. Mi enfoque se centra en la Ingeniería de Soluciones Integrales, donde fusiono el desarrollo Full-Stack con el Internet de las Cosas (IoT) para crear puentes robustos entre el software y el mundo físico.",
    focus: "Con experiencia en la arquitectura de sistemas End-to-End, me especializo en conectar sistemas embebidos con plataformas web. Mi objetivo es transformar datos en acciones en tiempo real, optimizando procesos mediante la automatización inteligente.",
    validation: [
        {
            icon: <FaLaptopCode />,
            title: "Desarrollo Full-Stack",
            text: "Capacidad de diseñar y construir ecosistemas digitales completos que facilitan la gestión y visualización de datos en tiempo real."
        },
        {
            icon: <FaMicrochip />,
            title: "Ingeniería de Hardware/IoT",
            text: "Desarrollo de firmware y control de sistemas embebidos. Implementación de protocolos de comunicación para telemetría y ejecución de comandos remotos."
        },
        {
            icon: <FaUniversity />,
            title: "Formación Integral",
            text: "Mi doble formación me permite abordar la arquitectura de sistemas End-to-End, desde el chip hasta la nube."
        }
    ]
};

const AboutSection = (props) => {
    return (
        <section className={styles.aboutSection} id={props.id}>
            <div className={styles.contentWrapper}>
                <div className={styles.textColumn}>
                    <h2 className={styles.title}>Acerca de Mí</h2>
                    <p className={styles.intro}>{aboutContent.intro}</p>
                    <p className={styles.focus}>{aboutContent.focus}</p>

                    <div className={styles.featuresGrid}>
                        {aboutContent.validation.map((item, index) => (
                            <div key={index} className={styles.featureCard}>
                                <div className={styles.featureIcon}>{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;