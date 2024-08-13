import React from "react";

type GradientCardProps = {
  bgColor: string;
  bgPosition: React.CSSProperties;
  gradientPosition?: React.CSSProperties;
  title: string;
  description: string;
  isVideoLeft: boolean;
};

const GradientCard = ({
  bgColor,
  bgPosition,
  title,
  description,
  isVideoLeft = false,
}: GradientCardProps) => {
  return (
    <div className="relative bg-neutral-900 overflow-hidden rounded-xl p-10 mb-10">
      {/* Background color circle */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-50"
        style={{
          backgroundColor: bgColor,
          ...bgPosition,
        }}
      />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-2 gap-10">
        {isVideoLeft ? (
          <>
            <VideoContainer />
            <TextContent title={title} description={description} isLeft />
          </>
        ) : (
          <>
            <TextContent title={title} description={description} />
            <VideoContainer />
          </>
        )}
      </div>
    </div>
  );
};

const TextContent = ({ title, description, isLeft = false }:any) => (
  <div className={`${isLeft ? "text-left" : "text-right"} space-y-10`}>
    <h2 className="text-6xl text-white">{title}</h2>
    <p className="text-md text-[#C6C6C6]">{description}</p>
  </div>
);

const VideoContainer = () => (
  <div className="bg-neutral-900 border border-slate-500 aspect-video rounded-xl flex justify-center items-center">
    <p className="text-white">insert video of mentor match pages</p>
  </div>
);

export default GradientCard;
