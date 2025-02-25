import { Link } from "react-router-dom";
import Img from "../LazyLoadImg/Img";
import { useTranslation } from "react-i18next";

const ArticlePageCard = ({ article }) => {
  const { i18n } = useTranslation();
  return (
    <Link
      to={`/articles/${article.id}`}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <Img
        src={article.imgSrc}
        alt={article.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-darkBlue">
          {article.title[i18n.language] || article.title.eng}
        </h3>
        <div className="flex justify-between text-base text-gray ">
          <span>{article.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticlePageCard;