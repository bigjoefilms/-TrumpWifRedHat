import React from 'react'
import { Footer } from './footer'

export const Footerlayout = () => {
  return (
    <div>
         <footer className="flex px-[10px] items-center flex-col  my-[60px] gap-[10px] text-center justify-center ">
        <div className="rounded-[50%] bg-[url('/logo.jpeg')] w-[110px] h-[110px] border-[2px] border-[#fff] bg-cover bg-no-repeat bg-center image"></div>
        <h1 className="font-bold  text-[16px] text-[#fff] rounded-lg border border-[#fff] py-[7px] px-[10px] my-[20px] image cursor-pointer">
          Privacy policy
        </h1>
        <p className="text-[#fff] text-[16px] my-[10px] underline cursor-pointer">
          contact@trumpwifredhat@gmail.com 
        </p>

        <Footer/>
        <p className="w-full max-w-[800px] font-thin text-[14px] ">
          Please be advised that TrumpifRedHat memecoin is a cryptocurrency
          created for entertainment purposes and{" "}
          <span className="font-semibold underline">
            is not affiliated with or endorsed by Donald J. Trump.
          </span>{" "}
          While TrumpifRedHat memecoin may reference or incorporate elements
          related Trump’s persona, image, or likeness, it does not imply any
          direct endorsement, partnership, or approval by Trump. Any resemblance
          or association between MAGA Memecoin and Donald J. Trump is purely
          coincidental and intended for satirical or humorous purposes.
        </p>
      </footer>

    </div>
  )
}
