import React, { useRef, useState } from 'react';
import styles from './ContactSection.module.scss';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export const ContactSection = (props) => {

    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            form.current, 
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            return emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID, 
                form.current, 
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
        })
        .then(() => {
            setStatusMessage("¡Mensaje enviado con éxito!");
            e.target.reset();
        })
        .catch((e) => {
            console.error(e);
            setStatusMessage("Hubo un error. Por favor, intenta de nuevo.");
        })
        .finally(() => {
            setIsSending(false);
        });
    };

    return (
        <section className={styles.contactSection} id={props.id}>
            <h2 className={styles.title}>¿Hablamos?</h2>
            <p className={styles.subtitle}>
                Estoy disponible para nuevos proyectos Full-Stack e IoT. ¡Envíame un mensaje!
            </p>

            <div className={styles.contentWrapper}>
                
                <div className={styles.formColumn}>
                    <form className={styles.contactForm} onSubmit={sendEmail} ref={form}>
                        <input type="text" name="from_name" placeholder="Tu Nombre" className={styles.inputField} required />
                        <input type="email" name="from_email" placeholder="Tu Email" className={styles.inputField} required />
                        <textarea name="message" placeholder="Tu Mensaje" rows="5" className={styles.textareaField} required />
                        <button type="submit" className={styles.submitButton} disabled={isSending}>
                            {isSending ? 'Enviando...' : 'Enviar Menssaje'}
                        </button>
                        {statusMessage && <p className={styles.status}>{statusMessage}</p>}
                    </form>
                </div>

                <div className={styles.infoColumn}>
                    
                    <div className={styles.contactItem}>
                        <a href="mailto:j.gabrielv.aliaga9877@gmail.com" className={styles.infoLink}>
                        <FaEnvelope className={styles.infoIcon} />
                        </a>
                    </div>
                    
                    <div className={styles.contactItem}>
                        <FaMapMarkerAlt className={styles.infoIcon} />
                        <p className={styles.infoText}>La Paz, Bolivia</p>
                    </div>

                    <div className={styles.socials}>
                        <a href="https://www.linkedin.com/in/juan-gabriel-vargas-gva/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com/GVA-987" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaGithub />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;