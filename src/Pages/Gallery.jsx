import React, {useState, useEffect} from 'react';
import {FastForward, Rewind, Pause, Play } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Gallery = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [speed, setSpeed] = useState(1);
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out-cubic'
        });
      }, []);
    
   // Gallery images with different spans
  const galleryImages = [
    { url: '/hsskhaltsi/assets/hero4.jpg', span: 'col-span-2 row-span-2' },
    { url: '/hsskhaltsi/assets/2.jpg', span: 'col-span-1' },
    { url: '/hsskhaltsi/assets/3.jpg', span: 'col-span-1' },
    { url: '/hsskhaltsi/assets/hero2.jpg', span: 'row-span-2 col-span-2' },
    { url: '/hsskhaltsi/assets/5.jpg', span: 'col-span-1' },
    { url: '/hsskhaltsi/assets/6.jpg', span: 'col-span-1' },
    { url: '/hsskhaltsi/assets/hero1.jpg', span: 'col-span-2 row-span-2' },
    { url: '/hsskhaltsi/assets/2.jpg', span: 'col-span-1' },
    { url: '/hsskhaltsi/assets/3.jpg', span: 'col-span-1' },
    { url: '/hsskhaltsi/assets/hero3.jpg', span: 'row-span-2' },
    { url: '/hsskhaltsi/assets/hero5.jpg', span: 'col-span-1' },
    { url: '/hsskhaltsi/assets/1.jpg', span: 'col-span-1' },
    { url: '/hsskhaltsi/assets/4.jpg', span: 'row-span-2' },
    { url: '/hsskhaltsi/assets/plantation1.jpg', span: 'col-span-1' },
    { url: '/hsskhaltsi/assets/7.jpg', span: 'col-span-1' },
    { url: '/hsskhaltsi/assets/ICT-Lab.jpg', span: 'row-span-2' },
    { url: '/hsskhaltsi/assets/Hostel.jpg', span: 'col-span-1' },
    { url: '/hsskhaltsi/assets/hero6.jpg', span: 'row-span-2 col-span-1' },
    { url: '/hsskhaltsi/assets/Painting1.jpg', span: 'col-span-1' },
  ];

  // Marquee images
  const marqueeImages = [
    '/hsskhaltsi/assets/1.jpg',
    '/hsskhaltsi/assets/ICT-Lab.jpg',
    '/hsskhaltsi/assets/plantation2.jpg',
    '/hsskhaltsi/assets/painting2.jpg',
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
     <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4" data-aos="fade-up">Our Gallery</h2>
            <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="100">Capturing the inspiring moments of our school.</p>
          </div>
          
          {/* Grid Gallery */}
          <div className="grid grid-cols-4 gap-4 mb-16 " data-aos="fade-up">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${image.span} relative group overflow-hidden rounded-lg`}
              >
                <img
                  src={image.url}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading='lazy'
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Image
                  </span>
                </div>
              </div>
            ))}
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

export default Gallery ;
