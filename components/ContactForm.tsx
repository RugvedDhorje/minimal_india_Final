"use client";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

interface ContactFormProps {
  onclose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onclose }) => {
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
    <div
      className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50"
      onClick={onclose}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }} // Initial state (hidden & small)
        animate={{ scale: 1, opacity: 1 }} // Animate to full size
        exit={{ scale: 0.5, opacity: 0 }} // Exit animation when closing
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
        className="bg-white p-6 rounded-lg shadow-lg w-6/12  relative flex flex-col items-center justify-center"
        style={{
          borderRadius: "20px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (Top Right) */}
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-black m-2"
          onClick={onclose}
        >
          <X size={30} />
        </button>

        <h2 className="text-[40px] font-light my-5 text-center">
          Get In Touch
        </h2>
        {/* <label htmlFor="Name">Name</label> */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full p-2 my-4 text-[22px] font-light border-b-[1px] border-gray-700 mb-2 focus:outline-none placeholder-gray-800 hover:placeholder-gray-500"
          />
          {/* <label htmlFor="Name">Email</label> */}
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full p-2 my-4 text-[22px] font-light border-b-[1px] border-gray-700 mb-2  focus:outline-none placeholder-gray-800 hover:placeholder-gray-500"
          />
          {/* <label htmlFor="Name">Company Name</label> */}
          <input
            type="company name"
            placeholder="Company Name"
            name="company name"
            className="w-full p-2 my-4 text-[22px] font-light border-b-[1px] border-gray-700 mb-2  focus:outline-none placeholder-gray-800 hover:placeholder-gray-500"
          />
          {/* <label htmlFor="Name">Website/Social Media Link</label> */}
          <input
            type="link"
            name="link"
            placeholder="Website/Social Media Link"
            className="w-full p-2 my-4 text-[22px] font-light border-b-[1px] border-gray-700 mb-2  focus:outline-none placeholder-gray-800 hover:placeholder-gray-500"
          />
          {/* <label htmlFor="Name">Whats on you ?</label> */}
          <input
            type="text"
            placeholder="What's in your mind ?"
            name="message"
            className="w-full p-2 my-4 text-[22px] font-light border-b-[1px] border-gray-700 mb-2  focus:outline-none placeholder-gray-800 hover:placeholder-gray-500"
          />
          <button
            className="w-1/3 text-[26px] font-thin tracking-wider bg-gray-700 text-white mb-2 mt-8"
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
      </motion.div>
    </div>
  );
};

export default ContactForm;
