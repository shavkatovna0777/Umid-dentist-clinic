import { FaTelegramPlane, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { iconData } from "../../assets/datas/datas";

const IconButton = ({ IconComponent, hoverColor, linkUrl }) => (
  <Link
    target="_blank"
    to={linkUrl}
    className="block bg-white text-blue text-[13px] transition-all duration-400 text-center leading-[34px] rounded-full w-[34px] h-[34px] cursor-pointer relative"
  >
    <div
      className={`h-full shadow-[10px_7px_30px_0_rgba(0,42,106,0.1)] flex hover:${hoverColor} hover:shadow-xl  items-center justify-center rounded-full transform transition-transform duration-500 hover:-translate-y-1`}
    >
      <IconComponent />
    </div>
  </Link>
);

const SocialIcons = ({ links }) => {
  if (!links) return null; 

  const iconsMap = {
    telegram: FaTelegramPlane,
    instagram: FaInstagram,
    phone: FaPhoneAlt,
  };

  return (
    <div className="info-icons absolute top-3/4 z-[1] group flex gap-2 mt-[-15px] slg:top-[92%] slg:text-center">
      {Object.entries(links).map(([key, value]) => {
        const iconDataItem = iconData.find((item) => key === item.icon.name.toLowerCase());
        return (
          <IconButton
            key={key}
            IconComponent={iconsMap[key]}
            hoverColor={iconDataItem?.hoverColor || "bg-gray"}
            linkUrl={key === "phone" ? `tel:${value}` : value}
          />
        );
      })}
    </div>
  );
};

export default SocialIcons;
