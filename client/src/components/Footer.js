import React from 'react'

export default function Footer() {
  return (
    <div className='bg-dark text-white text-center'
    style={{
      height: '4vh'
    }}>
        copyright &copy; {new Date().getFullYear()} Sayed Nabil
    </div>
  )
}
