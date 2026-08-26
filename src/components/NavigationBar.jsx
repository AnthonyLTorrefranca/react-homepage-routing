import STZY from '../assets/stzy.png'
import { Link } from 'react-router-dom'
const STZYLINK = "https://www.facebook.com/steezyapparelco"

export default function NavigationBar() {
  return (
    <nav className="flex items-center justify-around h-20 bg-black">
        <div>
            <a href={STZYLINK} target="blank"> <img src={STZY} className="h-10 hover:cursor-pointer"></img> </a>      
        </div>
        <div>
            <Link className="text-white px-10" to="/">Home</Link>
            <Link className="text-white px-10" to="/cart">Cart</Link>
        </div>
    </nav>
  )
}
