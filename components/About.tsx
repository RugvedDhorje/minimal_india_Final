// import { CompanyLogo } from "./CompanyLogos";
// import EmailSubscriptionForm from "./EmailSubscriptionForm";
"use client";
import { useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function About() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        // access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        access_key: accessKey,
        name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
        email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
        company_name: (form.elements.namedItem("company") as HTMLInputElement)
          ?.value,
        link: (form.elements.namedItem("link") as HTMLInputElement)?.value,
        message: (form.elements.namedItem("message") as HTMLInputElement)
          ?.value,
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log(result);
      form.reset(); // ✅ Clear form fields
      setSubmitted(true); // ✅ Show success message
      setTimeout(() => setSubmitted(false), 5000); // ⏱️ Auto-hide after 5 sec
    }
  };

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
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-11/12 mx-auto p-2 my-4 text-[20px] font-light border-b-[1px] border-[#202020] mb-2 text-slate-300 bg-transparent focus:outline-none placeholder-slate-300 hover:placeholder-slate-100"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-11/12 mx-auto p-2 my-4 text-[20px] font-light border-b-[1px] border-[#202020] mb-2 text-slate-300 bg-transparent focus:outline-none placeholder-slate-300 hover:placeholder-slate-100"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="w-11/12 mx-auto p-2 my-4 text-[20px] font-light border-b-[1px] border-[#202020] mb-2 text-slate-300 bg-transparent focus:outline-none placeholder-slate-300 hover:placeholder-slate-100"
              />

              <input
                type="url"
                name="link"
                placeholder="Website/Social Media Link"
                className="w-11/12 mx-auto p-2 my-4 text-[20px] font-light border-b-[1px] border-[#202020] mb-2 text-slate-300 bg-transparent focus:outline-none placeholder-slate-300 hover:placeholder-slate-100"
              />

              <input
                type="text"
                name="message"
                placeholder="What's in your mind ?"
                className="w-11/12 mx-auto p-2 my-4 text-[20px] font-light border-b-[1px] border-[#202020] mb-2 text-slate-300 bg-transparent focus:outline-none placeholder-slate-300 hover:placeholder-slate-100"
              />

              <button
                type="submit"
                className="w-11/12 mx-auto text-[26px] font-thin tracking-wider text-slate-300 py-2 mb-2 mt-8 bg-white/10 backdrop-blur-md backdrop-brightness-125 backdrop-contrast-150 shadow-lg border border-white/20"
                style={{ borderRadius: "10px" }}
              >
                Submit
              </button>
            </form>
            {submitted && (
              <p className="text-green-500 text-center">
                Form submitted successfully!
              </p>
            )}
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
