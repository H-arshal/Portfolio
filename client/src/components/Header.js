import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../stylesheet/Header.css';

function Header() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const navItems = [
        { name: 'Home', to: 'home' },
        { name: 'Stack', to: 'devstack' },
        { name: 'Resume', to: 'resume' },
        { name: 'Projects', to: 'project' },
        { name: 'Certificates', to: 'certificates' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className='nav-container'>
            <ul className='nav-links'>
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            activeClass="active"
                            to={item.to}
                            spy={true}
                            smooth="easeInOutQuart"
                            duration={100}
                            offset={-100}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <button className='theme-toggle' onClick={toggleTheme} aria-label="Toggle Theme">
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
        </nav>
    );
}

export default Header;
