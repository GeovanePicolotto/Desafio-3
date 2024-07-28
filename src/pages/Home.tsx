import ApresentationHome from "../components/ApresentationHome"
import Browse from "../components/Browse"
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
        <Footer/>
        
    </div>
  )
}

export default Home