import React, { useState } from 'react'
import cc from './CarContentModel.module.css'
import { Nav_CarsContent } from '../../Infa-arr/InfaArr'

import { GrCatalog } from "react-icons/gr";

import ItemNavigation from '../../reuseComponents/ItemNavigation/ItemNavigation'
import BlockWindow from './blockWindow/BlockWindow';

interface ICarContentModel {
  id: number,
  img: string,
  title: string,
  consumption?: string,
}

const CarContentModel = () => {
  const [navElem, setNavElement] = useState<ICarContentModel[]>(Nav_CarsContent)

  const showWindow = (id: number) => {
    console.log(id)
  }

  return (
    <div className={cc.wrapper}>
      <div>
        <h4 className={cc.title}>СЕМЕЙСТВО RANGE ROVER</h4>
        <ul>
          {navElem.map(elem =>
            <ItemNavigation onMouseOver={undefined} key={elem.id} {...elem} showWindow={showWindow} />
          )}
        </ul>

        <div className={cc.cnp_comparison}>
          <span><GrCatalog /></span><h4>сравнение</h4>
        </div>
      </div>

      <BlockWindow />
    </div>

  )
}

export default CarContentModel