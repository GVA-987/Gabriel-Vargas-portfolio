import React from 'react';
import styles from './ProjectSection.module.scss';
import { FaGithub, FaLink } from 'react-icons/fa';
import img from '../../assets/GVA-avatar.webp';

const projectsData = [
    { 
        title: 'Pet Feeder: Sistema de Control IoT End-to-End', 
        desc: 'Solución integral de automatización diseñada para la gestión inteligente de recursos. El sistema implementa una arquitectura End-to-End que conecta hardware embebido con una plataforma web mediante protocolos de baja latencia (MQTT). Permite el monitoreo de telemetría, programación de eventos mediante lógica en la nube y control reactivo en tiempo real, garantizando la integridad de los datos y la continuidad del servicio.', 
        tech: ['React', 'Firebase', 'Node.js','MQTT', 'SCSS', 'C/C++', 'ESP32'],
        image: '/images/pet-feeder-web.png',
        live: 'URL_LIVE_DEMO', 
        
        subProjects: [
            {
                name: "Repositorio Frontend",
                github: "https://github.com/GVA-987/pet-feeder-control-Web.git",
            },
            {
                name: "Firmware Embebido",
                github: "https://github.com/GVA-987/device-pet-feederESP32.git",
            },
            {
                name: "Infraestrcutura Backend",
                github: "https://github.com/GVA-987/pet-feeder-backend.git",
            }
        ]
    },
];

const ProjectSection = (props) => {
    return (
        <section className={styles.projectSection} id={props.id}>
            <h2 className={styles.title}>Proyectos Destacados</h2>
            <div className={styles.projectsGrid}>
                {projectsData.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDesc}>{project.desc}</p>

                        <div className={styles.techStack}>
                                {project.tech.map((t, i) => (
                                    <span key={i} className={styles.techBadge}>{t}</span>
                                ))}
                            </div>
                        
                        <div className={styles.subProjectLinks}>
                            {project.subProjects && project.subProjects.map((sub, i) => (
                                <a 
                                    key={i} 
                                    href={sub.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={styles.linkButton}
                                >
                                    <FaGithub /> {sub.name}
                                </a>
                            ))}
                        </div>
                        
                        {/* <div className={styles.links}>
                            {project.live && (
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                                    <FaLink /> Ver Sistema en Vivo (Demo)
                                </a>
                            )}
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;