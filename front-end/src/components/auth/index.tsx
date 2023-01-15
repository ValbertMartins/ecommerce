import { Route, Routes } from "react-router-dom"
import LoginForm from "./loginForm"
import RegisterForm from "./registerForm"
import { Container } from "./styles"
const Auth = () => {
  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={<LoginForm />}
        />
        <Route
          path="register"
          element={<RegisterForm />}
        />
      </Routes>
    </Container>
  )
}

export default Auth
