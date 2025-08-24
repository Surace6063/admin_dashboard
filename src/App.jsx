import { Route, Routes } from "react-router-dom"
import AdminLayout from "./utils/AdminLayout"
import Main from "./pages/Main"
import ProductList from "./pages/ProductList"
import ProductForm from "./pages/ProductForm"
import CategoryList from "./pages/CategoryList"
import CategoryForm from "./pages/CategoryForm"
import UserList from "./pages/UserList"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<AdminLayout />}>
           <Route path="main" element={<Main />} /> 
           <Route path="products/list" element={<ProductList />} />
           <Route path="products/add" element={<ProductForm />} />
           <Route path="categories/list" element={<CategoryList />} />
           <Route path="categories/add" element={<CategoryForm />} />
           <Route path="users" element={<UserList />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App