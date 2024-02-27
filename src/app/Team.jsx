import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div className="   flex justify-between items-center w-full">
      <div className="grid grid-cols-4 gap-1 p-2 max-h-[150px] w-full  ">
        <div className=" flex flex-col   w-full h-full ">
          <div className="relative  p-3  aspect-[3/5]  w-[90px]  h-[100px]">
            <Image src="/Rectangle 22.png" fill alt="team" />
          </div>

          <span className=" font-bold text-sm">Name</span>
          <span className="  text-sm">Designation</span>
        </div>
        <div className=" flex flex-col w-full h-full  ">
          <div className="relative p-3 aspect-[3/5] w-[90px]  h-[100px]">
            <Image src="/Rectangle 22.png" fill alt="team" />
          </div>
          <span className=" font-bold text-sm">Name</span>
          <span className="  text-sm">Designation</span>
        </div>
      </div>
      <div className=" -rotate-90 absolute right-0 ">
        <span>Our Team</span>
      </div>
    </div>
  );
}
