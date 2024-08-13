import React from "react";

export default function GradientCard1() {
  return (
    // <div className="relative border-red-600 flex justify-center items-center w-3/5 h-2/5 rounded-xl overflow-hidden  ">
    <div className="relative bg-neutral-900 overflow-hidden rounded-xl">
      <div className="w-[500px] h-[500px] absolute top-[-55%] left-[-5%] bg-[#9864da] rounded-full"></div>
      <div className="relative  grid grid-cols-2  rounded-xl  gap-10 p-10 backdrop-filter bg-transparent backdrop-blur-[100px] ">
        <div className="text-end pl-40   content-center space-y-10">
          <div className="text-end text-6xl font-bold  ">
            Work with professionals
          </div>
          <div className="text-end text-xl text-[#C6C6C6] ">
            Our mentors are researchers and industry pioneers that can help you
            on your project. Select a mentor as you see fit, not as we do.
          </div>
        </div>
        <div className=" bg-neutral-900 border border-slate-500 aspect-video rounded-xl flex justify-center items-center ">
          <p>insert video of mentor match pages</p>
        </div>
      </div>
    </div>
  );
}
