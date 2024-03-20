import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div className=" px-6 flex justify-between items-center h-full">
      <div className="   flex  gap-3 p-1 md:px-2  h-full w-9/12 overflow-x-auto overflow-y-hidden">
        <div className=" flex flex-col gap-2  justify-center   ">
          <div className="relative    h-[60px] w-[60px]   md:h-[126px]  md:w-[96px]  ">
            <Image
              src="/Rectangle 22.png"
              fill
              className="rounded-full md:rounded-sm"
              alt="team"
            />
          </div>
          <div>
            <p className=" font-bold text-sm">Name</p>
            <p className="  text-xs">Designation</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2  justify-center   ">
          <div className="relative    h-[60px] w-[60px]   md:h-[126px]  md:w-[96px]  ">
            <Image
              src="/Rectangle 22.png"
              fill
              className="rounded-full md:rounded-sm"
              alt="team"
            />
          </div>
          <div>
            <p className=" font-bold text-sm">Name</p>
            <p className="  text-xs">Designation</p>
          </div>
        </div>
      </div>
      <div className=" font-bold flex items-center justify-center w-fit  text-2xl md:text-3xl">
        <p className=" -rotate-90"> Our Team</p>
      </div>
    </div>
  );
}
