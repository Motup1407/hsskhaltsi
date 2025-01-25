import React, {useState, useEffect} from 'react';
import '../components/marque.css';
import { FaNewspaper, FaBell, FaCalendarAlt } from "react-icons/fa";
import { PiFilesBold } from "react-icons/pi";

const Noty = () => {

  const [isPaused,setIsPaused]=useState(false);
  const [isPaused1,setIsPaused1]=useState(false);
  const [isPaused2,setIsPaused2]=useState(false);
  
  const News=[
    {title:'News1',path:''},
    {title:'News2',path:''},
    {title:'News3',path:''}
];
const Notices=[
  {title:'Making class X/XII students aware about examination ethics-reg.',path:'https://www.cbse.gov.in/cbsenew/documents/Making_Examination_Class_X%20_XII_23012025.pdf'},
  {title:'Conduct of Practical Examinations/Project/Internal Assessment Classes X & XII 2024-25',path:'https://www.cbse.gov.in/cbsenew/documents/Practical_Exam_Reminder_I_31122024.pdf'},
  {title:'Date sheet for Class X and XII for Board Examinations - 2025',path:'https://www.cbse.gov.in/cbsenew/documents/Date_Sheet_Main_Exam_2025_20112024.pdf'},
  {title:'Admission Open for Session 2025 (Class 9th & 11th)',path:''}
];
const Events=[
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
        <div className="bg-blue-500 text-white shadow-lg rounded-lg min-h-80">
          <div className="bg-blue-300 text-black p-4 rounded-t-lg flex items-center gap-2">
          <FaNewspaper size={20} />
            <h2 className="text-xl font-semibold">News & Alerts</h2>
          </div >
          <div className="">
            <div className={`relative overflow-hidden ${isPaused ? 'active:cursor-grabbing' : ''}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}>
              <ul className={`space-y-3 list-image-[{<PiFilesBold/>}]${isPaused?'':`marquee`}`}>
                {News.map(item =>(
                  <li className='py-2 px-6 hover:bg-blue-300 '>
                  <a href={item.path} className="text-white">
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
        <div className="bg-orange-500 text-white shadow-lg rounded-lg min-h-80">
          <div className="bg-orange-300 text-black p-4 rounded-t-lg flex items-center gap-2">
          <FaBell size={20} />
            <h2 className="text-xl font-semibold">Notifications (CBSE/School)</h2>
          </div>
          <div className="">
          <div className={`overflow-hidden ${isPaused1 ? 'active:cursor-grabbing' : ''}`}
              onMouseEnter={() => setIsPaused1(true)}
              onMouseLeave={() => setIsPaused1(false)}>
              <ul className={`space-y-3 ${isPaused1?'':`marquee`}`}>
                {Notices.map(item =>(                  
                  <li className='py-2 px-6 hover:bg-orange-300'>
                  <a href={item.path} className="text-white">
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
        <div className="bg-green-500 text-white shadow-lg rounded-lg min-h-80">
          <div className="bg-green-300 text-black p-4 rounded-t-lg flex items-center gap-2">
          <FaCalendarAlt size={20} />
            <h2 className="text-xl font-semibold">Events</h2>
          </div>
          <div className=''>
          <div className={`overflow-hidden ${isPaused2 ? 'active:cursor-grabbing' : ''}`}
              onMouseEnter={() => setIsPaused2(true)}
              onMouseLeave={() => setIsPaused2(false)}>
              <ul className={`space-y-3 ${isPaused2?'':`marquee`}`}>
                {Events.map(item =>(
                  <li className='py-2 px-6 hover:bg-green-300'>
                  <a href={item.path} className="text-white">
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
