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
               <h4><NavLink to='/'>Shattered Cell</NavLink></h4>
           </div>
           <ul className='navlinks'>
            <li className='link'>
                <NavLink to='/repairs' className='links'>Repairs</NavLink>
            </li>
            <li className='link'>
                <NavLink to='/services' className='links'>Services</NavLink>
            </li>
            <li className='link'>
                <NavLink to='/schedule' className='links'>Schedule</NavLink>
            </li>
            <li className='link'>
                <NavLink to='/contact-us' className='links'>Contact Us</NavLink>
            </li>
           </ul>
        </nav>
    )
}
