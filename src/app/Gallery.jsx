import React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data.js";

const variants = {
  enter: {
    opacity: 0,
  },

  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,

    opacity: 0,
  },
};

export default function Gallery() {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="   h-full   overflow-y-auto mt-2  ">
      <div className=" w-[90%] m-auto h-fit flex relative  flex-col items-center ">
        <AnimatePresence initial={false}>
          <motion.img
            key={page}
            className=" absolute  aspect-video w-[100%] max-w-5xl "
            src={images[imageIndex]}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.75 },
            }}
          />
          <div className=" relative  aspect-video w-[100%] max-w-5xl "></div>
        </AnimatePresence>

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
