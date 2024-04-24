import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";

// type ForgotPasswordProps = {

// };

const CreatePassword: React.FC = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
   setPasswordVisible(!passwordVisible);
    }
  
    const handleImageClick = () => {
        navigate('/verify-page');
      };

      const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      };

      const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
      };

      function handleverify(){
        if (!password || !confirmPassword){
            setPasswordError('Both passwords are required');
        }else if(password != confirmPassword){
            setPasswordError('Paaswords do not match');
        }else{
          setShowSuccessDialog(true);
        }
      }

      function signIn(){
        navigate("/sign-in");
      }
    
    return( 
        <>
    <div>
            {showSuccessDialog && (
     <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 z-50 flex justify-center items-center">
     <div className="bg-blue-950 p-6 rounded-3xl shadow-lg text-center w-80 mb-30">
       <img className="mx-auto" src="/assets/images/congrats.png" alt="" />
   
       <h1 className="text-white text-3xl font-semibold my-8">
         Congratulations
       </h1>
   
       <h2 className="text-lg text-white mb-8">
         You have successfully created a new password
       </h2>
   
       <button
         className="bg-blue-700 w-60 mt-0 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
         onClick={() => setShowSuccessDialog(false)}
       >
        <p onClick={signIn}>Continue</p> 
       </button>
     </div>
   </div>
   
      )}

        <img src="/assets/images/arrowback.png" alt="back-arrow"  className='ml-0 mt-1 cursor-pointer'
         onClick={handleImageClick}
        />
         
         <h1 className='text-white text-2xl	font-semibold mt-14 '>Create new Password</h1>

         <h2 className='text-gray-400 text-sm mb-10 mt-10'>Create Your New Password</h2>

         <div className='relative w-full mb-4'>
            <img src='/assets/images/password.png'
            alt='password-icon'
            className='absolute left-3 top-7 transform -translate-y-1/2 h-5 w-5'
            />
                 <input type="password" className="w-full mb-4 px-4 py-4 p-2 placeholder-gray-400 border rounded-lg text-gray-100	
 bg-blue-950"  placeholder="Password" 
  style={{ border: 'none', paddingLeft: '45px', paddingRight: '40px'}}
  onChange={handlePasswordChange}
  />   

  <img onClick={togglePasswordVisibility} className='relative bottom-12  mr-3 flex float-end' src="/assets/images/eye.png" alt="" />
          </div>

          <div className='relative w-full mb-4'>
            <img src='/assets/images/password.png'
            alt='password-icon'
            className='absolute left-3 top-7 transform -translate-y-1/2 h-5 w-5'
           />
                 <input type="password" className="w-full mb-4 px-4 py-4 p-2 placeholder-gray-400 border rounded-lg text-gray-100	
 bg-blue-950"  placeholder="Password" 
  style={{ border: 'none', paddingLeft: '45px', paddingRight: '40px'}}
  onChange={handleConfirmPasswordChange}
  />

  <img className='relative bottom-12  mr-3 flex float-end' src="/assets/images/eye.png" alt="" />
  {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
          </div>

          
          <div className="flex justify-center  items-center mb-4">
            {/* <img src="/assets/images/Rectangle.png" alt="checkBox" /> */}
            <input type="checkbox" className=" cursor-pointer mr-2 bg-transparent rounded-md w-4 h-5  " />
            <p className='text-white cursor-pointer'>Remember me</p>
          </div>
          </div>

          <button
          onClick={handleverify}
className="bg-blue-700 w-full text-white px-4 py-4 rounded-lg
 hover:bg-blue-600 mt-24">Verify
 </button>
  
</>
)}
export default CreatePassword;