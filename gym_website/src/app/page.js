import Image from "next/image";
import PlayButton from "public/PlayButton.svg";
import ContainedButton from "../components/NavBar/ContainedButton";
import SectionOne from "@/components/Program/SectionOne";
import SectionTwo from "@/components/Transform/SectionTwo";
import SectionThree from "@/components/Enhance/SectionThree";
import SectionFour from "@/components/Reviews/SectionFour";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="flex items-center px-32">
        <div className="w-[100%]">
          <div className="flex text-4xl font-semibold items-center justify-center py-2 text-white ">
            Helps for your ideal body fitness
          </div>
          <div className=" text-white text-opacity-50 text-sm font-light pb-6">
            Motivate users with benefits and positive reinforcement, and offer
            modifications and progress tracking.
          </div>
          <div className="flex items-center">
            <button
              className={`bg-primary-default transition-all hover:bg-primary-dark text-white px-4 py-1.5 rounded-lg border border-primary-default hover:border-primary-dark `}
            >
              Start Training
            </button>
            <button class="hover:pointer py-2 px-4 rounded inline-flex items-center">
              <div class="text-primary-default bg-transparent hover:bg-white hover:text-black  ring-1 ring-white  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                <FaPlay />
              </div>
              <span className="text-xs ml-1 text-white">Watch Demo</span>
            </button>
          </div>
        </div>

        <div className="relative px-[42px] mr-[42px] w-[100%] flex justify-start items-start inline-flex">
          <div className="justify-center items-center gap-2.5 inline-flex">
            <img className="z-10" src="../alkfiuha.png" />
          </div>

          <div className="absolute z-0 right-[160px] top-[140px] text-white -rotate-90 text-opacity-10 text-8xl font-black ">
            Fitness
          </div>
          <div className="absolute right-0">
            <div className="relative w-[160px] h-[100%] justify-between items-start inline-flex">
              <div className="absolute right-[72px]">
                <img className="w-10 h-10 flex" src="../Ellipse 1.png" />
              </div>
              <div className="absolute right-[47px]">
                <img className="w-10 h-10 flex" src="../Ellipse 2.png" />
              </div>
              <div className="absolute right-[22px]">
                <img className="w-10 h-10 flex" src="../Ellipse 3.png" />
              </div>
              <div className="absolute top-[50px] left-[50px] text-white text-xs">
                10k+ satisfied customers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" min-h-screen py-2 ">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </>
  );
}
