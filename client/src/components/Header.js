import React, { useState } from 'react';
import { IoReorderThree } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-scroll';

function Header() {
    const [showHeader, setShowHeader] = useState(false);

    const toggleHeader = () => {
        setShowHeader(!showHeader);
    };

    return (
        <div className='header'>
            {showHeader ? (
                <IoIosClose
                    onClick={toggleHeader}
                    className='menu-icon-close position-fixed top-0 end-0'
                />
            ) : (
                <IoReorderThree
                    onClick={toggleHeader}
                    className='menu-icon position-fixed top-0 end-0'
                />
            )}
            <ul className={`${showHeader ? 'show-header' : 'hide-header'} n-box1`}>
                <li>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        offset={-100}
                        duration={100}
                        hashSpy={true}
                        isDynamic={true}
                        spyThrottle={0}
                        delay={10}
                        smooth="easeInOutQuart"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="devstack"
                        spy={true}
                        offset={-25}
                        duration={100}
                        hashSpy={true}
                        isDynamic={true}
                        spyThrottle={0}
                        delay={10}
                        smooth="easeInOutQuart"
                    >
                        Devstack
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="myself"
                        spy={true}
                        offset={-100}
                        duration={100}
                        hashSpy={true}
                        isDynamic={true}
                        spyThrottle={0}
                        delay={10}
                        smooth="easeInOutQuart"
                    >
                        Myself
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="resume"
                        spy={true}
                        offset={-20}
                        duration={100}
                        hashSpy={true}
                        isDynamic={true}
                        spyThrottle={0}
                        delay={10}
                        smooth="easeInOutQuart"
                    >
                        Resume
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        offset={0}
                        duration={100}
                        hashSpy={true}
                        isDynamic={true}
                        spyThrottle={0}
                        delay={10}
                        smooth="easeInOutQuart"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="certificates"
                        spy={true}
                        offset={-70}
                        duration={100}
                        hashSpy={true}
                        isDynamic={true}
                        spyThrottle={0}
                        delay={10}
                        smooth="easeInOutQuart"
                    >
                        Certificates
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        offset={-280}
                        duration={100}
                        hashSpy={true}
                        isDynamic={true}
                        spyThrottle={0}
                        delay={10}
                        smooth="easeInOutQuart"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
