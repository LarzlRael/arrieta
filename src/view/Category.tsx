import { RouterProps, useParams } from 'react-router-dom'
import { Navigation } from '../components/navigation/Navigation'
import useAxiosAuth from '../components/hook/useAxiosAuth'
import { Loading, Loading3 } from '../components/loading/Loading'
export const Category = () => {
  const { categoria } = useParams<{
    categoria: string
  }>()

  const { response, loading } = useAxiosAuth({
    url: `products?category=${categoria}`,
  })
  return (
    <div>
      <Navigation />
      <h1>{categoria}</h1>
      {!loading ? <h1>que fue gente</h1> : <Loading />}
    </div>
  )
}
