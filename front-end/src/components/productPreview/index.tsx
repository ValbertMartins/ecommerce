import { ReactEventHandler } from "react"
import { Link } from "react-router-dom"
import { BASE_URL } from "../../services/api"
import { ProductType } from "../../types/products"
import { Container, Image, ImageContainer, Name, Price } from "./styles"

type PropsType = {
  product: ProductType
}

const ProductPreview = ({ product }: PropsType) => {
  function handleLoadImage(event: any) {
    event.target.style.opacity = 1
  }
  return (
    <Container>
      <Link to={`product/${product.id}`}>
        <ImageContainer>
          <Image
            src={`${BASE_URL}${product.picture.url}`}
            onLoad={handleLoadImage}
          />
        </ImageContainer>
        <Name>{product.attributes.name}</Name>
        <Price>{product.attributes.price}</Price>
      </Link>
    </Container>
  )
}

export default ProductPreview
