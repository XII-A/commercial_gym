import Image from "next/image";
import ContainedButton from "../components/NavBar/ContainedButton";

export default function Home() {
  return (
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
          <ContainedButton
            label={"Start Training"}
            extraClassNames={"mx-1 font-semibold text-xs"}
          />
          <button class="hover:pointer py-2 px-4 rounded inline-flex items-center">
            <svg
              className="w-4 h-4 m-3 text-blue-400 rounded-full outline outline-offset-4 outline-color-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="text-xs ml-1 text-white">Watch Demo</span>
          </button>
        </div>
      </div>

      <div className="relative px-[42px] mr-[42px] w-[100%] flex justify-start items-start inline-flex">
        <div className="justify-center items-center gap-2.5 inline-flex">
          <img className="z-10"  src="../alkfiuha.png" />
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
  );
}
