import { Link } from 'react-router-dom'
import backgroundImage from '/src/imgs/home_background.png'

const ApresentationHome = () => {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', // Ajusta a imagem para cobrir o elemento
    backgroundPosition: 'center',}} className='flex justify-center h-[716px]'>
        <div style={{fontFamily: 'Poppins, sans-serif'}} className='flex flex-col items-center justify-evenly w-[291px] h-[559px] bg-orange-100 md:w-[643px] md:h-[443px] md:mt-[200px] md:ml-[739px] md:items-start'>
            <p className='-tracking-tighter md:ml-5'>New Arival</p>
            <h1 className='text-5xl text-amareloQueimado md:text-6xl md:ml-5'>Discover Our <br /> New Collection</h1>
            <p className='md:ml-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
            <Link to={'/shop'}><button className='w-[222px] h-[74px] bg-amareloQueimado text-white md:ml-5'>BUY NOW</button></Link>
        </div>
    </div>
  )
}

export default ApresentationHome