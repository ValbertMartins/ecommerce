import styled, { keyframes } from "styled-components"

export const RegisterContainer = styled.article``
export const animationForm = keyframes`
  to {
    transform: scale(1);
  }
`
export const Form = styled.form`
  width: 20rem;
  transform: scale(0.8);
  animation: ${animationForm} 0.3s ease forwards;
`

export const LabelText = styled.p``

export const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 0 0.5rem;
  outline: none;
  margin: 0.5rem 0;
  border-radius: 2px;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  font-size: 1.1rem;
`

export const RegisterButton = styled.button`
  display: block;
  height: 40px;
  font-weight: 500;
  padding: 8px 16px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 2rem;
`
export const LoginLink = styled.span`
  color: #49c0c0;
  text-decoration: underline;
  display: inline-block;
  margin: 0rem 0.5rem;
`
