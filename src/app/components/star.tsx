import Image from 'next/image'
import React from 'react'

const Star = () => {
  return (
    <div className='flex items-center justify-center'>
         <Image
              src="/logo/Star.png"
              width={200}
              height={200}
              
              alt="hero images"
              priority
             
              
            />
    </div>
  )
}

export default Star