import React from 'react';
import styles from './Navbar.module.scss';
import { FaLaptopCode } from 'react-icons/fa';

const Navbar = () => {
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={styles.navbar}>
            <div className={styles.logo} onClick={() => scrollToSection('home')}>
                <FaLaptopCode className={styles.logoIcon} />
                <span>GVA</span>
            </div>

            <nav className={styles.navLinks}>
                <a onClick={() => scrollToSection('home')} className={styles.navItem}>Inicio</a>
                <a onClick={() => scrollToSection('about')} className={styles.navItem}>Acerca de mí</a>
                <a onClick={() => scrollToSection('projects')} className={styles.navItem}>Proyectos</a>
                <a onClick={() => scrollToSection('skills')} className={styles.navItem}>Habilidades</a>
                <a onClick={() => scrollToSection('contact')} className={styles.navItem + ' ' + styles.ctaButton}>Contacto</a>
            </nav>
        </header>
    );
};

export default Navbar;