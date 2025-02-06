import { Link } from "react-router-dom";
import { iconData } from "../../assets/datas/datas";

const IconButton = ({ IconComponent, hoverColor, linkUrl }) => (
  <Link
    target="_blank"
    to={linkUrl}
    className="block bg-white text-blue text-[13px] transition-all duration-400 text-center leading-[34px] rounded-full w-[34px] h-[34px] cursor-pointer relative"
  >
    <div
      className={`h-full shadow-[10px_7px_30px_0_rgba(0,42,106,0.1)] flex hover:${hoverColor} hover:shadow-xl hover:text-white items-center justify-center rounded-full transform transition-transform duration-500 hover:-translate-y-1`}
    >
      <IconComponent />
    </div>
  </Link>
);

const SocialIcons = ({ links }) => (
  <div className="info-icons absolute top-3/4 z-[1] group flex gap-2 mt-[-15px] slg:top-[92%] slg:text-center">
    {iconData.map(({ id, icon, hoverColor, type }) => {
      let linkUrl = "";

      switch (type) {
        case "telegram":
          linkUrl = "http://t.me/umid_dentist1";
          break;
        case "instagram":
          linkUrl =
            "https://www.instagram.com/umid_dentist?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
          break;
        case "phone":
          linkUrl = `tel:${links.phone}`;
          break;
        default:
          linkUrl = "#";
      }

      return (
        <IconButton
          key={id}
          IconComponent={icon}
          hoverColor={hoverColor}
          link={linkUrl}
        />
      );
    })}
  </div>
);

export default SocialIcons;
