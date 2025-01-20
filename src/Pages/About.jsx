import React from 'react';
import schoolphoto from '../assets/Assembly.jpg';
const About = () => {
  return (
    <section className="py-20 bg-white">

        <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6 text-primary-900">About Our School</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
            <div className="relative h-xl" data-aos="fade-right">
              <img 
                src={schoolphoto} 
                alt="Team collaboration" 
                className="rounded-lg shadow-2xl fit-crop h-50-" height='500'
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-8 rounded-lg hidden md:block">
                <p className="text-4xl font-bold">75+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
            <div data-aos="fade-left">
              
              <p className="text-gray-600 mb-6 text-lg">
                Our School is affiliated to CBSE under affiliation NO:3720143. Our School run and govern by the School Education Department, 
                Union Territory of Ladakh. It is located in the heart of Khaltsi Block which has been catering the Students of remotest areas of the Block, 
                as well as near by villages.
                
              </p>
              <div className="grid grid-cols- gap-6 mb-8">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h3 className="text-xl font-bold mb-2 text-primary-800">Our Mission</h3>
                  <p className="text-gray-600">To impart knowledge and ethics with innovative solutions that exceed expectations and drive success for our students.</p>
                </div>
                <div className="border-l-4 border-primary-2500 pl-4">
                  <h3 className="text-xl font-bold mb-2 text-primary-800">Our Vision</h3>
                  <p className="text-gray-600">An endeavour to make the school an excellent centre of learning using of emerging digital technologies.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary-50 px-6 py-3 rounded-full">
                  <span className="font-bold text-primary-600">22</span>
                  <span className="text-gray-600 ml-2">Teachers</span>
                </div>
                <div className="bg-primary-50 px-6 py-3 rounded-full">
                  <span className="font-bold text-primary-600">160+</span>
                  <span className="text-gray-600 ml-2">Students</span>
                </div>
                <div className="bg-primary-50 px-6 py-3 rounded-full">
                  <span className="font-bold text-primary-600">100%</span>
                  <span className="text-gray-600 ml-2">Satisfaction</span>
                </div>
              </div>
              <div className="flex gap-4 mt-10">
                <div className="bg-primary-50 px-6 py-3 rounded-full">
                  <span className="font-bold text-primary-600">CBSE Affiliation No:</span>
                  <span className="text-gray-600 ml-2">3720143</span>
                </div>
                <div className="bg-primary-50 px-6 py-3 rounded-full">
                  <span className="font-bold text-primary-600">School Code/No:</span>
                  <span className="text-gray-600 ml-2">24496</span>
                </div>
                <div className="bg-primary-50 px-6 py-3 rounded-full">
                  <span className="font-bold text-primary-600">Location:</span>
                  <span className="text-gray-600 ml-2">37.323772 76.884992</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
