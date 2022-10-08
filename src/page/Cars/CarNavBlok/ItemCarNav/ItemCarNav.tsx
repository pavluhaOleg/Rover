import React, { FC } from 'react'
import icf from './ItemCarNav.module.css'

interface IItemCarNav {
  link: string
}

const ItemCarNav: FC<IItemCarNav> = ({ link }) => {
  return (
    <div className={icf.elem}>{link}</div>
  )
}

export default ItemCarNav