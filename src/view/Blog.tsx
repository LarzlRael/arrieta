import styles from './Blog.module.css'
import { Navigation } from '../components/navigation/Navigation'
import { H2 } from '../components/text'
import { NormalButton } from '../components/buttons'
import styled from 'styled-components'
import { Footer } from '../components/navigation/Footer'

export const Blog = () => {
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
  return (
    <>
      <div className={styles.BlogContainer}>
        <Navigation />
        <div className={styles.Blog}>
          <div className={styles.BlogInfo}>
            <H2 fontSize="1.5rem" textAlign="left" color="var(--orange)">
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
            >
              The Precius Jewerly Works in life that light up your Way
            </H2>
            <H2
              fontSize="1.3rem"
              textAlign="left"
              color="white"
              fontWeight="500"
              margin="1rem 0 0 0"
            >
              Emplowe you yo live exactly as you are in a world <br /> of
              limites posibilies
            </H2>
            <div
              style={{
                paddingTop: '3rem',
              }}
            >
              <NormalButton background="var(--orange)">EXPLORE</NormalButton>
              <label
                htmlFor=""
                style={{
                  color: 'transparent',
                }}
              >
                que o
              </label>
              <NormalButton ghost={true} background="white">
                PRODUCT
              </NormalButton>
            </div>
          </div>
        </div>
      </div>
      <H2 fontSize="2.5rem" margin="2.5rem 0" fontSizeResponsive="1rem">
        Discover
        <span
          style={{
            color: 'var(--orange)',
            margin: '0 0.5rem',
          }}
        >
          Jewellery
        </span>
        Colection
      </H2>
      <H2 fontSizeResponsive="0.8rem">
        Explore out jewellery Collections by categories
      </H2>
      <div className={styles.BlogCategories}>
        <BlogSquare
          titleButton="Collares"
          backgroundUrl="https://css.brilliantearth.com/static/img/gateway/GiftsTile_1152x648.jpg"
          gridArea="b1"
        />
        {categories.map((category) => {
          return <BlogSquare key={category.titleButton} {...category} />
        })}
      </div>
      <Footer />
    </>
  )
}

const ContainerBackGround = styled.div<any>`
  background: url(${(props) => props.backgroundUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  grid-area: ${(props) => props.gridArea};
  display: flex;
  align-items: center;
  justify-content: center;
`
const BlogSquare = ({ titleButton, backgroundUrl, gridArea }: any) => {
  return (
    <ContainerBackGround
      /* className={className} */
      backgroundUrl={backgroundUrl}
      gridArea={gridArea}
    >
      <button className={styles.BlogButton}>{titleButton}</button>
    </ContainerBackGround>
  )
}
