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
    <div className="   h-full   overflow-y-auto mt-2 flex  flex-col ">
      <div className="w-[90%]  pt-6 m-auto h-fit flex relative flex-col md:flex-row  items-center justify-between ">
        <div className=" text-[32px] font-bold w-full text-left ">
          This is our work
        </div>
        <div className=" max-md:w-full    max-md:mt-4 text-sm md:text-base font-bold flex bg-white ">
          <div className="p-2 px-3 text-primary-yellow bg-primary-navy">
            All
          </div>
          <div className="p-2 px-3">Branding</div>
          <div className="p-2 px-3 whitespace-nowrap">Digital marketing</div>
          <div className="p-2 px-3">SEO</div>
        </div>
      </div>
      <div className=" h-[90%] w-full flex md:items-center">
        <div className=" md:w-[90%]  w-[100%]  max-md:pt-14 mx-auto  md:m-auto h-fit flex relative  flex-col md:items-center ">
          <AnimatePresence initial={false}>
            <motion.img
              key={page}
              className=" absolute  aspect-video w-[100%] md:max-w-7xl "
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
            <div className=" relative  aspect-video w-[100%] md:max-w-5xl "></div>
          </AnimatePresence>

          <div className=" w-[100%] md:max-w-7xl m-auto h-[100%]  flex  flex-col md:flex-row  bg-white">
            <div className=" px-5 block h-full md:hidden py-7">
              <h2 className=" text-2xl  font-medium">Lorem Ipsum.</h2>
              <br />
              <p className=" text-[15px] leading-7 font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make.
              </p>
            </div>
            <div className="flex md:hidden w-full">
              <div
                className=" w-full   md:hidden group p-2 md:w-[10%] hover:fill-primary-yellow flex items-center text-5xl justify-center bg-gray-200  hover:bg-primary-navy rotate-180 hover:text-white"
                onClick={() => paginate(1)}
              >
                <svg
                  width="18"
                  height="33"
                  viewBox="0 0 18 33"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.3092 17.3679C17.4477 17.2306 17.5576 17.0671 17.6326 16.8871C17.7076 16.707 17.7463 16.5139 17.7463 16.3188C17.7463 16.1237 17.7076 15.9306 17.6326 15.7505C17.5576 15.5705 17.4477 15.407 17.3092 15.2697L2.53281 0.493302C2.39504 0.355526 2.23148 0.246239 2.05147 0.171677C1.87146 0.0971148 1.67853 0.0587389 1.48369 0.0587389C1.28885 0.0587389 1.09591 0.0971147 0.915905 0.171677C0.735897 0.246239 0.572337 0.355526 0.434564 0.493301C0.296792 0.631073 0.187504 0.794632 0.112942 0.974642C0.0383798 1.15465 4.09549e-06 1.34758 4.06994e-06 1.54242C4.04439e-06 1.73726 0.0383797 1.93019 0.112942 2.1102C0.187504 2.29021 0.296791 2.45377 0.434564 2.59154L14.1766 16.3188L0.434561 30.0461C0.156316 30.3243 2.40299e-07 30.7017 1.94562e-07 31.0952C1.48824e-07 31.4887 0.156316 31.8661 0.43456 32.1443C0.712805 32.4225 1.09019 32.5789 1.48368 32.5789C1.87718 32.5789 2.25456 32.4225 2.53281 32.1443L17.3092 17.3679Z" />
                </svg>
              </div>
              <div
                className=" w-full  md:block p-2 group md:w-[10%] flex  hover:fill-primary-yellow items-center justify-center text-5xl bg-gray-200 hover:bg-primary-navy hover:text-white"
                onClick={() => paginate(-1)}
              >
                <svg
                  width="18"
                  height="33"
                  viewBox="0 0 18 33"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.3092 17.3679C17.4477 17.2306 17.5576 17.0671 17.6326 16.8871C17.7076 16.707 17.7463 16.5139 17.7463 16.3188C17.7463 16.1237 17.7076 15.9306 17.6326 15.7505C17.5576 15.5705 17.4477 15.407 17.3092 15.2697L2.53281 0.493302C2.39504 0.355526 2.23148 0.246239 2.05147 0.171677C1.87146 0.0971148 1.67853 0.0587389 1.48369 0.0587389C1.28885 0.0587389 1.09591 0.0971147 0.915905 0.171677C0.735897 0.246239 0.572337 0.355526 0.434564 0.493301C0.296792 0.631073 0.187504 0.794632 0.112942 0.974642C0.0383798 1.15465 4.09549e-06 1.34758 4.06994e-06 1.54242C4.04439e-06 1.73726 0.0383797 1.93019 0.112942 2.1102C0.187504 2.29021 0.296791 2.45377 0.434564 2.59154L14.1766 16.3188L0.434561 30.0461C0.156316 30.3243 2.40299e-07 30.7017 1.94562e-07 31.0952C1.48824e-07 31.4887 0.156316 31.8661 0.43456 32.1443C0.712805 32.4225 1.09019 32.5789 1.48368 32.5789C1.87718 32.5789 2.25456 32.4225 2.53281 32.1443L17.3092 17.3679Z" />
                </svg>
              </div>
            </div>
            <div
              className="   md:flex group p-2 hidden w-[10%] hover:fill-primary-yellow  items-center text-5xl justify-center bg-gray-200  hover:bg-primary-navy rotate-180 hover:text-white"
              onClick={() => paginate(1)}
            >
              <svg
                width="18"
                height="33"
                viewBox="0 0 18 33"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.3092 17.3679C17.4477 17.2306 17.5576 17.0671 17.6326 16.8871C17.7076 16.707 17.7463 16.5139 17.7463 16.3188C17.7463 16.1237 17.7076 15.9306 17.6326 15.7505C17.5576 15.5705 17.4477 15.407 17.3092 15.2697L2.53281 0.493302C2.39504 0.355526 2.23148 0.246239 2.05147 0.171677C1.87146 0.0971148 1.67853 0.0587389 1.48369 0.0587389C1.28885 0.0587389 1.09591 0.0971147 0.915905 0.171677C0.735897 0.246239 0.572337 0.355526 0.434564 0.493301C0.296792 0.631073 0.187504 0.794632 0.112942 0.974642C0.0383798 1.15465 4.09549e-06 1.34758 4.06994e-06 1.54242C4.04439e-06 1.73726 0.0383797 1.93019 0.112942 2.1102C0.187504 2.29021 0.296791 2.45377 0.434564 2.59154L14.1766 16.3188L0.434561 30.0461C0.156316 30.3243 2.40299e-07 30.7017 1.94562e-07 31.0952C1.48824e-07 31.4887 0.156316 31.8661 0.43456 32.1443C0.712805 32.4225 1.09019 32.5789 1.48368 32.5789C1.87718 32.5789 2.25456 32.4225 2.53281 32.1443L17.3092 17.3679Z" />
              </svg>
            </div>
            <div className=" hidden md:block px-5 py-7">
              <h2 className=" text-2xl  font-medium">Lorem Ipsum.</h2>
              <p className=" text-xs font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make.
              </p>
            </div>
            <div
              className="  md:flex p-2 group w-[10%] hidden  hover:fill-primary-yellow items-center justify-center text-5xl bg-gray-200 hover:bg-primary-navy hover:text-white"
              onClick={() => paginate(-1)}
            >
              <svg
                width="18"
                height="33"
                viewBox="0 0 18 33"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.3092 17.3679C17.4477 17.2306 17.5576 17.0671 17.6326 16.8871C17.7076 16.707 17.7463 16.5139 17.7463 16.3188C17.7463 16.1237 17.7076 15.9306 17.6326 15.7505C17.5576 15.5705 17.4477 15.407 17.3092 15.2697L2.53281 0.493302C2.39504 0.355526 2.23148 0.246239 2.05147 0.171677C1.87146 0.0971148 1.67853 0.0587389 1.48369 0.0587389C1.28885 0.0587389 1.09591 0.0971147 0.915905 0.171677C0.735897 0.246239 0.572337 0.355526 0.434564 0.493301C0.296792 0.631073 0.187504 0.794632 0.112942 0.974642C0.0383798 1.15465 4.09549e-06 1.34758 4.06994e-06 1.54242C4.04439e-06 1.73726 0.0383797 1.93019 0.112942 2.1102C0.187504 2.29021 0.296791 2.45377 0.434564 2.59154L14.1766 16.3188L0.434561 30.0461C0.156316 30.3243 2.40299e-07 30.7017 1.94562e-07 31.0952C1.48824e-07 31.4887 0.156316 31.8661 0.43456 32.1443C0.712805 32.4225 1.09019 32.5789 1.48368 32.5789C1.87718 32.5789 2.25456 32.4225 2.53281 32.1443L17.3092 17.3679Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
