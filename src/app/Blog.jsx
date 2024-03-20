import React from "react";

export default function Blog() {
  return (
    <div className="md:flex   items-center justify-between px-2 h-full">
      <div className="flex flex-col md:flex-row gap-2 md:items-center max-md:mt-2  md:justify-around px-2 h-full">
        <p className=" mt-9 w-full block md:hidden ">Blog</p>
        <div className=" md:max-w-[40%]   flex  flex-col md:flex-row  items-center gap-3">
          <div className=" bg-primary-navy min-w-[100px] w-full md:w-[70%] aspect-video"></div>
          <div className=" text-sm font-medium md:text-base max-h-full  line-clamp-3 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
        <div className=" md:max-w-[40%]   flex  flex-col md:flex-row  items-center gap-3">
          <div className=" bg-primary-navy min-w-[100px] w-full md:w-[70%] aspect-video"></div>
          <div className=" text-sm font-medium md:text-base max-h-full  line-clamp-3 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
      <div className=" hidden md:flex font-bold flex items-center justify-center w-fit  text-2xl md:text-3xl">
        <p className=" -rotate-90">Blog</p>
      </div>
    </div>
  );
}
