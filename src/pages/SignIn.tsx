import React, { useState } from 'react';
import { Link } from "react-router-dom"

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formError, setFormError] = useState('');

  const handleSignIn = () => {
    // Validate email format
    if (!validateEmail(email)) {
      setEmailError('Please input a valid email address');
      return;
    } else {
      setEmailError('');
    }

    if (!email.trim() || !password.trim()) {
      setFormError('Please fill in both email and password');
      return;
    } else {
      setFormError('');
    }
  };
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <>
      <Link to="./sign-up">
        <img src="/assets/images/arrowback.png" alt="" className='ml-0 mt-1' />
      </Link>
      <div className=" flex justify-center items-center ">
        {/* Content of the Sign In page */}
        <div className="p-0">
          <h2 className="text-2xl font-bold mb-20 justify-center mt-6 flex text-white">Sign In to your Sabo Account</h2>

          <div className='relative w-full mb-4'>
            <img src='/assets/images/Group.png'
              alt='email-icon'
              className='absolute left-3 top-7 transform -translate-y-1/2 h-5 w-5'
            />
            <input type="email" className="w-full mb-4 px-4 py-4 p-2 placeholder-gray-400 border rounded-lg text-gray-100	
 bg-blue-950"  placeholder="Email"
              style={{ border: 'none', paddingLeft: '45px', paddingRight: '40px' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500">{emailError}</p>}

          </div>

          <div className='relative w-full mb-4'>
            <img src='/assets/images/password.png'
              alt='password-icon'
              className='absolute left-3 top-7 transform -translate-y-1/2 h-5 w-5'
            />
            <input type={passwordVisible ? "text" : "password"} className="w-full mb-4 px-4 py-4 p-2 placeholder-gray-400 border rounded-lg text-gray-100	
 bg-blue-950"  placeholder="Password"
              style={{ border: 'none', paddingLeft: '45px', paddingRight: '40px' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img onClick={togglePasswordVisibility} className='relative bottom-12  mr-3 flex float-end' src="/assets/images/eye.png" alt="" />
          </div>
          {formError && <p className="text-red-500 mb-4">{formError}</p>}

          <div className="flex justify-center  items-center mb-4">
            {/* <img src="/assets/images/Rectangle.png" alt="checkBox" /> */}

            <input type="checkbox" className=" cursor-pointer mr-2 bg-transparent rounded-md w-4 h-5  " />

            <p className='text-white cursor-pointer'>Remember me</p>
          </div>

          <button
            onClick={handleSignIn}
            className="bg-blue-700 w-full text-white px-4 py-4 rounded-lg hover:bg-blue-600 mt-1 ">Sign In</button>
          <h2 className="mt-4  text-sm text-blue-600 cursor-pointer flex justify-center">
            <Link className='text-lg' to="/forgot-password">Forgot password?</Link></h2>

        </div>

      </div>
      <h2 className="mt-40 text-lg flex justify-center text-white ">
        Don't have an account?
        <Link to="/sign-up" className="text-blue-500"> Sign up</Link>
      </h2>
    </>
  );
};

export default SignIn;
