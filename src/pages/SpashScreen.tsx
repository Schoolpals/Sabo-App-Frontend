import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SplashScreen = () => {
  const [show, setshow] = useState(true)
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setshow(false)
      navigate("/intro")
    }, 4000);
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="h-[100vh] text-white relative flex flex-col justify-around  items-center ">
      {show && (
        <img
          src="assets/images/Group 289618.svg"
          alt=""
          className="animate-pulse-custom"
        />
      )}
      <div className="text-[red] bg-white h-[4px] w-[36vw] z-50 animate-pulse-custom"></div>
    </div>
  )
}

export default SplashScreen;