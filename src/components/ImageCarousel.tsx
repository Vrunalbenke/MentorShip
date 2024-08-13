"use client";
import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

interface ImageCarouselProps {
  image: StaticImageData[];
}
const ImageCarousel: React.FC<ImageCarouselProps> = ({ image }) => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2;
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width]);
  return (
    <motion.div
      className=" left-0 flex gap-4"
      ref={ref}
      style={{ x: xTranslation }}
    >
      {[...image, ...image].map((item, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden h-[100px] min-w-[100px]  rounded-xl flex justify-center items-center "
        >
          <Image
            src={item}
            alt={`${image}+${idx}`}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default ImageCarousel;
