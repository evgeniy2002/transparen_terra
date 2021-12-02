import React from 'react'
import s from './Header.module.css'
import logo from '../../assets/images/icons/logo_from-768.svg'
import lang from '../../assets/images/icons/lang.svg'
import sign from '../../assets/images/icons/sign.svg'
import menu from '../../assets/images/icons/menu.svg'
import close_menu from '../../assets/images/icons/close_menu.svg'

export default function Header() {

  const [stateMenu, setStateMenu] = React.useState(false)

  const changeFlagMenu = () => {
    setStateMenu(!stateMenu)
  }

  return (
    <header className={s.header}>
      <div className={s.header_row}>
        <div className={s.header_logo}>
          <a href="/"><img src={logo} alt="" className={s.logo_image} /></a>
        </div>

        <nav className={s.header_menu}>
          <ul className={s.header_sub_menu}>
            <li className={s.header_menu_li}>
              <a href="#" className={s.header_menu_link}>
                <img src={lang} alt="" />
                <span className={s.header_li_title}>ENG</span>
              </a>
            </li>
            <li className={s.header_menu_li}>
              <a href="#" className={s.header_menu_link}>
                <img src={sign} alt="" />
                <span className={s.header_li_title}>Sign in</span>
              </a>
            </li>
            <li className={s.header_menu_li}>
              {
                stateMenu                
                  ? <a href="#" className={s.header_menu_link} onClick={changeFlagMenu}>
                    <img src={close_menu} alt="" />
                    <span className={s.header_li_title}>CLOSE</span>
                  </a>
                :<a href="#" className={s.header_menu_link} onClick={changeFlagMenu}>
                <img src={menu} alt="" />
                <span className={s.header_li_title}>MENU</span>
              </a>
              }

            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
