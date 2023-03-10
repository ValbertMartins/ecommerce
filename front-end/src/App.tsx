import { Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./styles/global.js"
import Home from "./components/home"
import Cart from "./components/cart"
import Header from "./components/header"
import Profile from "./components/profile"
import Product from "./components/product/index.jsx"
import Auth from "./components/auth/index.jsx"
import { CartProvider } from "./context/CartContext.js"
import { UserContextProvider } from "./context/UserContext.js"
import Order from "./components/order/index.js"

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <CartProvider>
          <Cart />
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="profile"
              element={<Profile />}
            />
            <Route
              path="auth/*"
              element={<Auth />}
            />
            <Route
              path="product/:id"
              element={<Product />}
            />
            <Route
              path="order/*"
              element={<Order />}
            />
          </Routes>
        </CartProvider>
      </UserContextProvider>
    </>
  )
}

export default App
