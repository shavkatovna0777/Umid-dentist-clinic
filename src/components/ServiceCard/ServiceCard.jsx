import { useTranslation } from "react-i18next";
import { services } from "../../assets/datas/datas";

const ServiceCard = () => {
  const { i18n } = useTranslation();

  return (
    <div className="w-full px-4">
      <div className="flex items-center justify-center gap-0">
        {services.map((service) => (
          <div
            key={service.id}
            className="group w-full max-w-sm cursor-pointer transition-all duration-300 hover:transform hover:scale-100"
          >
            <div className="relative p-3">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="relative flex justify-center -mt-8 mx-6">
                <h3 className="inline-block whitespace-nowrap  text-darkBlue bg-white  p-3.5 text-center text-xl font-bold text-gray-800 rounded-lg shadow-lg transition-all  duration-300 group-hover:shadow-xl">
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
