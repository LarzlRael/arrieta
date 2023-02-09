import { Label } from '../text/Label'
import { H2 } from '../text/H2'
import FooterStyles from './Footer.module.css'
import { IoLocation, IoLocationOutline, IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoMap } from 'react-icons/io5'
import { BoxFlex, Box } from '../box'
export const Footer = () => {
  return (
    <footer>
      <Box className={FooterStyles.Footer}>
        <div>
          <H2>Como nos encuentras</H2>
          <div>
            <Label>Siguenos en nuestras redes sociales</Label>
            <BoxFlex direction="row" justify="space-evenly">
              <IoLogoFacebook size={30} />
              <IoLogoInstagram size={30} />
              <IoLogoTiktok size={30} />
              <IoLocationOutline size={30} />
            </BoxFlex>
          </div>
        </div>
        <div></div>
        <div>
          <H2>Support</H2>
          <label htmlFor="">Contactanos</label>
          <label htmlFor="">Conozcanos</label>
          <label htmlFor="">forum</label>
        </div>
        <div>
          <H2>Compañia</H2>
          <label htmlFor="">Acerca de nosotros</label>
          <label htmlFor="">politica de privacidad</label>
          <label htmlFor="">glob</label>
        </div>
        <div>
          <H2>News & info</H2>
          <label htmlFor="">FAQ</label>
          <label htmlFor="">Compañia</label>
        </div>
      </Box>
    </footer>
  )
}
