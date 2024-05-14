import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
type remarkprops = {
    show?: boolean,
    setshow: (show: boolean) => void
}
export const Remark = ({  setshow }: remarkprops) => {
    const navigate = useNavigate()
    const navigaetepersonal = ( ) => { 
        navigate("/sign-up/personalinfo")
    }
    const stopPropagation = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
    };
    return (
        <motion.div
            initial={{ opacity: 0 , x: -100}}
            animate={{ opacity: 1, x:0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0,x:100 }}
            className='fixed inset-0 z-20  text-white flex justify-center items-center bg-[#04041508] backdrop-blur-sm  bg-opacity-30' onClick={() => setshow(false)}>
            <div className='bg-[#0a194e] text-center flex  gap-[7vw] flex-col  items-center w-[80vw] relative -top-[1rem] h-[130vw] rounded-[31px] py-[20vw] px-[3vw]' onClick={stopPropagation}>
                <div><img src="/assets/images/Group 289677.svg" alt="tfyu" className="w-[30vw]" /></div>
                <div className="gap-[3vw] flex flex-col">
                    <h2 className="text-[4.4vw] font-bold font-urbanist">Congratulations</h2>
                    <div className="text-[3.8vw] font-thin font-urbanist">Your email address is<div>now verified</div></div>
                </div>
                <motion.button 
                whileTap={{scale: 1.1}}
                onClick={navigaetepersonal}
                type="submit"  className='flex flex-row relative top-[5vw] bg-[#0b66ff] w-[75%] h-[14vw] rounded-[12px] items-center justify-around' >
                    Continue
                </motion.button>
            </div>
        </motion.div>
    )
}
