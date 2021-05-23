import React from 'react'
import { Background, CloseModalButton, ModalContent, ModalImg, ModalWrapper } from './Styles'

export const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
            {showModal ? (
                <Background>
                    <ModalWrapper showModal={showModal}>
                        <ModalImg src={'./broken-phone.jpeg'} alt='picture' />
                        <ModalContent>
                            <h1>Thank you</h1>
                            <p>You're message has been received</p>
                        </ModalContent>
                        <CloseModalButton aria-label='Close modal' onClick={() => setShowModal
                        (prev => !prev)} />
                    </ModalWrapper>
                </Background>
            ) : null}
        </>
    )
}
