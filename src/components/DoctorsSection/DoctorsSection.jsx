import { TiMinus } from "react-icons/ti";
import DoctorsCard from "../DoctorsCard/DoctorsCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function DoctorsSection({ DoctorsSectionData }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="speacer h-[95px] sm:h-[80px]"></div>
        <div className="doc-main ">
          <div className="title flex flex-col items-center p-[10px] mx-[200px] md:mx-[100px]">
            <span className="uppercase flex items-center gap-[5px] font-semibold text-[16px] md:font-medium md:whitespace-nowrap md:text-[13px]  text-orange">
              <b>
                <TiMinus />
              </b>
              {t("doctors_section.description")}{" "}
              <b>
                <TiMinus />
              </b>
            </span>
            <h1 className="text-[42px] text-darkBlue font-bold slg:whitespace-nowrap md:text-[25px] ">
              {t("doctors_section.heading")}{" "}
            </h1>
            <p className="items-center text-center text-[16px] text-[#3b4964] m-[0_0_20px_0] slg:text-[13px] md:hidden">
              {t("doctors_section.paragraph")}{" "}
            </p>
          </div>
          <div className="doc-cards grid grid-cols-3 items-center pt-[10px] slg:grid-cols-2 slg:place-items-center md:w-full md:grid-cols-1">
            {DoctorsSectionData.map((doctor) => (
              <DoctorsCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
        <div className="speacer h-[50px]"></div>
      </div>
    </section>
  );
}

export default DoctorsSection;
