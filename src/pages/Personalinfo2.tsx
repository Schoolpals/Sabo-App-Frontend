import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Context } from "../Provider/ContextApi";
import { Emplymodal } from "./Emplymodal";
import { Footer } from "./Footer";

// registerLocale('es', es)

// interface IStateProps {
//   dateOfBirth: string | Date | null;
//   employmentstatus: string;
//   income: string
// }
export const Personalinfo2 = () => {
  const user = useContext(Context);
  const navigate = useNavigate()
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (user) {
      user.setformData((prevstate) => ({
        ...prevstate,
        [name]: value.trim(),
      }));
      if (user.error.includes(name)) {
        user.seterror((prevErrors) => prevErrors.filter((error) => error !== name));
      }
    }
  };
  const [show, setshow] = useState(false)
  // const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = user || {};
    const validateError = [];
    if (!formData?.income.trim()) {
      validateError.push("income");
    }
    if (!formData?.reason.trim()) {
      validateError.push("reason");
    }
    if (!formData?.occupation.trim()) {
      validateError.push("occupation");
    }
    if (!user?.startDate) {
      validateError.push("dateofbirth");
    } else {
      user?.setformData((prevstate) => ({
        ...prevstate,
      }));
    }
    if (!user?.placeholder) {
      validateError.push("employmentstatus");
    }
    user?.seterror(validateError);
    if (validateError.length === 0) {
      navigate("/sign-up/personalinfo/createpin");
    }
  };
  
  const handleclick = () => {
    setshow(!show);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      className="w-screen min-h-[100vh] text-white  pt-[4rem] flex flex-col justify-between py-[1rem]"
    >
      <div className="">
        <div className=" w-[88%] mx-auto flex flex-col gap-[6vw]">
          <div className="text-center flex flex-col relative justify-center items-center pb-[3rem]">
            <div className="h-[2.3vw] bars w-[56vw] border-none rounded-[7px] bg-[#7da2ff54] "></div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[6vw]">
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    label="Date of Birth "
                    name="dateofbirth"
                    format="LL"
                    value={user?.startDate}
                     slotProps={{textField:{InputProps:{style:{color: "#fff"}},InputLabelProps:{style:{color: "#fff",fontSize:"3.2vw",fontWeight: "inherit",opacity:"-moz-initial"}}}}}
                     
                    onChange={(startDate) => user?.setStartDate(startDate)}
                    className="w-[88vw] inputs font-thin   placeholder-white placeholder-opacity-90 text-white outline-none placeholder-font-thin font-urbanist border-none px-[5vw] text-[3.2vw]   py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist"
                  />
                </DemoContainer>


              </LocalizationProvider>
              {user?.error.includes("dateofbirth") && (
                <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">birth input must be filled</div>
              )}
            </div>
            <div>
              <input
                type="text"
                onChange={handleOnChange}
                name="income"
                placeholder="Source of income ( eg business)"
                className="w-[100%]  font-normal placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin font-urbanist border-none px-[5vw] text-[3.2vw]   py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist"
              />
              {user?.error.includes("income") && (
                <div className="font-urbanist  text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">Address input must be filled</div>
              )}
            </div>
            <div>
              <input
                type="text"
                onChange={handleOnChange}
                name="reason"
                placeholder="Why are you creating an account? (eg for business)"
                className="w-[100%] font-normal  placeholder-white placeholder-opacity-90 outline-none placeholder-[3vw] font-urbanist border-none px-[5vw] text-[3.2vw]   py-[4.2vw] bg-[#0a1942] text-[3.2vw]  rounded-[12px] font-urbanist"
              />
              {user?.error.includes("reason") && (
                <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">reasons input must be filled</div>
              )}
            </div>
            <div >
              <div className="flex flex-row  bg-[#0a1942] w-[100%] h-[14vw] rounded-[12px] items-center justify-around" onClick={handleclick}>
                <input name="employmentstatus" placeholder="Employment Status" onChange={(e: React.ChangeEvent<HTMLInputElement>) => user?.setplaceholder(e.target.value)} value={user?.placeholder} onClick={() => setshow(false)} className="font-normal w-[75%] text-[3.2vw]   placeholder-white placeholder-white placeholder-opacity-90 outline-none placeholder-font-thin  border-none outline-none bg-transparent" />
                <div>
                  {show ? (<RiArrowDropUpLine onClick={handleclick} style={{ fontSize: "6vw", color: "darkgray" }} />) : (<RiArrowDropDownLine onClick={handleclick} style={{ fontSize: "6vw", color: "darkgray" }} />)}
                </div>
              </div>
              {user?.error.includes("employmentstatus") && (
                <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">employ input must be filled</div>
              )}
            </div>
            {
              show && (<Emplymodal show={show} setshow={setshow} />)
            }
            <div>
              <input
                type="text"
                onChange={handleOnChange}
                name="occupation"
                placeholder="Occupation"
                className="w-[100%] font-normal placeholder-white placeholder-opacity-90 text-[3.2vw]   outline-none placeholder-font-thin font-urbanist border-none px-[5vw] py-[4.2vw] bg-[#0a1942]  rounded-[12px] font-urbanist"
              />
              {user?.error.includes("occupation") && (
                <div className="font-urbanist text-red-400 tracking-[0.2px] text-[3.3vw] m-[0vw]">opacation input must be filled</div>
              )}
            </div>
            <div className="pt-[3rem] flex flex-col gap-[13rem] justify-between items-center">

              <button type="submit" className="flex flex-row bg-[#0b66ff] w-[100%] h-[13vw] rounded-[12px] items-center justify-around">
                Next
              </button>
            </div>
          </form>
        </div>

      </div>
      <Footer />
    </motion.div>
  );
};
