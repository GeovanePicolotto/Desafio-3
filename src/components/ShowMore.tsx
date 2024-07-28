import { Link } from "react-router-dom"

const ShowMore = () => {
  return (
   
    <Link to={"/shop"}>
        <div className="flex mt-10 justify-center items-center w-[245px] h-[48px] border border-amareloQueimado text-amareloQueimado font-semibold transition-colors duration-300 hover:bg-amareloQueimado hover:text-white hover:border-none"  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>Show More 
        </div>
    </Link>
    
  )
}

export default ShowMore