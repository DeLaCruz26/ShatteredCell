import React from 'react'
import { GlobalStyle, StyledButton, StyledError, StyledForm, StyledFormWrapper, StyledInput } from '../Styles'


export default function UserDetails(props) {
    const continueForm = event => {
        event.preventDefault()
        props.nextStep()
    }

    const { values, handleChange } = props
    return (
        <>
        <GlobalStyle />
        <StyledFormWrapper>
            <StyledForm>
                <h2>Enter Name & Email</h2>
                <br />
                <label htmlFor='name'>First Name</label>
                <StyledInput 
                    type='text'
                    placeholder='Enter First Name' 
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />
                <label htmlFor='name'>Last Name</label>
                <StyledInput 
                    type='text'
                    placeholder='Enter Last Name'
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
                <label htmlFor='email'>Email</label>
                <StyledInput 
                    type='email'
                    placeholder='Enter Email'
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                <StyledButton 
                    onClick={continueForm} 
                >Continue</StyledButton>
            </StyledForm>
        </StyledFormWrapper>
        </>
    )
}
