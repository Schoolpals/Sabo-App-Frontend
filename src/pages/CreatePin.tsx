import React from 'react'
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Provider/ContextApi";
import { Footer } from './Footer';
let currentOtp: number = 0;
export const CreatePin = () => {
  const user = useContext(Context)
  const navigate = useNavigate()
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOtp, setactiveOtp] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const { formData } = user || {}
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
    <div className='h-screen w-screen text-white py-[23vw]  flex flex-col text-center items-center gap-[17vw]'>
      <div className='w-[50%] mx-auto flex flex-col text-center items-center'>
        <div className="h-[2.3vw] w-[26vw] border-none rounded-[7px] bg-[#0b66ff] "></div>
      </div>
      <div className='flex flex-col gap-[2vw]'>
        <div className='font-urbanist font-medium text-[7.5vw]'>Create your PIN</div>
        <div>
          <div className='font-urbanist font-thin text-[4vw] tracking-wider'>Create a four-digit passcode </div>
          <div className='font-urbanist font-thin text-[4vw] tracking-wider'>to secure your account</div>
        </div>
      </div>
      <div className="flex flex-col gap-[5vw] items-center justify-between gap-[100vw]">
        <div className="flex flex-row gap-[5vw] items-center just ">
          {otp.map((_, index) => {
            return (
              <div key={index}>
                <input
                  ref={index === activeOtp ? inputRef : null}
                  type="number"
                  onChange={handlOnchanege}
                  onKeyDown={(e) => handleOnkey(e, index)}
                  value={otp[index]}
                  className="w-[18.5px] font-urbanist h-[18.5px] rounded-[19px] h-12 border-[1px] border-[#35377b] rounded bg-transparent active:bg-green-700  outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-white focus:text-white text-gray-400 transition ease-out"
                />
                {index === otp.length ? null : (
                  <span className="w-2 py-0.5 bg-gray-400" />
                )}
              </div>
            );
          })}
        </div>
        <div className='w-screen mx-auto flex flex-col text-center items-center gap-[7vw]'>
          <motion.button
            whileTap={{ scale: 1.05 }}
            type="submit" className='flex flex-row  bg-[#0b66ff] w-[93%] h-[14vw] rounded-[12px] items-center justify-around ' onClick={() => setshow(true)}>
            Verify
          </motion.button>
          <Footer />
        </div></div>
    </div>
  )
}
