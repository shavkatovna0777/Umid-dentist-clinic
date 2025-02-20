import React, { useEffect } from "react";
import { TiMinus } from "react-icons/ti";
import WhyChooseUsCard from "../WhyChooseUsCards/WhyChooseUsCards";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function WhyChooseUsSection({ WhyChooseUsCardData }) {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);

  return (
    <section className="bg-[url(./assets/images/inside_img4.jpg)] bg- w-full bg-cover min-h-[800px] bg-no-repeat ">
      <div className="container">
        <div className="parent flex items-center justify-between h-full">
          <div
            className="left w-[570px] h-[700px] flex items-center slg:w-full slg:justify-center"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <div className="left-wrapper bg-white p-[60px_60px_65px_60px] w-[570px] slg:w-[700px] h-auto rounded-[15px] shadow-[10px_8px_35px_rgba(49,49,49,0.08)] transition-all duration-300 ease-in-out bg-[10px_15px] mx-[10px] my-[90px] md:h-[95%] md:w-[100%] md:p-[17px_30px_35px_30px] sm:h-auto sm:mt-[190px]">
              <div className="headings flex flex-col m-[0_0_26px_0]  sm:mb-5">
                <div className="paragraph-wrapper text-orange">
                  <span className="gap-[5px] flex items-center uppercase font-semibold md:text-[13px]">
                    {t("whyChooseUs.shortHeading")}
                    <b>
                      <TiMinus />
                    </b>
                  </span>
                </div>
                <h3 className="heading-wrapper leading-[0] md:whitespace-nowrap">
                  <span className="text-[42px] leading-60 font-bold inline text-darkBlue md:text-[30px] sm:text-[20px] sm:leading-30">
                    {t("whyChooseUs.heading")}
                  </span>
                </h3>
              </div>
              <div className="cards flex flex-col">
                {WhyChooseUsCardData.map((card, index) => (
                  <WhyChooseUsCard
                    key={index}
                    imageSrc={card.imageSrc}
                    card={card}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
