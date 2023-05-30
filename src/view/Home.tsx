import styles from './Home.module.css'
import { Navigation } from '../components/navigation/Navigation'
import { H2, Span } from '../components/text'
import { NormalButton } from '../components/buttons'
import styled from 'styled-components'
import { Footer } from '../components/navigation/Footer'
import useAxiosAuth from '../components/hook/useAxiosAuth'
import { useNavigate } from 'react-router-dom'
import { Loading, Loading3 } from '../components/loading/Loading'

export const Home = (props: any) => {
  const history = useNavigate()
  const categories = [
    {
      titleButton: 'Collares',
      backgroundUrl:
        'https://css.brilliantearth.com/static/img/gateway/GiftsTile_1152x648.jpg',
      gridArea: 'b1',
    },
    {
      titleButton: 'Anillos',
      backgroundUrl:
        'https://bnsec.bluenile.com/bluenile/is/image/bluenile/Alloy_052021_SHOT18_Quality_and_Value_Loose_Diamonds_Engagement_and_Diamond_Jewelry?$MODRN_HP_Hero_lrg$&rgn=5320%2C2400%2C2300%2C0&hei=510&wid=850&fmt=pjpeg',
      gridArea: 'b2',
    },

    {
      titleButton: 'Manillas',
      backgroundUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5pR4lodZKAbNs7Fi4sne-LBG54jYya028aNzivhm_2NX7YMhlfEdb65XhAcHA2z8kYU&usqp=CAU',
      gridArea: 'b3',
    },
  ]
  const { response, loading } = useAxiosAuth<any[]>({
    url: `products/categories/`,
  })
  return (
    <>
      <div className={styles.HomeContainer}>
        <Navigation />
        <div className={styles.Home}>
          <div className={styles.HomeInfo}>
            <H2
              fontSize="1.5rem"
              textAlign="left"
              color="var(--primaryColor)"
              fontFamily="Montserrat Alternates"
            >
              Una Joyeria diseñada con cuidado
            </H2>
            <H2
              fontWeight="600"
              textAlign="left"
              color="white"
              fontSize="3.6rem"
              margin=".5rem 0 0 0"
              fontSizeResponsive="1.5rem"
              marginResponsive="0"
              fontFamily="Montserrat Alternates"
            >
              Las joyas preciosas funcionan en la vida iluminando tu camino.
            </H2>
            <H2
              fontSize="1.3rem"
              textAlign="left"
              color="white"
              fontWeight="500"
              margin="1rem 0 0 0"
              fontFamily="Montserrat Alternates"
            >
              Descubre cómo nuestras joyas preciosas realzan tu estilo en un
              mundo de posibilidades ilimitadas.
            </H2>
            <div
              style={{
                paddingTop: '3rem',
              }}
            >
              <NormalButton background="var(--primaryColor)">
                EXPLORAR
              </NormalButton>

              <NormalButton ghost={true} background="white">
                PRODUCTOS
              </NormalButton>
            </div>
          </div>
        </div>
      </div>
      <H2
        fontSize="2.5rem"
        margin="2.5rem 0"
        fontSizeResponsive="1rem"
        fontFamily="Montserrat Alternates"
      >
        Descubre nuestra
        <Span color="var(--primaryColor)" margin="0 0.5rem" fontWeight="500">
          Colección de Joyas
        </Span>
      </H2>
      <H2 fontSizeResponsive="0.8rem" fontFamily="Montserrat Alternates">
        {/* Explore out jewellery Collections by categories
         */}
        Explora nuestras colecciones de joyas por categorias
      </H2>
      {/*  <HomeSquare
          titleButton="Collares"
          backgroundUrl="https://css.brilliantearth.com/static/img/gateway/GiftsTile_1152x648.jpg"
          gridArea="b1"
        /> */}
      {/* <div className={styles.HomeCategories}>
        {!loading ? (
          response.map((category, index) => {
            return (
              <HomeSquare
                key={category.name}
                titleButton={category.name}
                navigateFunction={history}
                backgroundUrl={
                  category.image
                    ? category.image.src
                    : 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
                }
                id={category.id}
              />
            )
          })
        ) : (
          <Loading />
        )}
      </div> */}

      <Footer />
    </>
  )
}

const ContainerBackGround = styled.div<any>`
  background: url(${(props) => props.backgroundUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* grid-area: ${(props) => props.gridArea}; */
  display: flex;
  align-items: center;
  justify-content: center;
`

const HomeSquare = ({
  titleButton,
  backgroundUrl,
  gridArea,
  id,
  navigateFunction,
  ...props
}: any) => {
  /* const history = useNavigate() */

  return (
    <ContainerBackGround
      /* className={className} */
      backgroundUrl={backgroundUrl}
      gridArea={gridArea}
    >
      <button
        className={styles.HomeButton}
        onClick={() => navigateFunction(`/categorias/${id}`)}
      >
        {titleButton}
      </button>
    </ContainerBackGround>
  )
}
