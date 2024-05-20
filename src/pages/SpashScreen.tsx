import { useEffect, useState } from "react";
import "../Styles/Intro.css"
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
const SplashScreen = () => {
  const [show, setshow] = useState(true)
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => { setshow(false); navigate("/intro") }, 2500) 
  }, [])

  return (
    <div className="h-[100vh] text-white relative flex flex-col justify-center  items-center py-[1rem] ">
      {show && (
        <img
          src="assets/images/Group 289618.svg"
          alt=""
          className="fade-in"
        />
      )}
     <Footer/>
    </div>
  )
}

export default SplashScreen;