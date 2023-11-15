import Image from "next/image";
import PlayButton from "public/PlayButton.svg";
import ContainedButton from "../components/NavBar/ContainedButton";

export default function Home() {
  return (
    <div>
      <div className="flex items-center px-32">
        <div>
          <div className="flex text-7xl font-semibold items-center justify-center py-2 text-white ">
            Helps for your ideal body fitness
          </div>
          <div className=" text-white text-opacity-50 text-xl font-light pb-6">
            Motivate users with benefits and positive reinforcement, and offer
            modifications and progress tracking.
          </div>
          <div className="flex items-center">
            <ContainedButton
              label={"Start Training"}
              extraClassNames={"mx-2 font-semibold text-xl"}
            />
            <button class="hover:pointer py-2 px-4 rounded inline-flex items-center">
              <Image
                src={PlayButton}
                className="w-14 h-14 m-3 ring-1 ring-white  font-medium rounded-full p-2.5 text-center inline-flex items-center"
              />

              <span className="ml-1 text-white text-xl">Watch Demo</span>
            </button>
          </div>
        </div>

        <div className="relative px-[3rem] mr-[2rem] w-[100%] flex justify-center items-start inline-flex">
          <div className=" justify-center items-center gap-2.5 inline-flex">
            <img className="z-10 w-[35rem]" src="../alkfiuha.png" />
          </div>

          <div className="absolute z-0 left-0 top-[14rem] text-white -rotate-90 text-opacity-10 text-9xl font-black ">
            Fitness
          </div>
          <div className="absolute right-0">
            <div className="relative w-[15rem] h-[10rem] justify-between items-start inline-flex">
              <div className="absolute left-[-3rem]">
                <img className="w-16 h-16 flex" src="../Ellipse 1.png" />
              </div>
              <div className="absolute left-[-5.5rem]">
                <img className="w-16 h-16 flex" src="../Ellipse 2.png" />
              </div>
              <div className="absolute left-[-8rem]">
                <img className="w-16 h-16 flex" src="../Ellipse 3.png" />
              </div>
              <div className="absolute w-[100%] top-[6rem] right-[8rem] text-white text-lg">
                10k+ satisfied customers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-col items-center px-32">
        <div className="flex text-2xl w-[30%] my-6 py-8 font-semibold items-center justify-start py-2 text-white ">
          What Our Members Say About Us
        </div>
        
        <div className="absolute z-0 left-[-25px] top-0 text-white text-opacity-10 text-7xl font-black ">Testimonial</div>
        <div>
            <div className="relative w-[160px] h-[60px] justify-between items-start inline-flex">
              <div className="absolute top-[-50px]">
                <img className="w-10 h-10 flex" src="../Ellipse 1.png" />
              </div>
              <div className="absolute z-10 top-[-50px] left-[47px]">
                <img className="w-10 h-10 flex" src="../Ellipse 2.png" />
              </div>
              <div className="absolute top-[-50px] left-[22px]">
                <img className="w-10 h-10 flex" src="../Ellipse 3.png" />
              </div>
              <div className=" text-white text-xs">
                10k+ satisfied customers
              </div>
              </div>
              </div>
      </div>
    </div>
  );
}
