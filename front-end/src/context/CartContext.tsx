import React, { createContext, Dispatch, SetStateAction, useState } from "react"

export type CartType = {
  setOpenCart: Dispatch<SetStateAction<boolean>>
  openCart: boolean
}
export const CartContext = createContext<CartType>({} as CartType)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [openCart, setOpenCart] = useState(false)

  return (
    <CartContext.Provider
      value={{
        setOpenCart,
        openCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
