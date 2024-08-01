import React, { useState } from 'react';
import yahooLogo from '../Images/yahoo_logo.png';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
// import googleLogo from '../image/google3.png';

const YahooForm = () => {

    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");


  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <div className="w-full flex justify-between items-center p-4  ">
        <img src={yahooLogo} alt="Yahoo" className="w-36" />
        <div className="flex space-x-4">
          <Link to="#help" className="text-blue-600 hover:text-blue-800">Help</Link>
          <Link to="#" className="text-blue-600 hover:text-blue-800">Privacy</Link>
          <Link to="#" className="text-blue-600 hover:text-blue-800">Terms</Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-7xl p-4 mt-16">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl font-bold">Yahoo makes it easy to enjoy what matters most in your world.</h1>
          <p className="text-lg mt-4">Best in class Yahoo Mail, breaking local, national and global news, finance, sports, music, movies and more. You get more out of the web, you get more out of life.</p>
        </div>

        <form className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 mt-8 md:mt-0">
          <img src={yahooLogo} alt="Yahoo" className="w-20 mx-auto" />
          <h1 className="text-2xl font-bold text-center mt-4">Sign in</h1>
          <p className="text-center mt-2">using your Yahoo account</p>

          <div 
            className="relative w-full mt-6 p-2  focus-within:border-blue-500"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          >
            {!isFocused && !inputValue && (
              <span className="absolute inset-0 p-2 text-gray-500 pointer-events-none">
                Username, email or mobile
              </span>
            )}
            <div
              className="w-full h-full focus:outline-none"
              contentEditable="true"
              onInput={(e) => setInputValue(e.currentTarget.textContent)}
              suppressContentEditableWarning={true}
            ></div>
          </div>
             
          <hr className="my-4" />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-full font-bold hover:bg-blue-700"
          >
            Next
          </button>
          <div className="flex justify-between items-center mt-4">
            <label className="flex items-center">
              <input type="checkbox" name="staySignedIn" defaultChecked className="mr-2" />
             <p className='text-blue-600 hover:text-blue-800'>Stay Signed In</p> 
            </label>
            <Link to="#" className="text-blue-600 hover:text-blue-800">Forgot username?</Link>
          </div>
          <div className="text-center mt-8">
            <Link to="#" className="border-2 border-blue-300 text-blue-500 py-2 px-24 rounded-full font-bold hover:bg-blue-50 ">
              Create an account
            </Link>
          </div>
          <div className="text-center mt-4">
            <p>Or, continue with</p>
          </div>
          <button className="w-full flex items-center justify-center border-2 border-gray-300 py-2 rounded-full mt-4 hover:border-blue-500">
          <FcGoogle  className="w-8 mr-2"/> 
            <span className="font-bold text-gray-700">Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default YahooForm;