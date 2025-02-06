import Img from "../LazyLoadImg/Img";
import { useParams } from "react-router-dom";
import { DoctorsSectionData } from "../../assets/datas/datas";
import SocialIcons from "../SocialIcons/SocialIcons";
import { useTranslation } from "react-i18next";

function DoctorSingleCard() {
  const { id } = useParams();
  const selectedDoctor = DoctorsSectionData.find((doctor) => doctor.id == id);
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const lang = i18n.language;
  if (!selectedDoctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="doctor-card px-[15px] md:px-[5px]">
      <div className="doctor-card-wrapper flex relative z-[1] mb-[80px] bg-white h-[500px] mt-[2px] rounded-[15px] shadow-[11px_8px_35px_0_rgba(0,0,0,0.08)] slg:flex-col slg:h-[90vh] slg:justify-center slg:text-center">
        <div className="img-wrapper w-[50%] slg:w-full rounded-[15px] overflow-hidden">
          <div className="doctor-image h-[300px] slg:h-full">
            <Img
              src={selectedDoctor.imgSrc}
              className="relative align-top w-full h-full object-cover slg:rounded-[15px]"
              alt={`${selectedDoctor.name[lang]} image`}
            />
          </div>
        </div>

        <div className="info-wrapper bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/team_bg.png)] flex-1 pl-[5.6%] m-[15px_15px_15px_0] flex flex-col content-center bg-center bg-no-repeat justify-center pb-24 slg:text-center slg:justify-center slg:mx-auto md:pl-0">
          <h2 className="relative z-[1] mb-[24px] text-[42px] leading-[1.055] font-bold text-darkBlue md:text-[30px]">
            {selectedDoctor.name[lang]}
          </h2>

          <div className="info-item team-department items-center">
            <h5 className="font-medium text-darkBlue">
              {t("doctor_single_page.speciality")}
            </h5>
            <span className="text-blue font-semibold ml-[5px] sm:text-[14px]">
              {selectedDoctor.role[lang]}
            </span>
          </div>

          <div className="info-item">
            <h5 className="font-medium text-darkBlue">
              {t("doctor_single_page.work")}
            </h5>
            <span className="text-[#3B4973] font-semibold ml-[5px] sm:text-[14px]">
              {selectedDoctor.workingSince[lang]}
            </span>
          </div>

          <div className="info-item">
            <h5 className="font-medium text-darkBlue">
              {t("doctor_single_page.phone")}
            </h5>
            <span className="text-[#3B4973] font-semibold ml-[5px] sm:text-[14px]">
              {selectedDoctor.socialLinks.phone}
            </span>
          </div>

          <div className="info-item mt-4 md:justify-center">
            <SocialIcons links={selectedDoctor.socialLinks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorSingleCard;
