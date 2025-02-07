import img2 from "../../assets/images/workingWithPatient.jpg";

const LayeredImages = () => {
  return (
    <div className="relative  w-full h-[470px] md:mx-auto md:w-auto md:h-auto md:py-32">
      <div className="absolute" data-aos="fade-left" data-aos-once="true">
        <div className="w-full aspect-square overflow-hidden ">
          <img
            src={img2}
            alt="doctors"
            className="w-full h-auto object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default LayeredImages;
