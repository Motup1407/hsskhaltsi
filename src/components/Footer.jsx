import React from 'react';
import { FiFacebook,FiTwitter,FiInstagram,FiPhone,FiMail,FiMapPin } from "react-icons/fi";
import { NavLink,Link, useLocation } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-primary-100">
              We are dedicated to providing exceptional services and creating meaningful experiences for our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                {name:'Home',path:'/'},
                {name:'About',path:'/About'},
                {name:'Staff',path:'/Staff'},
                {name:'Contact',path:'/Contact'}
              
              ].map((item) => (
                <li>
                  <NavLink key={item.name}
                  to={item.path} className="text-primary-100 hover:text-white transition-colors">
                  {item.name}
                  </NavLink>                  
                  </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center text-primary-100">
                <FiMail className="mr-2" size={18}/>
                principalhsskhaltsi@gmail.com
              </p>
              <p className="flex items-center text-primary-100">
                <FiPhone className="mr-2" size={18}/>
                +1 9596740166
              </p>
              <p className="flex items-center text-primary-100">
                <FiMapPin className="mr-2" size={20} />
                Farka Office Complex, City Khaltsi, Leh Ladakh, 194106.
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-100 hover:text-white transition-colors">
                <FiFacebook size={24}/>
              </a>
              <a href="#" className="text-primary-100 hover:text-white transition-colors">
                <FiTwitter size={24} />

              </a>
              <a href="#" className="text-primary-100 hover:text-white transition-colors">
                <FiInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 mt-8 pt-8 text-center" data-aos="fade-up" data-aos-delay="500">
          <p className="text-primary-100">
            © {new Date().getFullYear()} MotupTech Solutions Ladakh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;