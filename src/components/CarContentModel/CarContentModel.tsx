import React, { useState } from 'react'
import cc from './CarContentModel.module.css'
import { GrCatalog } from "react-icons/gr";
import { FaCarSide } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

import rov_1 from '../../img/nav-car-1.png'
import rov_2 from '../../img/nav-car-2.png'
import rov_3 from '../../img/nav-car-3.png'
import rov_4 from '../../img/nav-car-4.png'

import discov_1 from '../../img/img_model_5.png'
import discov_2 from '../../img/img_model_6.png'

import defender_1 from '../../img/img_model_7.png'


import ItemNavigation from '../../reuseComponents/ItemNavigation/ItemNavigation'

interface ICarContentModel {
  id: number,
  img: string,
  title: string
}

const CarContentModel = () => {
  const [familyRover, setFamilyRover] = useState<ICarContentModel[]>([
    { id: 1, img: rov_1, title: "новый range rover" },
    { id: 2, img: rov_2, title: "новый range rover sport" },
    { id: 3, img: rov_3, title: "range rover velar" },
    { id: 4, img: rov_4, title: "range rover evoque" },
  ])
  const [familyDiscovery, setFamilyDiscovery] = useState<ICarContentModel[]>([
    { id: 1, img: discov_1, title: "discovery" },
    { id: 2, img: discov_2, title: "discovery sport" }
  ])
  const [familyDefender, setFamilyDefender] = useState<ICarContentModel[]>([
    { id: 1, img: defender_1, title: "defender" },
  ])

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
          {familyDiscovery.map(elem =>
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

      {/* block Window */}
      <div className={cc.blockWindow}>

        {/* блок blockКeview */}
        <div className={cc.blockКeview}>
          <div className={cc.titleImg}>НОВЫЙ RANGE ROVER</div>
          <p className={cc.textImg}>Непревзойденная роскошь и совершенство</p>

          <span className={cc.configCnp}><FaCarSide /><span className={cc.text}>конфигуратор</span></span>

          <p className={cc.linkKeviw}><span className={cc.iconArrow}><BsChevronRight /></span>ОБЗОР</p>
          <p className={cc.linkKeviw}><span className={cc.iconArrow}><BsChevronRight /></span>ОСОБЕННОСТИ</p>
          <p className={cc.linkKeviw}><span className={cc.iconArrow}><BsChevronRight /></span>КОМПЛЕКТАЦИИ</p>
          <p className={cc.linkKeviw}><span className={cc.iconArrow}><BsChevronRight /></span>СКАЧАТЬ БРОШЮРУ</p>
          <p className={cc.linkKeviw}><span className={cc.iconArrow}><BsChevronRight /></span>СЕМЕЙСТВО RANGE ROVER</p>

          <div className={cc.border}></div>

          <p className={`${cc.linkKeviw} ${cc.marginTop}`}><span className={cc.iconArrow}><BsChevronRight /></span>СЕМЕЙСТВО DEFENDER</p>
        </div>

        {/* блок фото */}
        <div className={cc.wrapperImg}>
          <div className={cc.blockImg}>
            <img src={rov_1} title="img" />
          </div>

          <ul className={cc.blockInformationImg}>
            <li className={cc.elemInformation}></li>
            <li className={cc.elemInformation}></li>
            <li className={cc.elemInformation}></li>
            <li className={cc.elemInformation}></li>
          </ul>
          <div className={cc.footnoteImg}>
            <p className={cc.textFootnote}>
              1.Указанные данные получены по оценкам производителя и будут заменены на официальные результаты испытаний, как только таковые станут доступны. Фактические значения могут отличаться от приведенных. Значения выбросов CO2 и расхода топлива могут отличаться в зависимости от таких факторов, как стиль вождения, условия окружающей среды, нагрузка на автомобиль, колесные диски и дополнительное оборудование.
            </p>

            <p className={cc.textFootnote}>
              2.Wet: Объем определен путем моделирования заполнения багажного отделения жидкостью. При выборе задних сидений повышенной комфортности объем багажного отделения уменьшается. Для получения дополнительной информации обратитесь в официальный дилерский центр.
            </p>
            
            <p className={cc.textFootnote}>
              Значения приведены для версии со стандартной колесной базой.
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default CarContentModel