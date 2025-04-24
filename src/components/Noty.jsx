import React, {useState, useEffect} from 'react';
import '../components/marque.css';
import { FaNewspaper, FaBell, FaCalendarAlt, FaRegFilePdf } from "react-icons/fa";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { TbPhotoSearch } from "react-icons/tb";

const Noty = () => {

  const [isPaused,setIsPaused]=useState(false);
  const [isPaused1,setIsPaused1]=useState(false);
  const [isPaused2,setIsPaused2]=useState(false);
  
  const News=[
    {title:'Extension of Winter Vacation.',path:''},
    {title:'Pariksha Pe Charcha 2025',path:'https://innovateindia1.mygov.in/'},
    {title:'Filling Annual Property Return (PRs)',path:'https://ehrmsladakh.in/'},
    {title:'Conduct of Extra Class for class X & XII.',path:''}
];
const Notices=[
  {title:'Admission Open for Session 2025 (Class 11th) Start Date:21st April End:15th May 2025',path:''},
  {title:'Implementation of APAAR ID as the Primary Identifier for students of CBSE Affiliated Schools.',path:'https://www.cbse.gov.in/cbsenew/documents/Circular_Implementation_APAAR_ID_24012025.pdf'},
  {title:'Making class X/XII students aware about examination ethics-reg.',path:'https://www.cbse.gov.in/cbsenew/documents/Making_Examination_Class_X%20_XII_23012025.pdf'},
  {title:'Conduct of Practical Examinations/Project/Internal Assessment Classes X & XII 2024-25',path:'https://www.cbse.gov.in/cbsenew/documents/Practical_Exam_Reminder_I_31122024.pdf'},
  {title:'Date sheet for Class X and XII for Board Examinations - 2025',path:'https://www.cbse.gov.in/cbsenew/documents/Date_Sheet_Main_Exam_2025_20112024.pdf'},
  {title:'Admission Open for Session 2025 (Class 9th & 11th)',path:''}
];
const Events=[
  {title:'Republic Day Celebration.',path:''},
  {title:'Teachers Day Celebration.',path:''},
  {title:'Childrens Day Celebration.',path:''},
  {title:'School Tour to Zanskar.',path:''}
];
  return (
    <section className='py-10'>    
    <div className="container mx-auto p-6">      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* News Column */}
        <div data-aos="fade-right" data-aos-delay="100">
        <div className="bg-blue-500 text-white shadow-lg rounded-lg">
          <div className="bg-blue-300 text-black p-2 rounded-t-lg flex items-center gap-2">
          <FaNewspaper size={20} />
            <h2 className="text-xl font-semibold">News & Alerts</h2>
          </div >
          <div className="">
            <div className={`overflow-hidden h-56 ${isPaused ? 'active:cursor-grabbing' : ''}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}>
              <ul className={`space-y-2 ${isPaused?'':`marquee`}`}>
                {News.map(item =>(                  
                  <li className='flex items-center gap-1 px-6 hover:bg-gray-800'>
                    <HiOutlineBellAlert className='text-yellow-400 text-lg' />
                  <a href={item.path} className="text-white text-md">
                    {item.title}
                  </a>
                </li>))}             
              </ul>
            </div>
          </div>
        </div>
        </div>

        {/* Notification Column */}
        <div data-aos="fade-up" data-aos-delay="100">
        <div className="bg-orange-500 text-white shadow-lg rounded-lg">
          <div className="bg-orange-300 text-black p-2 rounded-t-lg flex items-center gap-2">
          <FaBell size={20} />
            <h2 className="text-xl font-semibold">Notifications (CBSE)</h2>
          </div>
          <div className="">
          <div className={`overflow-hidden h-56 ${isPaused1 ? 'active:cursor-grabbing' : ''}`}
              onMouseEnter={() => setIsPaused1(true)}
              onMouseLeave={() => setIsPaused1(false)}>
              <ul className={`space-y-2 ${isPaused1?'':`marquee`}`}>
                 {Notices.map(item =>(                  
                  <li className='flex items-center gap-1 px-6 hover:bg-gray-800'>
                    <FaRegFilePdf className='text-red-800 text-lg'/>
                  <a href={item.path} className="text-white text-md">
                    {item.title}
                  </a>
                </li>))}             
              </ul>
            </div>
          </div>
        </div>
        </div>

        {/* Events Column */}
        <div data-aos="fade-left" data-aos-delay="100">
        <div className="bg-green-500 text-white shadow-lg rounded-lg">
          <div className="bg-green-300 text-black p-2 rounded-t-lg flex items-center gap-2">
          <FaCalendarAlt size={20} />
            <h2 className="text-xl font-semibold">Events</h2>
          </div>
          <div className=''>
          <div className={`overflow-hidden h-56 ${isPaused2 ? 'active:cursor-grabbing' : ''}`}
              onMouseEnter={() => setIsPaused2(true)}
              onMouseLeave={() => setIsPaused2(false)}>
              <ul className={`space-y-2  ${isPaused2?'':`marquee`}`}>
                {Events.map(item =>(
                  <li className='flex items-center gap-1 px-6 hover:bg-gray-800'>
                    <TbPhotoSearch className='text-red-800 text-lg'/>
                  <a href={item.path} className="text-white text-md">
                    {item.title}
                  </a>
                </li>))}             
              </ul>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Noty
