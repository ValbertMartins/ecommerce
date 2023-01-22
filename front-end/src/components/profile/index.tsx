import { useEffect, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { getPurchases } from "../../services/payment/api_getPurchases"
import { ButtonLogout, Container, PurchaseContainer } from "./styles"

export type PurchaseType = {
  attributes: {
    purchase_id: string
    total_amount: number
  }
}

const Profile = () => {
  const [purchases, setPurchases] = useState<PurchaseType[] | null>(null)
  const { setUserAuth, userAuth } = useContext(UserContext)
  const navigate = useNavigate()

  function handleLogout() {
    setUserAuth(null)
    localStorage.removeItem("jwt")
    navigate("/")
  }
  console.log(purchases)
  useEffect(() => {
    if (userAuth) {
      getPurchases(userAuth.jwt).then(data => setPurchases(data))
    }
  }, [userAuth])

  return (
    <Container>
      {purchases?.map(purchase => {
        return (
          <PurchaseContainer key={purchase.attributes.purchase_id}>
            <div>
              Purchase id: <b>{purchase.attributes.purchase_id}</b>
            </div>
            <div>
              total amount: <b>{purchase.attributes.total_amount}</b>
            </div>
          </PurchaseContainer>
        )
      })}
      <ButtonLogout onClick={handleLogout}>Sair</ButtonLogout>
    </Container>
  )
}

export default Profile
