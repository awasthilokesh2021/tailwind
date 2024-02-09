import React from 'react'

const Footer = () => {
  return (
    <div className=' relative mt-52 bg-slate-700 text-white py-6 bottom-4'>
        <div className='flex justify-between mx-4'>
          <div>
            <p>Home</p>
            <p>About page</p>
            <p>contact us</p>
            <p>company policy</p>
          </div>
          <div>
            <p>Copyright © 2024 Tailwind Labs Inc.</p>
            <p>Trademark Policy</p>
            <p>Edit this page on GitHub</p>
          </div>
        </div>
    </div>
  )
}

export default Footer