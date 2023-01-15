import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ProductInfoType } from "../../types/types"
import { Button, Description, DetailsContainer, QuantityContainer, Title } from "./styles"

const ProductDetails = ({ product }: { product: ProductInfoType }) => {
  const { decreaseQuantity, increaseQuantity, productQuantity } = useContext(CartContext)
  return (
    <div>
      <DetailsContainer>
        <Title>{product.attributes.name}</Title>
        <Description>{product.attributes.description}</Description>
        <QuantityContainer>
          Quantity:
          <button onClick={decreaseQuantity}>-</button>
          {productQuantity}
          <button onClick={increaseQuantity}>+</button>
        </QuantityContainer>
        <Button>Add To Cart</Button>
      </DetailsContainer>
    </div>
  )
}

export default ProductDetails
