import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div className="  h-full overflow-y-auto">
      <span className="text-center w-full flex items-center justify-center text-3xl font-bold">
        What we can do for you
      </span>
      <div class="grid w-full items-center max-w-[98%]   m-auto justify-items-center p-2">
        <div class="grid md:grid-cols-2 grid-cols-1 w-full ">
          <div class="flex flex-col bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 ">
            <Image
              src="/ser1.png"
              alt=""
              width={392}
              height={178}
              className=" pt-7"
            />
            <div className="flex flex-col items-start mt-4">
              <p className="text-2xl  font-medium">E-Commerce & M-Commerce: </p>
              <p className="text-sm mt-7 font-normal">
                We are expert in setting up your online shopping application
                (E-Commerce), Shopify , Amazon Merchant and various other
                M-Commerce applications further increasing your client base with
                our targeted shopping Ads across Globe.{" "}
                <span className="font-bold">More{">"}</span>
              </p>
            </div>
          </div>

          <div class="flex flex-col bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 ">
            <Image
              src="/ser2.png"
              alt=""
              width={392}
              height={178}
              className=" pt-7"
            />
            <div className="flex flex-col items-start mt-4">
              <p className="text-2xl  font-medium">CMS & CRO</p>
              <p className="text-sm mt-7 font-normal">
                With extensive CMS deployment experience, we guide you to the
                ideal CMS for your business. Our specialty lies in cutting-edge
                conversation retention optimization, ensuring a rich user
                experience. <span className="font-bold">More{">"}</span>
              </p>
            </div>
          </div>

          <div class="flex flex-col bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 ">
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
                Offering complete SEO Solutions, and internet Marketing
                services. We are a leading SEO Company in India, providing
                effective Search Engine Optimization’s services in right phases{" "}
                <span className="font-bold">More{">"}</span>
              </p>
            </div>
          </div>

          <div class="flex flex-col bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 ">
            <Image
              src="/ser4.png"
              alt=""
              width={392}
              height={178}
              className=" pt-7"
            />
            <div className="flex flex-col items-start mt-4">
              <p className="text-2xl  font-medium"> Advertising & PR: </p>
              <p className="text-sm mt-7 font-normal">
                We help you build your professional relations with your audience
                & key partners through our Advertising services (Paid social &
                Google) and if required some Corporate/Social PR services too.
                <span className="font-bold">More{">"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
