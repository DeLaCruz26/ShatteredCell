import React, { useState } from 'react'
import { Modal } from './Modal'
import { Container, GlobalStyle, StyledButton, StyledError, StyledForm, StyledFormWrapper, StyledInput, StyledTextArea } from './Styles'

export default function Form() {
    const initialState = {
        name: '',
        phone: '',
        message: '',
    }

    const [state, setState] = useState(initialState)
    const [error, setError] = useState('')

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const handleSubmit = event => {
        event.preventDefault()

        for (let key in state) {
            if (state[key] === '') {
                setError(`Please fill out ${key} area`)
                return
            }
        }
        setError('')
        setState(initialState)
    }

    const handleInput = event => {
        const inputName = event.target.name
        const value = event.target.value

        setState(prev => ({ ...prev, [inputName]: value }))
    }
    
    return (
       <>
        <GlobalStyle />
        <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit}>
                <h2>Contact Form</h2>
                <br />
                <label htmlFor='name'>Name</label>
                <StyledInput 
                    type='text' 
                    name='name' 
                    value={state.name} 
                    onChange={handleInput}
                />
                <label htmlFor='phone'>Phone Number</label>
                <StyledInput 
                    type='tel' 
                    name='phone' 
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' 
                    placeholder='Format: 123-456-7890'
                    value={state.phone}
                    onChange={handleInput} 
                    required 
                />
                <label htmlFor='message'>Message</label>
                <StyledTextArea 
                    name='message' 
                    value={state.message} 
                    onChange={handleInput} 
                />
                {error && (
                    <StyledError>
                      <p>{error}</p>
                    </StyledError>  
                )}
                <StyledButton type='submit' onClick={openModal}>Submit</StyledButton>    
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </StyledForm>
        </StyledFormWrapper>
       </>
    )
}
