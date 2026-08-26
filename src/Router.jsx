import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'

export default function Router() {
  return (
    <Routes>
      <Route to="/" element={<Home />} />
      <Route to="/cart" element={<Cart />} />
    </Routes>
  )
}
