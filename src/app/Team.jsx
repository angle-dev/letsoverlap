import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div className=" flex justify-between w-full">
      <div className="flex ">
        <div className=" flex flex-col p-9 ">
          <Image src={"/Rectangle 22.png"} width={96} height={126} alt="team" />
          <span className=" font-bold">Name</span>
          <span>Designation</span>
        </div>
        <div className=" flex flex-col p-9 ">
          <Image src={"/Rectangle 22.png"} width={96} height={126} alt="team" />
          <span className=" font-bold">Name</span>
          <span>Designation</span>
        </div>
      </div>
      <div className=" -rotate-90">
        <span>Our Team</span>
      </div>
    </div>
  );
}
