import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="   h-full overflow-y-auto w-full">
      <div className="flex md:flex-row flex-col mt-2 md:mt-12 w-full gap-2 justify-between">
        <div className="flex flex-col w-full ">
          <span className="text-4xl text-primary-navy md:p-9 p-2 font-bold">
            Let’s get in touch
          </span>
          <span className="text-4xl  font-normal text-primary-navy p-2 md:p-9">
            We can build something <br />
            <span className="text-primary-white font-serif font-bold italic ">
              great together
            </span>
          </span>

          <form className=" flex w-full flex-col md:p-9 p-2">
            <div className=" ">
              <input
                type="text"
                placeholder="Hi my name is...."
                className="p-2  w-[70%] rounded-t-xl placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray opacity-100"
              />
            </div>
            <div className=""></div>
            <div className=" opacity-90">
              <input
                type="email"
                placeholder="My email is...."
                className="p-2 w-[70%] placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray"
              />
            </div>
            <div className=""></div>
            <div className=" opacity-80 placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray">
              <input
                type="tel"
                placeholder="You can call me on...."
                className="p-2 w-[70%] placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray"
              />
            </div>
            <div className=""></div>
            <div className=" flex w-full ">
              <input
                type="text"
                placeholder="The subject of this...."
                className="p-2 text-primary-gray placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray w-[70%] opacity-70 "
              />

              <button
                type="submit"
                className="bg-primary-navy text-sm h-[52px] w-[30%] font-normal rounded-tr-xl text-white "
              >
                Send
              </button>
            </div>

            <div className=" opacity-60">
              <textarea
                placeholder="To tell you in details..."
                rows="4"
                className="p-2 w-[100%] rounded-b-xl opacity-100 placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="flex flex-row md:flex-col">
          <span className="text-xs font-normal text-primary-navy md:p-9 p-2">
            And the list goes on and on! <br /> Let’s collaborate on the macro
            and
            <br />
            micro influencers marketing plans, <br />
            that will sure be a buzz in the ears. <br />
          </span>
          <span className="text-xs font-normal text-primary-navy md:p-9 p-2">
            Email
          </span>
          <span className="text-xs font-normal text-primary-navy md:p-9 p-2">
            Phone
          </span>

          {/* Social Media Icons */}
          {/* You can replace these with actual icons */}
          <div className="mt-6 flex md:flex-col items-end md:p-9 p-2">
            <Image src="/iconoir_x.png" alt="" width={24} height={24} />
            <Image
              src="/lets-icons_insta.png"
              alt=""
              width={24}
              height={24}
              className=" pt-7"
            />
            <Image
              src="/ic_baseline-facebook.png"
              alt=""
              width={24}
              height={24}
              className=" pt-7"
            />
            <Image
              src="/mdi_linkedin.png"
              alt=""
              width={24}
              height={24}
              className=" pt-7"
            />
            <Image
              src="/ic_baseline-email.png"
              alt=""
              width={24}
              height={24}
              className=" pt-7"
            />
          </div>
        </div>
      </div>
      <div className=" md:hidden">
        <br />
        <br />
      </div>
    </div>
  );
};

export default Contact;
