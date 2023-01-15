import { ProductInfoType } from "../../types/products"
import {
  Button,
  Description,
  DetailsContainer,
  QuantityContainer,
  Title,
} from "./styles"

const ProductDetails = ({ product }: { product: ProductInfoType }) => {
  return (
    <div>
      <DetailsContainer>
        <Title>{product.attributes.name}</Title>
        <Description>{product.attributes.description}</Description>
        <QuantityContainer>
          Quantity:
          <button>-</button>
          <button>+</button>
        </QuantityContainer>
        <Button>Add To Cart</Button>
      </DetailsContainer>
    </div>
  )
}

export default ProductDetails
