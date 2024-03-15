import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const X = () => {
  return (
    <div>
         <Image
              src="/logo/xlogo.png"
              width={40}
              height={40}
              
              alt="hero images"
              priority
              className="cursor-pointer  image lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] "
              
            />
    </div>
  )
}
export const Logo = () => {
    return (
      <div className="rounded-[50%] bg-[url('/logo.jpeg')] w-[70px] h-[70px] lg:w-[250px]  lg:h-[250px] border-[2px] border-[#fff] bg-cover bg-no-repeat bg-center image">
          
      </div>
    )
  }

export const Telegram = () => {
    return (
      <div>
        <Link href="https://t.me/TrumpWifRedHat" target='_blank'>
            <Image
              src="/logo/telegram.png "
              width={40}
              height={40}
              alt="hero images"
              priority
              className="cursor-pointer image lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] "
             
              
            />
            </Link>
      </div>
    )
  }
  
  export const Cap = () => {
    return (
      <div>
          <Image
              src="/logo/cap.png"
              width={40}
              height={40}
              
              alt="hero images"
              priority
             
              className="cursor-pointer image lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] "
            />
      </div>
    )
  }
  
  export const Dex = () => {
    return (
      <div>
          <Image
              src="/logo/dex.png"
              width={40}
              height={40}
              
              alt="hero images"
              priority
              className="cursor-pointer image lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] "
              
            />
      </div>
    )
  }
  
  export const Gecko = () => {
    return (
      <div>
           <Image
              src="/logo/gecko.png"
              width={40}
              height={40}
              
              alt="hero images"
              priority
              className="cursor-pointer image lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] "
              
            />
      </div>
    )
  }

  export const Soloscan = () => {
    return (
      <div>
          <Image
              src="/logo/soloscan.png"
              width={40}
              height={40}
              
              alt="hero images"
              priority
              className="cursor-pointer image lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] "
             
              
            />
      </div>
    )
  }
  