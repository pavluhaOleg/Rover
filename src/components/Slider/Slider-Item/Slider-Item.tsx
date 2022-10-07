import React, { FC } from 'react'
import BlockCnp from './Block-cnp/Block-cnp'
import si from './Slider-Item.module.css'


interface IItemS {
  img: string,
  title?: string,
  text?: string,
  anchor: string | number,
  marcerNum: number,
  id: number
}

const Slider_Item: FC<IItemS> = ({ img, title, text, marcerNum,id }) => {

  return (
    <div className={si.block_Img}>
      <img src={img} style={{ width: '98.9vw' }} alt="картинка" />

      <BlockCnp title={title} text={text} id={id} marcerNum={marcerNum} />
    </div>
  )
}

export default Slider_Item