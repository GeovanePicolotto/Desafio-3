import NavBar from "./NavBar"

const Header = () => {
  return (
    <header className="flex justify-center items-center w-screen h-24">
        <div className="flex gap-4 w-10/12 h-10 justify-between">
            <img src="/src/imgs/furniro_logo.png" alt="Furniro Logo" />
            <NavBar/>
            <div className="flex justify-center items-center w-24 gap-4">
              <a href=""><img src="/src/imgs/userLogo.png" alt="Icone usuario" /></a>
              <a href=""><img src="/src/imgs/shopIcon.png" alt="Icone carrinho de compras" /></a>
            </div>
        </div>
    </header>
  )
}

export default Header