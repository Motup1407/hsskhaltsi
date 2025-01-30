import React from "react";
import {
  CheckCircle2,
  Laptop,
  PenTool as Tool,
  GraduationCap,
  Trophy,
  Home,
  Users,
  School,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  Building2,
  FileText,
  Clock,
} from "lucide-react";

import plygd from "../assets/plygd.jpg";
import hostel from "../assets/Hostel.jpg"

function About() {
  const facilities = [
    {
      icon: <Laptop className="w-8 h-8 text-primary-500" />,
      title: "ICT Lab",
      description:
        "Providing students with computer literacy, digital skills, and exposure to software tools essential for the modern world.",
    },
    {
      icon: <Tool className="w-8 h-8 text-primary-500" />,
      title: "Atal Tinkering Lab (ATL)",
      description:
        "Established under the Atal Innovation Mission (AIM) by the Government of India, encouraging STEM exploration and innovation.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary-500" />,
      title: "Vocational Education",
      description:
        "Proud participant in the Skill India initiative under NSDC, providing industry-relevant skills and hands-on learning.",
    },
  ];

  const missionPoints = [
    "Quality education aligned with CBSE standards",
    "Imparting ethics, discipline, and moral values",
    "Advanced digital learning tools",
    "Encouraging curiosity and creativity",
    "Promoting inclusive education",
  ];

  const whyChooseUs = [
    "A Prestigious Government School",
    "CBSE Curriculum",
    "Government-backed Infrastructure",
    "Modern Labs",
    "Skill-Based Learning",
    "Large Campus with the Best Playground",
    "Holistic Development",
    "Community Engagement",
    "Moral & Ethical Education",
    "Educational Accessibility",
    "Free Residential Hostel",
    "Winter-Ready Hostel",
  ];

  const contactInfo = {
    phone: {
      primary: "+91 9596740166",
      secondary: "+91 ",
    },
    email: {
      primary: "principalhsskhaltsi@gmail.com",
      admissions: "principalhsskhaltsi@gmail.com",
    },
    address: {
      street: "Farka Office Complex, Khlatsi",
      city: "Leh District",
      state: "UT of Ladakh",
      pincode: "194106",
    },
    timing: {
      summer: "10:00 AM - 4:00 PM",
      winter: "10:30 AM - 3:30 PM",
      sunday: "Closed",
    },
    registration: {
      schoolCode: "24496",
      regNumber: "_______",
      udiseCode: "37070201004",
    },
    social: [
      { icon: <Facebook className="w-6 h-6" />, link: "#", name: "Facebook" },
      { icon: <Twitter className="w-6 h-6" />, link: "#", name: "Twitter" },
      { icon: <Instagram className="w-6 h-6" />, link: "#", name: "Instagram" },
      { icon: <Linkedin className="w-6 h-6" />, link: "#", name: "LinkedIn" },
    ],
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url(/hsskhaltsi/assets/hero3.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1
              className="text-5xl font-bold text-yellow-200 mb-6"
              data-aos="fade-up "
            >
              About Us
            </h1>
            <p
              className="text-3xl font-semibold text-blue-200 max-w-2xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Welcome to govt Higher Secondary School Khaltsi.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Introduction */}
        <div className="mb-20" data-aos="fade-up">
          <p className="text-xl text-gray-700 ">
            Our school is a Government-run institution dedicated to providing
            high-quality and accessible education to all.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Situated in Khaltsi, Leh District, our school is affiliated with the
            Central Board of Secondary Education (CBSE) and operates under the
            direct governance of School Education Departmet, Union Territory of
            Ladakh.
          </p>
          <p className="text-lg text-gray-700">
            As a Government School, we take pride in offering free and
            affordable education to students from remote areas like Lingshed,
            Dipling, Youlchung Narak, Fotoksar, etc and nearby villages of
            Khaltsi Block ensuring that every child, regardless of
            socio-economic background, has access to a holistic and empowering
            learning experience.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-primary-900 mb-8">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missionPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mb-20">
          <h2
            className="text-3xl font-bold text-primary-900 mb-8"
            data-aos="fade-up"
          >
            State-of-the-Art Learning Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold text-primary-800 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Section */}
        <div className="mb-20">
          <h2
            className="text-3xl font-bold text-primary-900 mb-8"
            data-aos="fade-up"
          >
            Large Campus & Best Playground
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <img
                src={plygd}
                alt="School campus"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6" data-aos="fade-left">
              <div className="flex items-start space-x-4">
                <Trophy className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">
                    Large Campus
                  </h3>
                  <p className="text-gray-600">
                    Best campus with ample of space with Adminitrative Block, Classroom Blocks, Multiple Purpose Hall and Mini Language Hall, also Hostel Building seperated for Boys and Girls.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Trophy className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">
                    Spacious playground / Sports Grounds
                  </h3>
                  <p className="text-gray-600">
                    Spacious Playground withdDedicated areas for football, cricket, basketball, and
                    athletics.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Trophy className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">
                    Well-Equipped Sports Facilities
                  </h3>
                  <p className="text-gray-600">
                    Well equiped Courts for outdoor sports like volleyball, Football, Handball and a running track. Aslo equirement for indoor sports like Table Tennis, Chess, Carrom Board, etc. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hostel Section */}
        <div className="mb-20">
          <h2
            className="text-3xl font-bold text-primary-900 mb-8"
            data-aos="fade-up"
          >
            Free Residential Hostel Facility
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6" data-aos="fade-right">
              <div className="flex items-start space-x-4">
                <Home className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">
                    Free Accommodation
                  </h3>
                  <p className="text-gray-600">
                    Safe and secure hostel facilities for students from rural
                    regions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Home className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">
                    Free Meal
                  </h3>
                  <p className="text-gray-600">
                    Provide Nutritious Meal for residents students from rural
                    regions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Study Support</h3>
                  <p className="text-gray-600">
                    Extra tutoring, library access, and mentorship programs.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <img
                src={hostel}
                alt="Hostel facility"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h2
            className="text-3xl font-bold text-primary-900 mb-8"
            data-aos="fade-up"
          >
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-3"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <School className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Information Section */}
        <div className="bg-gray-50 py-20 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-4xl font-bold text-primary-900 mb-4"
                data-aos="fade-up"
              >
                Contact Information
              </h2>
              <p
                className="text-xl text-gray-600"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Get in touch with us for any inquiries
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Cards */}
              <div
                className="bg-white rounded-xl shadow-lg p-8"
                data-aos="fade-up"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Phone Numbers
                    </h3>
                    <p className="text-gray-600 mb-1">
                     <span className="text-gray-800 font-semibold"> Principal:</span> {contactInfo.phone.primary}
                    </p>
                    <p className="text-gray-600">
                      <span className="text-gray-800 font-semibold">Office: </span>{contactInfo.phone.secondary}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white rounded-xl shadow-lg p-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Email Addresses
                    </h3>
                    <p className="text-gray-600 mb-1">
                      <span className="text-gray-800 font-semibold">Principal: </span>{contactInfo.email.primary}
                    </p>
                    <p className="text-gray-600">
                     <span className="text-gray-800 font-semibold"> Admissions: </span>{contactInfo.email.admissions}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white rounded-xl shadow-lg p-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      School Hours
                    </h3>
                    <p className="text-gray-600 mb-1">
                      Summar Hours: {contactInfo.timing.summer}
                    </p>
                    <p className="text-gray-600 mb-1">
                      Winter Hours: {contactInfo.timing.winter}
                    </p>
                    <p className="text-gray-600">
                      Sunday: {contactInfo.timing.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Registration Details */}
            <div
              className="bg-white rounded-xl shadow-lg p-8 mb-16"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                School Registration Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-start space-x-3">
                  <FileText className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">School Code</p>
                    <p className="text-gray-600">
                      {contactInfo.registration.schoolCode}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building2 className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Registration Number
                    </p>
                    <p className="text-gray-600">
                      {contactInfo.registration.regNumber}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">UDISE Code</p>
                    <p className="text-gray-600">
                      {contactInfo.registration.udiseCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Location and Social Media */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              data-aos="fade-up"
            >
              {/* Address */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Our Location
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {contactInfo.address.street}
                    </p>
                    <p className="text-gray-600 mb-2">
                      {contactInfo.address.city}
                    </p>
                    <p className="text-gray-600 mb-2">
                      {contactInfo.address.state}
                    </p>
                    <p className="text-gray-600">
                      PIN: {contactInfo.address.pincode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {contactInfo.social.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.link}
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors"
                    >
                      <div className="text-primary-500 mb-2">
                        {platform.icon}
                      </div>
                      <span className="text-sm text-gray-600">
                        {platform.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
