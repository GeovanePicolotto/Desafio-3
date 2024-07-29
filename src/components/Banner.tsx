import backgroundImage from '/src/imgs/bannerBackground.png'

interface BannerProps{
    page:string
}

const Banner: React.FC<BannerProps> = ({page}) => {
    const seta = '>'
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', fontFamily:'Poppins, sans-serif'}} className="h-[40vh] flex flex-col  items-center">
            <img src="/src/imgs/bannerIcon.png" alt="" className='h-[77px] w-[77px] mt-8' />
            <h1 className='text-5xl font-medium'>{page}</h1>
            <p className='text-base font-medium mt-1'>Home {seta} <span className='font-light'>{page}</span></p>
    </div>
  )
}

export default Banner