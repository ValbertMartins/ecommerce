import styled, { keyframes } from "styled-components"

export const animationForm = keyframes`
  to {
    transform: scale(1);
  }
`
export const LoginContainer = styled.article`
  transform: scale(0.8);
  animation: ${animationForm} 0.3s ease forwards;
`

export const Form = styled.form`
  width: 20rem;
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
export const LoginButton = styled.button`
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

export const GoogleButton = styled.button`
  font-weight: 500;
  height: auto;
  line-height: normal;
  min-height: 40px;
  padding: 8px 16px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  ::before {
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    background: url("/src/assets/GoogleIcon.svg") center center;
    background-size: cover;
    display: inline-block;
    margin: 0rem 2rem;
  }
`

export const RegisterLink = styled.span`
  color: #49c0c0;
  text-decoration: underline;
  display: inline-block;
  margin: 1rem 0.5rem;
`

export const ErrorMessage = styled.p`
  color: red;
  margin: 1rem 0;
`
