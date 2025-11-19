import React from 'react';
import styles from './SkillsSection.module.scss';
import { FaGithub, FaSass, FaReact, FaHtml5, FaNodeJs, FaCss3, FaJs, FaPhp, FaGitAlt, FaMicrochip, FaDatabase} from 'react-icons/fa'; 
import { SiFirebase, SiSqlalchemy} from 'react-icons/si'; 
import { FaC } from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';

const skillsData = [
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'C#', icon: <TbBrandCSharp /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', level: 'Intermedio', icon: <FaNodeJs /> },
    { name: 'Sass', icon: <FaSass /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'SQLServer', icon: <FaDatabase /> },
    { name: 'ESP32/Arduino', icon: <FaMicrochip /> },
    { name: 'git', icon: <FaGitAlt /> },
    { name: 'github', icon: <FaGithub /> },
];

const SkillsSection = (props) => {
    return (
        <section className={styles.skillsSection} id={props.id}>
            <h2 className={styles.title}>Habilidades Técnicas</h2>
            <p className={styles.subtitle}>Herramientas que domino y utilizo en mis proyectos.</p>
            
            <div className={styles.skillsGrid}>
                {skillsData.map((skill, index) => (
                    <div key={index} className={styles.skillCard}>
                        <div className={styles.skillIcon}>{skill.icon}</div>
                        <h3 className={styles.skillName}>{skill.name}</h3>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;