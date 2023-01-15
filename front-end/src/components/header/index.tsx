import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Container, Logo, Navbar, ProfileIcon } from "./styles"
import { ReactComponent as Bag } from "../../assets/svg/bag.svg"
import { ReactComponent as Login } from "../../assets/svg/profile.svg"
import { CartContext } from "../../context/CartContext"
const Profile = () => {
  const { setOpenCart } = useContext(CartContext)

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

        <Link
          to="/"
          onClick={() => setOpenCart(value => !value)}
        >
          {/* <CartCounter></CartCounter> */}
          <Bag />
          Cart
        </Link>
      </Navbar>
    </Container>
  )
}

export default Profile
