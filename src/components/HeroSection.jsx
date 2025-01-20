import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen flex items-center justify-center" style={{
        backgroundImage:'url("https://motup1407.github.io/hsskhaltsi/src/assets/coverImage1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center text-white px-4 z-index-1">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-400">Welcome to Our School</h1>
        <p className="text-xl md:text-2xl mb-8">Endeavour toward excellence.</p>
        <button className="bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors">
          Check it out
        </button>
      </div>
    </section>
  )
}

export default HeroSection
