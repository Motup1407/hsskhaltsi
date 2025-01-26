import React from 'react'
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Categories = () => {
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
    <section className="py-20 bg-primary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-12 text-primary-900" data-aos="fade-up">Our Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-primary-800">{category.title}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <button className="flex items-center text-primary-600 hover:text-primary-700">
                        Learn More <ArrowRight className="ml-2" size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          </>
  )
}

export default Categories
