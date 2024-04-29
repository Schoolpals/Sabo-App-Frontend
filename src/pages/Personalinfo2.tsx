import { motion } from "framer-motion";
import React, { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, useContext, useState } from "react";
import { Context } from "../Provider/ContextApi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select"
import "react-datepicker/dist/react-datepicker.css";
import { Emplymodal } from "./Emplymodal";


export const Personalinfo2 = () => {
  const user = useContext(Context);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (user) {
      user?.setformData((prevstate) => ({
        ...prevstate,
        [name]: value.toString()
      }))
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  };

  const handleclick = () => {
    setshow(!show);
  };
  const [show, setshow] = useState(false)
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      className="w-screen min-h-[100vh] text-white py-[1rem] pt-[4rem]"
    >
      <div className="w-[88%] mx-auto">
        <div className="text-center flex flex-col relative justify-center items-center pb-[3rem] fade-in-down">
          <div className="h-[2.3vw] bars w-[56vw] border-none rounded-[7px] bg-[#7da2ff54] "></div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[6vw]">
          <div>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              name="dateofbirth"
              placeholderText="Date of birth"
              dateFormat="yyyy-MM-dd"
              showYearDropdown

              scrollableMonthYearDropdown


              className="w-[200%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] text-[3.2vw]   py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist"

            />

            {user?.error.includes("address") && (
              <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Address input must be filled</div>
            )}
          </div>
          <div>
            <input
              type="number"
              onChange={handleOnChange}
              name="income"
              placeholder="Source of income ( eg business)"
              className="w-[100%]  font-thin placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] text-[3.2vw]   py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist"
            />
            {user?.error.includes("address") && (
              <div className="font-urbanist  text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Address input must be filled</div>
            )}
          </div>
          <div>
            <input
              type="text"
              onChange={handleOnChange}
              name="income"
              placeholder="Why are you creating an account? (eg for business)"
              className="w-[100%] font-thin  placeholder-white placeholder-opacity-90 outline-none placeholder-[3vw] font-urbanist border-none px-[5vw] text-[3.2vw]   py-[4.2vw] bg-[#0a1942] text-[3.2vw]  rounded-[12px] font-urbanist"
            />
            {user?.error.includes("address") && (
              <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Address input must be filled</div>
            )}
          </div>
          <div >
            <div className="flex flex-row  bg-[#0a1942] w-[100%] h-[14vw] rounded-[12px] items-center justify-around" onClick={() => setshow(true)}>
              <Select  onChange={handleOnChange} name="employed" className="font-thin w-[75%] text-[3.2vw]   placeholder-white placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin  border-none outline-none bg-transparent" >
                <option >Employment Status</option>
                <option value="employed">Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="selfEmployed">Self-Employed</option>
              </Select>
            </div>
          </div>
          {/* {
            show && (<Emplymodal show={show} setshow={setshow} />)
          } */}
          <div>
            <input
              type="text"
              onChange={handleOnChange}
              name="income"
              placeholder="Source of income e.g. business"
              className="w-[100%] font-thin  placeholder-white placeholder-opacity-90 text-[3.2vw]   outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist"
            />
            {user?.error.includes("address") && (
              <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Address input must be filled</div>
            )}
          </div>

          <div className="pt-[3rem] flex flex-col gap-[13rem] justify-between items-center">
            <button type="submit" className="flex flex-row bg-[#0b66ff] w-[100%] h-[13vw] rounded-[12px] items-center justify-around">
              Next
            </button>
            <div className="flex flex-col justify-center items-center bg-white h-[4px] w-[36vw] z-50 fade-in-up"></div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
