import React, { useState } from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { FaCarSide } from 'react-icons/fa'
import bw from './BlockWindow.module.css'
import ItemBlockWindow from './ItemBlockWindow/ItemBlockWindow'




const BlockWindow = () => {

  return (
    <div className={bw.blockWindow}>

      {/* блок blockКeview */}
      <div className={bw.blockКeview}>
        <div className={bw.titleImg}>НОВЫЙ RANGE ROVER</div>
        <p className={bw.textImg}>Непревзойденная роскошь и совершенство</p>

        <span className={bw.configCnp}><FaCarSide /><span className={bw.text}>конфигуратор</span></span>

        <p className={bw.linkKeviw}><span className={bw.iconArrow}><BsChevronRight /></span>ОБЗОР</p>
        <p className={bw.linkKeviw}><span className={bw.iconArrow}><BsChevronRight /></span>ОСОБЕННОСТИ</p>
        <p className={bw.linkKeviw}><span className={bw.iconArrow}><BsChevronRight /></span>КОМПЛЕКТАЦИИ</p>
        <p className={bw.linkKeviw}><span className={bw.iconArrow}><BsChevronRight /></span>СКАЧАТЬ БРОШЮРУ</p>
        <p className={bw.linkKeviw}><span className={bw.iconArrow}><BsChevronRight /></span>СЕМЕЙСТВО RANGE ROVER</p>

        <div className={bw.border}></div>

        <p className={`${bw.linkKeviw} ${bw.marginTop}`}><span className={bw.iconArrow}><BsChevronRight /></span>СЕМЕЙСТВО DEFENDER</p>
      </div>

      {/* блок фото */}
      <div className={bw.wrapperImg}>
        {/*  фото модели */}
        <div className={bw.wrapperElemImg}>
          <ItemBlockWindow id={0} addElem={undefined} text={''} />
        
        </div>

        <div className={bw.footnoteImg}>
          <p className={bw.textFootnote}>
            1.Указанные данные получены по оценкам производителя и будут заменены на официальные результаты испытаний, как только таковые станут доступны. Фактические значения могут отличаться от приведенных. Значения выбросов CO2 и расхода топлива могут отличаться в зависимости от таких факторов, как стиль вождения, условия окружающей среды, нагрузка на автомобиль, колесные диски и дополнительное оборудование.
          </p>

          <p className={bw.textFootnote}>
            2.Wet: Объем определен путем моделирования заполнения багажного отделения жидкостью. При выборе задних сидений повышенной комфортности объем багажного отделения уменьшается. Для получения дополнительной информации обратитесь в официальный дилерский центр.
          </p>

          <p className={bw.textFootnote}>
            Значения приведены для версии со стандартной колесной базой.
          </p>
        </div>
      </div>
    </div>

  )
}

export default BlockWindow