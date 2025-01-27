import React from "react";
import SwiperIcons from "../SwiperIcons/SwiperIcons";
import { TiMinus } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Img from "../LazyLoadImg/Img";
import { services } from "../../assets/datas/datas";
import ServiceCard from "../ServiceCard/ServiceCard";
function ServiceSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);
  return (
    <section className="bg-[#F9F9F9]">
      <div className="container">
        <div className="speacer h-[90px] md:h-[30px]"></div>
        <div className="service-main ">
          <div className="title flex flex-col items-center p-[10px] mx-[200px] md:mx-[100px]">
            <span className="uppercase flex items-center gap-[5px] font-semibold text-[16px] md:font-medium md:whitespace-nowrap md:text-[13px]  text-orange">
              <b>
                <TiMinus />
              </b>
              our services{" "}
              <b>
                <TiMinus />
              </b>
            </span>
            <h1 className="text-[42px] text-darkBlue font-bold slg:whitespace-nowrap md:text-[25px] ">
              What We Can Offer You
            </h1>
            <p className="items-center text-center text-[16px] text-[#3b4964] m-[0_0_20px_0] slg:text-[13px] md:hidden">
              We have introduced the principle of family medicine, which means
              that the family practitioner will handle the majority of medical
              requests, with a specialists involved only if necessary.
            </p>
          </div>
          <ServiceCard />
          <div className="speacer h-[90px] md:h-[30px]"></div>
          <div className="swiper flex items-center">
            <SwiperIcons />
          </div>
          <div className="speacer h-[90px] md:h-[30px]"></div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
