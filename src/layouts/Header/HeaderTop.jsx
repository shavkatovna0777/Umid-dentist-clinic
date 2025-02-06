import { FaInstagram, FaTelegramPlane, FaTooth } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HeaderTop() {
  const { t } = useTranslation();

  return (
    <div className=" bg-[#F9F9F9] slg:hidden">
      <div className="container flex items-center justify-between">
        <div className="left">
          <div className="flex items-center text-[16px] text-gray gap-[8px] font-normal">
            <h6>{t("header_top.paragraph")}</h6>
            <FaTooth />
          </div>
        </div>
        <div className="right flex items-center">
          <div className="flex items-center gap-[16px] text-gray text-[16px] ">
            <Link
              to={"https://t.me/Umiddentistdentalclinic"}
              target="_blank"
              className="hover:text-lightBlue transition-all duration-300 flex items-center"
            >
              <FaTelegramPlane className="text-[17px]" />
            </Link>
            <Link
              to={
                "https://www.instagram.com/dental_clinic_djizzakh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
              target="blank"
              className="hover:text-lightBlue transition-all duration-300 flex items-center gap-2"
            >
              <FaInstagram className="text-[17px]" />
            </Link>
          </div>
          <div className="w-[25px]"></div>
          <div className="bg-orange text-[#fff] text-[16px] p-[13px_35px] font-bold hover:bg-lightBlue transition-all duration-300">
            <Link target="_blank" to={"contact"}>
            {t("header_top.callBack")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
