import { motion } from "framer-motion"
import React, { ChangeEvent, useContext, useState } from "react"
import { Personalinfo2 } from "./Personalinfo2"
import { Context } from "../Provider/ContextApi"
import { Footer } from "./Footer"
export const PersonalInfo = () => {

    const user = useContext(Context)
    const [currentpage, setcurrentpage] = useState(1)
    const handleonchange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        user?.setformData({
            ...user.formData,
            [name]: value
        })

    }
    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const { formData } = user || {};
        const validaterror = [];
        e.preventDefault();
        if (!formData?.phonenumber.trim()) {
            validaterror.push("phoneumber")
        }
        else if (formData.phonenumber.length < 11) {
            validaterror.push("incomplete")
        }
       else if (formData.phonenumber.length > 11)  {
        validaterror.push("incompletes")
       }
        if (!formData?.address.trim()) {
            validaterror.push("address")
        }
        if (!formData?.state.trim()) {
            validaterror.push("state")
        }
        if (!formData?.city.trim()) {
            validaterror.push("city")
        }
        if (!formData?.zipcode.trim()) {
            validaterror.push("zipcode")
        }
        if (!formData?.street.trim()) {
            validaterror.push("street")
        }
        user?.seterror(validaterror)
        if (validaterror.length === 0) {
            setcurrentpage(currentpage + 1)
        }
    }


    let phonemessage: React.ReactNode
    if (user?.error.includes("phoneumber")) {
        phonemessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Phonenumber input must be filled </div>
    }
    else if (user?.error.includes("incomplete")) {
        phonemessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[vw]">Phonenumber must be at least 11 digits</div>
    }
    else if (user?.error.includes("incompletes")) {
        phonemessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Phonenumber must be at least 11 digits</div>
    }
    return (
        <div>
            {
                currentpage === 1 ? (
                    <motion.div className="w-screen min-h-[100vh] text-white py-[1rem] pt-[4rem] flex flex-col justify-between py-[1rem]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5 } }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="w-[88%] mx-auto my-[3vw]">
                            <div className="text-center flex flex-col relative justify-center items-center pb-[3rem] fade-in-down">
                                <div className="h-[2.3vw] bar w-[56vw] border-none rounded-[7px] bg-[#7da2ff54] "></div>
                            </div>
                            <div className="gap-[2vw] flex flex-col pb-[3rem]">
                                <div className="text-[7.4vw] font-urbanist font-normal">Personal Information</div>
                                <div className="text-[3.4vw] font-urbanist font-thin text-opacity-5">We want to know more about you</div>
                            </div>
                            <form onSubmit={handlesubmit} className="flex flex-col  gap-[4vw]">
                                <div>
                                    <input type="number" onChange={handleonchange} name="phonenumber" placeholder="Phone number" className='w-[100%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[4vw] py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist' />
                                    {
                                        phonemessage
                                    }
                                </div>
                                <div>
                                    <input type="text" onChange={handleonchange} name="address" placeholder="Residential Address" className='w-[100%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist' />
                                    {
                                        user?.error.includes("address") && <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Address input must be filled </div>
                                    }
                                </div>
                                <div>
                                    <input type="text" onChange={handleonchange} name="state" placeholder="State" className='w-[100%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4vw] bg-[#0a1942]  rounded-[12px] font-urbanist' />
                                    {
                                        user?.error.includes("state") && <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">State input must be filled </div>
                                    }
                                </div>
                                <div>
                                    <input type="text" onChange={handleonchange} name="city" placeholder="City" className='w-[100%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4vw] bg-[#0a1942]  rounded-[12px] font-urbanist' />
                                    {
                                        user?.error.includes("city") && <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">City input must be filled </div>
                                    }
                                </div>
                                <div>
                                    <input type="number" onChange={handleonchange} name="zipcode" placeholder="Zip code" className='w-[100%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4vw] bg-[#0a1942]  rounded-[12px] font-urbanist' />
                                    {
                                        user?.error.includes("zipcode") && <div className="font-urbanist  text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Zipcode input must be filled </div>
                                    }
                                </div>
                                
                                <div>
                                    <input type="text" onChange={handleonchange} name="street" placeholder="Street" className='w-[100%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4vw] bg-[#0a1942]  rounded-[12px] font-urbanist' />
                                    {
                                        user?.error.includes("street") && <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Street input must be filled </div>
                                    }
                                </div>
                                <div className="pt-[3rem] flex flex-col gap-[20vw] justify-center items-center">
                                    <button type="submit" className='flex flex-row  bg-[#0b66ff] w-[100%] h-[13vw]  rounded-[12px] items-center justify-around'>
                                        Next
                                    </button>
                                    
                                </div>
                            </form>
                        </div>
                        <Footer/>
                    </motion.div>
                ) : (<Personalinfo2 />)
            }
        </div>
    )
}
