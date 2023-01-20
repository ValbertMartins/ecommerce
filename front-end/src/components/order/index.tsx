import { useContext, useEffect } from "react"
import { Container } from "./styles"
import { useSearchParams } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { handleOrderPayment } from "../../services/payment/api_handleOrder"
const Order = () => {
  const [params] = useSearchParams()
  const sessionId = params.get("session_id")

  const { userAuth } = useContext(UserContext)

  useEffect(() => {
    if (userAuth) {
      handleOrderPayment()
    }
  }, [userAuth])

  return <Container>Orders</Container>
}

export default Order
