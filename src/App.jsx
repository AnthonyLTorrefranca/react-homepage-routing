import { Link } from 'react-router-dom'
import Router from './Router'

export default function App() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
    <Router />    </>
  );
}
