import React, { useState } from "react";
import awsLogo from "../../asserts/aws_logo.png";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LanguageDropdown from "../LanguageDropdown/Language";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);

    if (!nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };
  return (
    <>
      <nav className=" hidden items-center justify-between py-2 md:flex ">
        <a href="/">
          <div className="flex gap-2 ">
            <img
              src={awsLogo}
              alt="AWS Training and Certification Logo"
              className="h-14 w-20 p-2  "
            />
            <p className="w-26 p-2 ">
              training and <br />
              certification{" "}
            </p>
          </div>
        </a>
        <div>
          <ul className="flex justify-between gap-10 ">
            <li>
              <a href="/">Learning Library</a>
            </li>
            <li>
              <a href="/">AWS Skill Builder</a>
            </li>
            <li>
              <a href="/">Certification</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              <a href="/">Partner Training</a>
            </li>
          </ul>
        </div>
        <div className=" hidden gap-2 lg:flex">
          <button className="bg-[#e05904] text-white px-3 rounded-md ">
            Feedback
          </button>
          <div className="hidden md:flex justify-between items-center m-auto px-2 py-1 bg-transparent border border-solid border-black">
            <AiOutlineSearch size={20} className="rotate-90" />
            <input
              type="text"
              placeholder="Search for training"
              className="hidden md:block"
            />
          </div>
          <div className="flex align-center gap-4 ">
            <LanguageDropdown />
            <a href="/">Sign in</a>
          </div>
        </div>
      </nav>
      <nav className=" md:hidden items-center justify-between py-2 flex ">
        <a href="/">
          <div className="flex gap-2 ">
            <img
              src={awsLogo}
              alt="AWS Training and Certification Logo"
              className="h-14 w-20 pl-1 py-1"
            />
            <p className="w-24 ">training and certification </p>
          </div>
        </a>
        <div className="  gap-2 flex">
          <div className="flex justify-between items-center m-auto px-2 py-1 bg-transparent  ">
            <AiOutlineSearch size={25} className="rotate-90" />
          </div>
        </div>
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer z-10"
        >
          {nav ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} className="mr-4" />
          )}
        </div>
        {/* mobile menu */}
        <div
          className={
            nav
              ? "md:hidden absolute top-16 left-0 w-full min-h-[53%] bg-white ease-in duration-300 z-10 "
              : "hidden md:block "
          }
        >
          <div className="flex w-[95%]  mt-4 bg-transparent border border-solid border-black">
            <AiOutlineSearch size={20} className="rotate-90" />

            <input type="text" placeholder="Search for training" />
          </div>
          <div className="w-full top-0">
            <ul>
              <li className=" border-b p-2 hover:underline">
                <a href="/">Sign in</a>
              </li>
              <li className=" border-b p-2 hover:underline">
                <a href="/">Dashboard</a>
              </li>
              <li className=" border-b  p-2 hover:underline">
                <a href="/">Learning Library</a>
              </li>
              <li className=" border-b  p-2 hover:underline">
                <a href="/">AWS Skill Builder</a>
              </li>
              <li className=" border-b  p-2 hover:underline">
                <a href="/">Certification</a>
              </li>
              <li className=" border-b  p-2 hover:underline">
                <a href="/">Support</a>
              </li>
              <li className=" border-b  p-2 hover:underline">
                <a href="/">Partner Training</a>
              </li>
              <li className=" border-b  p-2 ">
                <LanguageDropdown />
              </li>
            </ul>
            <button className="bg-[#e05904] text-white px-3 py-1 rounded-md mt-3 ml-3 ">
              Feedback
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
