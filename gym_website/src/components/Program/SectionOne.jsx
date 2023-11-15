"use client";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Slider from "./Slider";
const CardSlider = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 305;
    if (selectedCard === 0) {
      //Return to last card
      setSelectedCard(9);
      slider.scrollLeft = 305 * 9;
      return;
    }

    setSelectedCard(selectedCard - 1);
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 305;
    if (selectedCard === 9) {
      //Return to first card
      setSelectedCard(0);
      slider.scrollLeft = 0;
      return;
    }
    setSelectedCard(selectedCard + 1);
  };
  return (
    <div className="w-full">
      <div className="px-32 py-4">
        <div className="flex flex-row justify-between items-center relative">
          <div className="text-[56px] font-bold font-urban text-white">
            Explore Our Program
          </div>
          <div className="flex flex-row items-center gap-3">
            <button
              type="button"
              class="text-white bg-transparent hover:bg-white hover:text-black  ring-1 ring-white  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  "
              onClick={() => slideLeft()}
            >
              <FiArrowLeft size={32} />
            </button>
            <button
              type="button"
              class="text-white bg-primary-default hover:bg-primary-dark hover:ring-primary-dark   font-medium ring-1 ring-primary-default rounded-full text-sm p-2.5 text-center inline-flex items-center  "
              onClick={() => slideRight()}
            >
              <FiArrowRight size={32} />
            </button>
          </div>
        </div>
        <div className="text-[144px] opacity-10 text-white font-urban font-bold absolute top-0 left-[-21px]">
          Program
        </div>
      </div>
      <div className="px-2">
        <Slider seletedCard={selectedCard} />
      </div>
    </div>
  );
};

export default CardSlider;
