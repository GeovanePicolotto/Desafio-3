const Browse = () => {
  return (
    <div className="flex flex-col  items-center h-[1550px] md:h-[685px] md:w-[77vw] md:m-auto md:justify-between">
        <div className="flex flex-col items-center  mt-8">
            <h1 className="font-bold" style={{ fontFamily: 'Poppins, sans-serif', fontSize:'32px' }}>Browse The Range</h1>
            <p className="text-xl hidden md:flex" style={{ fontFamily: 'Poppins, sans-serif'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex flex-col justify-center mt-4 md:w-[1200px] md:flex md:flex-row md:justify-between">
            <div className="w-[350px] h-[450px] rounded md:w-[381px] md:h-[480px] ">
                <img src="/src/imgs/dining.png" alt="" />
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize:'24px'}} className="hidden md:flex md:justify-center md:font-bold md:mt-5">Dining</p>
            </div>

            <div className="w-[350px] h-[450px] rounded md:w-[381px] md:h-[480px]">
                <img src="/src/imgs/living.png" alt="" />
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize:'24px'}} className="hidden md:flex md:justify-center md:font-bold md:mt-5">Living</p>
            </div>

            <div className="w-[350px] h-[450px] rounded md:w-[381px] md:h-[480px]">
                <img src="/src/imgs/bedroom.png" alt="" />
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize:'24px'}} className="hidden md:flex md:justify-center md:font-bold md:mt-5">Bedroom</p>
            </div>
        </div>
    </div>
  )
}

export default Browse