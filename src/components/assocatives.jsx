import React from 'react'

const assocatives = () => {
    const logos = [
        {title:'CBSE',path:'/hsskhaltsi/assets/CBSE-Logo.png'},
        {title:'NCERT',path:'/hsskhaltsi/assets/NCERT-logo.png'},
        {title:'Digital-india',path:'/hsskhaltsi/assets/Digital-india.png'},
        {title:'NSDC',path:'/hsskhaltsi/assets/skill.jpg'}
        
      ];

  return (
    <>
      <div className="w-full mx-auto bg-primary-100 rounded-lg shadow-lg p-20">
      <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Our Assocatives</h2>
      <div className="w-11/12  h-150 mx-auto flex justify-around items-center sm:w-full">
      {logos.map((items) => (
        <div className="p-4 sm:p-1 sm:mb-0 flex-col justify-items-center h-100">
        <img src={items.path} alt='' className='max-h-16'/>
        <h2 className='text-blue-700 text-xl'>{items.title}</h2>
      </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default assocatives
