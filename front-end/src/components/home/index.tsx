import { useEffect, useState } from "react"
import { requestProducts } from "../../services/api"
import { ProductType } from "../../types/products"
import ProductPreview from "../productPreview"
import { Container } from "./styles"

const Home = () => {
  const [products, setProducts] = useState<ProductType[] | null>(null)

  useEffect(() => {
    requestProducts().then(data => setProducts(data))
  }, [])

  return (
    <Container>
      {products?.map(product => {
        return (
          <ProductPreview
            product={product}
            key={product.id}
          />
        )
      })}
    </Container>
  )
}

export default Home
