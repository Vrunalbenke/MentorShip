import React from "react";

export default function GradientCard2() {
  return (
    // <div className="relative border-red-600 flex justify-center items-center w-3/5 h-2/5 rounded-xl overflow-hidden  ">
    <div className="relative bg-neutral-900 overflow-hidden rounded-xl">
      <div className="w-[500px] h-[500px] absolute bottom-[-70%] right-[-5%] bg-[#3F3CD5] rounded-full"></div>
      <div className="relative  grid grid-cols-2  rounded-xl  gap-10 p-10 backdrop-filter bg-transparent backdrop-blur-[100px] ">
        <div className=" bg-neutral-900 border border-slate-500 aspect-video rounded-xl flex justify-center items-center ">
          <p>insert video of mentor match pages</p>
        </div>
        <div className="text-left pr-40 space-y-10">
          <div className="text-start text-6xl font-bold ">
            Use AI to perfect your choice
          </div>
          <div className="text-start text-xl text-[#C6C6C6] ">
            AI will provide you a percent score on your compatibility with
            available mentors, based on their information provided to you and
            more.
          </div>
        </div>
      </div>
    </div>
  );
}
