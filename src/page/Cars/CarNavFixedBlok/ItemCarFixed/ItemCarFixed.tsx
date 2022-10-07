import React, { FC } from 'react'
import icf from './ItemCarFixed.module.css'

interface IItemCarFixed {
  link: string
}

const ItemCarFixed: FC<IItemCarFixed> = ({ link }) => {
  return (
    <div className={icf.elem}>{link}</div>
  )
}

export default ItemCarFixed