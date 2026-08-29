import { Link } from 'react-router-dom'
import STZYLOGO from '../assets/stzy.png'

export default function NavigationBar() {
  return (
    <div className="flex items-center justify-around h-15 bg-black">
      <div>
        <img src={STZYLOGO} 
          className="h-15"
          decoding="async"
          alt="" />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  )
}
