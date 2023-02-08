import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import { Blog } from '../../view/Blog'
import { Games } from '../../view/Games'

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/games" element={<Games />} />
        <Route path="/*" element={<div>No elemento</div>} />
      </Routes>
    </BrowserRouter>
  )
}
