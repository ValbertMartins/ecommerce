import React, { createContext, Dispatch, SetStateAction, useState } from "react"
import { ProductType } from "../types/types"

export type CartContextType = {
  setOpenCart: Dispatch<SetStateAction<boolean>>
  openCart: boolean
  setProductQuantity: Dispatch<SetStateAction<number>>
  productQuantity: number
  decreaseQuantity: () => void
  increaseQuantity: () => void
}
// export type CartType
export const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [openCart, setOpenCart] = useState(false)
  const [itensCart, setItensCart] = useState([])
  const [productQuantity, setProductQuantity] = useState(1)

  // function addToCart(product: ProductType) {
  //   setProductQuantity(1)

  //   function productExistsInCart(cartList) {
  //     return cartList.find(item => item.id == product.id)
  //   }
  //   function addProductExistentInCart(cartList) {
  //     return cartList.map(({ quantity, id, ...rest }) =>
  //       id === product.id
  //         ? { quantity: quantity + product.quantity, id, ...rest }
  //         : { quantity, id, ...rest }
  //     )
  //   }
  //   setItensCart(productsCart => {
  //     //add product in cart
  //     if (!productExistsInCart(productsCart)) {
  //       return [...productsCart, product]
  //     }
  //     //addExistent product in cart
  //     return addProductExistentInCart(productsCart)
  //   })
  // }

  function decreaseQuantity() {
    setProductQuantity(quantity => (quantity === 1 ? 1 : quantity - 1))
  }
  function increaseQuantity() {
    setProductQuantity(quantity => quantity + 1)
  }

  return (
    <CartContext.Provider
      value={{
        setOpenCart,
        openCart,
        setProductQuantity,
        productQuantity,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
