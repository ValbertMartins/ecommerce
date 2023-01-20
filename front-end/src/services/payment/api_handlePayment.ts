import { ItemCartType } from "../../context/CartContext"
import { request } from "../api"
import { getStripe } from "./stripe"

type SessionPaymentProps = {
  id: string
}
export async function handlePayment(cartItens: ItemCartType[], jwt: string) {
  const stripe = await getStripe()
  const [data, error] = await request<SessionPaymentProps>(`/api/payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(cartItens),
  })
  if (error) return error
  await stripe.redirectToCheckout({ sessionId: data?.id })
}
