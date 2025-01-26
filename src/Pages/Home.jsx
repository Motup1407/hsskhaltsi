import React, {useEffect} from 'react'
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Noty from '../components/Noty';
import Enroll from '../components/Enroll';
import Categories from '../components/Categories';
import About from './About';
import Gallery from '../components/galleryCom';
import Assocatives from '../components/assocatives';
import HeroCarousel from '../components/HeroCarousel';

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out-cubic'
        });
      }, []);
    
      const categories = [
        { title: 'Category 1', description: 'Description for category 1', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400&h=300' },
        { title: 'Category 2', description: 'Description for category 2', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400&h=300' },
        { title: 'Category 3', description: 'Description for category 3', image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=400&h=300' },
      ];

  return (
    <>
      {/* Hero Section */}
      <HeroCarousel/>
      {/*Notifications Section*/}
    <Noty/>
    <Enroll/>
      {/* Categories Section */}
      

      {/* Gallery Section */}
      <Gallery/>
      {/* About Us Section */}

      <About/>
      

      {/* Social Media Section */}
      <section className="py-20 bg-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary-900" data-aos="fade-up">Connect With Us</h2>
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors" data-aos="fade-up" data-aos-delay="100">
              <Facebook size={32} />
            </a>
            <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors" data-aos="fade-up" data-aos-delay="200">
              <Twitter size={32} />
            </a>
            <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors" data-aos="fade-up" data-aos-delay="300">
              <Instagram size={32} />
            </a>
            
          </div>
        </div>
      </section>
      <Assocatives/>
    </>
  )
}

export default Home
