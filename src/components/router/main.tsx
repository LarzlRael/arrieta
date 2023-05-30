import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import { Home } from '../../view/Home'
import { Products } from '../../view/Products'
import { Category } from '../../view/Category'
import { Error404 } from '../../view/404/Error404'

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/categorias/:categoria" element={<Category />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
