import { motion } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Provider/ContextApi";
import { Remark } from "./Remark";
import { Footer } from "./Footer";
import { useMutation } from "react-query";
let currentOtp: number = 0;
export const Verification = () => {
  const user = useContext(Context)
  const navigate = useNavigate()
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOtp, setactiveOtp] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const { formData } = user || {}
  const [show, setshow] = useState(false)
  const [mail, setmail] = useState("")
  const [error, seterror] = useState("")
  const [check, setcheck] = useState(false)
  const [buttons, setbuttons] = useState(false)
  const locations = useLocation()
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
  const data = locations.state?.data;
  console.log(data)

  const handleverification = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    try {
      const res = await fetch("https://sabo-app.onrender.com/auth/verify-email", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ otp: otp.join(","), email: data.email, })
      })
      const result = await res.json()
      console.log(result)
      seterror(result)
      if (!res.ok) {
        setcheck(true)
        setbuttons(true)
        throw new Error("error parsing json")
      }
      else {
        setshow(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (data?.email) {
      const atIndex = data.email.indexOf('@') ?? -1;
      const visibleChars = Math.min(4, atIndex);
      const maskedLocalPart = data.email.slice(0, visibleChars) + '*'.repeat(atIndex - visibleChars) + data.email.slice(atIndex);
      console.log(maskedLocalPart);
      setmail(maskedLocalPart)
    } else {
      console.log('Email not available in data');
    }
  }, [data]);

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
  useEffect(() => {
    const otpEntered = otp.filter((item) => item !== "").length
    const opt = otp.join(", ").length !== 0
    if (otpEntered < 4) {
      setcheck(false)
    }
    if (otpEntered < 4) {
      setbuttons(false)
    }
    else if (otpEntered === otp.length) {
      setbuttons(true)
    }
  }, [otp])
  return (
    <motion.div className=" flex  flex-col  text-white  w-[88%]  min-h-[97.4vh] mx-auto my-[0rem]  pt-[2.5rem] justify-between   overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0 }}>
      <div className="flex  flex-col">
        <div className="flex flex-col gap-[3.5rem] mb-[6.8vw]">
          <div onClick={handleGoback}><img src="/assets/images/Arrow - Left.svg" alt="sfaw" /></div>
          <div className="">
            <div className="text-block text-[25px] font-urbanist text-white">Verify it’s you </div>
          </div>
        </div>
        <div>
          <div className="font-urbanist mb-[4rem] font-thin w-[100%] text-[3.6vw] text-opacity-40"><div className="flex" ><div className="flex w-screen">We’ve sent a code to (<div>  {mail} </div>).</div> </div> <div>Enter it here to verify your identity</div>  </div>
          <form className="flex flex-col gap-[8vw] items-center justify-center min-w-[83%]" onSubmit={handleverification}>
            <div className="flex flex-col text-center  gap-[2vw]">
              <div className="flex flex-row gap-[5vw] items-center relative">
                {otp.map((_, index) => {
                  return (
                    <div key={index}>
                      <input
                        ref={index === activeOtp ? inputRef : null}
                        type="number"
                        onChange={handlOnchanege}
                        onKeyDown={(e) => handleOnkey(e, index)}
                        value={otp[index]}
                        className={`w-[16vw] font-urbanist h-[16vw] rounded-[19px] h-12 border-[1px]  ${!check ? "border-[#35377b]" : "border-red-500"}  rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400  ${check ? "focus:border-red-500" : "focus:border-white"} focus:text-white text-gray-400 transition ease-out`}
                      />
                      {index === otp.length ? null : (
                        <span className="w-2 py-0.5 bg-gray-400" />
                      )}
                    </div>
                  );
                })}
              </div>
              <div >
                {
                  check && <div className="flex justify-start items-center absolute ">
                    <img src="/assets/images/Group 289738.svg" alt="" />
                  </div>
                }
                <div className="text-[#aec4ff] mt-[6vw]">Resend</div>
              </div>

            </div>
            <motion.button
              whileTap={{ scale: 1.05 }}
              disabled={!buttons}
              type="submit" className={`flex flex-row   ${!buttons ? "bg-[#676D83]" : "bg-[#0b66ff]"} w-[93%] h-[14vw] rounded-[12px] items-center justify-around `}>
              Verify
            </motion.button>
            {
              show && <Remark show={show} setshow={setshow} />
            }
          </form>

        </div>
      </div>
      <Footer />

    </motion.div>
  )
}
