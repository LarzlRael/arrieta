import styles from './Navigation.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoSearch, IoCar, IoPerson, IoMenu } from 'react-icons/io5'
import { capitalizeFirstLetter } from '../../utils/utilsText'
import { H2 } from '../text'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useWindowSize } from '../hook/useWindowSize'
import { storeName } from '../../utils/contants'
export const Navigation = () => {
  const links = [
    {
      name: 'Inicio',
      url: 'home',
    },
    {
      name: 'Productos',
      url: 'productos',
    },
  ]
  const [openMenu, setOpenMenu] = useState<boolean>(true)
  const navigate = useNavigate()
  const {
    windowSize: { width },
  } = useWindowSize()
  return (
    <div className={styles.Navigation}>
      <div>
        <div className={styles.NavigationLogoWithLinks}>
          <IconContext.Provider
            value={{
              style: {
                color: 'white',
              },
            }}
          >
            <div onClick={() => setOpenMenu(!openMenu)}>
              {!openMenu ? <FaTimes /> : <FaBars />}
            </div>
          </IconContext.Provider>
          <H2 color="white">{storeName}</H2>
        </div>
        <div
          className={
            openMenu
              ? styles.NavigationLinks_close
              : styles.NavigationLinks_open
          }
        >
          {links.map((link) => (
            <NavLink
              className={styles.Link}
              to={`/${link.url}`}
              key={link.name}
            >
              {capitalizeFirstLetter(link.name)}
            </NavLink>
          ))}
          {width < 768 && <NavigationIcons />}
        </div>
      </div>
      {width > 768 && <NavigationIcons />}

      <div className={styles.NavigationLogo} onClick={() => navigate('/')}>
        <H2
          colorHover="var(--primaryColor)"
          color="white"
          fontFamily="Montserrat Alternates"
          fontWeight="500"
        >
          {storeName}
        </H2>
      </div>
    </div>
  )
}

const NavigationIcons = () => {
  const size = '35'
  return (
    <IconContext.Provider
      value={{
        /* color: 'blue', */
        /* size: size, */
        className: styles.HoverEffect,
      }}
    >
      <div className={styles.IconsContainer}>
        <IoSearch size={size} />
        <IoCar
          style={{
            margin: '0 10px',
          }}
          size={size}
        />
        <IoPerson size={size} />
      </div>
    </IconContext.Provider>
  )
}
