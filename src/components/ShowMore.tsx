import { Link } from "react-router-dom"

const ShowMore = () => {
  return (
    <div className="flex mt-10 justify-center items-center w-[245px] h-[48px] border border-amareloQueimado text-amareloQueimado font-semibold"  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
        <Link to={"/shop"}>Show More</Link>
    </div>
  )
}

export default ShowMore