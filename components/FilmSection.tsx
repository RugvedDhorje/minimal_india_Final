import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Slider from "./SwipeToSlide";

export default function FilmSection() {
  return (
    <ParallaxProvider>
      {/* Background Video Section */}
      <div className="w-full relative h-[700px] ">
        <div className="absolute top-10 left-0 w-full h-full rounded-3xl">
          {/* <video
            src="https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-t-3xl"
          ></video> */}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-11/12 mx-auto rounded-3xl absolute mt-[-300px]">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-white text-[80px] mx-auto leading-none font-bold mt-5 text-center">
            Stories you’ll want to replay.
          </h1>
          <h2 className="text-white text-[40px] mt-5 mx-auto leading-none">
            crafting moments, and leaving an impact.
          </h2>
        </div>
        <div className="w-full flex justify-center mt-5">
          <button className="text-[16px] font-normal px-4 py-2 text-[#292929] rounded-md bg-white">
            Watch the Reel
          </button>
        </div>
      </div>

      {/* Parallax Scrolling Section */}
      <Parallax translateY={[10, -100]}>
        <div className="h-auto bg-gray-200 w-full rounded-3xl">
          <div className="">
            <Slider />
          </div>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
}
