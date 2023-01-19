import { loadStripe } from "@stripe/stripe-js"
import { ItemCartType } from "../../context/CartContext"
import { request } from "../api"

type StripeType = {
  redirectToCheckout: ({ sessionId }: { sessionId: string }) => void
}
let stripe: any

async function getStripe() {
  if (!stripe) {
    stripe = await loadStripe(import.meta.env.VITE_API_PUBLIC_KEY)
  }
  return stripe
}

type SessionPaymentProps = {
  id: string
}

export async function handlePayment(cartItens: ItemCartType[], jwt: string) {
  await getStripe()
  const [data, error] = await request<SessionPaymentProps>(`/api/payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(cartItens),
  })
  if (error) return error
  await stripe?.redirectToCheckout({ sessionId: data?.id })
}
