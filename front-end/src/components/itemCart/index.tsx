import { useContext } from "react"
import { CartContext, ItemCartType } from "../../context/CartContext"
import { ImageContainer, ItemContainer, Name, Price, QuantityContainer } from "./styles"
import { motion } from "framer-motion"

const ItemCart = ({ item }: { item: ItemCartType }) => {
  const { setItensCart, itensCart } = useContext(CartContext)

  function increaseQuantityItemInCart() {
    setItensCart(
      itensCart.map(itemCart =>
        itemCart.id === item.id ? { ...itemCart, quantity: itemCart.quantity + 1 } : itemCart
      )
    )
  }
  function decreaseQuantityItemInCart() {
    setItensCart(
      itensCart
        .map(itemCart =>
          itemCart.id === item.id ? { ...itemCart, quantity: itemCart.quantity - 1 } : itemCart
        )
        .filter(itemCart => itemCart.quantity > 0)
    )
  }
  return (
    <ItemContainer key={item.id}>
      <ImageContainer>
        <img
          src={item.picture.url}
          alt={item.attributes.name}
        />
      </ImageContainer>
      <div>
        <Name>{item.attributes.name}</Name>
        <Price>R${item.attributes.price}</Price>
        <QuantityContainer>
          <button onClick={decreaseQuantityItemInCart}>-</button>
          {item.quantity}
          <button onClick={increaseQuantityItemInCart}>+</button>
        </QuantityContainer>
      </div>
    </ItemContainer>
  )
}

export default ItemCart
