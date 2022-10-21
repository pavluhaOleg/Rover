import React, { useState } from 'react'
import cc from './CarContentModel.module.css'
import { BlockImg, RangeRover, Discovery, Defender } from '../../Infa-arr/InfaArr'

import { GrCatalog } from "react-icons/gr";
import { FaCarSide } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

import ItemNavigation from '../../reuseComponents/ItemNavigation/ItemNavigation'

interface ICarContentModel {
  id: number,
  img: string,
  title: string,
  consumption?: string,
  emissions?: string,
  places?: string,
  tank?: string,
}

const CarContentModel = () => {
  const [familyRover, setFamilyRover] = useState<ICarContentModel[]>(RangeRover)
  const [famiyDiscovery, setFamilyDiscovery] = useState<ICarContentModel[]>(Discovery)
  const [familyDefender, setFamilyDefender] = useState<ICarContentModel[]>(Defender)

  const [modelHover, setModelHover] = useState<ICarContentModel[]>(BlockImg)

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
          {/*  фото модели */}
          <div className={cc.wrapperElemImg}>
            <div className={cc.blockImg}>
              {modelHover.map(elem =>
                <><img src={elem.img} title="img" />

                  <ul className={cc.blockInformationImg}>

                    <li className={cc.elemInformation} key={elem.id}>От {elem.consumption} л/100 км</li>
                    <li className={cc.elemInformation} key={elem.id}>От {elem.emissions} г/км</li>
                    <li className={cc.elemInformation} key={elem.id}>{elem.places} мест </li>
                    <li className={cc.elemInformation} key={elem.id}>{elem.tank} ЛИТРЫ</li>
                  </ul></>
              )}
            </div>
          </div>

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
    </div >
  )
}

export default CarContentModel