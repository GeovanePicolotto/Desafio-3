import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex items-center md:w-[430px]">
      <ul className="flex font-medium gap-8" style={{ fontFamily: 'Poppins, sans-serif', fontSize:'16px' }}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/shop"}>Shop</Link></li>
        <li>About</li>
        <li><Link to={"/contact"}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default NavBar