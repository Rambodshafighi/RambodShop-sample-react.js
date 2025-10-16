import { Navigate, Route, Routes } from "react-router-dom"
import CartProvider from "./context/CartContext"
import ProductsProvider from "./context/ProductsContext"
import Layout from "./Layout/Layout"
import CheckoutPage from "./pages/CheckoutPage"
import DetailsPage from "./pages/DetailsPage"
import PageNotFound from './pages/PageNotFound'
import ProductsPage from "./pages/ProductsPage"
function App() {

  return (
    <CartProvider>
      <ProductsProvider>
        <Layout>
          <Routes>
            <Route index element={<Navigate to={"/products"} replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </ProductsProvider>
    </CartProvider>
  )
}

export default App
