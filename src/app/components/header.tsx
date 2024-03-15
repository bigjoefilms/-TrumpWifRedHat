import React from 'react'
import {
    Cap,
    Dex,
    Gecko,
    Logo,
    Soloscan,
    Telegram,
    X,
  } from "../components/images";
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div>
        <header className=" h-[120px] lg:h-[250px] flex items-center text-center justify-center p-[20px]">
        <div className=" gap-[20px] lg:mt-[20px] flex items-center lg:gap-[40px] ">
          <Cap />
          <Dex />
          <X />
          <Logo />
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
          <Gecko />

          <Soloscan />
        </div>
      </header>

    </div>
  )
}
