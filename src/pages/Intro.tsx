import React, { useState } from 'react'
import "../Styles/Intro.css"
import { AnimatePresence } from 'framer-motion'
import { motion } from "framer-motion"
import { Introii } from './Introii'
export const Intro = () => {
    const image = "assets/images/Group 34536.svg"
    const image2 = "assets/images/Frame 987.svg"
    const [currentpage, setcurrentpage] = useState(1)
    return (
        <AnimatePresence >
            {
                currentpage === 1 ? (
                    <motion.div className='flex gap-[10vw] flex-col items-center  w-screen  min-h-[100vh] ronald justify-end items-end  overflow-hidden '
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.4 } }}
                        exit={{ opacity: 0 }}
                    >
                        <div className='relative  fade-in-down right-[0vw] top-[18vw] z-0 flex flex-col justify-center items-center'>
                            <motion.img
                                key={image}
                                src={image}
                                // initial={{ y: 300, opacity: 0 }}
                                // animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
                                // exit={{ y: -300, opacity: 0 }}
                                className='rounded-lg shadow-blue-inner w-[56vw] '
                            />
                        </div>
                        <div className='flex flex-col gap-[2.5rem] fade-in-up'>
                            <div className='relative top-[3.5vw] left-[5vw] z-50 flex flex-col justify-center items-center '>
                                <motion.img src={image2} key={image2}
                                    // initial={{ x: 300, opacity: 0 }}
                                    // animate={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
                                    // exit={{ x: -300, opacity: 0 }}
                                />
                            </div>
                            <motion.div className='  gap-[17vw] bg-white text-[#041C50] radius w-[92vw] h-[90vw] rounded-t-[50px] radius font-semibold  font-urbanist text-center p-[8vw] text-[5.5vw] flex flex-col relative z-20 shadow-inner-blueinner'
                            // initial={{ x: -300, opacity: 0 }}
                            // animate={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
                            // exit={{ x: 300, opacity: 0 }}
                            >
                                <div className='flex flex-col justify-center item-center gap-[5vw] text-color1 ' >
                                    <div className='text-[6.5vw] font-bold '>Sabo app the safest <div className="relative -top-[2.5vw]">and most trusted</div></div>
                                    <div className='text-[3.5vw]  font-light '> Your finance work starts here. We are here to<br /> help you track and deal with speeding up your <br />transactions.</div>
                                </div>
                                <div className='flex flex-row justify-center items-center gap-[15vw]'>
                                    <div className='text-[3.8vw] font-light font-urbanist text-[darkgrey] cursor-pointer'>Skip</div>
                                    <div><img src="assets/images/Frame 986.svg" alt="efsgvsdf" /></div>
                                    <motion.div className='text-[4vw] font-semibold text-[#041C50] font-urbanist cursor-pointer' whileTap={{ scale: 1.1 }} onClick={() => setcurrentpage(currentpage + 1)}>Next</motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ) : (<div>
                    <Introii />
                </div>)
            }
        </AnimatePresence>

    )
}