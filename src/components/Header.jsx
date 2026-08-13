import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

function Header() {
    const navItems = [
        { name: 'HOME', to: 'home', num: '01' },
        { name: 'STACK', to: 'devstack', num: '02' },
        { name: 'ABOUT', to: 'myself', num: '03' },
        { name: 'RESUME', to: 'resume', num: '04' },
        { name: 'PROJECTS', to: 'project', num: '05' },
        { name: 'CERTIFICATES', to: 'certificates', num: '06' },
        { name: 'CONTACT', to: 'contact', num: '07' },
    ];

    return (
        <header className='comic-header'>
            <div className="comic-header-inner">
                <div className="header-logo">
                    <span className="logo-text">HM</span>
                </div>
                <nav className='comic-nav'>
                    <ul className='nav-links'>
                        {navItems.map((item, index) => (
                            <li key={item.name}>
                                <Link
                                    activeClass="active"
                                    to={item.to}
                                    spy={true}
                                    smooth="easeInOutQuart"
                                    duration={500}
                                    offset={-80}
                                >
                                    <span className="nav-num">{item.num}</span> {item.name}
                                </Link>
                                {index < navItems.length - 1 && <span className="nav-separator">·</span>}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
