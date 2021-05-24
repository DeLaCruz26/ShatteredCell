import React, { Component } from 'react'
import '../App.css'
import Form from './scheduleForm/Form'

export default class Schedule extends Component {
    render() {
        return (
            <div className='schedule-container'>
                <div className='schedule-wrapper'>
                    <h1>Schedule an appointment</h1>
                    <Form />
                </div>
            </div>
        )
    }
}
