import React, { FC } from 'react';
import itn from './ItemNavigation.module.css'

interface ItemNavigationProps {
  img: string,
  title: string
}

const ItemNavigation: FC<ItemNavigationProps> = ({ img, title }) => {
  return (
    <li className={itn.wrapper}>
      <div className={itn.blockImg}>
        <img src={img} title="img" />
      </div>
      <div className={itn.title}>{title}</div>
    </li>
  )
}

export default ItemNavigation