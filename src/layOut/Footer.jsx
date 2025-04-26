import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        <p>Follow us on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-500">Facebook</a>
          <a href="#" className="text-blue-500">Twitter</a>
          <a href="#" className="text-blue-500">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer