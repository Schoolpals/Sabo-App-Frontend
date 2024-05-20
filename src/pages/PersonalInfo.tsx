import { motion } from "framer-motion";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Context, valueprops } from "../Provider/ContextApi";
import { Footer } from "./Footer";
import { Controller, SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { Emplymodal } from "./Emplymodal";
import "react-datepicker/dist/react-datepicker.css";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export const PersonalInfo = () => {
    const [show, setshow] = useState(false);
    const [currentpage, setcurrentpage] = useState(1);
    const user = useContext(Context);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjk5LCJpYXQiOjE3MTYwODEyNjYsImV4cCI6MTcxNjA5NTY2Nn0.lnWkTzWj6qCg-hZAKJrkiL_bSJValJ9isrn1gMx3bIA";
    const { formData } = user || {}
    const handlepersoanl = async (data: valueprops) => {
        try {
            const res = await fetch("https://sabo-app.onrender.com/users/personal-info", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            console.log(result);
            if (!res.ok) {
                throw new Error("error parsing json");
            }
        } catch (error) {
            console.log("error");
        }
    };

    const handleclick = () => {
        setshow(!show);
    };

    const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<valueprops>();
    useEffect(() => {
        setValue("employmentstatus", user?.placeholder || "", { shouldValidate: true });
    }, [user?.placeholder])

    const onSubmit: SubmitHandler<valueprops> = (data) => {
        console.log(data);
        setcurrentpage(currentpage + 1);
        handlepersoanl({
            ...data,
            phonenumber: data.phonenumber || "",
            address: data.address || "",
            state: data.state || "",
            city: data.city || "",
            zipcode: data.zipcode || "",
            street: data.street || "",
            income: data.income || "",
            reason: data.reason || "",
            occupation: data.occupation,
            employmentstatus: data.employmentstatus || "",
            dateofbirth: data.dateofbirth || "",
        });
    };
    return (
        <div >

            <form onSubmit={handleSubmit(onSubmit)} className="">
                {
                    currentpage === 1 ? (
                        <motion.div className="w-screen min-h-[97.5vh] text-white py-[1rem] pt-[4rem] flex flex-col justify-between"
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
                                <div className="flex flex-col gap-[5.3vw] relative">
                                    <div>
                                        <input type="number" {...register("phonenumber", {
                                            required: "Phonenumber is required",
                                            minLength: 11,
                                            maxLength: 11
                                        })} placeholder="Phone number" className='w-[100%] font-normal placeholder-[ #cccccc] placeholder-opacity-90 outline-none border-none px-[4vw] py-[4.2vw] bg-[#0a1942] rounded-[12px] font-urbanist' />
                                        {errors.phonenumber?.type === "required" && (<div className="font-urbanist absolute text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Phonenumber is required</div>)}
                                        {errors.phonenumber?.type === "minLength" && (<div className="font-urbanist absolute text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Phonenumber must be at least 11 digits</div>)}
                                        {errors.phonenumber?.type === "maxLength" && (<div className="font-urbanist absolute text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Phonenumber must be at most 11 digits</div>)}
                                    </div>
                                    <div>
                                        <input type="text" {...register("address", {
                                            required: "Address is required"
                                        })} placeholder="Residential Address" className='w-[100%]  font-normal placeholder-[#cccccc] placeholder-opacity-90 outline-none border-none px-[5vw] py-[4.2vw] bg-[#0a1942] rounded-[12px] font-urbanist' />
                                        {errors.address && (<div className="font-urbanist absolute text-red-400 tracking-[0.2px] text-[3.3vw]  m-[0vw]">{errors.address.message}</div>)}
                                    </div>
                                    <div>
                                        <input type="text" {...register("state", {
                                            required: "State is required"
                                        })} placeholder="State" className='w-[100%] font-normal placeholder-[#cccccc] placeholder-opacity-90 outline-none border-none px-[5vw] py-[4vw] bg-[#0a1942] rounded-[12px] font-urbanist' />
                                        {errors.state && (<div className="font-urbanist absolute text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.state.message}</div>)}
                                    </div>
                                    <div>
                                        <input type="text" {...register("city", {
                                            required: "City is required"
                                        })} placeholder="City" className='w-[100%] font-normal placeholder-[#cccccc] placeholder-opacity-90 outline-none border-none px-[5vw] py-[4vw] bg-[#0a1942] rounded-[12px] font-urbanist' />
                                        {errors.city && (<div className="font-urbanist absolute text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.city.message}</div>)}
                                    </div>
                                    <div>
                                        <input type="number" {...register("zipcode", {
                                            required: "Zipcode is required"
                                        })} placeholder="Zip code" className='w-[100%] font-normal placeholder-[#cccccc] placeholder-opacity-90 outline-none border-none px-[5vw] py-[4vw] bg-[#0a1942] rounded-[12px] font-urbanist' />
                                        {errors.zipcode && (<div className="font-urbanist absolute text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.zipcode.message}</div>)}
                                    </div>
                                    <div>
                                        <input type="text" {...register("street", {
                                            required: "Street is required"
                                        })} placeholder="Street" className='w-[100%] font-normal placeholder-[#cccccc] placeholder-opacity-90 outline-none border-none px-[5vw] py-[4vw] bg-[#0a1942] rounded-[12px] font-urbanist' />
                                        {errors.street && (<div className="font-urbanist absolute text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.street.message}</div>)}
                                    </div>
                                    <div className="pt-[3rem] flex flex-col gap-[20vw] justify-center items-center">
                                        <button className='flex flex-row bg-[#0b66ff] w-[100%] h-[13vw] rounded-[12px] items-center justify-around'>
                                            Next
                                        </button>
                                    </div>

                                </div>

                            </div>
                            <Footer />
                        </motion.div>

                    ) : (<motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        exit={{ opacity: 0 }}
                    // className="w-screen min-h-[97.3vh] text-white pt-[4rem] flex flex-col justify-between py-[1rem]"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1 } }}
                            exit={{ opacity: 0 }}
                            className="w-screen min-h-[97.3vh] text-white  pt-[4rem] flex flex-col justify-between py-[1rem]"
                        >
                            <div className="">
                                <div className=" w-[88%] mx-auto flex flex-col gap-[6vw] relative">
                                    <div className="text-center flex flex-col relative justify-center items-center pb-[3rem]">
                                        <div className="h-[2.3vw] bars w-[56vw] border-none rounded-[7px] bg-[#7da2ff54] "></div>
                                    </div>
                                    <div className="flex flex-col gap-[6vw]">
                                        <div>
                                            <Controller
                                                control={control}
                                                // name="dateofbirth"
                                                defaultValue={"dateofbirth" || undefined}
                                                // rules={}
                                                {...register("dateofbirth", {
                                                    required: "Date of Birth is required",
                                                })}

                                                render={({ field, }) => {
                                                    return (
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DatePicker
                                                                closeOnSelect
                                                                format="MMMM D, YYYY"
                                                                label='Date of Birth'
                                                                name="dateofbirth"
                                                                onChange={(date) => {
                                                                    field.onChange(date?.format("YYYY-M-D"));
                                                                }}
                                                                slotProps={{ textField: { InputProps: { style: { color: " #f2f2f2", fontWeight: "lighter" } }, InputLabelProps: { style: { color: " #cccccc", fontSize: "3.2vw", fontWeight: "lighter", opacity: "1" } } } }}
                                                                className="w-[88vw] inputs font-normal  placeholder-white placeholder-opacity-90 text-white outline-none placeholder-font-thin font-urbanist border-none px-[5vw] text-[3.2vw]   py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist"
                                                            />
                                                        </LocalizationProvider>);
                                                }}
                                            />
                                            {
                                                errors.dateofbirth && (<div className="font-urbanist  absolute text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.dateofbirth.message}</div>)
                                            }
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                {
                                                ...register('income', {
                                                    required: "Source Income is required",
                                                })
                                                }
                                                placeholder="Source of income ( eg business)"
                                                className="w-[100%]   font-normal  placeholder-[#cccccc]  placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] text-[3.2vw]   py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist"
                                            />
                                            {errors.income && (
                                                <div className="font-urbanist  text-red-400 tracking-[0.2px]  absolute text-[3.3vw] m-[0vw]">{errors.income.message}</div>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                {...register("reason", {
                                                    required: "reason is required",
                                                })}
                                                placeholder="Why are you creating an account? (eg for business)"
                                                className="w-[100%] font-normal  placeholder-[ #cccccc] placeholder-opacity-90 outline-none placeholder-[3vw] font-urbanist border-none px-[5vw] text-[3.2vw]   py-[4.2vw] bg-[#0a1942] text-[3.2vw]  rounded-[12px] font-urbanist"
                                            />
                                            {errors.reason && (
                                                <div className="font-urbanist text-red-400  absolute tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.reason?.message}</div>
                                            )}
                                        </div>
                                        <div >
                                            <div className="flex flex-row  bg-[#0a1942] w-[100%] h-[14vw] rounded-[12px] items-center justify-around" onClick={handleclick}>
                                                <input placeholder="Employment Status"
                                                    {...register("employmentstatus", {
                                                        required: "Employment Status is required",
                                                    })}
                                                    value={user?.placeholder || ""}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        user?.setplaceholder(e.target.value);
                                                    }}
                                                    onClick={() => setshow(false)}
                                                    className=" font-normal w-[75%] text-[3.2vw]   placeholder-[ #cccccc] placeholder-opacity-90 outline-none placeholder-font-thin  border-none outline-none bg-transparent" />
                                                <div>
                                                    {show ? (<RiArrowDropUpLine onClick={handleclick} style={{ fontSize: "6vw", color: "darkgray" }} />) : (<RiArrowDropDownLine onClick={handleclick} style={{ fontSize: "6vw", color: "darkgray" }} />)}
                                                </div>
                                            </div>
                                            {errors.employmentstatus && (
                                                <div className="font-urbanist text-red-400  absolute tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.employmentstatus.message}</div>
                                            )}
                                        </div>
                                        {
                                            show && (<Emplymodal handleclick={handleclick} show={show} setshow={setshow} />)
                                        }
                                        <div>
                                            <input
                                                type="text"
                                                {
                                                ...register("occupation", {
                                                    required: "ocupation is required",
                                                })
                                                }
                                                placeholder="Occupation"
                                                className="w-[100%]  font-normal placeholder-[#cccccc] placeholder-opacity-90 text-[3.2vw]   outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist"
                                            />
                                            {errors.occupation && (
                                                <div className="font-urbanist text-red-400  absolute tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.occupation.message}</div>
                                            )}
                                        </div>
                                        <div className="pt-[3rem] flex flex-col gap-[13rem] justify-between items-center">

                                            <button type="submit" className="flex flex-row bg-[#0b66ff] w-[100%] h-[13vw] rounded-[12px] items-center justify-around">
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </motion.div>
                    </motion.div>
                    )
                }

            </form>
        </div>
    );
};
