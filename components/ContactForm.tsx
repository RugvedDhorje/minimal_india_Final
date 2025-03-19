import { X } from "lucide-react";
import { motion } from "framer-motion";

interface ContactFormProps {
  onclose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onclose }) => {
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
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 my-4 text-[22px] font-light border-b-[1px] border-gray-700 mb-2 focus:outline-none placeholder-gray-800 hover:placeholder-gray-500"
        />
        {/* <label htmlFor="Name">Email</label> */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 my-4 text-[22px] font-light border-b-[1px] border-gray-700 mb-2  focus:outline-none placeholder-gray-800 hover:placeholder-gray-500"
        />
        {/* <label htmlFor="Name">Company Name</label> */}
        <input
          type="company name"
          placeholder="Company Name"
          className="w-full p-2 my-4 text-[22px] font-light border-b-[1px] border-gray-700 mb-2  focus:outline-none placeholder-gray-800 hover:placeholder-gray-500"
        />
        {/* <label htmlFor="Name">Website/Social Media Link</label> */}
        <input
          type="link"
          placeholder="Website/Social Media Link"
          className="w-full p-2 my-4 text-[22px] font-light border-b-[1px] border-gray-700 mb-2  focus:outline-none placeholder-gray-800 hover:placeholder-gray-500"
        />
        {/* <label htmlFor="Name">Whats on you ?</label> */}
        <input
          type="text"
          placeholder="What's in your mind ?"
          className="w-full p-2 my-4 text-[22px] font-light border-b-[1px] border-gray-700 mb-2  focus:outline-none placeholder-gray-800 hover:placeholder-gray-500"
        />
        <button
          className="w-1/3 text-[26px] font-thin tracking-wider bg-gray-700 text-white py-2 mb-2 mt-8"
          style={{ borderRadius: "10px" }}
        >
          Submit
        </button>
      </motion.div>
    </div>
  );
};

export default ContactForm;
