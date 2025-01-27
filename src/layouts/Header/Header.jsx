import HeaderTop from "./HeaderTop";
import HeaderSticky from "../../components/HeaderSticky/HeaderSticky.jsx";
import HeaderBottom from "./HeaderBottom";
import { useState } from "react";

function Header() {
  const [selectedLang, setSelectedLang] = useState("Uz");
  return (
    <header>
      <HeaderTop />
      <HeaderBottom selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
      <HeaderSticky selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
    </header>
  );
}

export default Header;
