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
          {/* <Cap /> */}
          <Dex />
          <X />
          <Logo />
          <Telegram/>
          
          {/* <Gecko /> */}

          <Soloscan />
        </div>
      </header>

    </div>
  )
}


