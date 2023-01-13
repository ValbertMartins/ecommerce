import { Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./styles/global.js"
import Home from "./components/home"
import Cart from "./components/cart"
import Header from "./components/header"
import Profile from "./components/profile"
import Product from "./components/product/index.jsx"
import Auth from "./components/auth/index.jsx"

function App() {
  return (
    <>
      <GlobalStyle />
      <Cart />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="cart"
          element={<Cart />}
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
      </Routes>
    </>
  )
}

export default App
