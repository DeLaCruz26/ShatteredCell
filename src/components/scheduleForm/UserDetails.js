import React from 'react'
import { GlobalStyle, StyledButton, StyledError, StyledForm, StyledFormWrapper, StyledInput, StyledTextArea } from '../Styles'


export default function UserDetails(props) {
    const continueForm = event => {
        event.preventDefault()
        props.nextStep()
    }

    return (
        <>
        <GlobalStyle />
        <StyledFormWrapper>
            <StyledForm>
                <h2>Schedule Form</h2>
                <br />
                <label htmlFor='name'>First Name</label>
                <StyledInput 
                    placeholder='Enter Your First Name' 
                    onChange={props.handleChange('fristName')}
                    defaultValue={props.values.firstName}
                />
                <label htmlFor='name'>Last Name</label>
                <StyledInput 
                    onChange={props.handleChange('lastName')}
                />
            </StyledForm>
        </StyledFormWrapper>
        </>
    )
}
