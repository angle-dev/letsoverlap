import React from "react";

export default function Blog() {
  return (
    <div className="flex ove  items-center justify-between px-2 h-full">
      <div className="flex gap-2 items-center px-2 h-full">
        <div className=" max-w-[40%]  h-f flex items-center gap-3">
          <div className=" bg-primary-navy min-w-[100px] w-[70%] aspect-video"></div>
          <div className=" text-xs md:text-base max-h-full  line-clamp-3 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
        <div className=" max-w-[40%] flex items-center gap-3">
          <div className=" bg-primary-navy  min-w-[100px]   w-[70%] aspect-video"></div>
          <div className=" text-xs md:text-base  line-clamp-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
      <div className=" font-bold flex items-center justify-center w-fit  text-2xl md:text-3xl">
        <p className=" -rotate-90">Blog</p>
      </div>
    </div>
  );
}
