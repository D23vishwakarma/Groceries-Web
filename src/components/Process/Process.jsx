import React from "react";
import Heading from "../Heading/Heading";
import { PiPlant, PiFactory, PiSealCheck, PiTruck } from "react-icons/pi";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";

function Process() {
  const renderSteps = steps.map((item) => {
    return (
      <div
        key={item.id}
        className={`relative flex flex-col justify-center items-center 
        w-full sm:w-1/2 lg:w-1/4 
        ${item.id % 2 === 0 ? "lg:-mt-90" : ""}`}
      >
        <span className="text-5xl sm:text-6xl w-14 h-14 sm:w-12 sm:h-12 rounded-full outline-[3px] outline-offset-4 sm:outline-offset-7 outline-zinc-800 outline-dashed flex items-center justify-center font-semibold bg-zinc-800 text-white">
          {item.number}
        </span>

        {item.id !== steps.length && (
          <div className="w-1 h-14 bg-gradient-to-b from-amber-500 to-zinc-300 mt-5 lg:hidden"></div>
        )}

        <div
          className="flex items-center gap-4 mt-5 mb-1 
          bg-white rounded-2xl p-4 shadow-md 
          w-full max-w-sm mx-auto
          lg:bg-transparent lg:p-0 lg:shadow-none lg:max-w-none
          lg:justify-center lg:gap-5"
        >
          <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white text-3xl font-bold shrink-0">
            <span>{item.icon}</span>
          </div>

          <div className="flex-1">
            <h4 className="font-bold text-zinc-800 text-xl pt-2 pb-1">
              {item.title}
            </h4>
            <p className="text-[0.9rem] text-zinc-500 max-w-[220px]">
              {item.para}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 py-12 md:py-20">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" content="Process" />
        </div>

        <div
          className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap
          gap-12 sm:gap-y-28 lg:gap-0
          mt-10 sm:mt-16 lg:mt-20
          pt-4 sm:pt-12 lg:pt-40"
        >
          {renderSteps}
        </div>
      </div>
    </section>
  );
}

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <PiSealCheck />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <PiTruck />,
  },
];