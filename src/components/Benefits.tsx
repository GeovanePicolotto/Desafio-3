const Benefits = () => {
  return (
    <div className="flex md:justify-center md:items-center w-screen h-[400px] md:h-[270px] bg-bannerColor mt-40" style={{ fontFamily: 'Poppins, sans-serif'}}>
        <div className="flex flex-col gap-10 w-[1334px] h-[150px] md:h-[70px] justify-between md:flex-row">
            <div className="flex mt-4 w-[337px]">
                <img src="/src/imgs/hightQualy.png" alt="" className="w-[60px] h-[60px]" />
                <div className="ml-2">
                <h1 className="font-semibold text-2xl">High Quality</h1>
                <p className="text-gray-600">crafted from top materials</p>
                </div>
            </div>

            <div className="flex w-[328px]">
            <img src="/src/imgs/protection.png" alt="" className="w-[60px] h-[60px]" />
                <div className="ml-2">
                <h1 className="font-semibold text-2xl">Warranty Protection</h1>
                <p className="text-gray-600">Over 2 years</p>
                </div>
            </div>
            <div className="flex w-[244px]">

            <img src="/src/imgs/shipping.png" alt="" className="w-[60px] h-[60px]" />
                <div className="ml-2">
                <h1 className="font-semibold text-2xl">Free Shipping</h1>
                <p className="text-gray-600">Order over 150 R$</p>
                </div>
            </div>

            <div className="flex w-[259px]">
            <img src="/src/imgs/customer-support.png" alt="" className="w-[60px] h-[60px]" />
                <div className="ml-2">
                <h1 className="font-semibold text-2xl">24 / 7 Support</h1>
                <p className="text-gray-600">Dedicated support</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Benefits