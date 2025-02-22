import { useTranslation } from "react-i18next";
import { DoctorsSectionData } from "../../assets/datas/datas";

function Biography({id,lang}) {
  const { t } = useTranslation();
  const selectedDoctor = DoctorsSectionData.find((doctor) => doctor.id == id);

  if (!selectedDoctor) {
    return <p>{t("doctor_single_page.not_found")}</p>;
  }
  return (
    <div className="biography flex flex-col pl-[20px]">
      <h1 className="text-[42px] leading-60 text-darkBlue font-semibold mb-[15px] md:text-[30px] md:leading-10">
       {t("doctor_single_page.bio")}
      </h1>
      <p className="m-[0_0_20px_0] text-[#3b4964] sm:text-[14px]">
      {selectedDoctor.biography[lang]}
      </p>
    </div>
  );
}

export default Biography;
