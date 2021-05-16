import React, { useState } from 'react'
import FormSubmit from './FormSubmit'
import FormSuccess from './FormSuccess'
import './Form.css'


export default function Form() {
    const [submitted, setSubmitted] = useState(false)

    const submitForm = () => {
        setSubmitted(true)
    }

    return (
        <div className='form container'>
            <span className='close-btn'>x</span>
            <div className='form-content-left'>
                <img className='form-img' src='' alt='' />
            </div>
            {!submitted ? (<FormSubmit submitForm={submitForm} />) : (<FormSuccess /> )}
        </div>
    )
}
