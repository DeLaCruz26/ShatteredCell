import React, { useState } from 'react'
import { GlobalStyle, StyledButton, StyledError, StyledForm, StyledFormWrapper, StyledInput, StyledTextArea } from './Styles'


export default function Form() {
    
    return (
       <>
        <GlobalStyle />
        <StyledFormWrapper>
            <StyledForm>
                <h2>Contact Form</h2>
                <br />
                <label htmlFor='name'>Name</label>
                <StyledInput type='text' name='name' />
                <label htmlFor='phone'>Phone Number</label>
                <StyledInput type='tel' name='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='Format: 123-456-7890' required />
                <label htmlFor='message'>Message</label>
                <StyledTextArea name='message' />
                <StyledError>Error Message</StyledError>
                <StyledButton type='submit'>Submit</StyledButton>
            </StyledForm>
        </StyledFormWrapper>
       </>
    )
}
