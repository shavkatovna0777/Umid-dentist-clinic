import { useTranslation } from "react-i18next";
import Img from "../LazyLoadImg/Img";

const ElementorCard = ({ imageSrc, title, description }) => {
  const { i18n } = useTranslation();
  return (
    <div className="card p-[15px] text-[#fff] hover:text-[#ffffffc7]">
      <div className="card-wrapper mt-[24px] transition-all duration-300 ease-in-out hover:transform hover:-translate-y-4">
        <div className="img-wrapper mb-[20px] inline-block w-[45]">
          <Img
            src={imageSrc}
            alt={title}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="cursor-pointer w-[100%]">
          <div className="title-wrapper">
            <h3 className="text-[23px] font-bold break-words relative leading-[1.4] mb-[10px] z-[1]">
              {title[i18n.language] || title.eng}
            </h3>
          </div>
          <div className="paragraf-wrapper m-[0_0_30px_0] text-[16px] transition-all duration-450 ease-in-out">
            <p className="mb-0"> {description[i18n.language] || title.eng}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementorCard;
