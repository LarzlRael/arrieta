import { Link } from 'react-router-dom'
import './404.css'
import error404 from '../../assets/img/error-404.png'
export const Error404 = () => {
  return (
    <div className="page404__home">
      <div className="page404__home-img">
        <img src={error404} alt="text-error" />
      </div>
      <div className="page404__home-text">
        Lo sentimos, no hemos podido encontrar esta página,
        <br />
        <br />
        <Link to="/">Volver al Inicio</Link>
      </div>
    </div>
  )
}
