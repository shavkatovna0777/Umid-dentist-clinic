import { FaInstagram, FaPlus } from "react-icons/fa6";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardSocialIcons = ({ socialLinks = {} }) => {
  const { telegram, instagram, phone } = socialLinks;

  return (
    <div className="info-icons absolute right-[20px] top-[22px] z-[1] group">
      <div className="icon-plus inline-block z-[-1] bg-white text-blue p-[8px] transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:bg-blue group-hover:text-white ease-in-out rounded-[50%] cursor-pointer shadow-custom-blue">
        <Link>
          <FaPlus />
        </Link>
      </div>
      <span className="block bg-white text-blue text-[13px] translate-y-[-100%] mb-[10px] transition-all duration-400 opacity-0 w-0 h-0 text-center leading-[34px] rounded-full absolute group-hover:top-[44px] group-hover:translate-y-0 group-hover:opacity-100 group-hover:w-[34px] group-hover:h-[34px] group-hover:mb-[15px] group-hover:delay-100 ease-in-out after:content-[''] after:absolute after:w-full after:h-[10px] after:left-0 after:top-[-10px] cursor-pointer ">
        <Link
          target="_blank"
          to={telegram}
          className="h-full flex hover:bg-blue hover:shadow-xl hover:text-white duration-[0.4s] items-center justify-center rounded-full"
        >
          <FaTelegramPlane />
        </Link>
      </span>
      <span className="block bg-white text-blue text-[13px] translate-y-[-100%] mb-[10px] transition-all duration-400 opacity-0 w-0 h-0 text-center leading-[34px] rounded-full absolute group-hover:top-[88px] group-hover:translate-y-0 group-hover:opacity-100 group-hover:w-[34px] group-hover:h-[34px] group-hover:mb-[15px] group-hover:delay-200 ease-in-out after:content-[''] after:absolute after:w-full after:h-[10px] after:left-0 after:top-[-10px] cursor-pointer ">
        <Link
          target="_blank"
          to={instagram}
          className="h-full flex hover:bg-blue hover:shadow-xl hover:text-white duration-[0.4s] items-center justify-center rounded-full"
        >
          <FaInstagram />
        </Link>
      </span>
      <span className="block bg-white text-blue text-[13px] translate-y-[-100%] mb-[10px] transition-all duration-400 opacity-0 w-0 h-0 text-center leading-[34px] rounded-full absolute group-hover:top-[132px] group-hover:translate-y-0 group-hover:opacity-100 group-hover:w-[34px] group-hover:h-[34px] group-hover:mb-[15px] group-hover:delay-300 ease-in-out after:content-[''] after:absolute after:w-full after:h-[10px] after:left-0 after:top-[-10px] cursor-pointer ">
        <Link
          target="_blank"
          to={`tel:${phone}`}
          className="h-full flex hover:bg-blue hover:shadow-xl hover:text-white duration-[0.4s] items-center justify-center rounded-full"
        >
          <FaPhoneAlt />
        </Link>
      </span>
    </div>
  );
};

export default CardSocialIcons;
