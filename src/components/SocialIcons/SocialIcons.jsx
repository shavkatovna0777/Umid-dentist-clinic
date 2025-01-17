import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";

const iconData = [
  { id: 1, icon: <FaTwitter />, hoverColor: "bg-blue" },
  { id: 2, icon: <FaFacebookF />, hoverColor: "bg-blue" },
  { id: 3, icon: <FaPinterestP />, hoverColor: "bg-blue" },
];

const IconButton = ({ IconComponent, hoverColor }) => (
  <span className="block bg-white text-blue text-[13px] transition-all duration-400 text-center leading-[34px] rounded-full w-[34px] h-[34px] cursor-pointer relative">
    <div
      className={`h-full shadow-[10px_7px_30px_0_rgba(0,42,106,0.1)] flex hover:${hoverColor} hover:shadow-xl hover:text-white items-center justify-center rounded-full transform transition-transform duration-500 hover:-translate-y-1`}
    >
      {IconComponent}
    </div>
  </span>
);

const SocialIcons = () => (
  <div className="info-icons absolute top-3/4 z-[1] group flex gap-2 mt-[-15px] slg:top-[92%] slg:text-center">
    {iconData.map(({ id, icon, hoverColor }) => (
      <IconButton key={id} IconComponent={icon} hoverColor={hoverColor} />
    ))}
  </div>
);

export default SocialIcons;
