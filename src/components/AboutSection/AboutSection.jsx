import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LayeredImages from "../LayeredImages/LayeredImages";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative flex items-center mt-[120px] mb-[120px] md:mb-0">
        <div className="container flex flex-wrap justify-between items-center mx-auto relative">
          <div className="about-main flex items-center justify-between  w-[100%] slg:flex-col slg:items-start">
            {" "}
            <div className="left flex-1 relative ">
              <div className="title">
                <div className="title-double-heading">
                  <div className="about-me text-orange font-semibold sm:font-medium uppercase">
                    <span className="relative z-[1] flex items-center gap-[5px]">
                      {t("about_section.heading")}
                      <b>
                        <TiMinus />
                      </b>
                    </span>
                  </div>
                  <div className="title-wrapper  w-[75%] flex flex-col items-start leading-normal sm:flex-row sm:flex-wrap slg:w-full">
                    <h3 className="text-[36px] font-bold text-darkBlue sm:text-left sm:text-[30px]">
                      {t("about_section.subtitle")}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="content text-[#3b4964]">
                <div className="max-w-[470px] mt-[15px]">
                  <p className="mb-[16px]">{t("about_section.description")}</p>
                </div>
                <ul className="p-[0_0_20px_0]">
                  <li className="flex items-center text-[16px] gap-[16px] py-[8px]">
                    <span className="text-[24px] text-lightBlue">
                      <IoMdCheckmarkCircleOutline />
                    </span>
                    {t("about_section.services.service1")}{" "}
                  </li>
                  <li className="flex items-center text-[16px] gap-[16px] py-[8px]">
                    <span className="text-[24px] text-lightBlue">
                      <IoMdCheckmarkCircleOutline />
                    </span>
                    {t("about_section.services.service2")}
                  </li>
                  <li className="flex items-center text-[16px] gap-[16px] py-[8px]">
                    <span className="text-[24px] text-lightBlue">
                      <IoMdCheckmarkCircleOutline />
                    </span>
                    {t("about_section.services.service3")}
                  </li>
                  <li className="flex items-center text-[16px] gap-[16px] py-[8px]">
                    <span className="text-[24px] text-lightBlue">
                      <IoMdCheckmarkCircleOutline />
                    </span>
                    {t("about_section.services.service4")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="right flex-1 slg:mt-[50px] overflow-hidden mt-[40px] w-full h-full">
              <LayeredImages />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
