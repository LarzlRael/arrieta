import { H2 } from '../components/text/H2'
import styles from './Games.module.css'
import { Label } from '../components/text/Label'
import { BoxFlex } from '../components/box/BoxFlex'
import { Span } from '../components/text/Span'
import { Box } from '../components/box'
import { Footer } from '../components/navigation/Footer'
export const Games = () => {
  const images = [
    /* lorem images */
    'https://via.placeholder.com/250',
    'https://via.placeholder.com/250',
    'https://via.placeholder.com/250',
    'https://via.placeholder.com/250',
  ]
  return (
    <>
      <div className={styles.GameContainer}>
        <div className={styles.GameInfo}>
          <H2 color="white" textAlign="start" fontSize="2.5rem">
            Special Package{' '}
            <span
              style={{
                color: 'var(--primaryColor)',
              }}
            >
              Jewery
            </span>
          </H2>
          <Label color="white" fontSize="1.1rem" margin="1rem 0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
            nemo corrupti cumque molestias, iure illo natus tempora quas,
            reprehenderit laborum hic? Unde distinctio id hic quae, recusandae
            eaque animi. Exercitationem!
          </Label>
        </div>
      </div>

      <H2
        color="black"
        fontSize="2rem"
        margin="2rem 0"
        fontSizeResponsive="1rem"
      >
        Handmake <Span color="var(--primaryColor)">high Quality</Span> control
      </H2>
      <div className={styles.GameImageContainer}>
        {images.map((img,i) => {
          return (
            <img
              key={i}
              style={{
                width: '100%',
              }}
              src={img}
              alt=""
            />
          )
        })}
      </div>
      <H2 color="var(--primaryColor)" fontSize="1rem" margin="2rem 0">
        Ver más
      </H2>
      <Box
        background="var(--pink)"
        margin="2rem 5rem"
        padding="4.5rem 0"
        marginResponsive="0 1rem"
      >
        <H2 color="white" fontSize="2.5rem">
          Must <Span color="var(--primaryColor)">Have</Span> collection
        </H2>
        <Label
          textAlign="center"
          margin="1rem 18rem"
          color="white"
          fontSize="1.2rem"
          marginResponsive="1rem 0"
        >
          <Span color="var(--primaryColor)">PANJEL</Span> dolor, sit amet consectetur
          adipisicing elit. Excepturi maxime dolor voluptates laudantium fuga
          eum ipsam vero. Architecto odio, quasi consequuntur animi non
          doloribus, soluta recusandae consequatur, ea commodi sapiente?
        </Label>
        <BoxFlex direction="row">
          <img
            src="https://via.placeholder.com/300"
            alt=""
            className={styles.GameImage}
          />
          <img
            src="https://via.placeholder.com/300"
            alt=""
            className={styles.GameImage}
          />
        </BoxFlex>
        <H2 margin="1rem 0" fontSize="1rem" color="var(--primaryColor)">
          Descubre nuestra colección
        </H2>
      </Box>
      <Box
        padding="2rem 5rem"
        style={{
          display: 'flex',
          gap: '2rem',
        }}
      >
        <img src="https://via.placeholder.com/250" />
        <div
          style={{
            padding: '2rem 0',
          }}
        >
          <H2
            color="black"
            fontSize="2rem"
            textAlign="start"
            margin="0 0 2rem 0"
          >
            Higher Value <Span color="var(--primaryColor)">Collaboration</Span> with{' '}
            <Span color="var(--primaryColor)">Lower</Span> Cost Per Wear
          </H2>
          <Label
            textAlign="start"
            color="black"
            fontSize="1.1rem"
            lineHeight="1.6"
          >
            <Span color="var(--primaryColor)">PANJEL</Span> dolor, sit amet
            consectetur adipisicing elit. Excepturi maxime dolor voluptates
            laudantium fuga eum ipsam vero. Architecto odio, quasi consequuntur
            animi non doloribus, soluta recusandae consequatur, ea commodi
            sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cum, non suscipit iure sed magni laudantium voluptas ipsam
            accusantium odio quia id, doloremque veniam odit delectus. Dolorum
            eligendi animi cum in!
          </Label>
        </div>
      </Box>
      <Box
        padding="2rem 5rem"
        /* height="450px" */
        paddingResponsive="0"
        style={{
          display: 'grid',
          /* gridTemplateColumns: '1fr 1fr', */
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        <div
          style={{
            background: 'var(--pink)',
            padding: '3rem',
          }}
        >
          <H2 fontSize="1.3rem" width="80%" textAlign="start" color="white">
            Higher Value <Span color="var(--primaryColor)">Collaboration</Span> with{' '}
            <Span color="var(--primaryColor)">Lower</Span> Cost Per Wear
          </H2>
          <Label
            textAlign="start"
            color="white"
            fontSize="2.5rem"
            margin="4.5rem 0 2rem  0"
          >
            dolor, sit amet consectetur
          </Label>
          <Span display="block" color="var(--primaryColor)">
            Ver más
          </Span>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/02/01/34/pocket-watch-2569573_960_720.jpg"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
      <Footer />
    </>
  )
}
