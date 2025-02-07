import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop.jsx";
import { useTranslation } from "react-i18next";

function ProductsPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="article-page bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/page-title-3.jpg)] bg-cover bg-no-repeat bg-scroll bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold">
                {t("articles_page.subHeading")}
              </h1>
              <div className="breadcrumps whitespace-nowrap capitalize font-bold flex items-center mt-[8px] leading-[24px] text-[16px]">
                <Link to={"/"} className="opacity-70 text-darkBlue ">
                  {t("articles_page.home")}
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <Link
                  to={"/products"}
                  className="current opacity-[1] text-darkBlue "
                >
                  {t("articles_page.articles")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container"></div>
      </section>

      <ScrollToTop />
    </>
  );
}

export default ProductsPage;
