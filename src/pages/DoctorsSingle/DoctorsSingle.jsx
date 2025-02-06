import { DoctorsSectionData } from "../../assets/datas/datas";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import DocotorSingleCard from "../../components/DocotorSingleCard/DocotorSingleCard";
import Biography from "../../components/Biography/Biography";
import ContactME from "../../components/ContactME/ContactME";
import { useTranslation } from "react-i18next";

function DoctorsSingle() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const lang = i18n.language;
  const selectedDoctor = DoctorsSectionData.find((doctor) => doctor.id == id);
  if (!selectedDoctor) {
    return <div>Doctor not found!</div>;
  }
  return (
    <>
      <div className="doctor-single bg-[url('https://wgl-dsites.net/medify/wp-content/uploads/2019/08/team_page-title.jpg')] bg-cover bg-no-repeat bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full md:h-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold md:text-[30px]">
                {t("doctor_single_page.subHeading")}
              </h1>
              <div className="breadcrumps whitespace-nowrap capitalize font-bold flex items-center mt-[8px] leading-[24px] text-[16px] md:text-[14px]">
                <Link to={"/"} className="opacity-70 text-darkBlue ">
                  {t("doctor_single_page.home")}
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <span className="current opacity-[1] text-darkBlue ">
                  {" "}
                  {selectedDoctor.name[lang]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer">
        <div className="container h-[80px] md:h-[40px]"></div>
      </div>
      <section>
        <div className="container">
          <DocotorSingleCard />
          <Biography />
          <ContactME />
        </div>
      </section>
    </>
  );
}

export default DoctorsSingle;
