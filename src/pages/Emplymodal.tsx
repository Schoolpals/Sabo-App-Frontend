import React from 'react'


type remarkprops = {
    show: boolean,
    setshow: (show: boolean) => void
}
export const Emplymodal = ({show,setshow}:remarkprops) => {
   

  return (
    <div className='fixed inset-0 z-20  text-white flex justify-center items-center bg-[#04041508] backdrop-blur-sm  bg-opacity-30' onClick={() => setshow(false)}>

    </div>
  )
}
