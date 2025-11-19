import React from 'react';
import styles from './AboutSection.module.scss';
import { FaLaptopCode, FaMicrochip, FaUniversity } from 'react-icons/fa';

const aboutContent = {
    intro: "Soy Juan Gabriel Vargas Aliaga, un desarrollador de soluciones con un perfil híbrido, formado en Ingeniería de Sistemas y con base técnica en Electrónica Industrial.",
    focus: "Mi enfoque es la Ingeniería de Soluciones, fusionando el desarrollo Full-Stack con la Internet de las Cosas (IoT) para crear puentes entre el software y el mundo físico.",
    validation: [
        {
            icon: <FaLaptopCode />,
            title: "Desarrollo Full-Stack",
            text: "Capacidad de diseñar y construir aplicaciones web completas (React y Firebase) para gestionar y visualizar datos."
        },
        {
            icon: <FaMicrochip />,
            title: "Ingeniería de Hardware/IoT",
            text: "Conocimiento en electrónica y firmware (ESP32/PlatformIO) para la creación de dispositivos conectados."
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
                <div className={styles.imagePlaceholder}>
                     {/* Imagen o Diagrama */}
                    <span className={styles.placeholderText}>
                        Diagrama
                    </span>
                </div>
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