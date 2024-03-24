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
                        TrumpWiFRedHat
                    </span>{" "}
                    Our Fight Has Only Just Begun. We Are One Movement, <br />{" "}
                    One People, One Family{" "}
                </h1>
                <p className="text-[#fff] w-auto lg:w-[1250px]  font-light text-[16px] ">
                    Launched on March 24th, 2024. Committed to making America 🇺🇸
                    great again
                </p>
                <div className="flex items-center gap-[24px]"></div>
                <div>
                    <video
                        className="w-full max-w-[1900px] h-full lg:h-[700px] max-h-[700px] mt-[25px] mb-[20px]"
                        autoPlay
                        poster="/thumb.png"
                        preload="metadata"
                    >
                        <source src="/meme.mp4" type="video/mp4" />
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
                    SOL : 5XvdySCuxYn7v51tmNwQ491pNKmEcMsGfN8arPtXB6ch
                </div>
            </div>

            <div className="flex items-center  justify-center">
                <a
                    href="https://www.pump.fun/5XvdySCuxYn7v51tmNwQ491pNKmEcMsGfN8arPtXB6ch"
                    className="h-[45px] bg-[#fff] rounded-lg text-[#111111] w-[130px] my-[10px] cursor-pointer image "
                >
                    Buy with $SOL
                </a>
            </div>

            <div className="bg-[#061936] h-[40vh] my-[50px]  flex items-center text-center justify-center flex-col">
                <h1 className="font-bold  text-[46px]">Tokenomics</h1>

                <p>
                    {/* <span className="text-[#bb133e]">(0%)</span>  */}
                    Its up to the community now
                </p>

                {/* <p>
          <span className="text-[#bb133e]">(10%)</span> Marketing,
          Development
        </p>
        <p>
          <span className="text-[#bb133e]">(90%)</span> Liquidity
        </p> */}
                <p>
                    The 45th President will be the{" "}
                    <span className="font-semibold"> 47th President.</span>{" "}
                    That’s why we have 47 Million Max Supply.
                </p>

                <h1 className="font-bold  text-[24px] text-[#000] rounded-lg bg-[#fff] py-[7px] px-[10px] my-[20px]">
                    47,000,000 Supply
                </h1>
            </div>
            <Footerlayout />
        </main>
    );
}
