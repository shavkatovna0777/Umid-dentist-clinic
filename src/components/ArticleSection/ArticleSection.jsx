import { useTranslation } from "react-i18next";
import { ArticleSectionCardData } from "../../assets/datas/datas.js";
import ArticleCards from "../ArticleCards/ArticleCards.jsx";
import { TiMinus } from "react-icons/ti";
import { Link } from "react-router-dom";

const ArticleSection = () => {
  const { t } = useTranslation();

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
        <div className="flex flex-col">
        <div className="heading">
            <div className="top text-orange">
              <span className=" gap-[5px] text-[15px] flex items-center uppercase font-semibold">
                {t("doctors_section.description")}
                <b>
                  <TiMinus />
                </b>
              </span>
            </div>
            <div className="bottom flex justify-between items-center md:flex-wrap">
              <h1 className="text-[42px] leading-60 font-bold inline text-darkBlue md:text-[30px]">
                {t("doctors_section.heading")}
              </h1>
              
            </div>
          </div>
          <div className="speacer h-[30px]"></div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ArticleSectionCardData.map((article) => (
              <ArticleCards
                key={article.id}
                image={article.image}
                title={article.title}
                date={article.date}
                views={article.views}
                link={article.link}
              />
            ))}
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
