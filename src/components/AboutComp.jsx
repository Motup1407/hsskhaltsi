import React from 'react'

const AboutComp = () => {
  return (
    <>
    {/* About Us */}
    <section className="w-screen justify-items-center">
        <div className='w-4/5 text-center py-20'>
        <h1 className='text-primary-900 text-3xl font-bold mb-6'>About US</h1>
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
        </section>
  </>
  )
}

export default AboutComp
