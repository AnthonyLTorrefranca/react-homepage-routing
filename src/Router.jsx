import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'

export default function Router() {
  return (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/cart" element={<Cart />}/>
  </Routes>
  )
}
