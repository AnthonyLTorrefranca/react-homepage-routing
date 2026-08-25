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
            <Link className="mx-5 px-5 py-2 rounded hover:bg-gray-300">Home</Link>
            <Link className="mx-5 px-5 py-2 rounded hover:bg-gray-300">🛒 Cart</Link>
        </div>
    </nav>
    </>
  )
}
