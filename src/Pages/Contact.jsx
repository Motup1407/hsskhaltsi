import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const Contact = () => {
  return (
    <div className="pt-24">
      <h1 className="text-4xl font-bold text-primary-900 mb-12 text-center">
          Contact Us
        </h1>
      <div className="w-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.0408998312955!2d76.88227831195678!3d34.32397777294349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fd1725b4e416f5%3A0x194ff4cdaf4645dc!2sGovt.%20Higher%20Secondary%20School%20Khaltsi!5e0!3m2!1sen!2sin!4v1738151342703!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FiMail className="text-primary-500" size={24} />
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">principalhsskhaltsi@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FiPhone className="text-primary-500" size={24} />
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600">+91 - 9596740166</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FiMapPin className="text-primary-500" size={24} />
              <div>
                <h3 className="font-medium text-gray-900">Address</h3>
                <p className="text-gray-600">
                  Farka Office Complex, Khaltsi, Leh Ladakh, 194106
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
