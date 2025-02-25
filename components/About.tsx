import EmailSubscriptionForm from "./EmailSubscriptionForm";

export default function About() {
  return (
    <div className="w-full bg-gradient-to-r from-[#130C0B] to-[#0C0807] py-10 mt-[-170px]">
      <div className="bg-black w-11/12 lg:w-10/12 mx-auto rounded-3xl sm:flex  justify-evenly my-5 shadow-lg">
        <div className="h-[500px] sm:w-4/12 md:w-3/12 w-full rounded-3xl bg-gradient-to-b from-black/90 to-[#001919]/90 flex flex-col justify-center ">
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
        <div className="h-[500px] sm:w-7/12 md:w-8/12 w-full mt-4 my-6 rounded-3xl bg-gradient-to-b from-black/90 to-[#001919] flex justify-center items-center">
          <h2 className="lg:text-[70px] md:text-[50px] text-[40px] tracking-wide font-semibold text-center mt-20 text-white">
            <span className="animate-colorChange">&quot;</span>
            The mind behind MinimalIndia.
            <span className="animate-colorChange">&quot;</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
