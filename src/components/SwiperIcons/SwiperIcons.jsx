import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import img from "../../assets/images/biorepairLogoo1.jpg";

const slides = Array(6).fill({ src: img, alt: "Biorepair Logo" });

export default function SwiperIcons() {
  return (
    <Swiper
      watchSlidesProgress={true}
      slidesPerView={6}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
      }}
      className="mySwiper "
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="img-wrapper h-20 w-full flex items-center justify-center p-4">
            <img
              className="max-w-full h-auto hover:scale-110 transition-transform duration-300 ease-in-out"
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
