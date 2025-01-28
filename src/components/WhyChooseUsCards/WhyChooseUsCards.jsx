import { useTranslation } from "react-i18next";
import Img from "../LazyLoadImg/Img";

const WhyChooseUsCard = ({ card }) => {
  const { i18n } = useTranslation();
    return (
      <div className="card flex gap-[15px] cursor-pointer  md:flex-wrap">
        <div className="img-wrapper inline-block w-[85px] md:w-[15%] text-left">
          <Img
            className="w-full h-auto object-cover"
            src={card.imageSrc}
            alt={card.title[i18n.language]}
          />  
        </div>
        <div className="card-content flex flex-col m-[0_0_30px_0]">
          <h5 className="m-[-6px_0_0_0] text-[14px] text-lightBlue font-bold uppercase leading-30">
            {card.title[i18n.language]}
          </h5>
          <div className="paragraf-content text-[#3b4964] text-[16px]">
            <p className="mb-0">{card.description[i18n.language]}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyChooseUsCard;
  