import { Link } from "react-router-dom";
import Img from "../LazyLoadImg/Img";
import { useTranslation } from "react-i18next";

const ArticlePageCard = ({ imgSrc, title, date }) => {
  const { i18n } = useTranslation();
  return (
    <Link
      to={"articleSingle/"}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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
        <div className="flex justify-between text-base text-gray ">
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticlePageCard;