import  { createContext, useState,ReactNode } from 'react'
export type valueprops = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    confirmpassword: string,
}
type dataprops = {
    formData: valueprops;
    setformData: React.Dispatch<React.SetStateAction<valueprops>>
    seterror: React.Dispatch<React.SetStateAction<string[]>>
    error: string[];
}

type childrenprops = {
    children : ReactNode
}
export const Context = createContext<dataprops | null>(null)
export const ContextApi = ({children} : childrenprops) => {
 const [formData,setformData] = useState<valueprops>({
    firstname: "",
    email: "",
    password: "",
    lastname: "",
    confirmpassword: "",
 })
 const [error,seterror]  = useState<string[]>([])
  return (
    <Context.Provider value={{formData,setformData,seterror,error}}>
        {children}
    </Context.Provider>
  )
}
