import { Link } from "react-router-dom"
import { BASE_URL } from "../../services/api"
import { ProductType } from "../../types/types"
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
            src={product.picture.url}
            onLoad={handleLoadImage}
          />
        </ImageContainer>
        <Name>{product.attributes.name}</Name>
        <Price>R${product.attributes.price}</Price>
      </Link>
    </Container>
  )
}

export default ProductPreview
