import NavBar from "./NavBar"

const Header = () => {
  return (
    <header className="w-screen h-24 border border-black">
        <div className="flex">
            <img src="/src/imgs/furniro_logo.png" alt="Furniro Logo" />
            <NavBar/>
        </div>
    </header>
  )
}

export default Header