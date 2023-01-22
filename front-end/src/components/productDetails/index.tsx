import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ProductType } from "../../types/types"
import { Button, Description, DetailsContainer, QuantityContainer, Title } from "./styles"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ProductDetails = ({ product }: { product: ProductType }) => {
  const { decreaseQuantity, increaseQuantity, productQuantity, addToCart } =
    useContext(CartContext)

  return (
    <div>
      <DetailsContainer>
        <Title>{product.attributes.name || <Skeleton height={30} />}</Title>
        <Description>
          {product.attributes.description || (
            <Skeleton
              height={25}
              count={10}
            />
          )}
        </Description>
        <QuantityContainer>
          Quantity:
          <button onClick={decreaseQuantity}>-</button>
          {productQuantity}
          <button onClick={increaseQuantity}>+</button>
        </QuantityContainer>
        <Button
          onClick={() => {
            addToCart({ ...product, quantity: productQuantity })
            toast.success("product added", {
              position: "top-center",
              autoClose: 3000,
            })
          }}
        >
          Add To Cart
        </Button>
        <ToastContainer />
      </DetailsContainer>
    </div>
  )
}

export default ProductDetails
