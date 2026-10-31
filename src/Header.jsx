import React, { useState, useEffect } from "react";
import './css/header.css';
import AbdulRouf from "./assets/AR-logo-transparent.png";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Close menu when pressing Escape or resizing to desktop width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#achievements', label: 'Achievements' },
        { href: '#contact', label: 'Get In Touch' },
    ];

    return (
        <header className="header-section">
            <div className="header-container">
                <a href="#home" className="header-logo-link" onClick={closeMenu}>
                    <img src={AbdulRouf} alt="Abdul Rouf" className="header-logo" />
                </a>

                {/* Desktop Navigation Links */}
                <nav className="desktop-nav">
                    <ul className="header-links">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Hamburger Toggle */}
                <button
                    type="button"
                    className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>

            {/* Mobile Navigation Drawer & Backdrop */}
            <div
                className={`mobile-nav-backdrop ${isMenuOpen ? 'active' : ''}`}
                onClick={closeMenu}
                aria-hidden="true"
            />
            <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
                <div className="mobile-nav-header">
                    <a href="#home" className="mobile-nav-logo-link" onClick={closeMenu}>
                        <img src={AbdulRouf} alt="Abdul Rouf" className="mobile-nav-logo" />
                    </a>
                    <button
                        type="button"
                        className="mobile-nav-close"
                        onClick={closeMenu}
                        aria-label="Close navigation menu"
                    >
                        ✕
                    </button>
                </div>
                <ul className="mobile-nav-links">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={closeMenu}>
                                <span>{link.label}</span>
                                <span className="mobile-nav-arrow" aria-hidden="true">→</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;