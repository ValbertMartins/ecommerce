import React, { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import { loginUser } from "../../../services/api_auth"
import {
  ErrorMessage,
  Form,
  GoogleButton,
  Input,
  LabelText,
  LoginButton,
  LoginContainer,
  RegisterLink,
} from "./styles"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  async function handleLoginUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await loginUser(email, password)
  }

  return (
    <LoginContainer>
      <Form onSubmit={handleLoginUser}>
        <label>
          <LabelText>Email</LabelText>
          <Input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label>
          <LabelText>Password</LabelText>
          <Input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <LoginButton>Login</LoginButton>
        <ErrorMessage>{error}</ErrorMessage>
      </Form>

      {/* <GoogleButton>Sign in with google</GoogleButton> */}
      <p>
        Don't have a account?
        <Link to="register">
          <RegisterLink> Register now</RegisterLink>
        </Link>
      </p>
    </LoginContainer>
  )
}

export default LoginForm
