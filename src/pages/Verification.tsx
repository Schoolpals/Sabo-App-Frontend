import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Provider/ContextApi";
import { Remark } from "./Remark";
let currentOtp: number = 0;
export const Verification = () => {
  const user = useContext(Context)
  const navigate = useNavigate()
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOtp, setactiveOtp] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const { formData } = user || {}
  const [show,setshow] = useState(false)
  const handlOnchanege = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const val = value.substring(value.length - 1)
    const newOtp = [...otp]
    newOtp[currentOtp] = val
    setOtp(newOtp)
    if (!value) {
      setactiveOtp(currentOtp - 1)
    }
    else {
      setactiveOtp(currentOtp + 1)
    }
  }


  const atIndex = formData?.email.indexOf('@') ?? -1;
  const visibleChars = Math.min(4, atIndex);
  const maskedLocalPart = formData?.email.slice(0, visibleChars) + '*'.repeat(atIndex - visibleChars) + formData?.email.slice(atIndex);
  const handleOnkey = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const { key } = e
    currentOtp = index
    if (key === "Backspace") {
      setactiveOtp(currentOtp - 1)
    } console.log(key)
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOtp])

  const handleGoback = () => {
    navigate(-1)
  }
  return (
    <motion.div className=" flex  flex-col  text-white  w-[88%]  min-h-[100vh] mx-auto my-[0rem]  pt-[3.5rem]  overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0 }}>
      <div className="flex flex-col gap-[3.5rem] mb-[6.8vw]">
        <div onClick={handleGoback}><img src="/assets/images/Arrow - Left.svg" alt="sfaw" /></div>
        <div className="">
          <div className="text-block text-[25px] font-urbanist text-white">Verify it’s you </div>
        </div>
      </div>
      <div>
        <div className="font-urbanist mb-[4rem] font-extralight ">We’ve sent a code to ( {maskedLocalPart} ).<div>Enter it here to verify your identity</div></div>
      </div>
      <div className="flex flex-col gap-[8vw] items-center justify-center min-w-[83%]">
        <div className="flex flex-row gap-[5vw] items-center">
          {otp.map((_, index) => {
            return (
              <div key={index}>
                <input
                  ref={index === activeOtp ? inputRef : null}
                  type="number"
                  onChange={handlOnchanege}
                  onKeyDown={(e) => handleOnkey(e, index)}
                  value={otp[index]}
                  className="w-[16vw] font-urbanist h-[16vw] rounded-[19px] h-12 border-[1px] border-[#35377b] rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-white focus:text-white text-gray-400 transition ease-out"
                />
                {index === otp.length ? null : (
                  <span className="w-2 py-0.5 bg-gray-400" />
                )}
              </div>
            );
          })}
        </div>
        <div className="text-[#aec4ff]">Resend</div>
         <motion.button 
         whileTap={{scale:1.05}}
         type="submit" className='flex flex-row  bg-[#0b66ff] w-[93%] h-[14vw] rounded-[12px] items-center justify-around ' onClick={()=>setshow(true)}>
          Verify
        </motion.button>
        {
          show && <Remark show={show} setshow={setshow} />
        }
        
      </div>
    </motion.div>
  )
}
