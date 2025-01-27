import React from 'react'

const assocatives = () => {
    const logos = [
        {title:'CBSE',path:'/hsskhaltsi/assets/CBSE-Logo.png'},
        {title:'NCERT',path:'/hsskhaltsi/assets/NCERT-logo.png'},,
        {title:'NCC',path:'/hsskhaltsi/assets/ncc-logo.png'},
        {title:'Digital-india',path:'/hsskhaltsi/assets/Digital-india.png'},
        {title:'NSDC',path:'/hsskhaltsi/assets/skill.jpg'},
        {title:'My Gov',path:'/hsskhaltsi/assets/mygov.png'}
        
      ];

  return (
    <>
      <div className="w-full bg-white p-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Assocatives</h2>
      <div className="mx-auto flex justify-evenly gap-1 items-center sm:w-screen">
      {logos.map((items) => (
        <div className="p-4 flex-col justify-items-center">
        <img src={items.path} alt=''className='max-h-14'/>
        <h2 className='text-blue-700 text-xl font-semibold'>{items.title}</h2>
      </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default assocatives
