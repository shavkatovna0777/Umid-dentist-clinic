import { useTranslation } from "react-i18next";
import { ArticleSectionCardData } from "../../assets/datas/datas.js";
import { TiMinus } from "react-icons/ti";
import { Link } from "react-router-dom";
import ArticleGrid from "../ArticleCards/ArticleCards.jsx";

const ArticleSection = () => {
  const { t } = useTranslation();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!Array.isArray(ArticleSectionCardData)) {
    console.error(
      "ArticleSectionCardData is not an array:",
      ArticleSectionCardData
    );
    return null;
  }

  return (
    <section className="article-section">
      <div className="container mx-auto px-4 py-8">
        <div className="speacer h-[90px]"></div>
        <div className="flex flex-col">
          <div className="heading ">
            <div className="top text-orange ">
              <span className="gap-[5px] text-[15px] flex items-center uppercase font-semibold md:text-[13px]">
                {t("article_section.subHeading")}
                <b>
                  <TiMinus />
                </b>
              </span>
            </div>
            <div className="bottom flex justify-between items-center md:flex-wrap">
              <h1 className="text-[42px] leading-60 font-bold inline text-darkBlue md:text-[30px] sm:text-[20px]">
                {t("article_section.heading")}
              </h1>
              <Link
                onClick={handleClick}
                to={"articles/"}
                className="text-white bg-lightBlue font-semibold text-[16px] p-[12px_35px] rounded-[5px] hover:bg-blue transform ease-in-out duration-300"
              >
                {t("article_section.btn")}
              </Link>
            </div>
          </div>
          <div className="speacer h-[30px]"></div>
          <ArticleGrid />
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
