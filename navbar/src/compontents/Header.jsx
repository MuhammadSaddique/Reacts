// ResponsiveNavbar.jsx
import { AiOutlineBulb } from "react-icons/ai";

import React, { useState } from 'react';
import styles from './style.module.css';

const ResponsiveNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <a href="#" className={styles.logo}>
        Your Logo
      </a>
      <div
        className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}
      >
        <a href="#">Home</a>
        <a href="#">All Cities</a>
        <a href="#">All Events</a>
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." className={styles.input} />
        <AiOutlineBulb className={styles.icon}
        
         />
        {/* <button className={styles.button}>Search</button> */}
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
