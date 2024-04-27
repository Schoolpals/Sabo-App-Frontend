import { useEffect, useState } from "react";
import "../Styles/Intro.css"
import { useNavigate } from "react-router-dom";
const SplashScreen = () => {
  const [show, setshow] = useState(true)
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => { setshow(false); navigate("/intro") }, 2500) 
  }, [])

  return (
    <div className="h-[100vh] text-white relative flex flex-col justify-around  items-center ">
      {show && (
        <img
          src="assets/images/Group 289618.svg"
          alt=""
          className="fade-in"
        />
      )}
      <div className="bg-white h-[4px] w-[36vw] z-50 fade-in" ></div>
    </div>
  )
}

export default SplashScreen;