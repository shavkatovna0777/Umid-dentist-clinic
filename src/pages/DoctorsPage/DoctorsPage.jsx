import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Img from "../../components/LazyLoadImg/Img";
import { TiMinus } from "react-icons/ti";
import ProgressBar from "../../ui/ProgressBar";
import AOS from "aos";
import "aos/dist/aos.css";
import SwiperIcons from "../../components/SwiperIcons/SwiperIcons";
import DoctorsCard from "../../components/DoctorsCard/DoctorsCard";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { useTranslation } from "react-i18next";

function DoctorsPage({ doctorData }) {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);

  return (
    <>
      <div className="doctors-page bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/page-title__elements.jpg)] bg-cover bg-no-repeat bg-scroll bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold">
                {t("price_page.subHeading")}
              </h1>
              <div className="breadcrumps whitespace-nowrap capitalize font-bold flex items-center mt-[8px] leading-[24px] text-[16px]">
                <Link to={"/"} className="opacity-70 text-darkBlue ">
                  {t("price_page.home")}{" "}
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <span className="current opacity-[1] text-darkBlue ">
                  {t("price_page.prices")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer h-[50px] md:h-0"></div>
      <div className="price-parent">
        <div className="container">
          <div className="price-table">
            <div className="card">
              
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

export default DoctorsPage;
