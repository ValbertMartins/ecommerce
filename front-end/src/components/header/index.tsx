import React from "react"
import { Link } from "react-router-dom"
import { CartCounter, Container, Logo, Navbar, ProfileIcon } from "./styles"
import { ReactComponent as Bag } from "../../assets/svg/bag.svg"
import { ReactComponent as Login } from "../../assets/svg/profile.svg"
const Profile = () => {
  return (
    <Container>
      <Link to="/">
        <Logo>Styled</Logo>
      </Link>

      <Navbar>
        <Link to="auth">
          <ProfileIcon>
            <Login />
          </ProfileIcon>
          Login
        </Link>

        <Link to="cart">
          {/* <CartCounter></CartCounter> */}
          <Bag />
          Cart
        </Link>
      </Navbar>
    </Container>
  )
}

export default Profile
