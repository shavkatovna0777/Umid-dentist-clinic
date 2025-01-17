import { IoIosArrowForward, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Img from "../LazyLoadImg/Img";
import { TiMinus } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import img1 from "../../assets/images/withPatient.jpg";
import img2 from "../../assets/images/workingWithPatient.jpg";
// import img3 from "../../assets/images/singleDoctor.jpg";
// import img4 from "../../assets/images/doctors.jpg";

function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative flex items-center mt-[120px] mb-[120px] md:mb-0">
        <div className="container flex flex-wrap justify-between items-center mx-auto relative">
          <div className="about-main flex items-center justify-between  w-[100%] slg:flex-col slg:items-start">
            {" "}
            <div className="left flex-1 relative ">
              <div className="title">
                <div className="title-double-heading">
                  <div className="about-me text-orange font-semibold sm:font-medium uppercase">
                    <span className="relative z-[1] flex items-center gap-[5px]">
                      About Us{" "}
                      <b>
                        <TiMinus />
                      </b>
                    </span>
                  </div>
                  <div className="title-wrapper  w-[75%] flex flex-col items-start leading-normal sm:flex-row sm:flex-wrap slg:w-full">
                    <h3 className="text-[36px] font-bold text-darkBlue sm:text-left sm:text-[30px]">
                      Advanced Equipment and Best Dentists
                    </h3>
                  </div>
                </div>
              </div>
              <div className="content text-[#3b4964]">
                <div className="max-w-[470px] mt-[15px]">
                  <p className="mb-[16px]">
                    For us, there are no minor aspects, because a quality result
                    always depends on trifles:
                  </p>
                </div>
                <ul className="p-[0_0_20px_0]">
                  <li className="flex items-center text-[16px] gap-[16px] py-[8px]">
                    <span className="text-[24px] text-lightBlue">
                      <IoMdCheckmarkCircleOutline />
                    </span>
                    A wide range of laboratory studies
                  </li>
                  <li className="flex items-center text-[16px] gap-[16px] py-[8px]">
                    <span className="text-[24px] text-lightBlue">
                      <IoMdCheckmarkCircleOutline />
                    </span>
                    Ultrasound examination
                  </li>
                  <li className="flex items-center text-[16px] gap-[16px] py-[8px]">
                    <span className="text-[24px] text-lightBlue">
                      <IoMdCheckmarkCircleOutline />
                    </span>
                    ECG, echocardiography
                  </li>
                  <li className="flex items-center text-[16px] gap-[16px] py-[8px]">
                    <span className="text-[24px] text-lightBlue">
                      <IoMdCheckmarkCircleOutline />
                    </span>
                    Consultations with specialized pediatricians
                  </li>
                </ul>
              </div>
              <div className="link flex items-center text-[16px] font-semibold text-blue hover:text-lightBlue transition-all duration-300 ease-in-out">
                <Link onClick={handleClick} to="page">
                  Read More
                </Link>
                <IoIosArrowForward className="font-bold text-[20px]" />
              </div>
            </div>
            <div className="right flex-1 slg:mt-[50px] overflow-hidden mt-[40px] w-full h-full">
              <div className="relative w-full h-[470px] md:mx-auto md:w-auto md:h-auto md:py-[130px]">
                {/* First image with fixed dimensions */}
                <div
                  className="absolute"
                  data-aos="fade-left"
                  data-aos-once="true"
                >
                  <div className="w-full aspect-square overflow-hidden">
                    <Img
                      src={img2}
                      alt="doctors img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Overlay images */}
                <div className="absolute inset-0 z-10 animate-slide-in-2">
                  <div className="w-[470px] h-[470px] overflow-hidden">
                    {" "}
                    {/* Fixed container size */}
                    <Img
                      src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/image-layers-3_2.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 z-[-1] animate-slide-in-3">
                  <div className="w-[470px] h-[470px] overflow-hidden">
                    {" "}
                    {/* Fixed container size */}
                    <Img
                      src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/image-layers-3_3.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
