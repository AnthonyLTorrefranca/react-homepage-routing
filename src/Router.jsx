import { Routes, Route } from 'react-router-dom'
import Home from 'components/Home'
import Cart from 'components/Cart'

export default function Router() {
  return (
    <Routes>
      <Route path="//components/Home" element={<Home />} />
      <Route path="/components/Cart" element={<Cart />} />
    </Routes>
  )
}
