import { useTranslation } from "react-i18next";
import { services } from "../../assets/datas/datas";
import Img from "../LazyLoadImg/Img";

const ServiceCard = () => {
  const { i18n } = useTranslation();

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 pt-[10px] slg:grid-cols-2 md:grid-cols-1">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={
              index === 2
                ? "slg:col-span-2 slg:w-[calc(50%-12px)] slg:justify-self-center md:col-span-1 md:w-[100%] "
                : ""
            }
          >
            <div className="relative p-3">
              <div className="overflow-hidden rounded-[15px]">
                <Img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover md:h-[100%]"
                />
              </div>

              <div className="relative flex justify-center -mt-8 mx-6">
                <h3 className="inline-block whitespace-nowrap text-darkBlue bg-white p-3.5 text-center text-xl font-bold text-gray-800 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl sm:text-lg">
                  {service.title[i18n.language]}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
