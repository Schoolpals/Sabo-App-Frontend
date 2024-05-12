import  { Dayjs } from 'dayjs';
import { createContext, useState, ReactNode } from 'react'
export type valueprops = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    repeat_password: string,
    phonenumber: string,
    address: string,
    state: string,
    city: string,
    zipcode: string,
    street: string,
    dateofbirth: string,
    income: string,
    reason: string,
    employmentstatus: string,
    occupation: string
}
type dataprops = {
    formData: valueprops;
    placeholder: string;
    setformData: React.Dispatch<React.SetStateAction<valueprops>>
    seterror: React.Dispatch<React.SetStateAction<string[]>>
    setplaceholder: React.Dispatch<React.SetStateAction<string>>
    error: string[];
    startDate: Dayjs | null;
    setStartDate: React.Dispatch<React.SetStateAction<Dayjs | null>>
}

type childrenprops = {
    children: ReactNode
}
export const Context = createContext<dataprops | null>(null)
export const ContextApi = ({ children }: childrenprops) => {
    // const schema:ZodType<valueprops>  = z.object({
    //     income: z.string().min(2).max(30),
    //     reasonforaccount: z.string().min(2).max(100),
    //     occupation: z.string().min(2).max(30)
    //   })
    // const {register,handleSubmit} = useForm<valueprops>({resolver:zodResolver(schema)})
    const [formData, setformData] = useState<valueprops>({
        firstName: "",
        email: "",
        password: "",
        lastName: "",
        repeat_password: "",
        phonenumber: "",
        address: "",
        state: "",
        city: "",
        zipcode: "",
        street: "",
        dateofbirth: "",
        income: "",
        reason: "",
        employmentstatus: "",
        occupation: "",
    })

    const [error, seterror] = useState<string[]>([])
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [placeholder, setplaceholder] = useState("")
    
    return (
        <Context.Provider value={{ formData, setformData, seterror, error, placeholder, setplaceholder, startDate, setStartDate }}>
            {children}
        </Context.Provider>
    )
}
