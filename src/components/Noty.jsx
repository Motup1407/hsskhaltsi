import React from 'react';
import '../components/marque.css';
import { FaNewspaper, FaBell, FaCalendarAlt } from "react-icons/fa";

const Noty = () => {
  return (
    <section className='py-10'>    
    <div className="container mx-auto p-6">      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* News Column */}
        <div data-aos="fade-right" data-aos-delay="100">
        <div className="bg-blue-500 text-white shadow-lg rounded-lg">
          <div className="bg-blue-300 text-black p-4 rounded-t-lg flex items-center gap-2">
          <FaNewspaper size={20} />
            <h2 className="text-xl font-semibold">News</h2>
          </div >
          <div className="p-6">
            <div className="overflow-hidden h-32">
              <ul className="marquee space-y-3">
                <li className="pb-2">
                  <a href="#" className="text-white hover:text-yellow-400">
                    Winter Tuition 2024-25 start Januarary
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="text-white hover:text-yellow-400">
                    News Item 2
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="text-white hover:text-yellow-400">
                    News Item 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>

        {/* Notification Column */}
        <div data-aos="fade-up" data-aos-delay="100">
        <div className="bg-orange-500 text-white shadow-lg rounded-lg">
          <div className="bg-orange-300 text-black p-4 rounded-t-lg flex items-center gap-2">
          <FaBell size={20} />
            <h2 className="text-xl font-semibold">Notification (CBSE/School)</h2>
          </div>
          <div className="p-6">
            <div className="overflow-hidden h-32">
              <ul className="marquee space-y-3">
                <li className="pb-2">
                  <a href="https://www.cbse.gov.in/cbsenew/documents/Practical_Exam_Reminder_I_31122024.pdf" className="text-white hover:text-yellow-400">
                  Conduct of Practical Examinations/Project/Internal Assessment Classes X & XII 2024-25
                  </a>
                </li>
                <li className="pb-2">
                  <a href="https://www.cbse.gov.in/cbsenew/documents/Date_Sheet_Main_Exam_2025_20112024.pdf" className="text-white hover:text-yellow-400">
                  Date sheet for Class X and XII for Board Examinations - 2025
                  </a>
                </li>
                <li className="pb-2">
                  <a href="https://innovateindia1.mygov.in/" className="text-white hover:text-yellow-400">
                  Click here to register for Pariksha Pe Charcha 2025
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="text-white hover:text-yellow-400">
                  Admission Open for Session 2025 (Class 9th & 11th)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>

        {/* Events Column */}
        <div data-aos="fade-left" data-aos-delay="100">
        <div className="bg-green-500 text-white shadow-lg rounded-lg">
          <div className="bg-green-300 text-black p-4 rounded-t-lg flex items-center gap-2">
          <FaCalendarAlt size={20} />
            <h2 className="text-xl font-semibold">Events</h2>
          </div>
          <div className="p-6">
            <div className="overflow-hidden h-32">
              <ul className="marquee space-y-3">
                <li className="pb-2">
                  <a href="#" className="text-white hover:text-yellow-400">
                    Childrens' Day Celebration. 
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="text-white hover:text-yellow-400">
                    Teachers' Day Celebration.
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="text-white hover:text-yellow-400">
                    School Picnic
                  </a>
                </li>
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
