import EmailSubscriptionForm from "./EmailSubscriptionForm";

export default function About() {
  return (
    <div className="w-full bg-gradient-to-r from-[#130C0B] to-[#0C0807] py-10 mt-[-170px]">
      <div className="bg-gray-100 w-11/12 mx-auto rounded-3xl flex justify-evenly my-5 shadow-lg">
        <div className="h-[500px] w-3/12 my-6 rounded-3xl bg-gray-200 flex flex-col justify-center ">
          <img
            src="/QR_code.png"
            alt=""
            className="w-[120px] h-[120px] mx-auto"
          />
          <h2 className="text-[20px] font-normal my-5 px-5 text-[#292929]">
            Phone : 8855993267
          </h2>
          <div className="w-full px-5">
            <EmailSubscriptionForm />
          </div>
        </div>
        <div className="h-[500px] w-8/12 my-6 rounded-3xl bg-white">
          <h2 className="text-[70px] tracking-wide font-semibold text-center mt-20 text-[#292929]">
            <span className="animate-colorChange">&quot;</span>
            The mind behind MinimalIndia.
            <span className="animate-colorChange">&quot;</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
