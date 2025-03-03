import { useEffect, useState, useRef } from "react";
import { IoMenuOutline } from "react-icons/io5";
import ResponsiveNavbar from "../../components/ResponsiveNavbar/ResponsiveNavbar";
import Logo from "../../components/Logo/Logo";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";

function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("uz"); 

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="container relative mobile bg-[#313131] h-full hidden slg:flex items-center justify-between">
        <div className="text-white text-[35px]" onClick={() => setIsOpen(true)}>
          <IoMenuOutline />
        </div>
        <Logo />
        <ChangeLanguage onChangeLanguage={setLanguage} />
      </div>
      <ResponsiveNavbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        language={language}
      />
    </>
  );
}

export default HeaderMobile;
