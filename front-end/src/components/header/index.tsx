import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartCounter, Container, Logo, Navbar, ProfileIcon } from "./styles"
import { ReactComponent as Bag } from "../../assets/svg/bag.svg"
import { ReactComponent as Login } from "../../assets/svg/profile.svg"
import { CartContext } from "../../context/CartContext"
import { UserContext } from "../../context/UserContext"
const Profile = () => {
  const { setOpenCart, itensCart } = useContext(CartContext)
  const { userAuth } = useContext(UserContext)

  const totalItens = itensCart.length
  return (
    <Container>
      <Link to="/">
        <Logo>Styled</Logo>
      </Link>

      <Navbar>
        <Link to={userAuth ? "profile" : "auth"}>
          <ProfileIcon>
            <Login />
          </ProfileIcon>
          {userAuth ? userAuth.user.username : "Login"}
        </Link>

        {userAuth && (
          <article onClick={() => setOpenCart(value => !value)}>
            {totalItens > 0 && <CartCounter>{totalItens}</CartCounter>}
            <Bag />
            Cart
          </article>
        )}
      </Navbar>
    </Container>
  )
}

export default Profile
