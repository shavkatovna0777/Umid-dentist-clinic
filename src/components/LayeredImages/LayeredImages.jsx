// import img1 from "../../assets/images/withPatient.jpg";
import img2 from "../../assets/images/workingWithPatient.jpg";

const LayeredImages = () => {
  return (
    <div className="relative  w-full h-[470px] md:mx-auto md:w-auto md:h-auto md:py-32">
      <div className="absolute" data-aos="fade-left" data-aos-once="true">
        <div className="w-full aspect-square overflow-hidden rounded-lg">
          <img
            src={img2}
            alt="doctors"
            className="w-full h-auto object-cover "
          />
        </div>
      </div>

      {/* <div className="absolute inset-0 z-20">
        <div className="w-[470px] h-[470px] overflow-hidden">
          <img
            src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/image-layers-3_2.png"
            alt="layer 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}

      {/* <div className="absolute inset-0 z-30">
        <div className="w-[470px] h-[470px] overflow-hidden">
          <img
            src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/image-layers-3_3.png"
            alt="layer 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}
    </div>
  );
};

export default LayeredImages;
