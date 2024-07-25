import EmailVerification from "./EmailVerification"
import FooterNav from "./FooterNav"
import HelpNav from "./HelpNav"
import SocialMedia from "./SocialMedia"

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between w-screen md:flex md:flex-col md:items-center md:gap-4" style={{height:'600px'}}>
        <div className="flex flex-col gap-5 items-center justify-between w-screen md:flex-row md:w-4/5 md:items-start">
          <div className="flex flex-col gap-5 items-center md:w-[285px] md:h-2/3 md:items-start" style={{fontFamily: 'Poppins, sans-serif'}}>
            <h1 className="text-2xl font-bold" >Furniro.</h1>
            <p className="text-gray-400 text-base font-normal">400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA</p>
            <SocialMedia/>
          </div>
          <div className="flex flex-col items-center justify-between h-64 md:flex-row md:w-[710px] md:items-start">
            <div className="flex justify-between  md:w-16 md:gap-11 md:flex-col">
              <h1 className="hidden text-gray-400 md:flex">Links</h1>
              <FooterNav/>
            </div>
            <div className="md:flex md:flex-col md:gap-11 md:justify-between">
              <h1 className="hidden text-gray-400 md:flex">Help</h1>
              <HelpNav/>
            </div>
            <div className="md:flex md:flex-col md:gap-11">
              <h3 className="hidden text-gray-400 md:flex">Newsletter</h3>
              <EmailVerification/>
            </div>
          </div>
        </div>
        
        <div className="hidden w-4/5 border border-gray-200 md:flex"></div>
        <p className="" style={{fontFamily: 'Poppins, sans-serif'}}>2023 furino. All rights reverved</p>
    </footer>
  )
}

export default Footer