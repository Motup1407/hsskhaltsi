import React, {useState,useEffect} from 'react';
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        {
          image: '/hsskhaltsi/assets/hero5.jpg',
          title: 'Welcome to Our School',
          subtitle: 'We inspire students to discover their potential, dream, and achieve greatness through knowledge.'
        },
        {
          image: '/hsskhaltsi/assets/hero6.jpg',
          title: 'Innovative Solutions',
          subtitle: 'Preparing for the future with Advanced digital learning tools'
        },
        {
          image: '/hsskhaltsi/assets/hero2.jpg',
          title: 'Dedicated and Qualified Teachers',
          subtitle: 'Committed to provide best knowledge and ethics'
        },
        {
          image: '/hsskhaltsi/assets/hero4.jpg',
          title: 'Residential Hostel Facilities',
          subtitle: 'Providing free residential hostel'
        },
        {
          image: '/hsskhaltsi/assets/hero3.jpg',
          title: 'Quality Education',
          subtitle: 'Quality education aligned with CBSE standards'
        },
        {
          image: '/hsskhaltsi/assets/hero1.jpg',
          title: 'Residential Hostel Facilities',
          subtitle: 'Providing free residential hostel'
        }
      ];

      useEffect(() => {
                
      // Auto-advance carousel
    const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

  return (
    <>
    {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        {/* Carousel Container */}
        <div className="relative h-full overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 
                    className={`text-5xl md:text-6xl font-bold mb-6 transition-transform duration-700 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  >
                    {slide.title}
                  </h1>
                  <p 
                    className={`text-xl md:text-2xl mb-8 transition-transform duration-700 delay-200 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  >
                    {slide.subtitle}
                  </p>
                  <button 
                    className={`bg-primary-500 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-600 transition-all duration-700 delay-400 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 group"
          >
            <FaCircleArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 group"
          >
            <FaCircleArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
      
  )
}

export default HeroCarousel
