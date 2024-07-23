import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <ul className="flex gap-3">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/shop"}>Shop</Link></li>
        <li>About</li>
        <li><Link to={"/contact"}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default NavBar