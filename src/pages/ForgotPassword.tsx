import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";

// type ForgotPasswordProps = {

// };

const ForgotPassword: React.FC = () => {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/sign-in');
      };

      const [email, setEmail] = useState('');
      const [error, setError] = useState('');
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value.trim()); 
    
        if (!validateEmail(value.trim())) {
          setError('Please input a valid email address');
        } else {
          setError(''); 
        }
      };
    
      const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };
    
      const handleButtonClick = () => {
        if (!validateEmail(email)) {
          setError('Please input a valid email address');
        } else {
          navigate('/verify-page' , { state: { email } });
        }
      };
    
    return <div>
        <img src="/assets/images/arrowback.png" alt=""  className='ml-0 mt-1 cursor-pointer'
         onClick={handleImageClick}
        />
         
         <h1 className='text-white text-2xl	font-semibold mt-14 '>Recover your Password</h1>

         <h2 className='text-gray-400 text-sm mb-10 mt-10 '>Enter your email address</h2>

         <div className='relative w-full mb-4'>
            <img src='/assets/images/Group.png'
            alt='email-icon'
            className='absolute left-3 top-7 transform -translate-y-1/2 h-5 w-5'
            />
                 <input type="text" className="w-full mb-4 px-4 py-4 p-2 placeholder-gray-400 border rounded-lg text-gray-100	
 bg-blue-950"  placeholder="Email" 
  style={{ border: 'none', paddingLeft: '45px' }}
  value={email}
  onChange={handleInputChange}
  />
        {error && <p className="text-red-500">{error}</p>}


          </div>
<button
 onClick={handleButtonClick}
className="bg-blue-700 w-full text-white px-4 py-4 rounded-lg hover:bg-blue-600 mt-14 ">
    Send Recovery OTP
    </button>

    </div>
}
export default ForgotPassword;