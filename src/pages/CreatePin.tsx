import React from 'react'
import { motion } from "framer-motion";
import {  useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Context } from "../Provider/ContextApi";
import { Footer } from './Footer';
import { CreatePinModal } from './CreatePinModal';
let currentOtp: number = 0;
export const CreatePin = () => {
  // const user = useContext(Context)
  // const navigate = useNavigate()
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOtp, setactiveOtp] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const [show, setshow] = useState(false)
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


  return (
    <div className='min-h-[100vh] w-[88%] mx-auto text-white py-[23vw]  flex flex-col text-center items-center gap-[20vw]'>
      <div className='w-[50%] mx-auto flex flex-col text-center items-center'>
        <div className="h-[2.3vw] w-[26vw] border-none rounded-[7px] bg-[#0b66ff] "></div>
      </div>
      <div className='flex flex-col gap-[2vw]'>
        <div className='font-urbanist font-medium text-[5.7vw]'>Create your PIN</div>
        <div>
          <div className='font-urbanist font-thin text-[3vw] tracking-wider'>Create a four-digit passcode </div>
          <div className='font-urbanist font-thin text-[3vw] tracking-wider'>to secure your account</div>
        </div>
      </div>
      <div className="flex flex-col  items-center justify-between gap-[90vw]">
        <div className="flex flex-row gap-[5vw] items-center  ">
          {otp.map((_, index) => {
            return (
              <div key={index} >
                <input
                  ref={index === activeOtp ? inputRef : null}
                  type={inputRef ? "number" : "password"}
                  onChange={handlOnchanege}
                  onKeyDown={(e) => handleOnkey(e, index)}
                  value={otp[index]}
                  className={`w-[18.5px] font-urbanist h-[18.5px] rounded-[7px]  border-[1px] border-[#35377b] pin
                  ${index <= activeOtp ? "bg-[#0B66FF]" : "pin"}
                  } outline-none text-center font-semibold   focus:border-black   focus:bg-[#0B66FF] text-transparent transition ease-out`}
                  style={{ caretColor: 'transparent' }}
                ></input>
              </div>
            );
          })}
        </div>
        <div className='w-screen mx-auto flex flex-col text-center justify-center items-center gap-[7vw]'>
          <motion.button
            whileTap={{ scale: 1.05 }}
            type="submit" className='flex flex-row bg-[#0b66ff] w-[83%] h-[14vw]   rounded-[12px] items-center justify-around ' onClick={() => setshow(true)}>
            Verify
          </motion.button>
          {
            show && <div><CreatePinModal setshow={setshow}/></div>
          }
          <Footer />
        </div>
      </div>
    </div>
  )
}
