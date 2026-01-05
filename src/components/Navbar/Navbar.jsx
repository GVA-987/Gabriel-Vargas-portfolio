import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { FaLaptopCode, FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <header className={styles.navbar}>
            <div className={styles.logo} onClick={() => scrollToSection('home')}>
                <FaLaptopCode className={styles.logoIcon} />
                <span>GVA</span>
            </div>

            <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <nav className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
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