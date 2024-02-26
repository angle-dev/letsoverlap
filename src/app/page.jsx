"use client";
import React, { useEffect, useState } from "react";
import HomeBanner from "./HomeBanner";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useAnimation,
} from "framer-motion";
import Contact from "./Contact";
import Team from "./Team";
import Services from "./Services";
import Gallery from "./Gallery";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [menuScreens, setMenuScreens] = useState("home");
  return (
    <div className=" w-full overflow-hidden h-full grid">
      <div className=" w-full h-full">
        {menuScreens === "home" ? <HomeBanner /> : null}

        <div className=" w-full h-full">
          <div
            className={`fixed   top-0  md:justify-end left-0 w-full h-full z-10 flex-col-reverse    justify-end  pointer-events-none flex md:flex-row
          ${menuScreens == "home" ? "" : "bg-black"}
          `}
          >
            {menuScreens === "home" ? (
              <div className=" flex-col  pointer-events-none h-full items-end flex justify-between w-full py-8">
                <div className="text-gray-300 md:text-base flex   items-end  text-xs  md:max-w-md  max-w-60  pointer-events-none  flex-col gap-1.5">
                  <span className=" text-primary-white mb-2  font-bold">
                    OVERLAP is a global 360-degree Digital Marketing Agency,
                    specializing in profitable Digital Marketing solutions for
                    eBusinesses.
                  </span>
                  <span>
                    Since 2017, OVERLAP leads in large-scale projects with
                    innovative digital marketing. Our mission is to enhance
                    business value through creative and effective use of Digital
                    Marketing Technologies.
                  </span>
                </div>
                {menu ? (
                  <div
                    onClick={() => setMenu(false)}
                    className=" text-gray-100 mr-4 hidden md:block pointer-events-auto cursor-pointer"
                  >
                    {"X"}
                  </div>
                ) : (
                  <div
                    onClick={() => setMenu(true)}
                    className=" text-gray-100 mr-4 hidden md:block pointer-events-auto cursor-pointer"
                  >
                    {"<<<"}
                  </div>
                )}
              </div>
            ) : (
              <div
                onClick={() => {
                  setMenuScreens("home");
                  setMenu(false);
                }}
                className=" pointer-events-auto cursor-pointer group md:w-60 md:h-full w-full h-32  bg-black"
              ></div>
            )}
            <div
              onClick={() => {
                setMenuScreens("work");
                setMenu(true);
              }}
              className={` bg-primary-yellow flex items-center justify-center transition-all duration-300 ease-in-out pointer-events-auto cursor-pointer
                ${
                  menuScreens === "home"
                    ? menu
                      ? "group md:w-20 md:h-full w-full h-14 "
                      : "md:w-4  group md:hover:w-20 md:h-full w-full h-14 "
                    : menuScreens === "work"
                    ? "group w-full h-full max-md:max-h-[calc(100vh-15rem)] "
                    : "group md:w-20 md:h-full w-full h-14 "
                }
                `}
            >
              {menuScreens === "home" ? (
                menu ? (
                  <div className="  flex md:flex-col w-full h-full items-center justify-start  opacity-100">
                    <div className=" bg-white md:w-full md:h-32 h-full w-[40%] "></div>
                    <div>nnjnnj</div>
                  </div>
                ) : (
                  <div className="  flex md:flex-col w-full h-full items-center justify-start  md:transition-all md:ease-in-out">
                    <div className=" bg-white md:w-full md:h-32 h-full w-[40%] "></div>
                    <div className="  md:opacity-0  md:group-hover:opacity-100">
                      Our Work
                    </div>
                  </div>
                )
              ) : menuScreens === "work" ? (
                <div
                  className={`flex flex-col  ${
                    menuScreens === "work" ? "opacity-100 " : "opacity-0 "
                  } 
             } h-full w-full max-md:max-h-[calc(100vh-15rem)] `}
                >
                  <div
                    className={` bg-white md:w-full md:h-32
                  ${menuScreens === "work" ? "w-full h-24 " : "w-[40%] h-full "}
                  `}
                  ></div>
                  <div className=" w-full h-full overflow-scroll ">
                    <Gallery />
                  </div>
                </div>
              ) : (
                <div className="  flex md:flex-col w-full h-full items-center justify-start  opacity-100">
                  <div className=" bg-white md:w-full md:h-32 h-full w-[40%] "></div>
                  <div>our work</div>
                </div>
              )}
            </div>
            <div
              onClick={() => {
                setMenuScreens("services");
                setMenu(true);
              }}
              className={` bg-primary-green flex items-center justify-center transition-all duration-300 ease-in-out pointer-events-auto cursor-pointer
                 ${
                   menuScreens === "home"
                     ? menu
                       ? "group md:w-20 md:h-full w-full h-14 "
                       : "md:w-4 group md:hover:w-20 md:h-full w-full h-14 "
                     : menuScreens === "services"
                     ? "group w-full h-full max-md:max-h-[calc(100vh-15rem)] "
                     : "group md:w-20 md:h-full w-full h-14 "
                 }
                 `}
            >
              {menuScreens === "home" ? (
                menu ? (
                  <div className="  flex md:flex-col w-full h-full items-center justify-start  opacity-100">
                    <div>Services</div>
                  </div>
                ) : (
                  <div className="  flex md:flex-col w-full h-full items-center justify-start  md:transition-all md:ease-in-out">
                    <div className="  md:opacity-0  md:group-hover:opacity-100">
                      Services
                    </div>
                  </div>
                )
              ) : menuScreens === "services" ? (
                <div
                  className={`flex flex-col  ${
                    menuScreens === "services" ? "opacity-100 " : "opacity-0 "
                  } 
             } h-full w-full  max-md:max-h-[calc(100vh-15rem)] `}
                >
                  <Services />
                </div>
              ) : (
                <div className="  flex md:flex-col w-full h-full items-center justify-start  opacity-100">
                  <div>Services</div>
                </div>
              )}
            </div>
            <div
              onClick={() => {
                setMenuScreens("contact");
                setMenu(true);
              }}
              className={` bg-primary-red flex items-center justify-center transition-all duration-300 ease-in-out pointer-events-auto cursor-pointer
                    ${
                      menuScreens === "home"
                        ? menu
                          ? "group md:w-20 md:h-full w-full h-14 "
                          : "md:w-4 group md:hover:w-20 md:h-full w-full h-14 "
                        : menuScreens === "contact"
                        ? "group w-full h-full max-md:max-h-[calc(100vh-15rem)] "
                        : "group md:w-20 md:h-full w-full h-14 "
                    }
                    `}
            >
              {menuScreens === "home" ? (
                menu ? (
                  <div className="  flex md:flex-col w-full h-full items-center justify-start  opacity-100">
                    <div className=" h-full">nnjnnj</div>
                    <div className=" bg-white md:w-full md:h-52 h-full w-[40%] "></div>
                  </div>
                ) : (
                  <div className="  flex md:flex-col w-full h-full items-center justify-start  md:transition-all md:ease-in-out">
                    <div className="  md:opacity-0 h-full  md:group-hover:opacity-100">
                      Contact
                    </div>
                    <div className=" bg-white md:w-full md:h-52 h-full w-[40%] "></div>
                  </div>
                )
              ) : menuScreens === "contact" ? (
                <div
                  className={`flex flex-col  ${
                    menuScreens === "contact" ? "opacity-100 " : "opacity-0 "
                  } 
             } h-full w-full  max-md:max-h-[calc(100vh-15rem)] `}
                >
                  <div className=" h-full w-full overflow-scroll">
                    <Contact />
                  </div>

                  <div
                    className={` bg-white md:w-full md:h-52 
                  ${
                    menuScreens === "contact"
                      ? "w-full h-32 "
                      : "w-[40%] h-full "
                  }
                  `}
                  ></div>
                </div>
              ) : (
                <div className="  flex md:flex-col w-full h-full items-center justify-start  opacity-100">
                  <div className=" h-full">Contact</div>
                  <div className=" bg-white md:w-full md:h-52 h-full w-[40%] "></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
