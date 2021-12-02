import React from 'react'
import s from './Share.module.css'
import share_discuss from '../../assets/images/icons/share_discuss.svg'
import share_link from '../../assets/images/icons/share_link.svg'


export default function Share() {
  return (
    <div className={s.setting}>
      <div className={s.setting_row}>
        <a href="#" className={s.share_link}><img src={share_discuss} alt="" /></a>
        <a href="#" className={s.share_link}><img src={share_link} alt="" /></a>
      </div>
    </div>
  )
}
