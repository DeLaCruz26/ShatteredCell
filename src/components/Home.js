import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Home() {
    return (
        <div className='showcase'>
            <h2>Device Repair Specialist</h2>
            <h1>Schedule your repair today</h1>
            <div className='showcase__buttons'>
                <Link to='/services' className='showcase__btn-services'>SERVICES</Link>
                <Link to='/schedule' className='showcase__btn-schedule'>SCHEDULE</Link>
            </div>
        </div>
    )
}
