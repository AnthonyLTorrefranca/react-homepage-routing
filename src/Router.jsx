import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}
