// import { CompanyLogo } from "./CompanyLogos";
// import EmailSubscriptionForm from "./EmailSubscriptionForm";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function About() {
  return (
    <div className="w-full mx-auto bg-black py-10">
      <div className="w-full max-w-screen-2xl mx-auto">
        <h4 className="text-white text-[34px] font-light text-center pt-10 pb-6 tracking-wide">
          Our Work
        </h4>
      </div>
      <div className="rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>
      <div className="w-full max-w-screen-2xl mx-auto py-10 ">
        <div className="bg-gradient-to-b from-[#202020] via-black to-black w-12/12  mx-auto rounded-3xl sm:flex  justify-evenly items-center py-10 shadow-lg">
          <div className="h-[480px] sm:w-4/12 md:w-3/12 w-full rounded-3xl bg-gradient-to-b from-black via-black to-[#202020]/90 flex flex-col justify-center ">
            {/* <img
              src="/QR_code.png"
              alt=""
              className="w-[120px] h-[120px] mx-auto"
            /> */}
            {/* <h2 className="text-[20px] font-normal my-5 px-5 text-white">
              Phone : 8855993267
            </h2>
            <div className="w-full px-5">
              <EmailSubscriptionForm />
            </div> */}
            <input
              type="text"
              placeholder="Name"
              className="w-11/12 mx-auto p-2 my-4 text-[20px] font-light border-b-[1px] border-[#202020] mb-2 text-slate-300 bg-transparent focus:outline-none placeholder-slate-300 hover:placeholder-slate-100"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-11/12 mx-auto p-2 my-4 text-[20px] font-light border-b-[1px] border-[#202020] mb-2 text-slate-300 bg-transparent focus:outline-none placeholder-slate-300 hover:placeholder-slate-100"
            />
            <input
              type="company name"
              placeholder="Company Name"
              className="w-11/12 mx-auto p-2 my-4 text-[20px] font-light border-b-[1px] border-[#202020] mb-2 text-slate-300 bg-transparent focus:outline-none placeholder-slate-300 hover:placeholder-slate-100"
            />
            {/* <label htmlFor="Name">Website/Social Media Link</label> */}
            <input
              type="link"
              placeholder="Website/Social Media Link"
              className="w-11/12 mx-auto p-2 my-4 text-[20px] font-light border-b-[1px] border-[#202020] mb-2 text-slate-300 bg-transparent focus:outline-none placeholder-slate-300 hover:placeholder-slate-100"
            />
            {/* <label htmlFor="Name">Whats on you ?</label> */}
            <input
              type="text"
              placeholder="What's in your mind ?"
              className="w-11/12 mx-auto p-2 my-4 text-[20px] font-light border-b-[1px] border-[#202020] mb-2 text-slate-300 bg-transparent focus:outline-none placeholder-slate-300 hover:placeholder-slate-100"
            />
            <button
              className="w-11/12 mx-auto text-[26px] font-thin tracking-wider text-slate-300 py-2 mb-2 mt-8 
             bg-white/10 backdrop-blur-md backdrop-brightness-125 backdrop-contrast-150 shadow-lg border border-white/20"
              style={{ borderRadius: "10px" }}
            >
              Submit
            </button>
          </div>
          <div className="h-[480px] sm:w-7/12 md:w-8/12 w-full rounded-3xl bg-gradient-to-b from-black via-black to-[#202020] flex justify-center items-center">
            <h2 className="lg:text-[70px] md:text-[50px] text-[40px] tracking-wide font-semibold text-center text-white">
              <span className="animate-colorChange">&quot;</span>
              We Don&apos;t Just Create,
              <br /> We Dominate
              <span className="animate-colorChange">&quot;</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
const testimonials = [
  {
    image: "/New folder/1a.png",
  },
  {
    image: "/New folder/2a .png",
  },
  {
    image: "/New folder/3a .png",
  },
  {
    image: "/New folder/4a .png",
  },
  {
    image: "/New folder/5a .png",
  },
  {
    image: "/New folder/6a .png",
  },
  {
    image: "/New folder/1d.png",
  },
  {
    image: "/New folder/2d .png",
  },
  {
    image: "/New folder/3d .png",
  },
  {
    image: "/New folder/4d .png",
  },
  {
    image: "/New folder/5d .png",
  },
  {
    image: "/New folder/6d .png",
  },

  {
    image: "/New folder/7d .png",
  },
  {
    image: "/New folder/8d .png",
  },
  {
    image: "/New folder/9d .png",
  },
];
