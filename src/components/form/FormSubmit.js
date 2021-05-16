import React from 'react'
import useForm from './useForm'
import validate from './validateForm'
import './Form.css'

export default function FormSubmit({ submitForm }) {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm, validate
    )

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>Didn't find what you were looking for? Feel free to send me any questions you have.</h1>
                <div className='form-inputs'>
                    <label className='form-label'>Name</label>
                    <input className='form-input' type='text' name='name' value={values.name} onChange={handleChange} />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Number</label>
                    <input className='form-input' type='number' name='number' value={values.number} onChange={handleChange} />
                    {errors.number && <p>{errors.number}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Question</label>
                    <input className='form-input' type='description' name='question' value={values.question} onChange={handleChange} />
                    {errors.question && <p>{errors.question}</p>}
                </div>
                <button className='form-input-btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}
