import { motion } from 'framer-motion'

const NotFound = () => {
    return (
        <div className="inset-0 fixed flex-col justify-center items-center bg-[#030F3A]">
            <figure className='lg:min-h-[340px]'><motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, delay: 1 } }} className="w-full max-w-[550px] mb-[57px] outfit" src="/assets/images/404.svg" /></figure>
            <div className="text-[#C3C5D0]">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.4, delay: 1 } }} className="text-center"><span className="text-[32px] leading-[45.36px] text-white">Oh no! </span><span className="text-[22px] leading-[30.22px] text-[#FFFFFFC2]">Page not found</span></motion.p>
                {/* <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.4, delay: 1 } }} className="mt-[19px] outfit text-[22px] leading-[30.24px] text-center">No worries, switch to a mobile device to access this site</motion.p> */}
            </div>
        </div>
    );
}

export default NotFound;