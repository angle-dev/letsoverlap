import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className=" w-full h-full overflow-scroll">
      <div className="flex mt-12 w-full justify-between">
        <div className="flex flex-col ">
          <span className="text-4xl text-primary-navy p-9 font-bold">
            Let’s get in touch
          </span>
          <span className="text-4xl text-primary-navy p-9">
            We can build something <br />
            <span className="text-primary-white font-serif italic ">
              great together
            </span>
          </span>

          <form className="grid grid-cols-2 p-9">
            <div className="col-span-1 ">
              <input
                type="text"
                placeholder="Hi my name is...."
                className="p-2 rounded-t-xl text-primary-gray opacity-100"
              />
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1 opacity-90">
              <input
                type="email"
                placeholder="My email is...."
                className="p-2 text-primary-gray"
              />
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1 opacity-80">
              <input
                type="tel"
                placeholder="You can call me on...."
                className="p-2 text-primary-gray"
              />
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1 opacity-70">
              <input
                type="text"
                placeholder="The subject of this...."
                className="p-2 text-primary-gray"
              />
            </div>
            <div className="col-span-1 ">
              <button
                type="submit"
                className="bg-primary-navy h-[52px] w-[148px] rounded-tr-xl text-white "
              >
                Send
              </button>
            </div>
            <div className="col-span-2 opacity-60">
              <textarea
                placeholder="To tell you in details..."
                rows="4"
                className="p-2 w-[550px] rounded-b-xl opacity-100 text-primary-gray"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-primary-navy p-9 font-bold">
            Lorem Ipsum is simply dummy <br /> text of the printing and <br />
            typesetting industry. Lorem <br /> Ipsum has been the <br />
            industry’s standard .
          </span>
          <span className="text-xs text-primary-navy p-9">Email</span>
          <span className="text-xs text-primary-navy p-9">Phone</span>

          {/* Social Media Icons */}
          {/* You can replace these with actual icons */}
          <div className="mt-6 flex flex-col items-end p-9">
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
    </div>
  );
};

export default Contact;
