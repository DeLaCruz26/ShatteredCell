import React, { useState } from 'react' 
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../App.css'

export default function Navbar() {
    
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <nav>
           <div className='logo'>
               <h4>
                   <NavLink to='/' className='logo'>Shattered Cell</NavLink>
                </h4>
           </div>
           <ul className={click ? 'navlinks active' : 'navlinks'}>
                <li className='link'>
                    <NavLink to='/repairs' className='links' onClick={closeMobileMenu}>Repairs</NavLink>
                </li>
                <li className='link'>
                    <NavLink to='/services' className='links' onClick={closeMobileMenu}>Services</NavLink>
                </li>
                <li className='link'>
                    <NavLink to='/schedule' className='links' onClick={closeMobileMenu}>Schedule</NavLink>
                </li>
                <li className='link'>
                    <NavLink to='/contact' className='links' onClick={closeMobileMenu}>Contact</NavLink>
                </li>
           </ul>
           <div className='menu-icon' onClick={handleClick}>
               {click ? <FaTimes /> : <FaBars />}
           </div>
        </nav>
    )
}
