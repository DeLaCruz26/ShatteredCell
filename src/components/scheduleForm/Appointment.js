import React from 'react'
import { GlobalStyle, StyledForm, StyledFormWrapper, StyledInput, StyledButtonWrapper, StyledButton } from '../Styles'


export default function Appointment(props) {
    const continueForm = event => {
        event.preventDefault()
        props.nextStep()
    }
    const back = event => {
        event.preventDefault()
        props.prevStep()
    }

    const { values, handleChange } = props
    return (
        <>
        <GlobalStyle />
        <StyledFormWrapper>
            <StyledForm>
                <h2>Select Repair Type & Time/Date</h2>
                <br />
                <label htmlFor='repair'>Repair Type</label>
                <StyledInput 
                    type='text'
                    placeholder='Enter Type'
                    onChange={handleChange('repair')}
                    defaultValue={values.repair}
                />
                <label htmlFor='date'>Date</label>
                <StyledInput 
                    type='date'
                    onChange={handleChange('date')}
                    defaultValue={values.date}
                />
                <label htmlFor='time'>Time</label>
                <StyledInput 
                    type='time'
                    onChange={handleChange('time')}
                    defaultValue={values.time}
                />
                <StyledButtonWrapper>
                    <StyledButton onClick={continueForm}>Continue</StyledButton>
                    <StyledButton onClick={back}>Back</StyledButton>
                </StyledButtonWrapper>
            </StyledForm>
        </StyledFormWrapper>
        </>
    )
}
