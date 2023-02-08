import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import { IoSearch, IoCar, IoPerson, IoMenu } from 'react-icons/io5'
import { capitalizeFirstLetter } from '../../utils/utilsText'
import { H2 } from '../text'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useWindowSize } from '../hook/useWindowSize'
export const Navigation = () => {
  const links = ['blog', 'games', 'Colaboration', 'Contact']
  const [openMenu, setOpenMenu] = useState<boolean>(true)
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
          <H2 color="white">Joyeria Arrieta</H2>
        </div>
        <div
          className={
            openMenu
              ? styles.NavigationLinks_close
              : styles.NavigationLinks_open
          }
        >
          {links.map((link) => (
            <NavLink className={styles.Link} to={`${link}`} key={link}>
              {capitalizeFirstLetter(link)}
            </NavLink>
          ))}
          {width < 768 && <NavigationIcons />}
        </div>
      </div>
      {width > 768 && <NavigationIcons />}

      <div className={styles.NavigationLogo}>
        <H2 color="white">Joyeria Arrieta</H2>
      </div>
    </div>
  )
}

const NavigationIcons = () => {
  const size = 30
  return (
    <div>
      <IoSearch color="white" size={size} />
      <IoCar color="white" size={size} />
      <IoPerson color="white" size={size} />
    </div>
  )
}
