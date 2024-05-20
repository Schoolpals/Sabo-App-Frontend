// import { color, motion } from "framer-motion";
// import React, { useContext, useEffect, useState } from "react";
// import { Context, valueprops } from "../Provider/ContextApi";
// import "react-datepicker/dist/react-datepicker.css";
// import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
// import "react-datepicker/dist/react-datepicker.css";
// import { Emplymodal } from "./Emplymodal";
// import { useNavigate } from "react-router-dom";
// import { Footer } from "./Footer";
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
// import { DatePicker } from "@mui/x-date-pickers/DatePicker"
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

// import dayjs, { Dayjs } from "dayjs";
// // registerLocale('es', es)

// // interface IStateProps {
// //   dateOfBirth: string | Date | null;
// //   employmentstatus: string;
// //   income: string
// // }
// export const Personalinfo2 = () => {
//   const user = useContext(Context);
//   const navigate = useNavigate()
//   const validateError: string[] = [];
//   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     if (user) {
//       user.setformData((prevstate) => ({
//         ...prevstate,
//         [name]: value,
//       }));
//       if (value.trim() === "") {
//         user.seterror((prevErrors) => [...prevErrors, name]);
//       } else {
//         user.seterror((prevErrors) => prevErrors.filter((error) => error !== name));
//       }

//       if (name === "placeholder" && value.trim() === "") {
//         user.seterror((prevErrors) => [...prevErrors, "employ"]);
//       } else if (name === "placeholder") {
//         user.seterror((prevErrors) => prevErrors.filter((error) => error !== name));
//       }

//       // if (name === "startDate" && !value) {
//       //   user.seterror((prevErrors) => [...prevErrors, "dateofbirth"]);
//       // } else if (name === "startDate") {
//       //   user.seterror((prevErrors) => prevErrors.filter((error) => error !== "dateofbirth"));
//       // }
//       if (!user?.startDate) {
//         validateError.push("dateofbirth");
//       } else if (user?.startDate) {
//         validateError.push('nodate')
//       }
//     }
//   };
//   const [show, setshow] = useState(false)
//   const [startDate, setStartDate] = useState<Dayjs | null>(null);
//   const handleSubmits = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const { formData } = user || {};
//     if (!formData?.income.trim()) {
//       validateError.push("income");
//     }
//     if (!formData?.reason.trim()) {
//       validateError.push("reason");
//     }
//     if (!formData?.occupation.trim()) {
//       validateError.push("occupation");
//     }
//     if (!user?.startDate) {
//       validateError.push("dateofbirth");
//     } if (user?.startDate) {
//       validateError.push('nodate')
//     }
//     if (!user?.placeholder) {
//       validateError.push("employ");
//     }
//     else {
//       user?.setformData((prevstate) => ({
//         ...prevstate,
//         employmentstatus: user?.placeholder,
//       }));
//     }
//     user?.seterror(validateError);
//     if (validateError.length === 0) {
//       navigate("/sign-up/personalinfo/createpin");
//     }
//   };
//   const { register, handleSubmit, setValue,watch, formState: { errors } } = useForm<valueprops>();
//   const onSubmit: SubmitHandler<valueprops> = (data) => {
//     console.log(data)
//   }
//   const handleclick = () => {
//     setshow(!show);
//   };
//   let birth
//   if (user?.error.includes("dateofbirth")) {
//     birth = <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">birth input must be filled</div>
//   }
//   else if (user?.error.includes("nodate")) {
//     birth = <div></div>
//   }
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 1 } }}
//       exit={{ opacity: 0 }}
//       className="w-screen min-h-[97.3vh] text-white  pt-[4rem] flex flex-col justify-between py-[1rem]"
//     >
//       <div className="">
//         <div className=" w-[88%] mx-auto flex flex-col gap-[6vw]">
//           <div className="text-center flex flex-col relative justify-center items-center pb-[3rem]">
//             <div className="h-[2.3vw] bars w-[56vw] border-none rounded-[7px] bg-[#7da2ff54] "></div>
//           </div>
//           <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[6vw]">
//             <div>
//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DemoContainer components={['DatePicker']}>
//                   <DatePicker
//                     label="Date of Birth"
//                     name="dateofbirth"
//                     format="LL"
//                     value={user?.startDate}
//                     slotProps={{ textField: { InputProps: { style: { color: "#fff" } }, InputLabelProps: { style: { color: "#fff", fontSize: "3.2vw", fontWeight: "inherit", opacity: "-moz-initial" } } } }}
//                     onChange={(startDate) => user?.setStartDate(startDate)}
//                     className="w-[88vw] inputs font-thin   placeholder-white placeholder-opacity-90 text-white outline-none placeholder-font-thin font-urbanist border-none px-[5vw] text-[3.2vw]   py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist"
//                   />
//                 </DemoContainer>
//               </LocalizationProvider>
//               {birth}
//             </div>
//             <div>
//               <input
//                 type="text"
//                 {
//                 ...register('income', {
//                   required: "Source Income is required",
//                 })
//                 }
//                 placeholder="Source of income ( eg business)"
//                 className="w-[100%]  font-normal placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] text-[3.2vw]   py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist"
//               />
//               {errors.income && (
//                 <div className="font-urbanist  text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">{errors.income.message}</div>
//               )}
//             </div>
//             <div>
//               <input
//                 type="text"
//                 onChange={handleOnChange}
//                 name="reason"
//                 placeholder="Why are you creating an account? (eg for business)"
//                 className="w-[100%] font-normal  placeholder-white placeholder-opacity-90 outline-none placeholder-[3vw] font-urbanist border-none px-[5vw] text-[3.2vw]   py-[4.2vw] bg-[#0a1942] text-[3.2vw]  rounded-[12px] font-urbanist"
//               />
//               {user?.error.includes("reason") && (
//                 <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">reasons input must be filled</div>
//               )}
//             </div>
//             <div >
//               <div className="flex flex-row  bg-[#0a1942] w-[100%] h-[14vw] rounded-[12px] items-center justify-around" onClick={handleclick}>
//                 <input {...register("employmentstatus", {
//                   required: "Employment Status is required",
//                 })} placeholder="Employment Status" name="employmentstatus" onChange={(e: React.ChangeEvent<HTMLInputElement>) => user?.setplaceholder(e.target.value)} value={user?.placeholder} onClick={() => setshow(false)} className="font-normal w-[75%] text-[3.2vw]   placeholder-white placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin  border-none outline-none bg-transparent" />
//                 <div>
//                   {show ? (<RiArrowDropUpLine onClick={handleclick} style={{ fontSize: "6vw", color: "darkgray" }} />) : (<RiArrowDropDownLine onClick={handleclick} style={{ fontSize: "6vw", color: "darkgray" }} />)}
//                 </div>
//               </div>
//               {user?.error.includes('employ') && (
//                 <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Employment Status is required</div>
//               )}
//             </div>
//             {
//               show && (<Emplymodal show={show} setshow={setshow} />)
//             }
//             <div>
//               <input
//                 type="text"
//                 onChange={handleOnChange}
//                 name="occupation"
//                 placeholder="Occupation"
//                 className="w-[100%] font-normal placeholder-white placeholder-opacity-90 text-[3.2vw]   outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist"
//               />
//               {user?.error.includes("occupation") && (
//                 <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">opacation input must be filled</div>
//               )}
//             </div>
//             <div className="pt-[3rem] flex flex-col gap-[13rem] justify-between items-center">

//               <button type="submit" className="flex flex-row bg-[#0b66ff] w-[100%] h-[13vw] rounded-[12px] items-center justify-around">
//                 Next
//               </button>
//             </div>
//           </form>
//         </div>

//       </div>
//       <Footer />
//     </motion.div>
//   );
// };
