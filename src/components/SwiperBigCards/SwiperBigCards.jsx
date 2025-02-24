import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function SwiperBigCards({ SwiperBigCardDatas }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      startIndex: 1,
    },
    [Autoplay({ delay: 10000, stopOnInteraction: false })]
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative overflow-hidden h-[100vh] sm:h-[35vh] lg:h-[40vh]">
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {SwiperBigCardDatas.map((data) => (
            <div
              className="flex-none w-full min-w-0 relative h-full"
              key={data.id}
            >
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={data.img}
                alt="patient image"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-[40px] z-10 p-2 bg-white/80 rounded-full transform -translate-y-1/2 slg:hidden focus:outline-none"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <RiArrowLeftSLine className="text-2xl" />
      </button>

      <button
        className="absolute top-1/2 right-[40px] z-10 p-2 bg-white/80 rounded-full transform -translate-y-1/2 slg:hidden focus:outline-none"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <RiArrowRightSLine className="text-2xl" />
      </button>
    </div>
  );
}

export default SwiperBigCards;
