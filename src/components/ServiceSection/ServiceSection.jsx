import SwiperIcons from "../SwiperIcons/SwiperIcons";
import { TiMinus } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useTranslation } from "react-i18next";
function ServiceSection() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);
  return (
    <section className="bg-[#F9F9F9]">
      <div className="container">
        <div className="speacer h-[90px] md:h-[30px]"></div>
        <div className="service-main ">
          <div className="title flex flex-col items-center p-[10px] mx-[250px] slg:mx-0">
            <span className="uppercase flex items-center gap-[5px] font-semibold text-[16px] md:whitespace-nowrap md:text-[13px] text-orange">
              <b>
                <TiMinus />
              </b>
              {t("service_section.description")}{" "}
              <b>
                <TiMinus />
              </b>
            </span>
            <h1 className="text-[35px] text-darkBlue font-bold md:text-center md:text-[15px] sm:text-[20px] ">
              {t("service_section.heading")}{" "}
            </h1>
            <p className="items-center text-center text-[16px] text-[#3b4964] sm:text-[14px]">
              {t("service_section.paragraph")}{" "}
            </p>
          </div>
          <ServiceCard />
          <div className="speacer h-[90px] md:h-[30px]"></div>
          <div className="swiper flex items-center">
            <SwiperIcons />
          </div>
          <div className="speacer h-[90px] md:h-[30px]"></div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
