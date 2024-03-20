"use client";
import React, { useEffect, useState } from "react";
import HomeBanner from "./HomeBanner";

import Contact from "./Contact";
import Team from "./Team";
import Services from "./Services";
import Gallery from "./Gallery";
import Blog from "./Blog";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [menuScreens, setMenuScreens] = useState("home");
  const [mobile, setMobile] = useState(false);
  const [mobilePage, setMobilePage] = useState("home");
  return (
    <div className=" w-full overflow-hidden h-full grid">
      <div className="  w-full h-full">
        {menuScreens === "home" ? (
          <div className=" hidden md:block">
            <HomeBanner />
          </div>
        ) : null}

        <div className=" block md:hidden">
          <HomeBanner />
        </div>

        <div className=" fixed z-50 top-0 w-full h-14 flex px-2 justify-between items-center   md:hidden">
          <div
            onClick={() => {
              setMobilePage("home");
              setMobile(false);
            }}
          >
            LOGO{" "}
          </div>
          <div onClick={() => setMobile(!mobile)} className=" text-white">
            X
          </div>
          {mobile && (
            <div className=" fixed top-14 flex flex-col left-0 h-[calc(100vh-3.5rem)] z-50  bg-red-200 w-full">
              <div
                onClick={() => {
                  setMobilePage("ourwork");
                  setMobile(false);
                }}
                className=" w-full h-full bg-primary-yellow flex items-center  text-3xl font-bold pl-3"
              >
                Our Work
              </div>
              <div
                onClick={() => {
                  setMobilePage("blogs");
                  setMobile(false);
                }}
                className=" w-full h-full bg-white  flex items-center  text-3xl font-bold pl-3"
              >
                Blogs
              </div>
              <div
                onClick={() => {
                  setMobilePage("services");
                  setMobile(false);
                }}
                className=" w-full h-full bg-primary-green  flex items-center  text-3xl font-bold pl-3"
              >
                Services
              </div>
              <div
                onClick={() => {
                  setMobilePage("ourteam");
                  setMobile(false);
                }}
                className=" w-full h-full bg-white  flex items-center  text-3xl font-bold pl-3"
              >
                Our Team
              </div>
              <div
                onClick={() => {
                  setMobilePage("contact");
                  setMobile(false);
                }}
                className=" w-full h-full bg-primary-red  flex items-center  text-3xl font-bold pl-3"
              >
                Contact
              </div>
            </div>
          )}

          {mobile === false &&
            (mobilePage === "ourwork" ? (
              <div className=" w-full fixed top-14 left-0 h-[calc(100vh-3.5rem)] bg-primary-yellow flex items-center  text-3xl font-bold pl-3">
                <Gallery />
              </div>
            ) : mobilePage === "blogs" ? (
              <div className=" w-full fixed top-14 left-0 h-[calc(100vh-3.5rem)] bg-white  flex items-center  text-3xl font-bold pl-3">
                <Blog />
              </div>
            ) : mobilePage === "services" ? (
              <div className=" w-full fixed top-14 left-0 h-[calc(100vh-3.5rem)] bg-primary-green  flex items-center  text-3xl font-bold pl-3">
                <Services />
              </div>
            ) : mobilePage === "ourteam" ? (
              <div className=" w-full fixed top-14 left-0 h-[calc(100vh-3.5rem)] bg-white flex items-center  text-3xl font-bold pl-3">
                <Team />
              </div>
            ) : mobilePage === "contact" ? (
              <div className=" w-full fixed top-14 left-0 h-[calc(100vh-3.5rem)] bg-primary-red  flex items-center  text-3xl font-bold pl-3">
                <Contact />
              </div>
            ) : null)}
        </div>

        <div className="   absolute top-10 left-2 md:hidden">
          <div className=" flex-col  pointer-events-none h-full items-end flex justify-between w-full py-8">
            <div className="text-gray-300 md:text-base flex   items-end  text-xs  md:max-w-md  max-w-60  pointer-events-none  flex-col gap-1.5">
              <span className=" text-primary-white mb-2  font-bold">
                OVERLAP is a global 360-degree Digital Marketing Agency,
                specializing in profitable Digital Marketing solutions for
                eBusinesses.
              </span>
              <span>
                Since 2017, OVERLAP leads in large-scale projects with
                innovative digital marketing. Our mission is to enhance business
                value through creative and effective use of Digital Marketing
                Technologies.
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
        </div>

        <div className=" w-full  hidden md:block h-full">
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
                className=" pointer-events-auto cursor-pointer group md:w-60 md:h-full w-full h-16  bg-black"
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
                    ? "group w-full h-full max-md:max-h-[calc(100vh-11rem)] "
                    : "group md:w-20 md:h-full w-full h-14 "
                }
                `}
            >
              {menuScreens === "home" ? (
                menu ? (
                  <div className="  font-sans font-bold  text-2xl md:text-3xl overflow-hidden   flex md:flex-col w-full h-full items-center justify-start  opacity-100">
                    <div className=" bg-white flex max-md:justify-center   items-center md:items-center md:w-full md:h-44 h-full w-[40%] ">
                      <span className=" md:-rotate-90 h-fit whitespace-nowrap">
                        Blog
                      </span>
                    </div>
                    <div className="  overflow-hidden flex max-md:w-full max-md:justify-center md:items-end md:h-[calc(100%-11rem)]">
                      <span className=" md:-rotate-90 md:mb-24 h-fit whitespace-nowrap">
                        Our Work
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className=" font-sans font-bold  text-2xl md:text-3xl overflow-hidden   flex md:flex-col w-full h-full items-center justify-start  opacity-100 md:transition-all md:ease-in-out ">
                    <div className="  bg-white flex max-md:justify-center items-center  md:items-center md:w-full md:h-44 h-full w-[40%] ">
                      <span className=" md:opacity-0  md:group-hover:opacity-100 duration-300  md:-rotate-90 h-fit whitespace-nowrap">
                        Blog
                      </span>
                    </div>
                    <div className="  md:opacity-0  md:group-hover:opacity-100 duration-300 overflow-hidden flex max-md:w-full max-md:justify-center md:items-end md:h-[calc(100%-11rem)]">
                      <span className=" md:-rotate-90 md:mb-24 h-fit whitespace-nowrap">
                        Our Work
                      </span>
                    </div>
                  </div>
                )
              ) : menuScreens === "work" ? (
                <div
                  className={`flex flex-col  ${
                    menuScreens === "work" ? "opacity-100 " : "opacity-0 "
                  } 
             } h-full w-full max-md:max-h-[calc(100vh-11rem)] `}
                >
                  <div
                    className={` bg-white md:w-full 
                  ${
                    menuScreens === "work"
                      ? "w-full h-32 md:h-44 "
                      : "w-[40%] h-full "
                  }
                  `}
                  >
                    <Blog />
                  </div>
                  <div className=" w-full h-[calc(100%-7rem)] md:h-[calc(100%-11rem)] overflow-hidden ">
                    <Gallery />
                  </div>
                </div>
              ) : (
                <div className="  font-sans font-bold  text-2xl md:text-3xl overflow-hidden   flex md:flex-col w-full h-full items-center justify-start  opacity-100">
                  <div className=" bg-white  items-center  flex max-md:justify-center md:items-center md:w-full md:h-44 h-full w-[40%] ">
                    <span className=" md:-rotate-90 h-fit whitespace-nowrap">
                      Blog
                    </span>
                  </div>
                  <div className="  overflow-hidden flex max-md:w-full max-md:justify-center md:items-end md:h-[calc(100%-11rem)]">
                    <span className=" md:-rotate-90 md:mb-24 h-fit whitespace-nowrap">
                      Our Work
                    </span>
                  </div>
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
                     ? "group w-full h-full max-md:max-h-[calc(100vh-11rem)] "
                     : "group md:w-20 md:h-full w-full h-14 "
                 }
                 `}
            >
              {menuScreens === "home" ? (
                menu ? (
                  <div className="  font-sans font-bold  text-2xl md:text-3xl overflow-hidden   flex md:flex-col w-full h-full items-center justify-start  opacity-100">
                    <div className="  overflow-hidden flex max-md:w-full max-md:justify-center md:items-end md:h-full">
                      <span className=" md:-rotate-90 md:mb-24 h-fit whitespace-nowrap">
                        Services
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className=" font-sans font-bold  text-2xl md:text-3xl overflow-hidden   flex md:flex-col w-full h-full items-center justify-start  opacity-100 md:transition-all md:ease-in-out ">
                    <div className="  md:opacity-0  md:group-hover:opacity-100 duration-300 overflow-hidden flex max-md:w-full max-md:justify-center md:items-end md:h-full">
                      <span className=" md:-rotate-90 md:mb-24 h-fit whitespace-nowrap">
                        Services
                      </span>
                    </div>
                  </div>
                )
              ) : menuScreens === "services" ? (
                <div
                  className={`flex flex-col  ${
                    menuScreens === "services" ? "opacity-100 " : "opacity-0 "
                  } 
             } h-full w-full  max-md:max-h-[calc(100vh-11rem)] `}
                >
                  <Services />
                </div>
              ) : (
                <div className="  font-sans font-bold  text-2xl md:text-3xl overflow-hidden   flex md:flex-col w-full h-full items-center justify-start  opacity-100">
                  <div className="  overflow-hidden flex max-md:w-full max-md:justify-center md:items-end md:h-full">
                    <span className=" md:-rotate-90 md:mb-24 h-fit whitespace-nowrap">
                      Services
                    </span>
                  </div>
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
                        ? "group w-full h-full max-md:max-h-[calc(100vh-11rem)] "
                        : "group md:w-20 md:h-full w-full h-14 "
                    }
                    `}
            >
              {menuScreens === "home" ? (
                menu ? (
                  <div className="  font-sans font-bold  text-2xl md:text-3xl overflow-hidden   flex md:flex-col w-full h-full items-center justify-start  opacity-100">
                    <div className="  overflow-hidden flex max-md:w-full max-md:justify-center md:items-end md:h-[calc(100%-13rem)]">
                      <span className=" md:-rotate-90 md:mb-24 h-fit whitespace-nowrap">
                        Contact
                      </span>
                    </div>
                    <div className=" bg-white flex max-md:justify-center   items-center md:items-center md:w-full md:h-52 h-full w-[40%] ">
                      <span className=" md:-rotate-90 h-fit whitespace-nowrap">
                        Team
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className=" font-sans font-bold  text-2xl md:text-3xl overflow-hidden   flex md:flex-col w-full h-full items-center justify-start  opacity-100 md:transition-all md:ease-in-out ">
                    <div className="  md:opacity-0  md:group-hover:opacity-100 duration-300 overflow-hidden flex max-md:w-full max-md:justify-center md:items-end md:h-[calc(100%-13rem)]">
                      <span className=" md:-rotate-90 md:mb-24 h-fit whitespace-nowrap">
                        Contact
                      </span>
                    </div>
                    <div className="  bg-white group flex max-md:justify-center items-center  md:items-center md:w-full md:h-52 h-full w-[40%] ">
                      <span className=" md:opacity-0  md:group-hover:opacity-100 duration-300  md:-rotate-90  h-fit whitespace-nowrap">
                        Team
                      </span>
                    </div>
                  </div>
                )
              ) : menuScreens === "contact" ? (
                <div
                  className={`flex flex-col  ${
                    menuScreens === "contact" ? "opacity-100 " : "opacity-0 "
                  } 
             } h-full w-full  max-md:max-h-[calc(100vh-11rem)] `}
                >
                  <div
                    className="
                   h-[calc(100%-8rem)] md:h-[calc(100%-13rem)]
                  w-full overflow-scroll"
                  >
                    <Contact />
                  </div>

                  <div
                    className={` bg-white md:w-full 
                  ${
                    menuScreens === "contact"
                      ? "w-full h-32 md:h-52  "
                      : "w-[40%] h-full "
                  }
                  `}
                  >
                    <Team />
                  </div>
                </div>
              ) : (
                <div className="  font-sans font-bold  text-2xl md:text-3xl overflow-hidden   flex md:flex-col w-full h-full items-center justify-start  opacity-100">
                  <div className="  overflow-hidden flex max-md:w-full max-md:justify-center md:items-end md:h-[calc(100%-13rem)]">
                    <span className=" md:-rotate-90 md:mb-24 h-fit whitespace-nowrap">
                      Contact
                    </span>
                  </div>
                  <div className=" bg-white  items-center  flex max-md:justify-center md:items-center md:w-full md:h-52 h-full w-[40%] ">
                    <span className=" md:-rotate-90 h-fit whitespace-nowrap">
                      Team
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
