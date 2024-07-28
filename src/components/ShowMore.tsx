import { Link } from "react-router-dom"

const ShowMore = () => {
  return (
   
    <Link to={"/shop"}>
        <div className="flex mt-10 justify-center items-center w-[245px] h-[48px] border border-amareloQueimado text-amareloQueimado font-semibold"  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>Show More 
        </div>
    </Link>
    
  )
}

export default ShowMore