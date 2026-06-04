import React from "react";
import Button from "../Button/Button";
import freshfruit from '../../assets/fresh-fruits.png'

export default function Discount() {
  return (
    <div className=" relative max-w-[1300px] mx-auto overflow-hidden rounded-xl bg-zinc-100 flex items-center px-6 py-6 gap-6">

      {/* Left: Vertical 20% */}
      <div className="flex-shrink-0 select-none">
        <span
          className="text-7xl font-black leading-none"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
            color: "#f97316",
            display: "inline-block",
          }}
        >
          20%
        </span>
      </div>

      {/* Center: Text */}
      <div className="flex-1">
        <h2 className="text-4xl font-black text-gray-900 leading-tight mb-2">
          First Order<br />Discount!
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-5">
          Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big
          on your first purchase. Fast delivery and quality guaranteed.
        </p>
        <Button name="Get Discount"/>
      </div>

      {/* Right: Your image goes here */}
      <div className="absolute top-0 right-0 h-full w-140 hidden sm:block">
        <img
          src={freshfruit}
          className="w-full h-full"
        />
      </div>

    </div>
  );
}