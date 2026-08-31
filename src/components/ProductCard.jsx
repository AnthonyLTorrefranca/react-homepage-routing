// import { ProdPhotos } from './ProductPhotos/ProductCardPhotos'
import stzy from '../assets/stzy.png'

export default function ProductCard() {
  return (
    <>
      <div className="border mx-6 w-full hover:cursor-pointer hover:border-red-700">
        {/* {ProdPhotos.map((photo) => 
        )} */}
        <img src={stzy} key='test' />
      </div>
    </>
  )
}