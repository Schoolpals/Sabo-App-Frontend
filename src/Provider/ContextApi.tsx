import  { createContext, useState,ReactNode } from 'react'
export type valueprops = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    confirmpassword: string,
    phonenumber : string,
    address: string,
    state: string,
    city: string,
    zipcode: string,
    street: string,
    dateofbirth:string,
    income: string,
    reasonforaccount: string,
    employmentstatus: string,
    occupation:string
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
    phonenumber:"",
    address: "",
    state:"",
    city: "",
    zipcode:"",
    street:"",
    dateofbirth: "",
    income: "",
    reasonforaccount: "",
    employmentstatus:"",
    occupation: ""
 })
 const [error,seterror]  = useState<string[]>([])
  return (
    <Context.Provider value={{formData,setformData,seterror,error}}>
        {children}
    </Context.Provider>
  )
}
