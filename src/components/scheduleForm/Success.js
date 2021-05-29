import React from 'react'
import { GlobalStyle, StyledFormWrapper, StyledForm } from '../Styles'

export default function Success() {
    return (
        <>
         <GlobalStyle />
         <StyledFormWrapper>
             <StyledForm>
             <h1>Thank you for your submission!</h1>
             <p>You will receive a text or email with further details.</p>
             </StyledForm>
        </StyledFormWrapper>   
        </>
    )
}
