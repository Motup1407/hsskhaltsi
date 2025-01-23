import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Users, UserIcon as Male, UserIcon as Female, User } from 'lucide-react';

const Staff = () => {
  const [staffData, setStaffData] = useState({
    total: 34,
    Teaching: 22,
    NonTeaching: 12
  });
  const [staffTable, setStaffTable] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/hsskhaltsi/staffData.csv');
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result.value);
        const parsedData = Papa.parse(csv, { header: true });
        
        setStaffTable(parsedData.data);
        /*setStaffData({
          total: parsedData.data.length,
          Teaching: Math.floor(parsedData.data.length * 0.6), // Dummy calculation
          NonTeaching: Math.ceil(parsedData.data.length * 0.4) // Dummy calculation
        });*/
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load staff data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }
  const HierarchyNode = ({ title, bgColor, textColor, children }) => (
    <div className={`${bgColor} ${textColor} rounded-lg p-3 shadow-lg text-center min-w-[150px]`}>
      {title}
      {children}
    </div>
  );

  return (
    <section className='bg-primary-50'>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-20 mb-12">School's Hierarchical Structure of Posts</h1>
            
      <div className=" overflow-x-auto">
        <svg className="w-full" viewBox="0 0 1000 600">
          {/* Principal to Teaching Staff line */}
          <line x1="500" y1="50" x2="250" y2="150" stroke="#4B5563" strokeWidth="2" />
          {/* Principal to Non-Teaching Staff line */}
          <line x1="500" y1="50" x2="750" y2="150" stroke="#4B5563" strokeWidth="2" />
          
          {/* Teaching Staff to positions lines */}
          <line x1="250" y1="150" x2="250" y2="180" stroke="#4B5563" strokeWidth="2" />
          <line x1="250" y1="220" x2="250" y2="240" stroke="#4B5563" strokeWidth="2" />
          <line x1="250" y1="280" x2="250" y2="300" stroke="#4B5563" strokeWidth="2" />
          <line x1="250" y1="340" x2="250" y2="360" stroke="#4B5563" strokeWidth="2" />
          
          {/* Non-Teaching Staff to positions lines */}
          <line x1="750" y1="180" x2="750" y2="210" stroke="#4B5563" strokeWidth="2" />
          <line x1="750" y1="250" x2="750" y2="260" stroke="#4B5563" strokeWidth="2" />
          <line x1="750" y1="310" x2="750" y2="320" stroke="#4B5563" strokeWidth="2" />
          <line x1="750" y1="370" x2="750" y2="380" stroke="#4B5563" strokeWidth="2" />
          {['Class-IV', 'PEON', 'Safaiwala'].map((_, index) => (
            <line key={`line-${index}`} x1="750" y1="430" x2={550 + index * 160} y2="500"  stroke="#4B5563" strokeWidth="2" />
          ))}

          {/* Principal Node */}
          <foreignObject x="425" y="10" width="150" height="80">
            <HierarchyNode title="Principal" bgColor="bg-green-500" textColor="text-white" />
          </foreignObject>

          {/* Teaching Staff Node */}
          <foreignObject x="175" y="110" width="150" height="80">
            <HierarchyNode title="Teaching Staff" bgColor="bg-blue-500" textColor="text-white" />
          </foreignObject>

          {/* Non-Teaching Staff Node */}
          <foreignObject x="675" y="110" width="150" height="80">
            <HierarchyNode title="Non-Teaching Staff" bgColor="bg-yellow-500" textColor="text-white" />
          </foreignObject>

          {/* Teaching Staff Positions */}
          {['Senior Lecturer', 'Lecturer', 'Master', 'Teacher'].map((position, index) => (
            <foreignObject key={`teaching-${index}`} x="175" y={180 + index * 60} width="150" height="60">
              <HierarchyNode title={position} bgColor="bg-blue-100" textColor="text-blue-800" />
            </foreignObject>
          ))}

          {/* Non-Teaching Staff Positions */}
           {['Labrarian', 'Junior Labrarian', 'Junior Assistant', 'Lab Assistant'].map((position, index) => (
            <foreignObject key={`teaching-${index}`} x="675" y={200 + index * 60} width="150" height="60">
              <HierarchyNode title={position} bgColor="bg-blue-100" textColor="text-blue-800" />
            </foreignObject>
          ))}
          {['Class-IV', 'PEON', 'Safaiwala'].map((position, index) => (
            <foreignObject key={`non-teaching-other-${index}`} x={500 + index * 160} y="500" width="150" height="60">
              <HierarchyNode title={position} bgColor="bg-yellow-100" textColor="text-yellow-800" />
            </foreignObject>
          ))}
        </svg>
      </div>
      <div className="bg-white rounded-lg shadow-2xl p-6 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Total Staff</h2>
        <div className="flex justify-around items-center">
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto text-blue-600 mb-2" />
            <p className="text-4xl font-bold text-blue-600">{staffData.total}</p>
            <p className="text-gray-600">Total</p>
          </div>
          <div className="text-center">
            <Male className="w-12 h-12 mx-auto text-green-600 mb-2" />
            <p className="text-4xl font-bold text-green-600">{staffData.Teaching}</p>
            <p className="text-gray-600">Teaching</p>
          </div>
          <div className="text-center">
            <Female className="w-12 h-12 mx-auto text-pink-600 mb-2" />
            <p className="text-4xl font-bold text-pink-600">{staffData.NonTeaching}</p>
            <p className="text-gray-600">Non-Teaching</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-green-300 to-orange-300 rounded-lg shadow-lg p-6 mb-12 mt-0">
        <h2 className="text-2xl font-semibold text-white mb-4">Staff Details</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-blue-200">
            <thead className="bg-blue-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">S.No</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Designation</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Subject Taught</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Class Taught</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Qualifications</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-blue-100">
              {staffTable.map((staff, index) => (
                <tr key={staff['S.No']} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-900">{staff['S.No']}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{staff.Name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800">{staff.Designation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800">{staff['Subject Taught']}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800">{staff['Class Taught']}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800">{staff.Qualifications}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Staff;

