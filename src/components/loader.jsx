import React from "react";
import logo from '../assets/LOGO.png'

const loader = () => {
  return (
    <div className="flex h-screen bg-gray-800 justify-items-center items-center">
                <div className="w-2/3 mx-auto flex-col justify-items-center">
                  <img className="flex h-60 w-80" src={logo} alt="schoollogo" />
                  <h1 className="text-green-500 text-2xl font-bold flex">
                    WELCOME
                  </h1>
                  <h6 className="text-white">To</h6>
                  <h2 className="text-orange-500 text-2xl font-bold flex">GOVT HIGHER SECONDARY SCHOOL KHALTSI LADAKH</h2>
                </div>
              </div>
  );
};

export default loader;
