import Image from 'next/image'
import Link from 'next/link'
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
     <Link href="https://twitter.com/trumpwifredhat" target='_blank'> 
         <Image
              src="/logo/xlogo.png"
              width={40}
              height={40}
              
              alt="hero images"
              priority
              className="cursor-pointer  image lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] "
              
            />
             </Link>
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
