import { useContext } from "react"
import { CartContext, ItemCartType } from "../../context/CartContext"
import { BASE_URL } from "../../services/api"
import { ImageContainer, ItemContainer, Name, Price, QuantityContainer } from "./styles"

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
          src={`${BASE_URL}${item.picture.url}`}
          alt={item.attributes.name}
        />
      </ImageContainer>
      <div>
        <Name>{item.attributes.name}</Name>
        <Price>${item.attributes.price}</Price>
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
