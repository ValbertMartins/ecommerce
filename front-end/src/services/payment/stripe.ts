import { loadStripe } from "@stripe/stripe-js"

let stripe: any

export async function getStripe() {
  if (!stripe) {
    stripe = await loadStripe(import.meta.env.VITE_API_PUBLIC_KEY)
  }
  return stripe
}
