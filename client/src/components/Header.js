import React from 'react'
import { useState } from 'react';
import { IoReorderThree } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
function Header() {
    const [showHeader, setshowHeader] = useState(false)
    const path=window.location.pathname
    return (
        <div className='header'>
            {showHeader ? (
                <IoIosClose 
                onClick={()=>{setshowHeader(!showHeader)}}
                className='menu-icon-close position-fixed top-0 end-0 ' />
            ) : (
                <IoReorderThree
                onClick={()=>{setshowHeader(!showHeader)}}
                className='menu-icon position-fixed top-0 end-0' />
            )}
            <ul className={`${showHeader?'show-header':'hide-header'} n-box1`}>
                <li className={`${path==='/'&&'active'}`}><Link to='/'>Home</Link></li>
                <li className={`${path==='/projects'&&'active'}`}><Link to='/projects'>Projects</Link></li>
                <li className={`${path==='/courses'&&'active'}`}><Link to='/courses'>Courses</Link></li>
                <li className={`${path==='/certificates'&&'active'}`}><Link to='/certificates'>Certificate</Link></li>
                <li className={`${path==='/contact'&&'active'}`}><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header