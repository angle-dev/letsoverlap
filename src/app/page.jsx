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

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [menuSelected, setMenuSelected] = useState("home");

  const controlsMenu = useAnimation();
  const controlServices = useAnimation();
  const controlOurWork = useAnimation();
  const controlContact = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      if (menu) {
        await controlsMenu.start({ width: "300px", duration: 0.5 });
      }
      if (!menu) {
        await controlsMenu.start({ width: "50px", duration: 0.5 });
      }
    };

    sequence();
    return () => {
      controlsMenu.stop();
    };
  }, [menu, controlsMenu]);

  useEffect(() => {
    const sequence = async () => {
      if (menuSelected === "OurWork") {
        controlsMenu.start({ width: "100%", duration: 0.5 });
        await controlOurWork.start({ width: "100%", duration: 0.1 });
        controlContact.start({ width: "50px", duration: 0.5 });
        controlServices.start({ width: "50px", duration: 0.5 });
      }
      if (menuSelected === "contact") {
        controlsMenu.start({ width: "100%", duration: 0.5 });
        await controlContact.start({ width: "100%", duration: 0.1 });
        controlOurWork.start({ width: "50px", duration: 0.5 });
        controlServices.start({ width: "50px", duration: 0.5 });
      }
      if (menuSelected === "services") {
        controlsMenu.start({ width: "100%", duration: 0.5 });
        await controlServices.start({ width: "100%", duration: 0.1 });
        controlOurWork.start({ width: "50px", duration: 0.5 });
        controlContact.start({ width: "50px", duration: 0.5 });
      }
      if (menuSelected === "home") {
        controlsMenu.start({ width: "50px", duration: 0.5 });
        controlServices.start({ width: "100%", duration: 0.5 });
        controlOurWork.start({ width: "100%", duration: 0.5 });
        controlContact.start({ width: "100%", duration: 0.5 });
      }
    };

    sequence();
    return () => {
      controlServices.stop();
    };
  }, [menuSelected, controlServices]);

  return (
    <div className=" flex w-full h-screen overflow-hidden">
      <div onClick={() => setMenu(false)} className=" w-full">
        {menuSelected === "home" && <HomeBanner />}
      </div>
      <div className="   overflow-hidden flex right-0 absolute h-full justify-end  pointer-events-none md:gap-5 gap-2 w-full">
        {menuSelected === "home" && (
          <div className="text-primary-white md:text-base flex flex-col justify-between items-end  text-sx  md:max-w-sm  max-w-60 mt-4 pointer-events-none ">
            <div>
              <span className=" text-primary-white  font-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
              <br />
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&rsquo;s standard
                dummy text ever since the 1500s.
              </span>
            </div>

            <div
              onClick={() => setMenu(!menu)}
              className=" mb-10 animate-pulse text-2xl pointer-events-auto hidden md:block cursor-pointer"
            >
              {menu ? "x" : "<<<"}
            </div>
          </div>
        )}
        <motion.div
          animate={controlsMenu}
          onMouseEnter={() => {
            setMenu(true);
          }}
          className=" cursor-pointer bg-black   z-10 pointer-events-auto md:flex hidden   w-[50px] h-full"
        >
          {menuSelected !== "home" && (
            <div
              onClick={() => {
                setMenuSelected("home");
                setMenu(false);
              }}
              className="  bg-purple-100  w-[250px] h-full"
            ></div>
          )}
          <motion.div
            animate={controlOurWork}
            onClick={() => setMenuSelected("OurWork")}
            className=" w-full h-full   text-3xl font-bold"
          >
            <div className="bg-primary-white w-full h-[200px] flex items-center justify-center ">
              {menu && <span className=" absolute -rotate-90">BLOG</span>}
            </div>
            <div className="bg-primary-yellow w-full h-full flex items-center justify-center">
              {menu && <span className=" absolute -rotate-90">Our Work</span>}
            </div>
          </motion.div>
          <motion.div
            animate={controlServices}
            onClick={() => setMenuSelected("services")}
            className=" w-full h-full flex flex-col text-3xl font-bold "
          >
            <div className="bg-primary-green w-full h-full flex items-center justify-center">
              {menu && <span className=" absolute -rotate-90">Services</span>}
            </div>
          </motion.div>
          <motion.div
            animate={controlContact}
            onClick={() => setMenuSelected("contact")}
            className=" w-full h-full  flex flex-col text-3xl font-bold"
          >
            <div className="bg-primary-red w-full h-full flex items-center justify-center">
              {menuSelected !== "contact" && (
                <>
                  {menu && (
                    <span className=" absolute -rotate-90">Contact</span>
                  )}
                </>
              )}

              {menuSelected === "contact" && <Contact />}
            </div>
            <div className="bg-primary-white w-full h-[400px] flex items-center whitespace-nowrap justify-center ">
              {menu && <span className=" absolute -rotate-90">Our Team</span>}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
