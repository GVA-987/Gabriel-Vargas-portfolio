import React from 'react';
import styles from './ProjectSection.module.scss';
import { FaGithub, FaLink } from 'react-icons/fa';

const projectsData = [
    { 
        title: 'Pet Feeder: Sistema de Control IoT End-to-End', 
        desc: 'Plataforma completa para el monitoreo y control remoto de una dosificadora de alimentos (smart pet feeder). Solución Full-Stack que gestiona la programación de horarios, las cantidades dispensadas y el estado del dispositivo en tiempo real.', 
        tech: ['React', 'Firebase (RTDB)', 'C/C++', 'ESP32', 'SCSS'],
        image: '/images/pet-feeder-web.png',
        live: 'URL_LIVE_DEMO', 
        
        subProjects: [
            {
                name: "Web Control (Frontend)",
                github: "https://github.com/GVA-987/pet-feeder-control-Web.git",
            },
            {
                name: "Firmware (ESP32)",
                github: "https://github.com/GVA-987/device-pet-feederESP32.git",
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
                        
<div className={styles.links}>
    {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            <FaLink /> Live Demo
        </a>
    )}
</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;