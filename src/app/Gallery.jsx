import React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data.js";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Gallery() {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="   h-full grid  content-center    md:content-start mt-2 w-full">
      <div className=" w-[90%] m-auto h-fit flex flex-col items-center ">
        <motion.img
          key={page}
          className=" aspect-video  object-cover w-full max-w-5xl"
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />

        <div className=" w-[100%] max-w-5xl m-auto h-[100%] flex   bg-white">
          <div
            className=" p-2 w-[10%] flex items-center text-5xl justify-center bg-gray-200  hover:bg-primary-navy rotate-180 hover:text-white"
            onClick={() => paginate(1)}
          >
            {"‣"}
          </div>
          <div className=" p-3">
            <h2 className=" text-2xl  font-medium">Lorem Ipsum.</h2>
            <p className=" text-xs font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make.
            </p>
          </div>
          <div
            className=" p-2 w-[10%] flex items-center justify-center text-5xl bg-gray-200 hover:bg-primary-navy hover:text-white"
            onClick={() => paginate(-1)}
          >
            {"‣"}
          </div>
        </div>
      </div>
    </div>
  );
}
