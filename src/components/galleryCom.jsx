import React, {useState, useEffect} from 'react';
import {FastForward, Rewind, Pause, Play } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const galleryCom = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [speed, setSpeed] = useState(1);
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out-cubic'
        });
      });
    
  

  // Marquee images
  const marqueeImages = [
    '/hsskhaltsi/assets/1.jpg',
    '/hsskhaltsi/assets/2.jpg',
    '/hsskhaltsi/assets/3.jpg',
    '/hsskhaltsi/assets/4.jpg',
    '/hsskhaltsi/assets/5.jpg',
    '/hsskhaltsi/assets/6.jpg',
    '/hsskhaltsi/assets/7.jpg'
  ];

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };
      
  return (
    <>
     {/* Gallery Section */}
     <section className="py-20 bg-gray-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4" data-aos="fade-up">Our Gallery</h2>
            <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="100">Capturing the inspiring moments of our school.</p>
          </div>
          
       

          {/* Marquee Gallery with Controls */}
          <div className="relative mt-30"  data-aos="fade-up">
            {/* Marquee Container */}
            <div 
              className={`relative overflow-hidden ${isPaused ? 'hover:cursor-grab active:cursor-grabbing' : ''}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div 
                className={`flex ${isPaused ? '' : 'animate-marquee'}`}
                style={{ animationDuration: `${30 / speed}s` }}
              >
                {[...marqueeImages, ...marqueeImages].map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[300px] mx-4 transform transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={image}
                      alt={`Marquee image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center mt-8 space-x-6">
              <button
                onClick={() => handleSpeedChange(Math.max(0.5, speed - 0.5))}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                title="Slow down"
              >
                <Rewind size={24} className="text-primary-600" />
              </button>
              
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                title={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? (
                  <Play size={24} className="text-primary-600" />
                ) : (
                  <Pause size={24} className="text-primary-600" />
                )}
              </button>

              <button
                onClick={() => handleSpeedChange(Math.min(2, speed + 0.5))}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                title="Speed up"
              >
                <FastForward size={24} className="text-primary-600" />
              </button>
            </div>

            {/* Speed Indicator */}
            <div className="text-center mt-4 text-gray-600">
              Speed: {speed}x
            </div>
          </div>
        </div>
      </section>
  </>
  );
};

export default galleryCom ;
