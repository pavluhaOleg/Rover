import React, { useState, FC } from 'react'
import { BsXLg } from 'react-icons/bs'
import cfb from './CarNavFixedBlok.module.css'
import ItemCarFixed from './ItemCarFixed/ItemCarFixed'

interface ICarsNav {
  id: number,
  link: string,
}

interface ICarsProps {
  setCarsShow: any;
  carsShow: boolean;
}

const CarNavFixedBlok: FC<ICarsProps> = ({ setCarsShow, carsShow }) => {
  const [elemAllBlock, setElemAllBlock] = useState(true)

  const [elemCars, setElemCars] = useState<ICarsNav[]>([
    { id: 1, link: 'автомобили' },
    { id: 1, link: 'sv' },
  ])

  const toogleBlockCars = () => {
    setCarsShow(!carsShow);
    setElemAllBlock(!elemAllBlock);
  }

  return (
    <div className={elemAllBlock ? `${cfb.navFixedBlock} ${cfb.active}` : cfb.navFixedBlock}>
      <div className={cfb.navMenu}>
        {elemCars.map(elem =>
          <ItemCarFixed key={elem.id} {...elem} />
        )
        }
      </div>
      <div
        onClick={toogleBlockCars}
        className={cfb.cnpHide}><BsXLg /></div>
    </div>
  )
}

export default CarNavFixedBlok