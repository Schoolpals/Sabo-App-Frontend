import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
type createpinprops = {
  setshow: (show: boolean) => void
}
export const CreatePinModal = ({ setshow }: createpinprops) => {
  const navigate = useNavigate()
  const stopPropagation = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
  }
  const handleclick = () => {
    navigate("/")
  }
  return (
    <div className="h-screen w-screen bg-[#040415] fixed flex flex-col items-center justify-center inset-0 backdrop-blur-sm  bg-opacity-30" onClick={() => setshow(false)}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: 100 }}
        onClick={stopPropagation}
        className="bg-[#0A194E] h-[120vw] w-[80vw] rounded-[30px] flex flex-col pt-[3rem] items-center">
        <div className="flex flex-col gap-[8.5vw] items-center justify-center">
          <div><img src="/assets/images/Group 289677.svg" alt="tfyu" className="w-[30vw]" /></div>
          <div className="flex flex-col items-center gap-[3vw]">
            <div className="font-urbanist text-[5.8vw] font-normal">You are a member now</div>
            <div className="text-[3.7vw] font-urbanist font-thin">Welcome to sabo where all<br /> possibilities are limitless</div>
          </div>
          <div>
            <button className="bg-[#0B66FF] py-[3vw] px-[5.5vw] rounded-[36px]"onClick={handleclick}>Proceed to home page</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
