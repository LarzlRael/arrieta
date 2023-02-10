import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import { Blog } from '../../view/Blog'
import { Games } from '../../view/Games'
import { Category } from '../../view/Category'
import { Error404 } from '../../view/404/Error404'

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/games" element={<Games />} />
        <Route path="/categorias/:categoria" element={<Category />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
