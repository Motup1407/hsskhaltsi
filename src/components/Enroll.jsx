import React from 'react';
import { Users, UserIcon as Male, UserIcon as Female } from 'lucide-react';

const Enroll = () => {
  // This data would typically come from a database or API
  const enrollmentData = {
    total: 167,
    boys: 80,
    girls: 87
  };

  return (
    <div className="w-5/6 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 my-12 ">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Enrollment in 2024-25</h2>
      <div className="flex flex-wrap justify-around items-center">
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <div className="bg-white rounded-lg p-4 shadow-inner text-center transform transition duration-500 hover:scale-105">
            <Users className="w-12 h-12 mx-auto text-blue-600 mb-2" />
            <p className="text-4xl font-bold text-blue-600">{enrollmentData.total}</p>
            <p className="text-gray-600 font-semibold mt-2">Total Students</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <div className="bg-white rounded-lg p-4 shadow-inner text-center transform transition duration-500 hover:scale-105">
            <Male className="w-12 h-12 mx-auto text-green-600 mb-2" />
            <p className="text-4xl font-bold text-green-600">{enrollmentData.boys}</p>
            <p className="text-gray-600 font-semibold mt-2">Boys</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3">
          <div className="bg-white rounded-lg p-4 shadow-inner text-center transform transition duration-500 hover:scale-105">
            <Female className="w-12 h-12 mx-auto text-pink-600 mb-2" />
            <p className="text-4xl font-bold text-pink-600">{enrollmentData.girls}</p>
            <p className="text-gray-600 font-semibold mt-2">Girls</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;