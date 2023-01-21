import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../services/api"
import { requestProduct } from "../../services/api_products"
import { ProductType } from "../../types/types"
import ProductDetails from "../productDetails"
import { Container, ImageContainer } from "./styles"

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<ProductType | null>(null)

  function handleImageLoad({ target }: any) {
    target.style.opacity = 1
  }

  useEffect(() => {
    requestProduct(id).then(data => setProduct(data))
  }, [])

  if (!product) return null
  return (
    <Container>
      <ImageContainer>
        <img
          onLoad={handleImageLoad}
          src={product.picture.url}
        />
      </ImageContainer>

      <ProductDetails product={product} />
    </Container>
  )
}

export default Product
