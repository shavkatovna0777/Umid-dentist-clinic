import React from "react";
import { useTranslation } from "react-i18next";

function Biography() {
  const { t } = useTranslation();

  return (
    <div className="biography flex flex-col pl-[20px]">
      <h1 className="text-[42px] leading-60 text-darkBlue font-semibold mb-[15px] md:text-[30px] md:leading-10">
       {t("doctor_single_page.bio")}
      </h1>
      <p className="m-[0_0_20px_0] text-[#3b4964] sm:text-[14px]">
        Buribayev Umid Ummatvich 1987-yilda tug‘ilgan. U 2006-yilda Buxoro
        Davlat Tibbiyot Institutining stomatologiya fakultetiga o‘qishga kirib,
        2011-yilda muvaffaqiyatli tamomlagan. Mehnat faoliyati davomida Moskva
        shahrida hamda Jizzax viloyati stomatologiya markazida tajriba
        orttirgan. Shuningdek, "Marjona" stomatologiyasida ham samarali faoliyat
        yuritgan. Hozirgi kunda Umid Ummatvich o‘z kasbini "Umid Dentis"
        stomatologiya klinikasida davom ettirib, bemorlarga sifatli va zamonaviy
        stomatologik xizmat ko‘rsatib kelmoqda.
      </p>
    </div>
  );
}

export default Biography;
