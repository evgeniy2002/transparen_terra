import React from 'react'
import s from './Selection.module.css'
import loupe from '../../assets/images/icons/loupe.svg'
import arrow from '../../assets/images/icons/arrow.svg'

export default function Selection() {

  const [categoryState, setCategoryState] = React.useState(false)
  const [breadCrumbs, setBreadCrumbs] = React.useState([])
  const [stateInput, setStateInput] = React.useState('')
  const [categoryItem, setCategoryItem] = React.useState([
    'About',
    'How does it work?',
    'ESG Score',
    'Tokenization',
    'NFA/NFT',
    'Marketplace',
    'Calculators',
    'Offset Certificates',
    'Legal',
    'NFA/NFT'
  ])

  const changeArrowState = () => {
    setCategoryState(!categoryState)
  }

  const changeBreadCrumbs = (title) => {
    setBreadCrumbs([...breadCrumbs, title])
  }

  const changeInput = (event) => {
    setStateInput(event.target.value)
  }
  return (
    <div className={categoryState ? s.selection + ' ' + s.active : s.selection}>
      <div className={s.selection_row}>
        <form className={s.selection_search}>
          <input
            type="text"
            name="name"
            onChange={changeInput}
            placeholder={'search'}
            className={stateInput.length ? s.selection_search_input + ' ' + s.active : s.selection_search_input}
            required />
          <button className={s.search_submit} type="submit">
            <img src={loupe} alt="" />
          </button>
        </form>
        <div className={categoryState ? s.selection_category + ' ' + s.active : s.selection_category} onClick={changeArrowState}>
          <div className={s.selection_category_row}>
            <div className={s.selection_category_title}>All categories</div>
            <div className={categoryState ? s.selection_category_arrow + ' ' + s.active : s.selection_category_arrow}><img src={arrow} alt="" /></div>
          </div>
        </div>
      </div>

      {
        breadCrumbs.length && categoryState
          ? <div className={s.bread_crumbs}>

            <ul className={s.bread_crumbs_menu}>
              <div className={s.bread_crumbs_main}>
                <a href="/" className={s.bread_crumbs_link}>All categories</a>
              </div>
              {breadCrumbs.map((item, index) => (
                <li key={index} className={s.bread_crumbs_item} >
                  <a href={item} className={s.bread_crumbs_link}>{item}</a>
                </li>

              ))}

            </ul>
          </div>
          : <div className={categoryState ? s.choose_category + ' ' + s.active : s.choose_category}>

            <div className={s.choose_category_title}>Choose a category</div>
            <div className={s.choose_category_subtitle}>For your question</div>
            <div className={s.choose_category_content}>
              {
                categoryItem.map((item, index) => (
                  <div key={index} className={s.choose_category_item} onClick={() => changeBreadCrumbs(item)}>{item}</div>
                ))
              }


            </div>
          </div>
      }

    </div>
  )
}
