import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { useTranslation } from "react-i18next";

function PricesPage({ servicesData = [] }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);

  const formatPrice = (price) => {
    if (price === undefined || price === null) return t("");
    return `${price.toLocaleString()} UZS`;
  };

  const getLocalizedText = (textObject) => {
    if (!textObject) return "";
    return textObject[currentLang] || textObject.uz || "";
  };

  return (
    <>
      <div className="prices-page bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/page-title__elements.jpg)] bg-cover bg-no-repeat bg-scroll bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold">
                {t("price_page.subHeading")}
              </h1>
              <div className="breadcrumps whitespace-nowrap capitalize font-bold flex items-center mt-[8px] leading-[24px] text-[16px]">
                <Link to={"/"} className="opacity-70 text-darkBlue">
                  {t("price_page.home")}
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <span className="current opacity-[1] text-darkBlue">
                  {t("price_page.prices")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer h-[50px] md:h-0"></div>
      <div className="w-full max-w-4xl mx-auto px-4">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-50">
              <th className="p-4 text-left font-bold text-blue">
                {t("price_page.service_types")}
              </th>
              <th className="p-4 text-right font-bold text-blue">
                {t("price_page.prices")}
              </th>
            </tr>
          </thead>
          <tbody>
            {servicesData?.map((category, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                <tr className="bg-blue-100">
                  <td colSpan={2} className="p-4 font-bold text-darkBlue">
                    {getLocalizedText(category?.category)}
                  </td>
                </tr>
                {category?.items?.map((item, itemIndex) => (
                  <React.Fragment key={`${categoryIndex}-${itemIndex}`}>
                    <tr className="border-b border-gray">
                      <td className="p-4 text-darkBlue">
                        {getLocalizedText(item?.name)}
                      </td>
                      <td className="p-4 text-right text-black font-medium sm:whitespace-nowrap">
                        {formatPrice(item?.price)}
                      </td>
                    </tr>
                    {item?.subItems?.map((subItem, subIndex) => (
                      <tr
                        key={`${categoryIndex}-${itemIndex}-${subIndex}`}
                        className="border-b border-gray"
                      >
                        <td className="p-4 pl-8 text-darkBlue">
                          {getLocalizedText(subItem?.name)}
                        </td>
                        <td className="p-4 text-right text-black font-medium">
                          {formatPrice(subItem?.price)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <ScrollToTop />
    </>
  );
}

export default PricesPage;