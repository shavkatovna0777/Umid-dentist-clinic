import { Link } from "react-router-dom";
import img from "../../assets/images/logo1.png";
import Img from "../LazyLoadImg/Img";

function Logo() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="logo flex items-center">
      <Link
        className="flex items-center max-w-[800px] gap-2 md:max-w-[300px]"
        to={"/"}
      >
        <div className="img-wrapper w-full object-contain h-auto max-w-[75px] md:max-w-[70px]">
          <Img
            onClick={handleClick}
            className="h-auto w-full object-contain flex-shrink-0"
            src={img}
            alt="logo"
          />
        </div>
        <div className="text flex flex-col">
          <h3 className="text-[30px] tracking-normal whitespace-nowrap font-semibold text-darkBlue md:text-[25px] md:text-white">
            Umid-dentist
          </h3>
          <span className="text-gray md:text-[12px]">
            Dental Clinic of the Future
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Logo;
