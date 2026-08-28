import { Link } from 'react-router-dom'
import STZYLOGO from '../assets/stzy.png'

export default function NavigationBar() {
  return (
    <div className="flex justify-center items-center h-15 bg-black">
      <div>
        <img src={STZYLOGO} alt="" /></div>
      <div>
        <Link className="text-white hover:underline">Home</Link>
        <Link className="text-white hover:underline">Cart</Link>
      </div>
    </div>
  )
}
