const SocialMedia = () => {

  const toFacebook = () =>{
    window.open('https://www.facebook.com', '_blank')
  }

  const toInstagran = () =>{
    window.open('https://www.instagram.com', '_blank')
  }

  const toTwitter = () =>{
    window.open('https://x.com', '_blank')
  }

  const toLinkedin = () =>{
    window.open('https://br.linkedin.com', '_blank')
  }

  return (
    <div className="flex gap-7">
      <button onClick={toFacebook} className="flex justify-center items-center w-9 h-9 m-a rounded-full shadow-lg "><img src="/src/imgs/facebook 1.png" alt="" /></button>
      
      <button onClick={toInstagran} className="flex justify-center items-center w-9 h-9 m-a rounded-full shadow-lg "><img src="/src/imgs/instagram 1.png" alt="" /></button>
      
      <button onClick={toTwitter} className="flex justify-center items-center w-9 h-9 m-a rounded-full shadow-lg "><img src="/src/imgs/twitter 1.png" alt="" /></button>
      
      <button onClick={toLinkedin} className="flex justify-center items-center w-9 h-9 m-a rounded-full shadow-lg "><img src="/src/imgs/linkedin 1.png" alt="" /></button>
    </div>
  )
}

export default SocialMedia