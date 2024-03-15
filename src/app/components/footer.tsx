import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex items-center gap-[20px]'>
         <Image
              src="/logo/cap.png"
              width={30}
              height={30}
              
              alt="hero images"
              priority
             
              className="cursor-pointer image "
            />
            <Image
              src="/logo/dex.png"
              width={30}
              height={30}
              
              alt="hero images"
              priority
              className="cursor-pointer image "
              
            />
    <Image
              src="/logo/xlogo.png"
              width={30}
              height={30}
              
              alt="hero images"
              priority
              className="cursor-pointer image "
              
            />
              <Image
              src="/tele.png"
              width={30}
              height={30}
              
              alt="hero images"
              priority
              className="cursor-pointer image "
             
              
            />
            <Image
              src="/logo/gecko.png"
              width={30}
              height={30}
              
              alt="hero images"
              priority
              className="cursor-pointer image "
              
            />
            <Image
              src="/logo/soloscan.png"
              width={30}
              height={30}
              
              alt="hero images"
              priority
              className="cursor-pointer image "
             
              
            />
    </div>
  )
}
