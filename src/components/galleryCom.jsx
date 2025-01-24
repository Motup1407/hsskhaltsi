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
      }, []);
    
   // Gallery images with different spans
  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600&h=400', span: 'col-span-2 row-span-2' },
    { url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&q=80&w=300&h=200', span: 'col-span-1' },
    { url: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&q=80&w=300&h=200', span: 'col-span-1' },
    { url: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&q=80&w=300&h=400', span: 'row-span-2' },
    { url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=300&h=200', span: 'col-span-1' },
    { url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=300&h=200', span: 'col-span-1' }
  ];

  // Marquee images
  const marqueeImages = [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=300&h=200',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=300&h=200',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=300&h=200',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=300&h=200',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=300&h=200',
    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&w=300&h=200'
  ];

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };
      
  return (
    <>
     {/* Gallery Section */}
     <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4" data-aos="fade-up">Our Gallery</h2>
            <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="100">Capturing moments that inspire</p>
          </div>
          
          {/* Grid Gallery */}
          <div className="grid grid-cols-4 gap-4 mb-16" data-aos="fade-up">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${image.span} relative group overflow-hidden rounded-lg`}
              >
                <img
                  src={image.url}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
          <div className="relative" data-aos="fade-up">
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
