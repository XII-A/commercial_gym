"use client";
import React from "react";
import person1 from "../../../public/person1.png";
import person2 from "../../../public/person2.png";
import person3 from "../../../public/person3.png";
import Image from "next/image";
import ReviewCard from "./ReviewCard";
import { FiArrowRight } from "react-icons/fi";

const SectionFour = () => {
  const [active, setActive] = React.useState(0);
  const reviews = [
    {
      ratingValue: 5,
      description:
        "I absolutely love this gym! The facilities are top-notch, and the atmosphere is motivating. The staff is friendly and always ready to help. It's a perfect place to achieve your fitness goals.",
      personImage: person1,
      personName: "Alice M.",
      personRole: "Fitness Enthusiast",
    },
    {
      ratingValue: 3.5,
      description:
        "The gym is fantastic! The equipment is modern, and the classes are diverse. I've seen incredible results since I started coming here. The trainers are knowledgeable and create personalized workouts. Highly recommend!",
      personImage: person2,
      personName: "Bob R.",
      personRole: "Regular Member",
    },
    {
      ratingValue: 4.5,
      description:
        "Joining this gym was one of the best decisions I've made. The facility is spacious, clean, and well-maintained. The staff is supportive, and the variety of classes keeps me engaged. It's a welcoming environment",
      personImage: person3,
      personName: "Frinando D. T.",
      personRole: "Fitness Trainer",
    },
  ];
  return (
    <div className="grid grid-cols-2  w-full px-32 mt-16 mb-4">
      <div className=" h-[300px]">
        <div className="flex flex-col justify-between items-start font-urban text-white h-full relative">
          <div className="text-[40px] font-bold w-3/4">
            What our Member Say About Us?
          </div>
          <div className="flex flex-col gap-2">
            <div class="flex -space-x-4 rtl:space-x-reverse">
              <Image
                className="w-10 h-10 border-2 border-white rounded-full "
                src={person1}
                alt=""
                width={0}
                height={0}
              />
              <Image
                class="w-10 h-10 border-2 border-white rounded-full "
                src={person2}
                alt=""
                width={0}
                height={0}
              />
              <Image
                class="w-10 h-10 border-2 border-white rounded-full "
                src={person3}
                alt=""
                width={0}
                height={0}
              />
            </div>
            <div className="font-medium text-sm">10K+ Satisfied Customer</div>
          </div>
          <div className="text-[110px] opacity-10 text-white font-urban font-bold absolute top-0 left-[-250px]">
            Testimonial
          </div>
        </div>
      </div>
      <div class="relative w-full h-full ">
        <div className="h-[310px]">
          {reviews.map((item, i) => {
            return (
              <ReviewCard
                id={i}
                active={i == active ? true : false}
                ratingValue={item.ratingValue}
                personRole={item.personRole}
                personName={item.personName}
                description={item.description}
                personImage={item.personImage}
              />
            );
          })}
        </div>
        <div className="absolute top-1/2 right-0">
          <button
            type="button"
            class="text-white bg-primary-default hover:bg-primary-dark hover:ring-primary-dark   font-medium ring-1 ring-primary-default rounded-full text-sm p-2.5 text-center inline-flex items-center  "
            onClick={() => {
              if (active === 2) {
                setActive(0);
              } else {
                setActive(active + 1);
              }
            }}
          >
            <FiArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
