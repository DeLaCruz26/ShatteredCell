import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
       box-sizing: border-box;
       margin: 0;
       padding: 0;
       font-family: Arial, Helvetica, sans-serif;
   }
`;

export const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px 0 10px 0;
`;

export const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${sharedStyles}
`;

export const StyledTextArea = styled.textarea`
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
    ${sharedStyles}
`;

export const StyledButtonWrapper = styled.div`
   display: flex;
   flex-direction: row;
`

export const StyledButton = styled.button`
    display: block;
    background-color: #f7797d;
    color: #fff;
    font-size: 0.9rem;
    border: 0;
    border-radius: 5px;
    heigth: 40px;
    padding: 5px 20px;
    margin-right: 10px;
    cursor: pointer;
    box-sizing: border-box;
`;

export const StyledError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 20px 0;
`;

