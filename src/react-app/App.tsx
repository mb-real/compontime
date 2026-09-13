import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"

import CustomerLayout from "./layouts/CustomerLayout"
import AdminLayout from "./layouts/AdminLayout"

import Home from "./pages/customer/Home"
import Products from "./pages/customer/Products"
import ProductDetail from "./pages/customer/ProductDetail"
import Cart from "./pages/customer/Cart"

import Dashboard from "./pages/admin/Dashboard"
import AdminProducts from "./pages/admin/Products"
import NewProduct from "./pages/admin/NewProduct"
import EditProduct from "./pages/admin/EditProduct"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer */}
        <Route element={<CustomerLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          />
          <Route path="/cart" element={<Cart />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          <Route
            path="products"
            element={<AdminProducts />}
          />

          <Route
            path="products/new"
            element={<NewProduct />}
          />

          <Route
            path="products/:productId/edit"
            element={<EditProduct />}
          />
        </Route>

        {/* Unknown route */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
