import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
export const Introii = () => {
    const navigate = useNavigate()
    const image2 = "assets/images/Frame 987 (1).svg"
    const image = "assets/images/illustration.svg"

    const navigateSignup = () => {
        navigate("/sign-up")
    }
    return (
        <AnimatePresence>
            <motion.div className='flex gap-[10vw] flex-col items-center   w-screen  min-h-[100vh] ronald justify-end items-end  overflow-hidden '
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.3 } }}
                exit={{ opacity: 0 }}
            >
                <div className='relative top-[15vw] z-10'>
                    <motion.img
                        key={image}
                        src={image}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
                        exit={{ y: 100, opacity: 0 }}
                        className='rounded-lg shadow-blue-inner w-[67vw] h-[80vw]'
                    />
                </div>
                <div className='relative top-[5.5vw] left-[3vw]  z-50 pr-[4vw]'>
                    <motion.img src={image2} key={image2}
                        initial={{ y: 70, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { duration: 2, delay: 0.5 } }}
                        exit={{ y: -70, opacity: 0 }}
                    />
                </div>
                <motion.div className=' gap-[9vw] bg-white text-customBlue radius2 w-[95vw] h-[90vw] rounded-t-[50px]  font-semibold  font-urbanist text-center p-[8vw] text-[5.5vw] flex flex-col relative z-20 shadow-inner-blueinner'
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { duration: 1.5 } }}
                    exit={{ x: 300, opacity: 0 }}
                >
                    <div className='flex flex-col justify-center item-center gap-[4.5vw] text-color1 ' >
                        <div className='text-[6.5vw] font-bold '>Sabo app the safest <div className="relative -top-[2.5vw]">and most trusted</div></div>
                        <div className='text-[3.5vw] color-color1 font-light '> Your finance work starts here. We are here to<br /> help you track and deal with speeding up your <br />transactions.</div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[15vw]'>

                        <div onClick={navigateSignup}> <motion.button className='text-[white] bg-[#0b66ff] text-semibold font-urbanist text-[3vw] px-[24vw] py-[4.7vw] rounded-[15px]'
                            whileTap={{ scale: 1.15, transition: { duration: 1 } }}
                        >
                            Create Account</motion.button></div>
                        <div className="flex flex-col-reverse ">
                            <div className="text-[red] bg-color1 h-[4px] w-[36vw] z-50"></div>
                            <div className='text-[4vw] font-semibold text-[#16294C] font-urbanist cursor-pointer relative bottom-[13vw]'>Sign In</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
