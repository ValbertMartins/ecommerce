import { FormEvent, useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../../context/UserContext"
import { ErrorRequestType } from "../../../services/api"
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
  const [error, setError] = useState<ErrorRequestType | null>(null)
  const { setUserAuth } = useContext(UserContext)
  const navigate = useNavigate()

  async function handleLoginUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const [userData, error] = await loginUser(email, password)
    if (error) return setError(error)
    if (userData) {
      setUserAuth(userData)
      localStorage.setItem("jwt", userData.jwt)
      navigate("/")
    }
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
        <ErrorMessage>{error?.message}</ErrorMessage>
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
