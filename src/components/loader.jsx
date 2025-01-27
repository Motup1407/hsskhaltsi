import React from 'react'

const loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-green-500 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-orange-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  )
}

export default loader
