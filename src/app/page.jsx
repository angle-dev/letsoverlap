import HomeBanner from "./HomeBanner";

export default function Home() {
  return (
    <div className=" flex w-full h-screen overflow-hidden">
      <div className=" w-full">
        <HomeBanner />
      </div>

      <div className=" flex right-0 absolute h-full justify-end  pointer-events-none md:gap-5 gap-2 w-full">
        <div className="text-primary-white md:text-base  text-sx  md:max-w-sm  max-w-60 mt-4 pointer-events-none ">
          <span className=" text-primary-white  font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <br />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
            text ever since the 1500s.
          </span>
        </div>
        <div className="  z-10 pointer-events-auto md:flex hidden   w-[80px] h-full">
          <div className=" w-full h-full   bg-primary-yellow" />
          <div className=" w-full h-full   bg-primary-green" />
          <div className=" w-full h-full   bg-primary-red" />
        </div>
      </div>
    </div>
  );
}
