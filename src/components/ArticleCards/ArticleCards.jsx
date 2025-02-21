import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Img from "../LazyLoadImg/Img";
import { ArticleSectionCardData } from "../../assets/datas/datas";

const ArticleCards = ({ imgSrc, title, date, className }) => {
  const { i18n } = useTranslation();
  return (
    <Link
      to="articleSingle/"
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      <Img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-darkBlue">
          {title[i18n.language] || title.eng}
        </h3>
        <div className="flex justify-between text-base text-gray">
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

const ArticleGrid = () => {

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-6 slg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        {ArticleSectionCardData.slice(0, 3).map((article, index) => (
          <ArticleCards
            key={article.id}
            className={
              index === 2
                ? "slg:col-span-2 slg:w-[calc(50%-12px)] slg:mx-auto sm:col-span-1 sm:w-full"
                : ""
            }
            {...article}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;