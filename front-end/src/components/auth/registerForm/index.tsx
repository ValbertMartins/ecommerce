import { FormEvent, useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../../context/UserContext"
import { ErrorRequestType } from "../../../services/api"
import { registerUser } from "../../../services/api_auth"
import { Form, Input, LabelText, LoginLink, RegisterButton, RegisterContainer } from "./styles"

const RegisterForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState<null | ErrorRequestType>(null)
  const { setUserAuth } = useContext(UserContext)
  const navigate = useNavigate()

  async function handleRegisterUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const [userData, error] = await registerUser(email, password, name)
    if (error) return setError(error)

    if (userData) {
      setUserAuth(userData)
      localStorage.setItem("jwt", userData.jwt)
      navigate("/profile")
    }
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
      </Form>
      {error && error.message}
      <p>
        Already have a account?
        <Link to="/auth">
          <LoginLink>Login now</LoginLink>
        </Link>
      </p>
    </RegisterContainer>
  )
}

export default RegisterForm
