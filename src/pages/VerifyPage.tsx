import { useState, useRef } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

// type ForgotPasswordProps = {

// };


function VerifyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};
  const [error, setError] = useState<string>('');
  const handleImageClick = () => {
    navigate('/forgot-password');
  };

  const hashedEmail = (email: string | undefined) => {
    if (!email) return ''; // Return an empty string or handle the case when email is undefined
    const [username, domain] = email.split('@');
    const obscuredUsername =
      username.length > 2
        ? `${username.slice(0, 2)}${'*'.repeat(username.length - 3)}${username.slice(-1)}`
        : username;
    return `${obscuredUsername}@${domain}`;
  };


  const securityEmail = hashedEmail(email);

  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const inputRefs = useRef<HTMLInputElement[]>([]); // Initialize with an empty array

  const handleOtpChange = (index: number, value: string) => {
    if (!isValidInput(value)) return; // Validate input (allow only numeric characters)

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    if (value && index < otpValues.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const isValidInput = (value: string) => {
    return /^\d*$/.test(value); // Allow only numeric input
  };

  const handleKeyDown = (e: any, index: any) => {
    if (e.key === 'Backspace' && index > 0 && !otpValues[index]) {
      // Move focus to the previous input field on backspace press
      inputRefs.current[index - 1].focus();
    }
  };


  const handleVerification = () => {
    if (otpValues.some((value) => value === '')) {
      setError('Wrong code: Please fill all inputs');
    } else {
      setError('');

      navigate('/create-password')
    }
  };

  return (
    <>
      <img src="/assets/images/arrowback.png" alt="" className='ml-0 mt-1 cursor-pointer'
        onClick={handleImageClick}
      />
      <div className=' 
        h-screen '>
        <h1 className='text-white text-2xl	font-semibold mt-14'>Verify It's you</h1>

        <h2 className='text-gray-400 text-sm mb-10 mt-10 '>A code has been sent to {securityEmail}</h2>

        <div className="h-screen  
         items-center ">
          <div className='flex justify-between bg-gray-900 space-x-2 '>
            {otpValues.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(input) => (inputRefs.current[index] = input as HTMLInputElement)}
                className="w-14 h-10 border-2 rounded bg-transparent
            outline-none text-center font-semibold text-xl 
            border-gray-700  focus:border-blue-500 focus:bg-blue-950 focus:text-white
            text-gray-400 transition spin-button-none "
              />

            ))}
          </div>
          {error && <p className="text-red-500 mt-5 text-center">{error}</p>}

          <p className='text-white text-center mt-6'>Resend code in  </p>
          <button
            onClick={handleVerification}
            className="bg-blue-700 w-full text-white px-4 py-4 rounded-lg hover:bg-blue-600 mt-7">Verify
          </button>
        </div>
      </div>
    </>
  )
}

export default VerifyPage;