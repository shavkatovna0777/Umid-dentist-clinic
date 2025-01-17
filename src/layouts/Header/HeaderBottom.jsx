import React, { useEffect, useRef, useState } from "react";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { IoCloseOutline, IoSearch, IoSearchOutline } from "react-icons/io5";
import Logo from "../../components/Logo/Logo";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ChangeLanguage from "../../components/ChangeLanguage/ChangeLanguage.jsx";

function HeaderBottom() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`
        bg-white h-[110px] flex items-center transition-all duration-300 ease-in-out `}
    >
      <HeaderMobile />
      <div className="container flex items-center justify-between slg:hidden">
        <Logo />
        <div className="right flex items-center h-full ">
          <Navbar />
          <div className="h-[50px] w-[2px] bg-[#E5E5E5] mx-[25px]"></div>
          <ChangeLanguage />

          {/* <div className="border cursor-pointer">
            <div
              className="search_btn text-[25px] text-darkBlue p-[20px] h-full "
              onClick={toggleSearch}
            >
              {isSearchActive ? (
                <IoCloseOutline className="transition-all duration-300 ease-in-out transform translate-x-[-0.5px]" />
              ) : (
                <IoSearchOutline className="transition-all duration-300 ease-in-out transform translate-x-[-0.5px]" />
              )}
            </div>
            <div className={isSearchActive ? "block" : "hidden"}>
              <div className="absolute z-[2] p-[20px] rounded-[15px] bg-white shadow-custom-shadow top-40 right-52">
                <form className="flex items-center pl-2 bg-[#f6f6f6] rounded-[5px] overflow-hidden relative z-[1]">
                  <input
                    type="text"
                    ref={inputRef}
                    placeholder={"Search ..."}
                    className="outline-none w-full h-full bg-transparent"
                  />
                  <div className=" w-12 h-12 flex items-center justify-center bg-blue text-white border-none ">
                    <IoSearch className="text-[25px]" />
                  </div>
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
