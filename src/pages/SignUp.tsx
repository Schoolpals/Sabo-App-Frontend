import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import React, { useContext, useState } from "react"
import { PiEyeSlash } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { Context, valueprops } from "../Provider/ContextApi";
import { Footer } from "./Footer";
import { SubmitHandler, useForm } from "react-hook-form";


export const SignUp = () => {
    const navigate = useNavigate()
    const handleGoback = () => {
        navigate(-1)
    }
    const [show, setshow] = useState(false)
    const [shows, setshows] = useState(false)
    const navigateSignin = () => {
        navigate("/sign-in")
    }
    const handleclick = () => {
        setshow(!show);
    };

    const handleclicks = () => {
        setshows(!shows);
    };
    const user = useContext(Context)
    const { register, handleSubmit, formState: { errors }, watch } = useForm<valueprops>()
    const onSubmit: SubmitHandler<valueprops> = (data) => {
        try {
            console.log(data)

            navigate("verification")

        }
        catch (error) {
            console.log(error)
        }
    }
    let confirmessage: React.ReactNode;
    {
        if (user?.error.includes("confirm")) {
            confirmessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] ease-in-out m-[1vw]">Password input must be filled</div>
        }
        else if (user?.error.includes("notconfirm")) {
            confirmessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] ease-in-out m-[1vw]">Password doesn't match your initial password </div>
        }
    }
    return (
        <AnimatePresence>
            <motion.div className="  flex-col items-center  flex  w-screen  min-h-[100vh] ronald justify-between items-end pt-[2.6rem] py-[1rem] overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0 }}>
                <div className="w-[88%] mx-auto my-[0vw] text-white  cursor-pointer justify-center font-urbanist" >
                    <div className="flex flex-col gap-[3.5rem] mb-[6.8vw]">
                        <div onClick={handleGoback}><img src="assets/images/Group.svg" alt="sfaw" /></div>
                        <div className="">
                            <div className="text-block text-[25px] text-white">Create your Sabo <div className="relative -top-[1.5vw]">Account</div></div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[4vw] text-[white] my-[1.5rem]">
                        <div className="">
                            <input placeholder="First name"
                                {...register("firstname", {
                                    required: "Firstname input is required",
                                    validate: (value) => {
                                        if (value.length < 3) {
                                            return "Firstname must be greater than 3"
                                        }
                                    }

                                })}
                                type="text" className="font-urbanist border-none outline-none w-[100%] p-[4vw] text-white font-thin rounded-[12px] bg-[#0a1942] placeholder-white placeholder-opacity-80" />
                            {
                                errors.firstname && <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">{errors.firstname.message}</div>
                            }
                        </div>
                        <div className="">
                            <input placeholder="Last name"
                                {...register("lastname", {
                                    required: "Lastname is required",
                                    validate: (value) => {
                                        if (value.length < 3) {
                                            return "Lastname must be greater than 3"
                                        }
                                    }
                                })}
                                type="text" className=" font-urbanist  outline-none w-[100%]  p-[4vw] text-white font-thin  rounded-[12px] bg-[#0a1942]  placeholder-white placeholder-opacity-90" />
                            {
                                errors.lastname && <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]"> {errors.lastname.message}</div>
                            }
                        </div>
                        <div className="">
                            <input placeholder="Email address"
                                {...register("email", {
                                    required: "Email is required",
                                    validate: (value) => {
                                        if (!/\S+@\S+\.\S+/.test(value)) {
                                            return "Email is not complete"
                                        }
                                    }
                                })}
                                className=" font-urbanist border-none outline-none w-[100%] p-[4vw] text-white font-thin  rounded-[12px] bg-[#0a1942] placeholder-white placeholder-opacity-90" />
                            <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] ease-in-out m-[1vw]">{errors.email?.message}</div>
                        </div>
                        <div>
                            <div className="flex flex-row  bg-[#0a1942] w-[100%] h-[14vw] rounded-[12px] items-center justify-around">
                                <input placeholder="Password"
                                    {...register("password", {
                                        required: true,
                                        pattern: {
                                            value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
                                            message: "Email is not valid."
                                        },
                                        minLength: 8,
                                        maxLength: 22
                                    })} type={show ? "text" : "password"} className="font-thin w-[75%] placeholder-white placeholder-opacity-90 border-none outline-none bg-transparent" />
                                <div>
                                    {show ? (<PiEyeLight onClick={handleclick} style={{ fontSize: "6vw" }} />) : (<PiEyeSlash onClick={handleclick} style={{ fontSize: "6vw" }} />)}
                                </div>

                            </div>
                            {
                                errors.password?.type === "pattern" && <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.</div>
                            }
                            {
                                errors.password?.type === "minLength" && <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Password should be at-least 8 characters</div>

                            }
                            {
                                errors.password?.type === "maxLength" && <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Password must be at-most 22 Characters</div>
                            }
                            {
                                errors.password?.type === "required" && <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Password is required</div>
                            }
                        </div>
                        <div>
                            <div className="flex flex-row  bg-[#0a1942] w-[100%] h-[14vw] rounded-[12px] items-center justify-around">
                                <input
                                    {...register("confirmpassword", {
                                        required: "Confirm your password",
                                        validate: (val: string) => {
                                            if (watch('password') != val) {
                                                return "Your passwords do no match";
                                            }
                                        },
                                    })}
                                    type={shows ? "text" : "password"} placeholder="Confirm Password" className="font-thin w-[75%] placeholder-white placeholder-opacity-90 border-none outline-none bg-transparent" />
                                <div>
                                    {shows ? (<PiEyeLight onClick={handleclicks} style={{ fontSize: "6vw" }} />) : (<PiEyeSlash onClick={handleclicks} style={{ fontSize: "6vw" }} />)}
                                </div>
                            </div>
                            {
                                errors.confirmpassword && <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">{errors.confirmpassword.message}</div>
                            }
                        </div>
                        <div className="flex flex-row gap-[3vw] form-check items-center justify-center py-[3vw]">
                            <div className="checkbox-container">
                                <input type="checkbox" id="checkbox" className="checkbox-input" />
                                <label htmlFor="checkbox" className="checkbox-custom"></label>
                                <div className="text-semibold text-[4vw] font-urbanist">Remember me</div>
                            </div>
                        </div>
                        <button type="submit" className='flex flex-row  bg-[#0b66ff] w-[100%] h-[14vw] rounded-[12px] items-center justify-around'>
                            Sign up
                        </button>
                        <div className="flex flex-col text-center items-center justify-center gap-[5.6rem]">
                            <div className="flex flex-row items-center justify-center gap-[3vw] text-[3.6vw] m-[2vw]"> Already have an account? <div className="text-[#3783fd] text-[4vw]" onClick={navigateSignin}>Signin</div>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </motion.div>
        </AnimatePresence>
    )
}


