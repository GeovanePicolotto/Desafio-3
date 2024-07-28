import ApresentationHome from "../components/ApresentationHome"
import Browse from "../components/Browse"
import Colecao from "../components/Colecao"
import Explore from "../components/Explore"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Products from "../components/Products"

const Home = () => {
  return (
    <div>
        <Header/>
        <ApresentationHome/>
        <Browse/>
        <Products/>
        <Explore/>
        <Colecao/>
        <Footer/>
    </div>
  )
}

export default Home