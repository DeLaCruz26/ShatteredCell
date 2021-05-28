import React from 'react'
import { GlobalStyle, StyledForm, StyledFormWrapper, StyledList, StyledListItem } from '../Styles'

export default function Confirm(props) {
    const continueForm = event => {
        event.preventDefault()
        props.nextStep()
    }

    const back = event => {
        event.preventDefault()
        props.prevStep()
    }

    const { 
        values: { firstName, lastName, email, repair, date, time }
    } = props
    return (
        <>
        <GlobalStyle />
        <StyledFormWrapper>
            <StyledForm>
                <h2>Confirm</h2>
                <br />
                <label htmlFor='name'>First Name</label>
                <StyledList>
                    <StyledListItem>
                        
                    </StyledListItem>
                </StyledList>
            </StyledForm>
        </StyledFormWrapper>
        </>
    )
}
