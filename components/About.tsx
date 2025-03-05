import { CompanyLogo } from "./CompanyLogos";
import EmailSubscriptionForm from "./EmailSubscriptionForm";

export default function About() {
  return (
    <div className="w-full mx-auto bg-black">
      <div className="w-full max-w-screen-2xl mx-auto h-screen bg-black">
        <div className=" w-full pt-32">
          <CompanyLogo />
        </div>
        <div className="w-full ">
          <div className="bg-black w-11/12 lg:w-full mx-auto rounded-3xl sm:flex  justify-evenly my-5 shadow-lg">
            <div className="h-[450px] sm:w-4/12 md:w-3/12 w-full rounded-3xl bg-gradient-to-b from-black via-black to-[#202020]/90 flex flex-col justify-center ">
              <img
                src="/QR_code.png"
                alt=""
                className="w-[120px] h-[120px] mx-auto"
              />
              <h2 className="text-[20px] font-normal my-5 px-5 text-white">
                Phone : 8855993267
              </h2>
              <div className="w-full px-5">
                <EmailSubscriptionForm />
              </div>
            </div>
            <div className="h-[450px] sm:w-7/12 md:w-8/12 w-full mt-4 my-6 rounded-3xl bg-gradient-to-b from-black via-black to-[#202020] flex justify-center items-center">
              <h2 className="lg:text-[70px] md:text-[50px] text-[40px] tracking-wide font-semibold text-center mt-20 text-white">
                <span className="animate-colorChange">&quot;</span>
                The mind behind MinimalIndia.
                <span className="animate-colorChange">&quot;</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
