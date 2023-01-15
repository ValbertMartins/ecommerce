import React, { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import { registerUser } from "../../../services/api_auth"
import {
  Form,
  Input,
  LabelText,
  LoginLink,
  RegisterButton,
  RegisterContainer,
} from "./styles"

const RegisterForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState(null)

  async function handleRegisterUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await registerUser(email, password, name)
  }
  return (
    <RegisterContainer>
      <Form onSubmit={handleRegisterUser}>
        <label>
          <LabelText>Name</LabelText>
          <Input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>

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

        <RegisterButton>Register</RegisterButton>
        {error}
        <p>
          Already have a account?
          <Link to="/auth">
            <LoginLink>Login now</LoginLink>
          </Link>
        </p>
      </Form>
    </RegisterContainer>
  )
}

export default RegisterForm
