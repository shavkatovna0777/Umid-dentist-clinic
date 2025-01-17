import Img from "../LazyLoadImg/Img";
import { Link } from "react-router-dom";
import CardSocialIcons from "../CardSocialIcons/CardSocialIcons";

const DoctorsCard = ({ doctor = {} }) => {
  if (!doctor.id) {
    console.error("Doctor object is missing or 'id' is undefined:", doctor);
    return null;
  }
  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="card px-[15px] slg:w-[100%] md:w-full pb-[30px]">
      <div className="img-wrapper w-[100%] h-full overflow-hidden rounded-[15px] relative">
        <Link to={`/page/${doctor.id}`} onClick={handleClickTop}>
          <Img
            className="w-full h-[400px] object-cover rounded-[15px]"
            src={doctor.imgSrc}
            alt=""
          />
        </Link>
        <CardSocialIcons socialLinks={doctor.socialLinks} />
      </div>
      <div className="card-content text-center">
        <Link to={`/page/${doctor.id}`} onClick={handleClickTop}>
          <h3 className="text-[25px] font-semibold text-darkBlue transform duration-300 ease-in-out cursor-pointer hover:text-lightBlue">
            {doctor.name}
          </h3>
        </Link>
        <p className="text-[#3b4964]">{doctor.role}</p>
        <h5 className="text-[16px] text-lightBlue font-bold">
          Working since {doctor.workingSince}
        </h5>
      </div>
    </div>
  );
};

export default DoctorsCard;
