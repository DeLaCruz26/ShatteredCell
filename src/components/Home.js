import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Home() {
    return (
        <div className='showcase'>
            <h2>Device Repair Specialist</h2>
            <h1>Schedule your repair today</h1>
            <div className='showcase__buttons'>
                <div className='showcase__btn-services'>
                    <Link to='/services' className='services'>SERVICES</Link>
                </div>
                <div className='showcase__btn-schedule'>
                    <Link to='/schedule' className='schedule'>SCHEDULE</Link>
                </div>
            </div>
        </div>
    )
}
