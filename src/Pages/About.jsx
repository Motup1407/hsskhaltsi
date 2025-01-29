import React from 'react';
import { CheckCircle,Laptop,PenToolIcon as Tool,GraduationCap,Trophy,TreesIcon as Tree,
  Home,Users,Utensils,BookOpen,Shield,Flame,School,Globe,
  Truck,HeartHandshake,} from "lucide-react"
import { FiFacebook,FiTwitter,FiInstagram,FiPhone,FiMail,FiMapPin } from "react-icons/fi";
import schoolphoto from '../assets/Assembly.jpg';
const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen pt-20">
      <header className="py-6 w-4/5 mx-auto text-center">
        <div className="container mx-auto px-2">
          <h1 className="text-blue-800 text-4xl font-bold mb-4">Welcome to Govt Higher Secondary School Khaltsi, Ladakh</h1>         
        </div>
      </header>

      <main className="container mx-auto px-4 pb-12">
        <section className="mb-12">
          <p className="text-lg mb-4">
          A Government-run institution dedicated to providing high-quality and accessible education to all.
            Situated in Greenwood Valley, XYZ District, our school is affiliated with the Central Board of Secondary
            Education (CBSE) and operates under the direct governance of the Government of India.
          </p>
          <p className="text-lg mb-4">
            As a Government School, we take pride in offering free and affordable education to students from remote
            areas and nearby villages, ensuring that every child, regardless of socio-economic background, has access to
            a holistic and empowering learning experience.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-4">
            At Bright Future Public School, we are committed to the all-round development of our students by
            emphasizing:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Quality education aligned with CBSE standards.",
              "Imparting ethics, discipline, and moral values to nurture responsible citizens.",
              "Advanced digital learning tools and innovative teaching methods.",
              "Encouraging curiosity, creativity, and leadership skills.",
              "Promoting inclusive education for students from all backgrounds under Government schemes.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 bg-primary-50">
          <h2 className="text-3xl font-bold mb-6">State-of-the-Art Learning Facilities</h2>
          <p className="text-lg mb-4">
            Our school is equipped with modern infrastructure and advanced labs, ensuring students gain hands-on
            experience with emerging technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Laptop className="text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">ICT Lab</h3>
              </div>
              <p>
                Providing students with computer literacy, digital skills, and exposure to software tools essential for
                the modern world.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Tool className="text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">Atal Tinkering Lab (ATL)</h3>
              </div>
              <p>
                Established under the Atal Innovation Mission (AIM) by the Government of India, this lab encourages
                students to explore STEM and develop innovative projects, robotics, and AI-based solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">Vocational Education under Skill India (NSDC)</h3>
              </div>
              <ul className="list-disc list-inside">
                <li>Industry-Relevant Skills</li>
                <li>Hands-On Learning</li>
                <li>Empowering Students</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Large Campus & Best Playground in the Area</h2>
          <p className="text-lg mb-4">
            Our school boasts a sprawling, well-maintained campus that provides an ideal learning environment for
            students. We take pride in having the biggest and best playground in the area, offering students:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Trophy, text: "Spacious Sports Grounds" },
              { icon: GraduationCap, text: "Well-Equipped Sports Facilities" },
              { icon: Tree, text: "Green & Peaceful Campus" },
              { icon: Users, text: "Encouraging Physical Fitness" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <item.icon className="text-green-500 mr-2" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Reaching Every Corner</h2>
          <p className="text-lg">
            Being a Government School, we play a pivotal role in bridging the educational gap in rural and economically
            weaker sections. Through Government-aided programs, special scholarships, and transport facilities, we
            ensure that students from distant villages receive equal opportunities to excel in academics and
            co-curricular activities.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Free Residential Hostel Facility</h2>
          <p className="text-lg mb-4">
            To support students from the most remote areas, our school provides a fully-funded residential hostel under
            the Government of India's Residential Hostel Scheme.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Home, text: "Free Accommodation" },
              { icon: Utensils, text: "Nutritious Meals" },
              { icon: BookOpen, text: "Study Support" },
              { icon: Shield, text: "Safety & Care" },
              { icon: Flame, text: "Winter-Ready Heating System" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <item.icon className="text-blue-500 mr-2" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Dedicated & Committed Faculty</h2>
          <p className="text-lg mb-4">
            As a Government School, we are backed by highly qualified and experienced faculty members appointed by the
            Government of India. Our educators are dedicated to not only academic excellence but also instilling values
            of integrity, respect, and compassion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Mrs. Priya Sharma", role: "Principal" },
              { name: "Mr. Rahul Mehta", role: "Science Dept. Head" },
              { name: "Ms. Neha Verma", role: "English Instructor" },
            ].map((teacher, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                <p className="text-gray-600">{teacher.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: School, text: "A Prestigious Government School" },
              { icon: GraduationCap, text: "CBSE Curriculum" },
              { icon: Laptop, text: "Government-backed Infrastructure" },
              { icon: Tool, text: "Modern Labs" },
              { icon: BookOpen, text: "Skill-Based Learning" },
              { icon: Trophy, text: "Large Campus with the Best Playground" },
              { icon: Users, text: "Holistic Development" },
              { icon: Globe, text: "Community Engagement" },
              { icon: HeartHandshake, text: "Moral & Ethical Education" },
              { icon: Truck, text: "Educational Accessibility" },
              { icon: Home, text: "Free Residential Hostel" },
              { icon: Flame, text: "Winter-Ready Hostel" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <item.icon className="text-blue-500 mr-2" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="">
          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="300">
                    <h3 className="text-xl font-bold mb-4">For admissions and inquiries, feel free to contact us.</h3>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-800">
                        <FiMail className="mr-2" size={18}/>
                        principalhsskhaltsi@gmail.com
                      </p>
                      <p className="flex items-center text-gray-800">
                        <FiPhone className="mr-2" size={18}/>
                        +91 - 9596740166
                      </p>
                      <p className="flex items-center text-gray-800">
                        <FiMapPin className="mr-2" size={20} />
                        Farka Office Complex, City Khaltsi, Leh Ladakh, 194106.
                      </p>
                    </div>
                  </div>
        </section>
        
      </main>
      </div>
  )
}

export default About
