import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ShopProducts from "../components/ShopProducts"

const Shop = () => {
  return (
    <div>
      <Header/>
      <Banner page="Shop"/>
      <ShopProducts/>
      <Footer/>
    </div>
  )
}

export default Shop