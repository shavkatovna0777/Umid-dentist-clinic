import { useTranslation } from "react-i18next";
import Img from "../../components/LazyLoadImg/Img";

function Card({ title, imageUrl, description }) {
  const { i18n } = useTranslation();

  return (
    <div className="card bg-white flex flex-col items-center justify-center p-10 rounded-[15px] shadow-[0_0_30px_0_rgba(0,42,106,0.1)] transform transition-transform duration-500 hover:-translate-y-5 slg:w-full slg:h-auto md:w-[100%] md:p-5">
      <div className="img-wrapper mb-4 max-w-[100px] sm:max-w-[50px]">
        <Img className="h-auto w-full no-drag " src={imageUrl} alt={title} />
      </div>
      <div className="card-content text-center">
        <h2 className="text-[22px] sm:text-[20px] leading-[1.4] font-semibold mb-3 text-darkBlue">
          {title[i18n.language] || title.eng}
        </h2>
        <p className="text-[16px] text-[#47546D] sm:text-[14px]">
          {description[i18n.language] || description.eng}
        </p>
      </div>
    </div>
  );
}

export default Card;
