import React, { useState } from 'react';
import yahooLogo from '../Images/yahoo_logo.png';
import { Link } from 'react-router-dom';
import { FaRegEyeSlash } from "react-icons/fa6";

const YahooPassword = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <div className="w-full flex justify-between items-center p-4">
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

        <form className="bg-white p-20 rounded-lg shadow-md w-full md:w-1/3 mt-8 md:mt-0">
          <img src={yahooLogo} alt="Yahoo" className="w-20 mx-auto" />
          <h1 className="text-2xl font-bold text-center mt-4">Enter Password</h1>
          <p className="text-center mt-2">to finish sign in</p>

          <div className="relative w-full mt-6">
            <input 
              type="password"
              className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <label
              className={`absolute left-0 top-0 text-gray-500 transition-all duration-200 ${
                isFocused || inputValue ? 'text-xs -top-5' : 'text-base top-2'
              }`}
            >
              Password
            </label>
            <FaRegEyeSlash className="absolute right-0 top-2 text-gray-500 cursor-pointer" />
          </div>

          <div className="flex justify-start items-center mt-4">
            <Link to="#" className="text-blue-600 hover:text-blue-800">Forgot username?</Link>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-full font-bold hover:bg-blue-700 mt-4"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default YahooPassword;