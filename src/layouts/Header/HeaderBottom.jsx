import HeaderMobile from "../../components/HeaderMobile/HeaderMobile.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import ChangeLanguage from "../../components/ChangeLanguage/ChangeLanguage.jsx";

function HeaderBottom({ selectedLang, setSelectedLang }) {
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
          <ChangeLanguage
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
