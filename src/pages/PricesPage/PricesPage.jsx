import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { useTranslation } from "react-i18next";

function PricesPage({}) {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);
  const services = [
    {
      category: "Профессиональная гигиена",
      items: [
        {
          name: "Профессиональная чистка зубов ClinPro",
          ourPrice: "7 500 ₽",
          moscowPrice: "9 800 ₽",
        },
        {
          name: "Профессиональная чистка Air Flow",
          ourPrice: "5 500 ₽",
          moscowPrice: "7 200 ₽",
        },
      ],
    },
    {
      category: "Диагностика",
      items: [
        {
          name: "Консультация стоматолога",
          ourPrice: "Бесплатно",
          moscowPrice: "Бесплатно",
        },
        {
          name: "Панорамный снимок (ортопантомограмма)",
          ourPrice: "Бесплатно до 10 февраля",
          moscowPrice: "1 500 ₽",
        },
      ],
    },
    {
      category: "Лечение зубов",
      items: [
        {
          name: "Лечение кариеса",
          ourPrice: "7 000 ₽",
          moscowPrice: "9 500 ₽",
        },
        {
          name: "Лечение пульпита",
          ourPrice: "11 500 ₽",
          moscowPrice: "14 700 ₽",
        },
        {
          name: "Лечение кисты",
          ourPrice: "4 800 ₽",
          moscowPrice: "6 750 ₽",
        },
      ],
    },
    {
      category: "Отбеливание зубов",
      items: [
        {
          name: "Amazing White",
          ourPrice: "9 800 ₽",
          moscowPrice: "12 000 ₽",
        },
      ],
    },
  ];
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
      <div className="w-full max-w-4xl mx-auto px-4">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-50">
              <th className="p-4 text-left font-bold text-gray-800">Услуги</th>
              <th className="p-4 text-right font-bold text-gray-800">
                Наша цена
              </th>
              <th className="p-4 text-right font-bold text-gray-800">
                Средняя в Москве
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((category, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                <tr className="bg-blue-100">
                  <td colSpan={3} className="p-4 font-bold text-blue-700">
                    {category.category}
                  </td>
                </tr>
                {category.items.map((item, itemIndex) => (
                  <tr
                    key={`${categoryIndex}-${itemIndex}`}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-4 text-gray-800">{item.name}</td>
                    <td className="p-4 text-right text-blue-600 font-medium">
                      {item.ourPrice}
                    </td>
                    <td className="p-4 text-right text-gray-600">
                      {item.moscowPrice}
                    </td>
                  </tr>
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
