import React from "react";

export default function GradientCard3() {
  return (
    // <div className="relative border-red-600 flex justify-center items-center w-3/5 h-2/5 rounded-xl overflow-hidden  ">
    <div className="relative bg-neutral-900 overflow-hidden rounded-xl">
      <div className="w-[500px] h-[500px] absolute left-[30%] bg-[#DA44FF] rounded-full"></div>
      <div className="relative  grid grid-cols-2  rounded-xl  gap-10 p-10 backdrop-filter bg-transparent backdrop-blur-[100px] ">
        <div className="text-end pl-20   content-center space-y-10">
          <div className="text-end text-6xl font-bold ">
            Find opportunities and teammates
          </div>
          <div className="text-end text-xl text-[#C6C6C6] ">
            Mentors and labs at institutions will post opportunities for you to
            work with them on their projects. You can also find people to work
            with on your project.
          </div>
        </div>
        <div className=" border border-slate-500 aspect-video rounded-xl flex justify-center items-center  bg-neutral-900 ">
          <p>insert video of mentor match pages</p>
        </div>
      </div>
    </div>
  );
}
