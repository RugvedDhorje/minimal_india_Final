// import React, { ButtonHTMLAttributes } from "react";

// // Define props type for the button
// interface DrawOutlineButtonProps
//   extends ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }

// const DrawOutlineButton: React.FC<DrawOutlineButtonProps> = ({
//   children,
//   ...rest
// }) => {
//   return (
//     <button
//       {...rest}
//       className="group text-[18px] relative px-4 py-1 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-[#86b9ff]"
//     >
//       <span>{children}</span>

//       {/* TOP */}
//       <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#86b9ff] transition-all duration-100 group-hover:w-full" />

//       {/* RIGHT */}
//       <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#86b9ff] transition-all delay-100 duration-100 group-hover:h-full" />

//       {/* BOTTOM */}
//       <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#86b9ff] transition-all delay-200 duration-100 group-hover:w-full" />

//       {/* LEFT */}
//       <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#86b9ff] transition-all delay-300 duration-100 group-hover:h-full" />
//     </button>
//   );
// };

// export default DrawOutlineButton;
import React from "react";

// Define props type for the button
interface DrawOutlineButtonProps {
  children: React.ReactNode;
  link?: string; // Optional prop for link
}

const DrawOutlineButton: React.FC<DrawOutlineButtonProps> = ({
  children,
  link,
}) => {
  return (
    <a
      href={link} // Navigate to the link
      target="_blank" // Open in a new tab
      rel="noopener noreferrer" // Security best practice
      className="group text-[18px] relative px-4 py-1 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-[#86b9ff]"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#86b9ff] transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#86b9ff] transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#86b9ff] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#86b9ff] transition-all delay-300 duration-100 group-hover:h-full" />
    </a>
  );
};

export default DrawOutlineButton;
