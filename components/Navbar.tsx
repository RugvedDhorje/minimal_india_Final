// import Link from "next/link";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 w-full z-60 flex justify-center items-center py-10 backdrop-blur-sm "
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
      }}
    >
      <div className="bg-white shadow-md rounded-xl px-8 py-5 flex justify-between items-center w-7/12 max-w-[900px] ">
        <div className="text-2xl font-bold text-gray-800">
          {/* <Link href={"/Home"}> */}
          <Link to="home" smooth={true} duration={500}>
            <h2 className="text-black font-extralight text-[30px] cursor-pointer">
              MINIMAL INDIA
            </h2>
          </Link>
          {/* </Link> */}
        </div>
        <ul className="flex space-x-7 cursor-pointer">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
          >
            Home
          </Link>
          <Link
            to="tech"
            smooth={true}
            duration={500}
            className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
          >
            Tech
          </Link>
          <Link
            to="design"
            smooth={true}
            duration={500}
            className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
          >
            Design
          </Link>
          <Link
            to="film"
            smooth={true}
            duration={500}
            className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
          >
            Film
          </Link>
        </ul>
        <button className="text-[16px] font-normal uppercase px-4 py-2 border-[1px] border-[#29292992] rounded-xl text-[#292929] hover:bg-[#292929] hover:text-white duration-300">
          Get In Touch
        </button>
      </div>
    </nav>
  );
}
