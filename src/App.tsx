import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home"
import Shop from './pages/Shop';
import Contact from './pages/Contact';


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
