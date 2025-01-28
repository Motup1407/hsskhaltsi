import React from "react";
import logo from "../assets/LOGO.png";

const loader = () => {
  return (
    <div className="flex h-screen bg-gray-900 justify-items-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-nd mx-auto text-center justify-items-center">
        <img className="flex h-60 w-80" src={logo} alt="schoollogo" />
        <h1 className="text-green-500 text-2xl font-bold flex">WELCOME</h1>
        <h6 className="text-gray-900 font-bold">To</h6>
        <h2 className="text-orange-500 text-2xl font-bold flex">
          GOVT HIGHER SECONDARY SCHOOL
        </h2>
        <h2 className="text-orange-500 text-2xl font-bold flex">KHALTSI</h2>
      </div>
    </div>
  );
};

export default loader;
