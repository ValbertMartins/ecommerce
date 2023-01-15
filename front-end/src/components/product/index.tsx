import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL, requestProduct } from "../../services/api"
import { ProductType } from "../../types/products"
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
  console.log(product)
  if (!product) return null
  return (
    <Container>
      <ImageContainer>
        <img
          onLoad={handleImageLoad}
          src={`${BASE_URL}${product.picture.url}`}
        />
      </ImageContainer>
      <ProductDetails product={product} />
    </Container>
  )
}

export default Product
