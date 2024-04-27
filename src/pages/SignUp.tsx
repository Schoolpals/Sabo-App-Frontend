import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import React, { useContext, useState } from "react"
import { PiEyeSlash } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { Context } from "../Provider/ContextApi";

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

    const isNonWhiteSpace = /^\S*$/;
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    const isValidLength = /^.{10,16}$/;

    const user = useContext(Context)

    const { formData } = user || {}
    const handleonchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (user) {
            user?.setformData((prevstate) => ({
                ...prevstate,
                [name]: value.toString()
            }))
        }
    }
    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let validaterrror = []
        if (!formData?.firstname.trim()) {
            validaterrror.push("firstname")
        }
        if (!formData?.lastname.trim()) {
            validaterrror.push("lastname")
        }
        if (!formData?.email.trim()) {
            validaterrror.push("email")
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validaterrror.push("invalid email")
        }
        if (!formData?.password.trim()) {
            validaterrror.push("password")
        }
        else if (!isNonWhiteSpace.test(formData.password)) {
            validaterrror.push("whitespaces")
        }
        else if (!isContainsUppercase.test(formData.password)) {
            validaterrror.push("uppercase")
        }
        else if (!isContainsLowercase.test(formData.password)) {
            validaterrror.push("lowercase")
        }
        else if (!isContainsSymbol.test(formData.password)) {
            validaterrror.push("symbol")
        }
        else if (!isContainsNumber.test(formData.password)) {
            validaterrror.push("number")
        }
        else if (!isValidLength.test(formData.password)) {
            validaterrror.push("length")
        }
        if (!formData?.confirmpassword.trim()) {
            validaterrror.push("confirm")
        }
        else if (formData.password.trim() !== formData.confirmpassword.trim()) {
            validaterrror.push("notconfirm")
        }
        user?.seterror(validaterrror)

        if (validaterrror.length === 0) {
            alert("signup successful")
            navigate("verification")
        }
    }
    let emailmessage: React.ReactNode;
    {
        if (user?.error.includes("email")) {
            emailmessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]"> Email input must be filled </div>
        }
        else if (user?.error.includes("invalid email")) {
            emailmessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Email is not complete</div>
        }
    }

    let passwordmessage: React.ReactNode;
    {
        if (user?.error.includes("password")) {
            passwordmessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Password input must be filled </div>
        }
        else if (user?.error.includes("whitespaces")) {
            passwordmessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Password must not contain Whitespaces </div>
        }
        else if (user?.error.includes("uppercase")) {
            passwordmessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Password must have at least one Uppercase Character </div>
        }
        else if (user?.error.includes("lowercase")) {
            passwordmessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Password must have at least one Lowercase Character.</div>
        }
        else if (user?.error.includes("number")) {
            passwordmessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Password must contain at least one Digit. </div>
        }
        else if (user?.error.includes("length")) {
            passwordmessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Password must be 10-16 Characters Long</div>
        }
        else if (user?.error.includes("symbol")) {
            passwordmessage = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Password must contain at least one Special Symbol</div>
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
            <motion.div className="  flex-col items-center   w-screen  min-h-[100vh] ronald justify-end items-end pt-[3.6rem]  overflow-hidden"
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
                    <form onSubmit={handleForm} className="flex flex-col gap-[4vw] text-[white] my-[1.5rem]">
                        <div className="">
                            <input placeholder="First name" onChange={handleonchange} name="firstname" type="text" className=" font-urbanist border-none outline-none w-[100%] p-[4vw] text-white font-thin rounded-[12px] bg-[#0a1942] placeholder-white placeholder-opacity-80" />
                            {
                                user?.error.includes("firstname") && <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]">Firstname input must be filled </div>
                            }
                        </div>
                        <div className="">
                            <input placeholder="Last name" onChange={handleonchange} name="lastname" type="text" className=" font-urbanist  outline-none w-[100%]  p-[4vw] text-white font-thin  rounded-[12px] bg-[#0a1942]  placeholder-white placeholder-opacity-90" />
                            {
                                user?.error.includes("lastname") && <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[1vw]"> Lastname input must be filled </div>
                            }
                        </div>
                        <div className="">
                            <input placeholder="Email address" onChange={handleonchange} name="email" className=" font-urbanist border-none outline-none w-[100%] p-[4vw] text-white font-thin  rounded-[12px] bg-[#0a1942] placeholder-white placeholder-opacity-90" />
                            {emailmessage}
                        </div>
                        <div>
                            <div className="flex flex-row  bg-[#0a1942] w-[100%] h-[14vw] rounded-[12px] items-center justify-around">
                                <input placeholder="Password" onChange={handleonchange} name="password" type={show ? "text" : "password"} className="font-thin w-[75%] placeholder-white placeholder-opacity-90 border-none outline-none bg-transparent" />
                                <div>
                                    {show ? (<PiEyeLight onClick={handleclick} style={{ fontSize: "6vw" }} />) : (<PiEyeSlash onClick={handleclick} style={{ fontSize: "6vw" }} />)}
                                </div>

                            </div>
                            {passwordmessage}
                        </div>
                        <div>
                            <div className="flex flex-row  bg-[#0a1942] w-[100%] h-[14vw] rounded-[12px] items-center justify-around">
                                <input name="confirmpassword" onChange={handleonchange} type={shows ? "text" : "password"} placeholder="Confirm Password" className="font-thin w-[75%] placeholder-white placeholder-opacity-90 border-none outline-none bg-transparent" />
                                <div>
                                    {shows ? (<PiEyeLight onClick={handleclicks} style={{ fontSize: "6vw" }} />) : (<PiEyeSlash onClick={handleclicks} style={{ fontSize: "6vw" }} />)}
                                </div>
                            </div>
                            {confirmessage}
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
                            <div className=" flex flex-col justify-center items-center bg-white h-[4px] w-[36vw] z-50"></div>
                        </div>
                    </form>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
