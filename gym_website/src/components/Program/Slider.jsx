"use clinet";
import Card from "./Card";
import { IoFitness } from "react-icons/io5";
import { GiMuscleUp } from "react-icons/gi";
import { GiNinjaArmor } from "react-icons/gi";
import { GiWeightScale } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { GiPikeman } from "react-icons/gi";
import { GiNightSleep } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { GiStrongMan } from "react-icons/gi";
import { MdOutlineSocialDistance } from "react-icons/md";
const Slider = ({ seletedCard }) => {
  const benefitsArray = [
    {
      title: "Cardiovascular Health",
      description:
        "Enhance your heart health and improve blood circulation with cardio exercises. Boost endurance and stamina for a healthier lifestyle.",
      icon: <IoFitness size={32} />,
    },
    {
      title: "Strength Training",
      description:
        "Build muscle strength and tone your body through targeted strength training exercises. Achieve a lean and sculpted physique.",
      icon: <GiMuscleUp size={32} />,
    },
    {
      title: "Flexibility Improvement",
      description:
        "Increase your flexibility and range of motion with stretching exercises. Enhance athletic performance and reduce the risk of injuries.",
      icon: <GiNinjaArmor size={32} />,
    },
    {
      title: "Weight Management",
      description:
        "Manage and control your weight effectively through a combination of proper nutrition and tailored workout routines. Achieve your fitness goals.",
      icon: <GiWeightScale size={32} />,
    },
    {
      title: "Mental Well-being",
      description:
        "Experience the mental benefits of regular exercise, including stress reduction, improved mood, and increased overall well-being.",
      icon: <RiMentalHealthFill size={32} />,
    },
    {
      title: "Improved Posture",
      description:
        "Correct and enhance your posture with exercises that strengthen core muscles. Reduce back pain and feel more confident in your daily activities.",
      icon: <GiPikeman size={32} />,
    },
    {
      title: "Better Sleep",
      description:
        "Enjoy improved sleep quality by incorporating regular physical activity into your routine. Experience deeper and more restful sleep.",
      icon: <GiNightSleep size={32} />,
    },
    {
      title: "Increased Energy",
      description:
        "Boost your energy levels and combat fatigue with a consistent fitness regimen. Feel more energized and productive throughout the day.",
      icon: <SlEnergy size={32} />,
    },
    {
      title: "Joint Health",
      description:
        "Promote joint health and flexibility with exercises that support the proper function of your joints. Enhance mobility and reduce stiffness.",
      icon: <GiStrongMan size={32} />,
    },
    {
      title: "Social Connection",
      description:
        "Foster a sense of community and social connection by joining group classes or workout sessions. Stay motivated and make fitness enjoyable.",
      icon: <MdOutlineSocialDistance size={32} />,
    },
  ];
  return (
    <div className="relative flex items-center ">
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {benefitsArray &&
          benefitsArray.map((item, i) => (
            <div className="inline-block p-2 whitespace-normal">
              <Card
                selected={seletedCard === i}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Slider;
