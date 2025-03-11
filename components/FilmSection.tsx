import Slider from "./SwipeToSlide";

export default function FilmSection() {
  return (
    <div id="film" className="w-full mx-auto bg-black ">
      {/* Background Video Section */}
      <div className="w-full relative h-[700px] flex justify-center items-center mx-auto">
        {/* Video Background */}
        <div
          className="absolute inset-0 w-full max-w-screen-2xl mx-auto h-full bg-gray-700 overflow-hidden"
          style={{
            borderRadius: "16px",
          }}
        >
          <video
            src="https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-3xl"
            style={{
              borderRadius: "16px",
            }}
          ></video>
        </div>

        {/* Centered Content Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white lg:text-[80px] md:text-[60px] text-[44px] font-bold leading-none">
            Stories you’ll want to replay.
          </h1>
          <h2 className="text-white lg:text-[40px] md:text-[30px] text-[26px] mt-5 leading-none">
            Crafting moments and leaving an impact.
          </h2>
          <button
            className="mt-5 text-[16px] font-normal px-4 py-2 text-[#292929] rounded-md bg-white"
            style={{
              borderRadius: "7px",
            }}
          >
            Watch the Reel
          </button>
        </div>
      </div>

      {/* Parallax Scrolling Section */}

      <div className="h-auto w-full rounded-3xl">
        <div className="w-full">
          <Slider />
        </div>
      </div>
    </div>
  );
}
