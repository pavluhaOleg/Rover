import React, { useState, FC } from 'react'
import { BsXLg } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import cfb from './CarNavFixedBlok.module.css'
import ItemCarFixed from './ItemCarFixed/ItemCarFixed'

interface ICarsNav {
  id: number,
  link: string,
}

interface ICarsProps {
  setCarsShow: any;
}

const CarNavFixedBlok: FC<ICarsProps> = ({ setCarsShow}) => {
  const [elemAllBlock, setElemAllBlock] = useState(true)

  const [elemCars, setElemCars] = useState<ICarsNav[]>([
    { id: 1, link: 'автомобили' },
    { id: 1, link: 'sv' },
  ])

  const hideNavigationCars = () => {
    setCarsShow(false);
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
      <Link to="/">
        <div
          onClick={hideNavigationCars}
          className={cfb.cnpHide}><BsXLg /></div>
      </Link>
    </div>
  )
}

export default CarNavFixedBlok