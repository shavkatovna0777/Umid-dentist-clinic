import HeaderTop from "./HeaderTop";
import HeaderSticky from "../../components/HeaderSticky/HeaderSticky.jsx";
import HeaderBottom from "./HeaderBottom";

function Header() {
  return (
    <header >
      <HeaderTop />
      <HeaderBottom/>
      <HeaderSticky/>
    </header>
  );
}

export default Header;
