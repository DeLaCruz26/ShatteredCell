import React from 'react'
import { GlobalStyle, StyledButton, StyledButtonWrapper, StyledForm, StyledFormWrapper, StyledList, StyledListItem } from '../Styles'

export default function Confirm(props) {
    const continueForm = event => {
        event.preventDefault()
        props.nextStep()
    }

    const back = event => {
        event.preventDefault()
        props.prevStep()
    }

    const handleSubmit = event => {
        event.preventDefault()
    }

    const { values } = props
    return (
        <>
        <GlobalStyle />
        <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit}>
                <h2>Confirm Information</h2>
                <br />
                <StyledList>
                    <label htmlFor='name'>First Name</label>
                        <StyledListItem>{values.firstName}</StyledListItem>
                    <label htmlFor='name'>Last Name</label>
                        <StyledListItem>{values.lastName}</StyledListItem>
                    <label htmlFor='name'>Email</label>
                        <StyledListItem>{values.email}</StyledListItem>
                    <label htmlFor='name'>Repair</label>
                        <StyledListItem>{values.repair}</StyledListItem>
                    <label htmlFor='name'>Date</label>
                        <StyledListItem>{values.date}</StyledListItem>
                    <label htmlFor='name'>Time</label>
                        <StyledListItem>{values.time}</StyledListItem>
                </StyledList>
                <StyledButtonWrapper>
                    <StyledButton onClick={back}>Back</StyledButton>
                    <StyledButton type='submit' onClick={continueForm}>Submit</StyledButton>
                </StyledButtonWrapper>
            </StyledForm>
        </StyledFormWrapper>
        </>
    )
}
