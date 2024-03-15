import Image from "next/image";
import Star from "./components/star";
import Link from "next/link";
import { Header } from "./components/header";
import { Footerlayout } from "./components/footerlayout";

export default function Home() {
  return (
    <main className=" lg:px-[0]">
      <Header />
      <div className="bg-[url('/logo/usa.png')] bg-opacity-5 w-full h-[700px]  absolute z-[-1] opacity-5"></div>
      <div className="flex items-center text-center justify-start flex-col  ">
        <h1 className="text-[#fff]  w-auto lg:w-[1250px] font-semibold px-[15px] lg:px-[0] text-[30px] lg:text-[40px] mt-[50px]  ">
          {" "}
          <span className="bg-[#d83131] rounded-[8px] w-[145px] h-[47px] p-[10px] ">
            TrumpWifRedHat
          </span>{" "}
          Movement on the Blockchain. <br /> for those who think ahead.{" "}
        </h1>
        <p className="text-[#fff] w-auto lg:w-[1250px]  font-light text-[16px] ">
          Launched on August 11th, 2023. The only active cryptocurrency donating
          to U.S. veterans and protecting children.
        </p>
        <div className="flex items-center gap-[24px]"></div>
        <div>
          <video
            className="w-full max-w-[1900px] h-full lg:h-[700px] max-h-[700px] mt-[25px] mb-[20px]"
            controls
            autoPlay
            preload="none"
          >
            <source src="/path/to/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="flex items-center text-center justify-center font-normal text-[36px] flex-col gap-[30px]">
        <Star />
        <h1 className="font-bold  tracking-[11px] text-[20px] lg:text-[46px]">
          TrumpWifRedHat
        </h1>
        <h1 className="font-thin  tracking-[10px] text-[16px]">
          Make Crypto Great again!
        </h1>
        <div className="border-[2px] rounded-[8px] px-[10px] text-[10px] lg:text-[16px] py-[10px] flex ">
          SOL : EFzmBNRFz8cDpUrN8vMjh7jQexiWQr5E7LTzH9vokLMN
        </div>
      </div>

      <div className="flex items-center  justify-center">
        <button className="h-[45px] bg-[#fff] rounded-lg text-[#111111] w-[130px] my-[10px] cursor-pointer image ">
          Buy with $SOL
        </button>
      </div>

      <div className="bg-[#061936] h-[40vh] my-[50px]  flex items-center text-center justify-center flex-col">
        <h1 className="font-bold  text-[46px]">Tokenomics</h1>
        <p>
          <span className="text-[#bb133e]">(1%)</span> Tax on Buys, Sells, &
          Transfers
        </p>
        <p>
          <span className="text-[#bb133e]">(0.40%)</span> U.S. Vets and Child
          Rescue Donations
        </p>
        <p>
          <span className="text-[#bb133e]">(0.60%)</span> Marketing,
          Development, and Adding Liquidity
        </p>

        <h1 className="font-bold  text-[24px] text-[#000] rounded-lg bg-[#fff] py-[7px] px-[10px] my-[20px]">
          47,000,000 Supply
        </h1>
      </div>
      <Footerlayout />
    </main>
  );
}
