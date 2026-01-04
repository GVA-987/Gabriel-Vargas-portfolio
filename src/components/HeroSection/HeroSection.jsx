import React from 'react';
import styles from './HeroSection.module.scss';
import avatarGVA from '../../assets/GVA-avatar.webp';

import { FaGithub, FaLinkedinIn, FaDownload, FaEnvelope } from 'react-icons/fa'; 

const HeroSection = (props) => {
  return (
    <section className={styles.heroSection} id={props.id}>

      <div className={styles.contentWrapper}>
        <div className={styles.textColumn}>
          <p className={styles.greeting}>!Hola, soy...</p>
          <h1 className={styles.name}>JUAN GABRIEL VARGAS ALIAGA</h1>
          <h2 className={styles.title}>Full-Stack Developer</h2>
          <p className={styles.description}>
            Desarrollador de soluciones IoT | Apasionado por crear experiencias digitales que se conectan con el mundo real.
          </p>

          <div className={styles.ctaGroup}>
            <a href="/cv.pdf" download className={styles.cvButton}>
              <FaDownload className={styles.icon} /> Descargar CV
            </a>
            
            <div className={styles.socials}>
              <a href="https://github.com/GVA-987" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/juan-gabriel-vargas-gva/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaLinkedinIn />
              </a>
              <a href="mailto:j.gabrielv.aliaga9877@gmail.com" className={styles.socialIcon}>
                <FaEnvelope /> 
              </a>
            </div>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.profileWrapper}>
            <img 
              src= {avatarGVA}
              alt="Juan Gabriel Vargas Aliaga - Profile" 
              className={styles.profilePic} 
            />
          </div>
          
          {/* <div className={styles.metricsWrapper}>
            <div className={styles.metric}>
              <div className={styles.metricCircle}>
                <span className={styles.metricValue}>#años</span>
              </div>
              <p className={styles.metricLabel}>Años de Experiencia</p>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricCircle}>
                <span className={styles.metricValue}>#proyectos</span>
              </div>
              <p className={styles.metricLabel}>Proyectos Completados</p>
            </div>
          </div> */}
          
        </div>

      </div>
    </section>
  );
};

export default HeroSection;