import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div>
      <span className="text-center w-full flex items-center justify-center text-3xl font-bold">
        What we can do for you
      </span>
      <div class="flex items-center justify-center p-10">
        <div class="grid md:grid-cols-2 grid-cols-1 ">
          <div class="flex flex-col bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 md:w-[420px] w-[320px]">
            <Image
              src="/ser1.png"
              alt=""
              width={392}
              height={178}
              className=" pt-7"
            />
            <div className="flex flex-col items-start mt-4">
              <p className="text-2xl  font-medium">Branding</p>
              <p className="text-sm mt-7 font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard.{" "}
                <span className="font-bold">More{">"}</span>
              </p>
            </div>
          </div>

          <div class="flex flex-col bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 md:w-[420px] w-[320px]">
            <Image
              src="/ser2.png"
              alt=""
              width={392}
              height={178}
              className=" pt-7"
            />
            <div className="flex flex-col items-start mt-4">
              <p className="text-2xl  font-medium">Digital Marketing</p>
              <p className="text-sm mt-7 font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard.{" "}
                <span className="font-bold">More{">"}</span>
              </p>
            </div>
          </div>

          <div class="flex flex-col bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 md:w-[420px] w-[320px]">
            <Image
              src="/ser3.png"
              alt=""
              width={392}
              height={178}
              className=" pt-7"
            />
            <div className="flex flex-col items-start mt-4">
              <p className="text-2xl  font-medium">SEO</p>
              <p className="text-sm mt-7 font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard.{" "}
                <span className="font-bold">More{">"}</span>
              </p>
            </div>
          </div>

          <div class="flex flex-col bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 md:w-[420px] w-[320px]">
            <Image
              src="/ser4.png"
              alt=""
              width={392}
              height={178}
              className=" pt-7"
            />
            <div className="flex flex-col items-start mt-4">
              <p className="text-2xl  font-medium">Advertising</p>
              <p className="text-sm mt-7 font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard.{" "}
                <span className="font-bold">More{">"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
