import React, { useState } from 'react'
import cc from './CarContentModel.module.css'
import { RangeRover, Discovery, Defender } from '../../Infa-arr/InfaArr'

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
  const [familyRover, setFamilyRover] = useState<ICarContentModel[]>(RangeRover)
  const [famiyDiscovery, setFamilyDiscovery] = useState<ICarContentModel[]>(Discovery)
  const [familyDefender, setFamilyDefender] = useState<ICarContentModel[]>(Defender)

  return (
    <div className={cc.wrapper}>
      <div>
        <h4 className={cc.title}>СЕМЕЙСТВО RANGE ROVER</h4>
        <ul>
          {familyRover.map(elem =>
            <ItemNavigation key={elem.id} {...elem} />
          )}
        </ul>

        <h4 className={cc.title}>СЕМЕЙСТВО DISCOVERY</h4>
        <ul>
          {famiyDiscovery.map(elem =>
            <ItemNavigation key={elem.id} {...elem} />
          )}
        </ul>

        <h4 className={cc.title}>СЕМЕЙСТВО DEFENDER</h4>
        <ul>
          {familyDefender.map(elem =>
            <ItemNavigation key={elem.id} {...elem} />
          )}
        </ul>
        <div className={cc.cnp_comparison}>
          <span><GrCatalog /></span><h4>сравнение</h4>
        </div>
      </div>
      
      <BlockWindow />
    </div>

    // </div>
  )
}

export default CarContentModel