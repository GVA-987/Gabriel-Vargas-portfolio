import React from 'react';
import styles from './ContactSection.module.scss';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const ContactSection = (props) => {
    return (
        <section className={styles.contactSection} id={props.id}>
            <h2 className={styles.title}>¿Hablamos?</h2>
            <p className={styles.subtitle}>
                Estoy disponible para nuevos proyectos Full-Stack e IoT. ¡Envíame un mensaje!
            </p>

            <div className={styles.contentWrapper}>
                
                <div className={styles.formColumn}>
                    <form className={styles.contactForm}>
                        <input type="text" placeholder="Tu Nombre" className={styles.inputField} required />
                        <input type="email" placeholder="Tu Email" className={styles.inputField} required />
                        <textarea placeholder="Tu Mensaje" rows="5" className={styles.textareaField} required />
                        <button type="submit" className={styles.submitButton}>
                            Enviar Mensaje
                        </button>
                    </form>
                </div>

                <div className={styles.infoColumn}>
                    
                    <div className={styles.contactItem}>
                        <FaEnvelope className={styles.infoIcon} />
                        <a href="mailto:tu.email@ejemplo.com" className={styles.infoLink}>
                            email@ejemplo.com
                        </a>
                    </div>
                    
                    <div className={styles.contactItem}>
                        <FaMapMarkerAlt className={styles.infoIcon} />
                        <p className={styles.infoText}>La Paz, Bolivia</p>
                    </div>

                    <div className={styles.socials}>
                        <a href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaLinkedinIn />
                        </a>
                        <a href="URL_GITHUB" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaGithub />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;