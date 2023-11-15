import React from "react";
import workout1 from "../../../public/workout1.jpg";
import workout2 from "../../../public/workout2.jpg";
import workout3 from "../../../public/workout3.jpg";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
const SectionTwo = () => {
  return (
    <div className="grid grid-cols-2  w-full px-32 mt-16 ">
      <div className=" relative h-[500px]">
        <Image
          src={workout1}
          width={400}
          height={400}
          alt="workout 1"
          style={{
            position: "absolute",
            borderRadius: "12px",
          }}
        />
        <Image
          src={workout2}
          width={300}
          height={250}
          alt="workout 2"
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            borderRadius: "12px",
          }}
        />
        <Image
          src={workout3}
          width={300}
          height={220}
          alt="workout 1"
          style={{
            position: "absolute",
            top: "60%",
            left: "20%",
            borderRadius: "12px",
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-start font-urban text-white p-11">
        <div className="text-6xl font-bold mb-6 leading-tight">
          Transform your physique with our fitness plan.
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row text-primary-default">
            <IoIosCheckmarkCircle size={24} />
            <div className="font-medium text-base text-white ml-4">
              Increase Muscle and Strength
            </div>
          </div>
          <div className="flex flex-row text-primary-default">
            <IoIosCheckmarkCircle size={24} />
            <div className="font-medium text-base text-white ml-4">
              Be Healthier than before
            </div>
          </div>
          <div className="flex flex-row text-primary-default">
            <IoIosCheckmarkCircle size={24} />
            <div className="font-medium text-base text-white ml-4">
              Increase Stamina
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-6 font-urban font-medium gap-2">
          <button
            className={`bg-primary-default transition-all hover:bg-primary-dark text-white px-4 py-1.5 rounded-lg border border-primary-default hover:border-primary-dark `}
          >
            Join now
          </button>
          <button
            className={`bg-transparent transition-all hover:bg-white hover:text-black text-white px-4 py-1.5 rounded-lg border border-white hover:border-white  `}
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
