import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-8 w-full z-60 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-xl px-8 py-5 flex justify-between items-center w-7/12 ">
        <div className="text-2xl font-bold text-gray-800">
          <Link href={"/Home"}>
            <h2 className="text-black font-extralight text-[30px] cursor-pointer">
              MINIMAL INDIA
            </h2>
          </Link>
        </div>
        <ul className="flex space-x-7 cursor-pointer">
          <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition">
            Home
          </li>
          <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition">
            Tech
          </li>
          <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition">
            Design
          </li>
          <li className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition">
            Film
          </li>
        </ul>
        <button className="text-[16px] font-normal uppercase px-4 py-2 border-[1px] border-[#29292992] rounded-xl text-[#292929] hover:bg-[#292929] hover:text-white duration-300">
          Get In Touch
        </button>
      </div>
    </nav>
  );
}
