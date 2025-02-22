import { BiLocationPlus } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { TiMinus } from "react-icons/ti";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import FormContactPage from "../../components/FormContactPage/FormContactPage";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="contact-page bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/page-title-1.jpg)] bg-cover bg-no-repeat bg-scroll bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold">
                {t("contact_page.subHeading")}
              </h1>
              <div className="breadcrumps whitespace-nowrap capitalize font-bold flex items-center mt-[8px] leading-[24px] text-[16px]">
                <Link to={"/"} className="opacity-70 text-darkBlue ">
                  {t("contact_page.home")}
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <span className="current opacity-[1] text-darkBlue ">
                  {t("contact_page.contacts")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full h-auto py-[40px]  md:py-0">
        <div className="container">
          <div className="parent ">
            <div className="top flex slg:flex-wrap">
              <div className="left p-[10px] flex flex-wrap w-full relative content-start flex-col">
                <div className="double-heading flex flex-col my-[20px]">
                  <span className="gap-[5px] text-[15px] flex items-center uppercase font-semibold text-orange">
                    {t("contact_page.left.subHeading")}
                    <b>
                      <TiMinus />
                    </b>
                  </span>
                  <h1 className="text-[42px] leading-60 font-bold inline text-darkBlue md:text-[30px] md:leading-10">
                    {t("contact_page.left.home")}
                  </h1>
                </div>
                <div className="text w-[80%]">
                  <p className="mb-[20px] text-[#3b4964]">
                    {t("contact_page.left.paragraph")}
                  </p>
                </div>
                <div className="cards">
                  <div className="card flex items-center gap-[20px] flex-none mb-[15px]">
                    <div className="img-wrapper">
                      <IoCallOutline className="text-lightBlue text-[35px]" />
                    </div>
                    <div className="content flex flex-col">
                      <h6 className="text-lightBlue break-words uppercase leading-[1.4] text-[14px] font-bold mt-[-2px] mb-[4px] mx-0">
                        {t("contact_page.left.call")}
                      </h6>
                      <p className="m-[0_0_6px_0] text-[#3b4964] text-[16px]">
                        +998 93 299 70 73
                      </p>
                    </div>
                  </div>
                  <div className="card flex items-center gap-[20px] flex-none mb-[15px]">
                    <div className="img-wrapper">
                      <HiOutlineMailOpen className="text-lightBlue text-[35px]" />
                    </div>
                    <div className="content flex flex-col">
                      <h6 className="text-lightBlue break-words uppercase leading-[1.4] text-[14px] font-bold mt-[-2px] mb-[4px] mx-0">
                        {t("contact_page.left.telegram")}
                      </h6>
                      <Link
                        to={"https://t.me/Umiddentistdentalclinic"}
                        target="_blank"
                        className="m-[0_0_6px_0] text-[#3b4964] text-[16px]"
                      >
                        @Umid-dentist
                      </Link>
                    </div>
                  </div>
                  <div className="card flex items-center gap-[20px] flex-none ">
                    <div className="img-wrapper">
                      <BiLocationPlus className="text-lightBlue text-[35px]" />
                    </div>
                    <div className="content flex flex-col">
                      <h6 className="text-lightBlue break-words uppercase leading-[1.4] text-[14px] font-bold mt-[-2px] mb-[4px] mx-0">
                        {t("contact_page.left.location")}
                      </h6>
                      <p className="m-[0_0_6px_0] text-[#3b4964] text-[16px]">
                        {t("contact_page.left.loc_address")} <br />{" "}
                        {t("contact_page.left.loc_address2")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <FormContactPage />
            </div>
          </div>
        </div>
      </section>
      <div className="spacer h-[20px] slg:h-0 "></div> <ScrollToTop />
    </>
  );
}

export default ContactPage;
