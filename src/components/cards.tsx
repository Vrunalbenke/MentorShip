import React from "react";

type GradientCardProps = {
  title: string;
  description: string;
  reverse?: boolean;
  gradientFrom: string;
  gradientTo: string;
  gradientDirection: string;
};
const GradientCard = ({
  title,
  description,
  reverse = false,
  gradientFrom,
  gradientTo,
  gradientDirection = "to-r",
}: GradientCardProps) => {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } w-full rounded-lg overflow-hidden bg-neutral-900 p-6  ${gradientFrom}  from-0% to-30% ${gradientTo} bg-gradient-${gradientDirection}`}
    >
      <div
        className={` ${
          reverse ? "flex-row-reverse" : "flex-row"
        } w-1/2 p-6 flex  flex-row justify-center items-center py-10 ${
          reverse ? "pr-50" : "pl-50"
        } `}
      >
        <div className="flex-1 bg-slate-400 " />
        <div className="flex-1 flex-col ">
          <h2
            className={`text-5xl font-bold  text-white text-wrap ${
              reverse ? "text-start" : "text-end"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-white text-md  ${
              reverse ? "text-start" : "text-end"
            } text-wrap`}
          >
            {description}
          </p>
        </div>
      </div>
      <div
        className={`w-1/2 flex aspect-video border border-white rounded-xl justify-center items-center ${
          reverse ? "mr-10" : "ml-10"
        }`}
      >
        <p className="text-white text-center">
          insert video of mentor match pages
        </p>
      </div>
    </div>
  );
};

export default GradientCard;
