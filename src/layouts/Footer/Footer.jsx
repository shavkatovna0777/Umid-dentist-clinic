import { useTranslation } from "react-i18next";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { TbClockHour10Filled } from "react-icons/tb";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="pt-[80px] pb-[10px]  ">
      <div className="container">
        <div className="footer-main w-full flex slg:flex-wrap slg:justify-between">
          <div className="left p-[15px] md:p-0">
            <div className="heading mb-[20px] ">
              <h6 className="text-[20px] font-semibold text-darkBlue">
                {t("footer.subHeading1")}{" "}
              </h6>
            </div>
            <Link
              onClick={handleClick}
              to={"contact"}
              className="content cursor-pointer  text-left flex flex-row mb-[20px] whitespace-nowrap"
            >
              <div className="icon-wrapper inline-flex flex-none  m-[0_15px_0_0]">
                <HiLocationMarker className="text-orange text-[30px]" />
              </div>
              <div className="infobox m-[-5px_0_0_0] leading-6">
                <p className="text-[#3b4964]">
                  {t("footer.location")} <br /> {t("footer.location2")}
                </p>
              </div>
            </Link>
            <Link
              to="tel:+998932997073"
              className="content cursor-pointer text-left flex flex-row mb-[20px] whitespace-nowrap"
            >
              <div className="icon-wrapper inline-flex flex-none  m-[0_15px_0_0]">
                <BiSolidPhoneCall className="text-orange text-[30px]" />
              </div>
              <div className="infobox m-[-5px_0_0_0] leading-6">
                <p className="text-[#3b4964]">
                  {t("footer.call")} <br /> +998 93 299 70 73
                </p>
              </div>
            </Link>
            <Link
              onClick={handleClick}
              to={"contact"}
              className="content cursor-pointer  text-left flex flex-row mb-[20px] whitespace-nowrap"
            >
              <div className="icon-wrapper m- inline-flex flex-none m-[0_15px_0_0]">
                <TbClockHour10Filled className="text-orange text-[30px]" />
              </div>
              <div className="infobox m-[-5px_0_0_0] leading-6">
                <p className="text-[#3b4964]">
                  {t("footer.working_hours.mon_fri")} <br />{" "}
                  {t("footer.working_hours.sat_sun")}
                </p>
              </div>
            </Link>
          </div>
          <div className="center py-[15px] px-[15px] mx-[30px] md:mx-0 md:w-full md:items-start md:flex md:flex-col md:justify-center">
            <div className="heading mb-[20px]">
              <h6 className="text-[20px] font-semibold text-darkBlue">
                {t("footer.subHeading2")}{" "}
              </h6>
            </div>
            <div className="working-hours flex flex-col">
              <div className="working-hour m-[0_0_6px_0] flex align-baseline items-center w-[270px] h-[30px] justify-between">
                <div className="working-day mr-[13px] text-[#3b4964] font-normal">
                  {t("footer.working_days.monday")}{" "}
                </div>
                <div className="relative flex-1 after:content-[''] after:block after:h-[1.5px] after:bg-[#ECECEC] after:absolute after:top-1/2 after:left-0 after:right-0"></div>
                <div className="woring-hour ml-[13px] text-blue">
                  {t("footer.working_days.weekHours")}{" "}
                </div>
              </div>
              <div className="working-hour m-[0_0_6px_0] flex align-baseline items-center w-[270px] h-[30px] justify-between">
                <div className="working-day mr-[13px] text-[#3b4964] font-normal">
                  {t("footer.working_days.tuesday")}{" "}
                </div>
                <div className="relative flex-1 after:content-[''] after:block after:h-[1.5px] after:bg-[#ECECEC] after:absolute after:top-1/2 after:left-0 after:right-0"></div>
                <div className="woring-hour ml-[13px] text-blue">
                  {t("footer.working_days.weekHours")}{" "}
                </div>
              </div>{" "}
              <div className="working-hour m-[0_0_6px_0] flex align-baseline items-center w-[270px] h-[30px] justify-between">
                <div className="working-day mr-[13px] text-[#3b4964] font-normal">
                  {t("footer.working_days.wednesday")}{" "}
                </div>
                <div className="relative flex-1 after:content-[''] after:block after:h-[1.5px] after:bg-[#ECECEC] after:absolute after:top-1/2 after:left-0 after:right-0"></div>
                <div className="woring-hour ml-[13px] text-blue">
                  {t("footer.working_days.weekHours")}{" "}
                </div>
              </div>{" "}
              <div className="working-hour m-[0_0_6px_0] flex align-baseline items-center w-[270px] h-[30px] justify-between">
                <div className="working-day mr-[13px] text-[#3b4964] font-normal">
                  {t("footer.working_days.thursday")}{" "}
                </div>
                <div className="relative flex-1 after:content-[''] after:block after:h-[1.5px] after:bg-[#ECECEC] after:absolute after:top-1/2 after:left-0 after:right-0"></div>
                <div className="woring-hour ml-[13px] text-blue">
                  {t("footer.working_days.weekHours")}{" "}
                </div>
              </div>{" "}
              <div className="working-hour m-[0_0_6px_0] flex align-baseline items-center w-[270px] h-[30px] justify-between">
                <div className="working-day mr-[13px] text-[#3b4964] font-normal">
                  {t("footer.working_days.friday")}{" "}
                </div>
                <div className="relative flex-1 after:content-[''] after:block after:h-[1.5px] after:bg-[#ECECEC] after:absolute after:top-1/2 after:left-0 after:right-0"></div>
                <div className="woring-hour ml-[13px] text-blue">
                  {t("footer.working_days.weekHours")}{" "}
                </div>
              </div>{" "}
              <div className="working-hour m-[0_0_6px_0] flex align-baseline items-center w-[270px] h-[30px] justify-between">
                <div className="working-day mr-[13px] text-[#3b4964] font-normal whitespace-nowrap">
                  {t("footer.working_days.weekend")}{" "}
                </div>
                <div className="relative flex-1 after:content-[''] after:block after:h-[1.5px] after:bg-[#ECECEC] after:absolute after:top-1/2 after:left-0 after:right-0"></div>
                <div className="woring-hour ml-[13px] text-blue whitespace-nowrap">
                  {t("footer.working_days.weekendHours")}{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="right relative flex w-[80%] h-[40vh] content-start flex-wrap rounded-[15px] overflow-hidden slg:w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1038.9741169897668!2d67.83599981375878!3d40.1041778094287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b295004dff014f%3A0xcb8c446a9259df1d!2sStomatologiya%20Dental%20clinic!5e1!3m2!1sen!2s!4v1736759995344!5m2!1sen!2s"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-lightBlue bg-opacity-40 pointer-events-none"></div>
          </div>
        </div>
        <div className="speacer h-[70px]"></div>
      </div>
      <hr className="text-[#b1b4ba]" />
      <div className="container">
        <div className="main flex  items-center justify-between slg:gap-[10px] slg:text-center">
          <div className="py-[15px]">
            <p className="text-[#3b4964] slg:hidden ">
              {t("footer.termsUse")}{" "}
            </p>
          </div>
          <div className="py-[15px]  slg:text-center slg:flex slg:justify-center slg:mx-auto">
            <p className="text-[#3b4964] slg:whitespace-nowrap slg:text-center md:whitespace-wrap md:justify-center md:flex md:items-center md:text-[15px] sm:text-[10px] ">
              {t("footer.copyright")}{" "}
              <Link
                to={"http://t.me/kamola_tech"}
                target="_blank"
                className="text-lightBlue cursor-pointer"
              >
                Kamola_Tech.
              </Link>{" "}
              {t("footer.policy")}{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
