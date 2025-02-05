import SwiperBigCards from "../../components/SwiperBigCards/SwiperBigCards";
import SmallCards from "../../components/SmallCards/SmallCards";
import AboutSection from "../../components/AboutSection/AboutSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import ElementorSection from "../../components/ElementorSection/ElementorSection";
import WhyChooseUsSection from "../../components/WhyChooseUsSection/WhyChooseUsSection";
import DoctorsSection from "../../components/DoctorsSection/DoctorsSection";
import CheckUpSection from "../../components/CheckUpSection/CheckUpSection";
import ArticleSection from "../../components/ArticleSection/ArticleSection";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import {
  DoctorsSectionData,
  ElementorCardData,
  ArticleSectionCardData,
  SmallCardData,
  SwiperBigCardDatas,
  WhyChooseUsCardData,
} from "../../assets/datas/datas";

function Home() {
  return (
    <main>
      <SwiperBigCards SwiperBigCardDatas={SwiperBigCardDatas}/>
      <SmallCards SmallCardData={SmallCardData} />
      <AboutSection />
      <ServiceSection />
      <ElementorSection ElementorCardData={ElementorCardData} />
      <WhyChooseUsSection WhyChooseUsCardData={WhyChooseUsCardData} />
      <DoctorsSection DoctorsSectionData={DoctorsSectionData} />
      <CheckUpSection />
      <ArticleSection ArticleSectionCardData={ArticleSectionCardData} />
      <ScrollToTop />
    </main>
  );
}

export default Home;
