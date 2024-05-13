import { motion } from "framer-motion"
import React, { ChangeEvent, useContext, useState } from "react"
import { Personalinfo2 } from "./Personalinfo2"
import { Context, valueprops } from "../Provider/ContextApi"
import { Footer } from "./Footer"
import { SubmitHandler, useForm } from "react-hook-form"
import { useQuery } from "react-query"

export const PersonalInfo = () => {
     const handlepersoanl = async (data:valueprops) => {
        try {
            const res = await fetch("http://localhost:3000/users/personal-info",{
                method: "POST",
                headers: {
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            const result = res.json()
            console.log(result)
            if(!res.ok) {
                throw new Error("error parsing json")
            }
            setcurrentpage(currentpage + 1)
        }
        catch(error){
            console.log("error")
        }
        
    }
    const {data}  = useQuery({
        queryKey:['personalinfo'],
        queryFn: () => handlepersoanl
    })
    const user = useContext(Context)
    const [currentpage, setcurrentpage] = useState(1)
    const handleonchange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        user?.setformData({
            ...user.formData,
            [name]: value
        })
    }
    const { register, handleSubmit, formState: { errors } } = useForm<valueprops>()
    const onSubmit: SubmitHandler<valueprops> = (data) => {
        console.log(data)
        handlepersoanl(data)
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
                            <div className="text-center flex flex-col relative justify-center items-center pb-[3rem] ">
                                <div className="h-[2.3vw] bar w-[56vw] border-none rounded-[7px] bg-[#7da2ff54] "></div>
                            </div>
                            <div className="gap-[2vw] flex flex-col pb-[3rem]">
                                <div className="text-[7.4vw] font-urbanist font-normal">Personal Information</div>
                                <div className="text-[3.4vw] font-urbanist font-thin text-opacity-5">We want to know more about you</div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-[4vw]">
                                <div>
                                    <input type="number" {...register("phonenumber", {
                                        required: "Phonemuber Required",
                                        minLength: 11,
                                        maxLength: 11
                                    })} placeholder="Phone number" className='w-[100%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[4vw] py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist' />
                                    {
                                        errors.phonenumber?.type === "required" && (<div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Phonenumber is required </div>)
                                    }
                                    {
                                        errors.phonenumber?.type === "minLength" && (<div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Phonenumber must be at least 11 digits </div>)
                                    }
                                    {
                                        errors.phonenumber?.type === "maxLength" && (<div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Phonenumber must be at most 11 digits </div>)
                                    }
                                </div>
                                <div>
                                    <input type="text"
                                        {...register("address", {
                                            required: "Address is required"
                                        })}
                                        placeholder="Residential Address" className='w-[100%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist' />
                                    {
                                        errors.address && (<div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.address.message} </div>)
                                    }
                                </div>
                                <div>
                                    <input type="text"
                                        {...register("state", {
                                            required: "State is required"
                                        })} placeholder="State" className='w-[100%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4vw] bg-[#0a1942]  rounded-[12px] font-urbanist' />
                                    {
                                        errors.state && (<div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.state.message}</div>)
                                    }
                                </div>
                                <div>
                                    <input type="text"
                                        {...register("city", {
                                            required: "City is required"
                                        })} placeholder="City" className='w-[100%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4vw] bg-[#0a1942]  rounded-[12px] font-urbanist' />
                                    {
                                        errors.city && (<div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.city.message}</div>)
                                    }
                                </div>
                                <div>
                                    <input type="number"
                                        {...register("zipcode", {
                                            required: "Zipcode is required"
                                        })} placeholder="Zip code" className='w-[100%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4vw] bg-[#0a1942]  rounded-[12px] font-urbanist' />
                                    {
                                        errors.zipcode && (<div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.zipcode.message}</div>)
                                    }
                                </div>

                                <div>
                                    <input type="text"
                                        {...register("street", {
                                            required: "Street is required"
                                        })}
                                        placeholder="Street" className='w-[100%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4vw] bg-[#0a1942]  rounded-[12px] font-urbanist' />
                                    {
                                        errors.street && (<div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.street.message}</div>)
                                    }
                                </div>
                                <div className="pt-[3rem] flex flex-col gap-[20vw] justify-center items-center">
                                    <button type="submit" className='flex flex-row  bg-[#0b66ff] w-[100%] h-[13vw]  rounded-[12px] items-center justify-around'>
                                        Next
                                    </button>

                                </div>
                            </form>
                        </div>
                        <Footer />
                    </motion.div>
                ) : (<Personalinfo2 />)
            }
        </div>
    )
}
