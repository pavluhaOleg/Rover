import { FC, useState } from 'react'
import { BlockImg } from '../../../../Infa-arr/InfaArr'
import ibw from './ItemBlockWindow.module.css'

interface ItemBlockWindow {
  id: number,
  addElem: any,
  text: string,
}
interface ICarBlockmg {
  id: number,
  img: string,
  title: string,
  consumption?: string,
  emissions?: string,
  places?: string,
  tank?: string,
}

const ItemBlockWindow: FC<ItemBlockWindow> = () => {

  const [modelHover, setModelHover] = useState<ICarBlockmg[]>(BlockImg)

  return (
     <div className={ibw.blockImg}>

            {modelHover.map(elem =>
              <div key={elem.id}>
                <img src={elem.img} title="img" />

                <ul className={ibw.blockInformationImg}>

                  <li className={ibw.elemInformation}>От {elem.consumption} л/100 км</li>
                  <li className={ibw.elemInformation}>От {elem.emissions} г/км</li>
                  <li className={ibw.elemInformation}>{elem.places} мест </li>
                  <li className={ibw.elemInformation}>{elem.tank} ЛИТРЫ</li>
                </ul>
              </div>
            )}
          </div> 



  )
}

export default ItemBlockWindow