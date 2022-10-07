import React, { FC } from 'react'
import h from './Header.module.css'
import Logo from './Logo-header/Logo'
import Navigation from './Nav-header/Navigation'
import Search from './search-nav/Search'

interface IHeader{
  setCarsShow: any;
  carsShow: boolean;
}

const Header : FC<IHeader>= ({setCarsShow, carsShow}) => {
  return (
    <div className={h.wrapper}>
      <div className={h.blockLeft}>
        <Logo />
        <Navigation setCarsShow={setCarsShow} carsShow={carsShow }/>
      </div>

      <Search />
    </div>
  )
}

export default Header