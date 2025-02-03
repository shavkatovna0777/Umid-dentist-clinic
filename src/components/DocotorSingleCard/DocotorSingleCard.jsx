import React from 'react';
import Img from "../LazyLoadImg/Img";
import { useParams } from "react-router-dom";
import { DoctorsSectionData } from "../../assets/datas/datas";
import SocialIcons from "../SocialIcons/SocialIcons";

function DoctorSingleCard() {
  const { id } = useParams();
  const selectedDoctor = DoctorsSectionData.find((doctor) => doctor.id == id);
  const lang = 'uz'; // You can change this based on your language selection

  if (!selectedDoctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="doctor-card px-[15px] md:px-[5px]">
      <div className="doctor-card-wrapper flex relative z-[1] mb-[80px] bg-white h-[500px] mt-[2px] rounded-[15px] shadow-[11px_8px_35px_0_rgba(0,0,0,0.08)] slg:flex-col slg:h-[90vh] slg:justify-center slg:text-center">
        <div className="img-wrapper w-[50%] slg:w-full rounded-[15px] overflow-hidden">
          <div className="doctor-image h-[300px] slg:h-full">
            <Img
              src={selectedDoctor.imgSrc}
              className="relative align-top w-full h-full object-cover slg:rounded-[15px]"
              alt={`${selectedDoctor.name[lang]} image`}
            />
          </div>
        </div>

        <div className="info-wrapper bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/team_bg.png)] flex-1 pl-[5.6%] m-[15px_15px_15px_0] flex flex-col content-center bg-center bg-no-repeat justify-center pb-24 slg:text-center slg:justify-center slg:mx-auto">
          <h2 className="relative z-[1] mb-[24px] text-[42px] leading-[1.055] md:text-[35px] font-bold text-darkBlue">
            {selectedDoctor.name[lang]}
          </h2>
          
          <div className="info-item team-department items-center">
            <h5 className="font-medium text-darkBlue">Speciality:</h5>
            <span className="text-blue font-semibold ml-[5px]">
              {selectedDoctor.role[lang]}
            </span>
          </div>
          
          <div className="info-item">
            <h5 className="font-medium text-darkBlue">Length of Work:</h5>
            <span className="text-[#3B4973] font-semibold ml-[5px]">
              {selectedDoctor.workingSince[lang]}
            </span>
          </div>
          
          <div className="info-item">
            <h5 className="font-medium text-darkBlue">Phone:</h5>
            <span className="text-[#3B4973] font-semibold ml-[5px]">
              {selectedDoctor.socialLinks.phone}
            </span>
          </div>
          
          <div className="info-item mt-4">
            <SocialIcons links={selectedDoctor.socialLinks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorSingleCard;