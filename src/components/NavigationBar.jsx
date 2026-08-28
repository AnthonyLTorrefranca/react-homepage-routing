import { Link } from 'react-router-dom'
import STZYLOGO from '../assets/stzy.png'

export default function NavigationBar() {
  return (
    <div className="flex items-center justify-around h-15 bg-black">
      <div>
        <a 
          href="https://www.facebook.com/steezyapparelco" 
          target="_blank"
          rel='noopener noreferrer'>
          <img 
            src={STZYLOGO} 
            className="h-15"
            decoding="async"
            alt="" />
        </a>
      </div>
      <div>
        <Link className="mx-5 p-3 text-white  cursor-pointer hover:underline hover:bg-gray-800" to="/">Home</Link>
        <Link className="mx-5 p-3 text-white  cursor-pointer hover:underline hover:bg-gray-800" to="/cart">Cart </Link>
      </div>
    </div>
  )
}
