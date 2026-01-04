import React from 'react';
import styles from './SkillsSection.module.scss';
import { FaGithub, FaSass, FaReact, FaHtml5, FaNodeJs, FaJs, FaPhp, FaMicrochip } from 'react-icons/fa'; 
import { SiFirebase, SiMqtt, SiGit, SiCss3, SiPostman} from 'react-icons/si'; 
import { TbBrandCSharp, TbSql } from 'react-icons/tb';
import { DiMysql } from 'react-icons/di';

const skillCategories = [
    {
        title: "IoT & Sistemas Embebidos",
        skills: [
            { name: 'Sistemas Embebidos', icon: <FaMicrochip color="#607D8B" /> },
            { name: 'Protocolos IoT (MQTT)', icon: <SiMqtt color="#6d07a5ff" /> },
            { name: 'Comunicación Serial / HMI', icon: <TbBrandCSharp color="#239120" /> },
        ]
    },
    {
        title: "Core & Backend",
        skills: [
            { name: 'C# / .NET Desktop', icon: <TbBrandCSharp color="#239120"/> },
            { name: 'Node.js', icon: <FaNodeJs color="#339933"/> },
            { name: 'PHP', icon: <FaPhp color="#777BB4"/> },
            { name: 'MySQL', icon: <DiMysql color="#4479A1"/> },
            { name: 'SQL Server', icon: <TbSql color="#CC2927"/> },
            { name: 'Firebase', icon: <SiFirebase color="#e48c20ff"/> },
        ]
    },
    {
        title: "Frontend & Diseño",
        skills: [
            { name: 'React', icon: <FaReact color="#61DAFB"/> },
            { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
            { name: 'CSS', icon: <SiCss3 color="#1572B6"/> },
            { name: 'Sass', icon: <FaSass color="#CC6699"/> },
            { name: 'HTML', icon: <FaHtml5 color="#E34F26"/> },
        ]
    },
    {
        title: "Gestion de Proyectos & Testing",
        skills: [
            { name: 'Git', icon: <SiGit color="#F05032"/> },
            { name: 'GitHub', icon: <FaGithub color="#FFFFFF"/> },
            { name: 'Postman', icon: <SiPostman color="#FF6C37"/> },
        ]
    }
];

const SkillsSection = (props) => {
    return (
        <section className={styles.skillsSection} id={props.id}>
            <h2 className={styles.title}>Habilidades de Ingeniería</h2>
            <p className={styles.subtitle}>
                Dominio técnico para soluciones <strong>End-to-End</strong>.
            </p>
            
            <div className={styles.categoriesContainer}>
                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className={styles.categoryBlock}>
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                        <div className={styles.skillsGrid}>
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className={styles.skillCard}>
                                    <div className={styles.skillIcon}>{skill.icon}</div>
                                    <span className={styles.skillName}>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;