import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { Context } from '../Provider/ContextApi'
type remarkprops = {
  show: boolean,
  setshow: (show: boolean) => void
}
export const Emplymodal = ({ show, setshow }: remarkprops) => {
  const user = useContext(Context)
  const handleEmploymentStatusClick = (status: string) => {
    user?.setplaceholder(status);
    setshow(false);
    // user?.seterror((prevError) => prevError.filter((err) => err !== "employ"))
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className='fixed inset-0 z-20   z-50  text-white flex flex-col items-center justify-end  bg-[#04041508] backdrop-blur-sm  bg-opacity-30' onClick={() => setshow(false)}>
      <div className='bg-[#071546] w-[100%] absolute py-[2rem] px-[1.3rem] flex flex-col  h-[38%] gap-[7vw] rounded-t-[20px] overflow-x-auto '>

        <div className='flex flex-col  justify-start  items-center'>
          <div className=' bg-[#071546]  w-[50vw] h-[37vw] justify-center  mx-[24.3vw]  flex flex-col items-center -my-[2.8rem] rounded-[100%]   fixed  '>
            <div className='bg-gray-400 w-[8vw] h-[1vw] -top-[14vw] relative  rounded-t-[100%] '></div>
          </div>
        </div>
        <div className='flex flex-row  justify-between z-50 gap-[4vw] items-center'> <motion.div className='font-urbanist   font-semimedium text-[3.5vw]'>Employment Status</motion.div>
          <div className='capitalize font-urbanist font-light'>x</div></div>
        <div className='flex flex-col justify-center items-start gap-[3vw]'>
          <motion.div
            whileTap={{ scale: 1, backgroundColor: "transparent", transition: { duration: 2 } }}
            className='font-urbanist py-[3vw] px-[1.5vw] font-thin   hover:bg-[#172655] w-[100%]' onClick={() => handleEmploymentStatusClick("Unemployed")}>Unemployed</motion.div>
          <motion.div className='font-urbanist py-[3vw] px-[1.5vw] font-thin text-[3.5vw]  w-[100%]' onClick={() => handleEmploymentStatusClick("Employed")}>Employed</motion.div>
          <motion.div className='font-urbanist py-[3vw] px-[1.5vw] font-thin  w-[100%]' onClick={() => handleEmploymentStatusClick("Self employed")}>Self employed</motion.div>
        </div>
      </div>
    </motion.div>
  )
}
