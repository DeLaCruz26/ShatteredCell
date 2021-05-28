import React from 'react'
import { GlobalStyle, StyledForm, StyledFormWrapper, StyledInput, StyledSelect } from '../Styles'

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
                <StyledSelect 
                    type='select'
                />
            </StyledForm>
        </StyledFormWrapper>
        </>
    )
}
