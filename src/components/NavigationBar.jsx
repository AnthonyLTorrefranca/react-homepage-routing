import { Link } from 'react-router-dom'
import STZYLOGO from '../assets/stzy.png'

export default function NavigationBar() {
  return (
    <div className="flex items-center justify-around h-15 bg-black">
      <div>
        <a href="https://www.facebook.com/steezyapparelco" 
          target="_blank"
          rel='noopener noreferrer'>
          <img src={STZYLOGO} 
            className="h-15"
            decoding="async"
            alt="" />
        </a>
      </div>
      <div>
        <Link className="text-white m-3 text-xl p-3 hover:underline hover:bg-gray-700" to="/">Home</Link>
        <Link className="text-white m-3 text-xl p-3 hover:underline hover:bg-gray-700" to="/cart">Cart</Link>
      </div>
    </div>
  )
}
