import { useTranslation } from "react-i18next";
import HeaderLink from "../../ui/HeaderLink";

function Navbar() {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="flex gap-[10px] items-center cursor-pointer md:hidden">
        <HeaderLink to="/">{t("navbar.home")}</HeaderLink>
        <HeaderLink to="/page">{t("navbar.elements")}</HeaderLink>
        <HeaderLink to="/products">{t("navbar.shop")}</HeaderLink>
        <HeaderLink to="/contact">{t("navbar.contacts")}</HeaderLink>
      </div>
    </>
  );
}

export default Navbar;