import { Link } from 'react-router-dom'
import STZY from '../assets/stzy.png'
const STZYLINK = "https://www.facebook.com/steezyapparelco"

export default function NavigationBar() {
  return (
    <>
    <nav className="flex items-center align-middle justify-around h-10 bg-gray-500">
        <div>
            <a href={STZYLINK} target="blank">
                <img src={STZY} className="h-10 hover:cursor-pointer"></img>
            </a>
        </div>
        <div className="mr-10">
            <Link className="mr-10 px-2 py-2 hover:bg-gray-400" to="/">Home</Link>
            <Link className="mr-10 px-2 py-2 hover:bg-gray-400" to="/cart">🛒</Link>
        </div>
    </nav>
    </>
  )
}
