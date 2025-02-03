import { Link } from "react-router-dom";

const ArticleCards = ({ image, title, date, link }) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2 hover:text-blue-600">
            {title}
          </h3>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCards;
