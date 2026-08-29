import {BrowserRouter} from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Router from './Router'

export default function App() {
  return (
  <BrowserRouter>
    <NavigationBar/>
    <Router/>
  </BrowserRouter>
  )
}
