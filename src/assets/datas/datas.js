import doctorImg1 from "../images/umidDoctor.jpg";
import doctorImg2 from "../images/faxriddinDoctor.png";
import doctorImg3 from "../images/muhammadDoctor.jpg";
import clinicImg1 from "../images/inside_img.jpg";
import clinicImg2 from "../images/clinicInside2.jpg";
import clinicImg3 from "../images/clinicInside3.jpg";
import clinicImg4 from "../images/clinicInside4.jpg";
import clinicImg5 from "../images/clinicInside5.jpg";
import teethImg1 from "../images/teethWhitening.png";
import teethImg2 from "../images/teethPlaced.png";
import teethImg3 from "../images/teethImplant.png";
import teethImg4 from "../images/teethTaking.png";
import teethImg5 from "../images/teethProtez.png";
import teethImg6 from "../images/teethBraces.png";
import serviceSectionImg1 from "../images/docsForServiceSection.jpg";
import serviceSectionImg2 from "../images/roomImg.jpg";
import serviceSectionImg3 from "../images/patient.jpg";
import articleTooth1 from "../images/crooked_tooth.jpg";
import articleTooth2 from "../images/implant_tooth.jpg";
import articleTooth3 from "../images/tooth_sensitivity3.jpg";
import articleTooth4 from "../images/wisdom_tooth.jpg";
import articleTooth5 from "../images/brace2.jpg";
import articleTooth6 from "../images/stomatit.jpg";
import articleTooth7 from "../images/sad_woman.jpg";
import articleTooth8 from "../images/install.jpg";
import articleTooth9 from "../images/karies.jpg";
// import articleSingle1 from "../images/artSingle1.png";
import { FaInstagram, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";

export const SmallCardData = [
  {
    title: {
      uz: "Tishni oqartirish",
      eng: "Tooth Whitening",
      ru: "Отбеливание зубов",
    },
    imageUrl: teethImg1,
    description: {
      uz: "Tish oqartirish – bu tishlarning rangini ochish va yuzaga kelgan dog‘ yoki rang o‘zgarishlarini yo‘qotish.",
      eng: "Tooth whitening is a process of lightening the color of teeth and removing stains or discoloration.",
      ru: "Отбеливание зубов – это процесс осветления цвета зубов и удаления пятен или изменения цвета.",
    },
  },
  {
    title: {
      uz: "Tish qo'yish",
      eng: "Tooth Implant",
      ru: "Установка импланта",
    },
    imageUrl: teethImg2,
    description: {
      uz: "Tish qo‘yish – bu tish yo‘qotilganda uning o‘rniga sun'iy tish qo‘yish jarayoni.",
      eng: "Tooth implant is the process of replacing a missing tooth with an artificial implant.",
      ru: "Установка импланта – это процесс замены отсутствующего зуба искусственным.",
    },
  },
  {
    title: {
      uz: "Implant",
      eng: "Implant",
      ru: "Имплант",
    },
    imageUrl: teethImg3,
    description: {
      uz: "Implant – bu tish yo‘qotilganda, uning o‘rniga mustahkam sun'iy ildiz o‘rnatish jarayoni.",
      eng: "An implant is a procedure where a durable and strong artificial root is placed to replace a missing tooth.",
      ru: "Имплант – это установка искусственного корня для замены отсутствующего зуба.",
    },
  },
  {
    title: {
      uz: "Og'riqsiz tish olish",
      eng: "Painless Tooth Extraction",
      ru: "Безболезненное удаление зуба",
    },
    imageUrl: teethImg4,
    description: {
      uz: "Og'riqsiz tish olish – bu tishni mutlaqo og‘riqsiz va xavfsiz tarzda olib tashlash jarayoni.",
      eng: "Painless tooth extraction is a procedure that ensures the removal of a tooth with modern anesthesia methods, making it completely pain-free and safe.",
      ru: "Безболезненное удаление зуба – это процедура, при которой удаление зуба проводится с использованием современных методов анестезии, обеспечивая полное отсутствие боли и безопасность.",
    },
  },
  {
    title: {
      uz: "Protez qo'yish",
      eng: "Protez",
      ru: "Протез",
    },
    imageUrl: teethImg5,
    description: {
      uz: "Protez qo‘yish – bu tabiiy tishlarning yo‘qotilgan qismini qayta tiklash jarayoni.",
      eng: "Tooth prosthetics is the method of restoring missing teeth with artificial ones.",
      ru: "Установка протеза – это способ восстановления отсутствующих зубов с помощью искусственных.",
    },
  },
  {
    title: {
      uz: "Breket qo'yish",
      eng: "Braces",
      ru: "Брекеты",
    },
    imageUrl: teethImg6,
    description: {
      uz: "Breket qo‘yish – tishlarni to‘g‘rilash uchun maxsus qurilmalar o‘rnatish jarayoni.",
      eng: "Braces are the process of installing devices to straighten teeth.",
      ru: "Установка брекетов – процесс установки устройств для выравнивания зубов.",
    },
  },
];

export const services = [
  {
    id: 1,
    title: {
      en: "Qualified doctors",
      uz: "Malakali shifokorlar",
      ru: "Kвалифицированные врачи",
    },
    image: serviceSectionImg1,
  },
  {
    id: 2,
    title: {
      en: "Modern equipment",
      uz: "Zamonaviy uskunalar",
      ru: "Cовременное оборудование",
    },
    image: serviceSectionImg2,
  },
  {
    id: 3,
    title: {
      en: "Quality treatment",
      uz: "Sifatli davolash",
      ru: "Kачественное лечение",
    },
    image: serviceSectionImg3,
  },
];

export const ElementorCardData = [
  {
    imageSrc:
      "https://wgl-dsites.net/medify/wp-content/uploads/2019/08/services4-1.png",
    title: {
      uz: "Qulay parvarish",
      ru: "Уютный уход",
      en: "Comfortable Care",
    },
    description: {
      uz: "Biz barcha yoshdagilar uchun qulay va sifatli tibbiy xizmatni joriy qildik",
      ru: "Мы внедрили удобное и качественное медицинское обслуживание для всех возрастов",
      en: "We have introduced comfortable and high-quality medical care for all ages",
    },
  },
  {
    imageSrc:
      "https://wgl-dsites.net/medify/wp-content/uploads/2019/08/services4-2.png",
    title: {
      uz: "Ishonchli shifokorlar",
      ru: "Надежные врачи",
      en: "Trusted Doctors",
    },
    description: {
      uz: "Klinikamiz yuqori sifatli tibbiy xizmatlarni taqdim etadi",
      ru: "Наша клиника предоставляет высококачественную медицинскую помощь",
      en: "Our clinic provides high-quality medical care",
    },
  },
  {
    imageSrc:
      "https://wgl-dsites.net/medify/wp-content/uploads/2019/08/services4-3.png",
    title: {
      uz: "Eng yuqori sifat",
      ru: "Высочайшее качество",
      en: "Highest Quality",
    },
    description: {
      uz: "Diagnostika va davolash uchun zamonaviy vositalar",
      ru: "Современные инструменты для диагностики и лечения",
      en: "State-of-the-art tools for diagnosis and treatment",
    },
  },
  {
    imageSrc:
      "https://wgl-dsites.net/medify/wp-content/uploads/2019/08/services4-4.png",
    title: {
      uz: "Doim tabassumda",
      ru: "Всегда с улыбкой",
      en: "Always Smiling",
    },
    description: {
      uz: "Har doim ehtiyojlaringizga yordam berishga tayyor",
      ru: "Всегда готовы помочь вам с вашими потребностями",
      en: "Always available to assist you with your needs",
    },
  },
];

export const WhyChooseUsCardData = [
  {
    imageSrc:
      "https://wgl-dsites.net/medify/wp-content/uploads/2019/08/infobox1-1.png",
    title: {
      uz: "Professional xizmat",
      ru: "Профессиональный сервис",
      en: "Professional Service",
    },
    description: {
      uz: "Bizning jamoamiz yuqori malakali mutaxassislar bilan ta'minlangan bo'lib, har doim eng yaxshi xizmatni taqdim etishga intiladi.",
      ru: "Наша команда состоит из высококвалифицированных специалистов, всегда стремящихся предоставить наилучший сервис.",
      en: "Our team is made up of highly qualified specialists who are always striving to provide the best service possible.",
    },
  },
  {
    imageSrc:
      "https://wgl-dsites.net/medify/wp-content/uploads/2019/08/infobox1-2.png",
    title: {
      uz: "Tejamkor narxlar",
      ru: "Доступные цены",
      en: "Affordable Prices",
    },
    description: {
      uz: "Biz eng yaxshi xizmatni eng maqbul narxlarda taklif etamiz, bozor narxlariga nisbatan yaxshiroq imkoniyatlar taqdim etamiz.",
      ru: "Мы предлагаем лучшие услуги по самым доступным ценам, предоставляя лучшие возможности на рынке по сравнению с конкурентами.",
      en: "We offer the best services at the most affordable prices, providing better opportunities compared to market prices.",
    },
  },
  {
    imageSrc:
      "https://wgl-dsites.net/medify/wp-content/uploads/2019/08/infobox1-3.png",
    title: {
      uz: "24/7 qo'llab-quvvatlash",
      ru: "Поддержка 24/7",
      en: "24/7 Support",
    },
    description: {
      uz: "Bizning jamoamiz har doim mavjud bo'lib, mijozlarga doimiy yordam va maslahatlar taqdim etadi, hatto tungi soatlarda ham.",
      ru: "Наша команда всегда доступна, предоставляя постоянную поддержку и консультации, даже в ночное время.",
      en: "Our team is always available to provide continuous support and advice, even during the late hours of the night.",
    },
  },
];

export const DoctorsSectionData = [
  {
    id: 1,
    imgSrc: doctorImg1,
    name: {
      uz: "Buribayev Umid",
      ru: "Бурибаев Умид",
      en: "Buribayev Umid",
    },
    role: {
      uz: "Ortoped, Xirurg, Implantolog",
      ru: "Ортопед, Хирург, Имплантолог",
      en: "Orthopedist, Surgeon, Implantologist",
    },
    workingSince: {
      uz: "2011 yildan beri ishlamoqda",
      ru: "Работает с 2011 года",
      en: "Working since 2011",
    },
    socialLinks: {
      telegram: "http://t.me/umid_dentist1",
      instagram:
        "https://www.instagram.com/umid_dentist?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      phone: "+998936549690",
    },
    biography: {
      uz: `Buribayev Umid Ummatovich 1987-yilda tug'ilgan. 2006-yilda Buxoro Davlat Tibbiyot Institutining stomatologiya fakultetiga o'qishga kirib, 2011-yilda muvaffaqiyatli tamomlagan. Mehnat faoliyati davomida Moskva shahrida hamda Jizzax viloyati stomatologiya markazida tajriba orttirgan. Shuningdek, "Marjona" stomatologiyasida ham samarali faoliyat yuritgan. Hozirgi kunda Umid Ummatovich o'z faoliyatini "Umid Dentist" stomatologiya klinikasida davom ettirib, bemorlarga zamonaviy va sifatli stomatologik xizmat ko'rsatib kelmoqda.`,
      ru: `Бурибаев Умид Умматович родился в 1987 году. В 2006 году поступил на стоматологический факультет Бухарского государственного медицинского института и успешно окончил его в 2011 году.  
В ходе своей профессиональной деятельности получил ценный опыт работы в Москве, а также в стоматологическом центре Джизакской области. Кроме того, успешно работал в стоматологической клинике 'Маржона'.  
В настоящее время Умид Умматович продолжает свою профессиональную деятельность в стоматологической клинике 'Umid Dentist', предоставляя своим пациентам современные и качественные стоматологические услуги.`,

      en: `Buribayev Umid Ummatvich was born in 1987. In 2006, he enrolled in the Faculty of Dentistry at Bukhara State Medical Institute and successfully graduated in 2011.
    Throughout his professional career, he gained valuable experience working in Moscow and at the Jizzakh Regional Dentistry Center. Additionally, he worked effectively at Marjona Dentistry.
    Currently, Umid Ummatvich continues his professional journey at Umid Dentist dental clinic, providing modern and high-quality dental services to his patients.`,
    },
  },
  {
    id: 2,
    imgSrc: doctorImg2,
    name: {
      uz: "Murodov Faxriddin",
      ru: "Муродов Фахриддин",
      en: "Murodov Faxriddin",
    },
    role: {
      uz: "Terapevt, Ortoped",
      ru: "Терапевт, Ортопед",
      en: "Therapist, Orthopedist",
    },
    workingSince: {
      uz: "2023 yildan beri ishlamoqda",
      ru: "Работает с 2023 года",
      en: "Working since 2023",
    },
    socialLinks: {
      telegram: "http://t.me/Faxriddin_m13",
      instagram:
        "https://www.instagram.com/dr.murodov_f/?utm_source=ig_web_button_share_sheet",
      phone: "+998955306066",
    },
    biography: {
      uz: `Murodov Faxriddin Ismatulla o‘g‘li 2018-yilda Sankt-Peterburg Davlat Pediatriya Universitetining stomatologiya fakultetiga o‘qishga kirib, 2023-yilda uni muvaffaqiyatli tamomlagan. O‘z kasbiy faoliyati davomida ilg‘or stomatologik usullarni o‘rganib, amaliy tajriba orttirgan. Hozirgi kunda Faxriddin Ismatulla o‘g‘li bemorlarga zamonaviy va sifatli stomatologik xizmat ko‘rsatib kelmoqda.`,
      ru: `Муродов Фахриддин Исматулла оглы в 2018 году поступил на стоматологический факультет Санкт-Петербургского государственного педиатрического университета и успешно окончил его в 2023 году. В ходе своей профессиональной деятельности изучал передовые стоматологические методы и приобрел практический опыт. В настоящее время Фахриддин Исматулла оглы активно оказывает пациентам современные и качественные стоматологические услуги, помогая им улучшить здоровье полости рта.`,
      en: `Murodov Fakhriddin Ismatulla ogli enrolled in the Faculty of Dentistry at Saint Petersburg State Pediatric University in 2018 and successfully graduated in 2023. Throughout his professional career, he has studied advanced dental techniques and gained practical experience. Currently, Fakhriddin Ismatulla ogli provides modern and high-quality dental services to his patients, helping them improve their oral health.`,
    },
  },
  {
    id: 3,
    imgSrc: doctorImg3,
    name: {
      uz: "Orziqulov Muhammad",
      ru: "Орзикулов Мухаммад",
      en: "Orziqulov Muhammad",
    },
    role: {
      uz: "Terapevt (kattalar va bolalar)",
      ru: "Терапевт (взрослые и дети)",
      en: "Therapist (Adults and Children)",
    },
    workingSince: {
      uz: "2024 yildan beri ishlamoqda",
      ru: "Работает с 2024 года",
      en: "Working since 2024",
    },
    socialLinks: {
      telegram: "http://t.me/Muhammad_dent",
      instagram:
        "https://www.instagram.com/muhammad__orziqulov?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      phone: "+998932997073",
    },
    biography: {
      uz: `Orziqulov Muhammad 1996-yilda tug‘ilgan. 2019-yilda Rossiyaning Checheniston Respublikasi Grozniy shahridagi Chechen Davlat Universitetining stomatologiya fakultetiga o‘qishga kirgan. 2021-yilda tahsilini Toshkent Davlat Stomatologiya Institutiga ko‘chirib, 2024-yilda uni muvaffaqiyatli tamomlagan. Hozirgi kunda Muhammad bemorlarga zamonaviy va sifatli stomatologik xizmat ko‘rsatib, ularning og‘iz sog‘lig‘ini yaxshilash yo‘lida samarali faoliyat yuritmoqda.`,
      ru: `Орзикулов Мухаммад родился в 1996 году. В 2019 году поступил на стоматологический факультет Чеченского государственного университета в городе Грозный, Чеченская Республика, Россия. В 2021 году перевелся в Ташкентский государственный стоматологический институт и успешно окончил обучение в 2024 году. В настоящее время Мухаммад активно оказывает пациентам современные и качественные стоматологические услуги, помогая им улучшить здоровье полости рта.`,
      en: `Orziqulov Muhammad was born in 1996. In 2019, he enrolled in the Faculty of Dentistry at Chechen State University in Grozny, Chechen Republic, Russia. In 2021, he transferred to the Tashkent State Dental Institute and successfully graduated in 2024. Currently, Muhammad provides modern and high-quality dental services to his patients, helping them improve their oral health.`,
    },
  },
];

export const servicesData = [
  {
    category: {
      uz: "Tish davolash",
      ru: "Лечение зубов",
      en: "Dental Treatment",
    },
    items: [
      {
        name: {
          uz: "Birlamchi ko'rik, maslahat",
          ru: "Первичный осмотр, консультация",
          en: "Initial check-up, consultation",
        },
        price: 50000,
      },
      {
        name: {
          uz: "Og'riqsizlantirish",
          ru: "Обезболивание",
          en: "Anesthesia",
        },
        price: 20000,
      },
      {
        name: {
          uz: "Plomba (bir tish yuzi)",
          ru: "Пломба (одна поверхность зуба)",
          en: "Filling (one tooth surface)",
        },
        subItems: [
          {
            name: {
              uz: "Rubi",
              ru: "Руби",
              en: "Rubi",
            },
            price: 150000,
          },
          {
            name: {
              uz: "DenFil",
              ru: "DenFil",
              en: "DenFil",
            },
            price: 250000,
          },
          {
            name: {
              uz: "Estelite Sigma",
              ru: "Estelite Sigma",
              en: "Estelite Sigma",
            },
            price: 400000,
          },
        ],
      },
      {
        name: {
          uz: "Endodontiya",
          ru: "Эндодонтия",
          en: "Endodontics",
        },
        subItems: [
          {
            name: {
              uz: "1 va 2 ildizli kanal uchun",
              ru: "Для 1 и 2 корневых каналов",
              en: "For 1 and 2 root canals",
            },
            price: 200000,
          },
          {
            name: {
              uz: "3 ildizli kanal uchun",
              ru: "Для 3 корневых каналов",
              en: "For 3 root canals",
            },
            price: 250000,
          },
        ],
      },
    ],
  },
  {
    category: {
      uz: "Tish qo‘yish (Ortopediya)",
      ru: "Протезирование зубов (Ортопедия)",
      en: "Tooth Prosthetics (Orthopedics)",
    },
    items: [
      {
        name: {
          uz: "Qolib",
          ru: "Слепок",
          en: "Impression",
        },
        subItems: [
          {
            name: {
              uz: "Alginat massa",
              ru: "Альгинатная масса",
              en: "Alginate mass",
            },
            price: 20000,
          },
          {
            name: {
              uz: "C - Silikon",
              ru: "С - Силикон",
              en: "C - Silicone",
            },
            price: 30000,
          },
          {
            name: {
              uz: "A - Silikon",
              ru: "А - Силикон",
              en: "A - Silicone",
            },
            price: 40000,
          },
        ],
      },
      {
        name: {
          uz: "Metall koronka",
          ru: "Металлическая коронка",
          en: "Metal crown",
        },
        price: 250000,
      },
      {
        name: {
          uz: "Vkladka",
          ru: "Вкладка",
          en: "Inlay",
        },
        price: 500000,
      },
      {
        name: {
          uz: "Metallokeramika",
          ru: "Металлокерамика",
          en: "Metal-ceramics",
        },
        price: 600000,
      },
      {
        name: {
          uz: "Dioksid tsirkon",
          ru: "Диоксид цирконий",
          en: "Zirconium dioxide",
        },
        price: 1300000,
      },
      {
        name: {
          uz: "Plastinkali protez",
          ru: "Пластинчатый протез",
          en: "Plate denture",
        },
        subItems: [
          {
            name: {
              uz: "Qisman olinadigan protez",
              ru: "Частично съемный протез",
              en: "Partially removable denture",
            },
            price: 1500000,
          },
          {
            name: {
              uz: "To'liq olinadigan protez",
              ru: "Полностью съемный протез",
              en: "Fully removable denture",
            },
            price: 2000000,
          },
        ],
      },
      {
        name: {
          uz: "Eski tish koronkalarini echish (1 koronka)",
          ru: "Снятие старой коронки (1 коронка)",
          en: "Removing old tooth crown (1 crown)",
        },
        price: 50000,
      },
      {
        name: {
          uz: "Vaqtinchalik koronka (plastmassa)",
          ru: "Временная коронка (пластмасса)",
          en: "Temporary crown (plastic)",
        },
        price: 200000,
      },
      {
        name: {
          uz: "Individual qo‘shiq",
          ru: "Индивидуальная ложка",
          en: "Individual impression tray",
        },
        price: 100000,
      },
      {
        name: {
          uz: "Boshqa klinikada qo‘yilgan koronkalarni tsemenga qo‘yish (bir koronka)",
          ru: "Фиксация коронки, установленной в другой клинике (1 коронка)",
          en: "Cementing a crown placed in another clinic (1 crown)",
        },
        price: 50000,
      },
    ],
  },
];

export const SwiperBigCardDatas = [
  {
    id: 1,
    img: clinicImg5,
    url: "",
  },
  {
    id: 2,
    img: clinicImg1,
    url: "",
  },
  {
    id: 3,
    img: clinicImg2,
    url: "",
  },
  {
    id: 4,
    img: clinicImg3,
    url: "",
  },
  {
    id: 5,
    img: clinicImg4,
    url: "",
  },
];

export const iconData = [
  { id: 1, icon: FaTelegramPlane, hoverColor: "bg-blue" },
  { id: 2, icon: FaInstagram, hoverColor: "bg-blue" },
  { id: 3, icon: FaPhoneAlt, hoverColor: "bg-blue" },
];

export const ArticleSectionCardData = [
  {
    id: 1,
    title: {
      uz: "Aql tishim og'riyapti - rostdan ham uni olib tashlash kerakmi?",
      ru: "Болит зуб мудрости — неужели придется удалять?",
      en: "My wisdom tooth hurts - will it really have to be removed?",
    },
    imgSrc: articleTooth4,
    date: "22 мар 2024",
    views: 1900,
    category: "вопросики",
    author: "Шапулина Татьяна Николаевна",
    role: "Отвечает ортодонт, гнатолог",
  },
  {
    id: 2,
    title: {
      uz: "Tish implantlari qancha muddat xizmat qiladi?",
      ru: "Сколько служат зубные импланты?",
      en: "How Long Do Dental Implants Last?",
    },
    imgSrc: articleTooth2,
    date: "07 мая 2024",
    views: 7480,
    category: "проблемка",
  },
  {
    id: 3,
    title: {
      uz: "Odamlar breket qo'yishdan qo'rqishining 7 sababi",
      ru: "7 причин, по которым люди боятся ставить брекеты",
      en: "7 Reasons Why People Fear Getting Braces",
    },
    imgSrc: articleTooth5,
    date: "18 мар 2024",
    views: 6870,
    category: "проблемка",
  },
  {
    id: 4,
    title: {
      uz: "Qiyshiq tishlar - kimda bo'lmagan?",
      ru: "Кривые зубы – с кем не бывает?",
      en: "Crooked teeth – who hasn’t had them?",
    },
    imgSrc: articleTooth1,
    date: "08 мая 2024",
    views: 3195,
    category: "вопросики",
    author: "Стоматолог",
  },
  {
    id: 5,
    title: {
      uz: "Tish sezuvchanligi bezovta qilyaptimi?",
      ru: " Чувствительность зубов",
      en: "Tooth Sensitivity",
    },
    imgSrc: articleTooth3,
    date: "10 апр 2024",
    views: 5257,
    category: "вопросики",
  },
  {
    id: 6,
    title: {
      uz: "Kariyes – hamma qo‘rqadigan narsa",
      ru: "Кариес – это то, чего все боялись",
      en: "Caries is what everyone was scared of",
    },
    imgSrc: articleTooth9,
    date: "28 фев 2024",
    views: 2123,
    category: "вопросики",
    author: "Дрик Ирина Валерьевна",
    role: "Отвечает стоматолог хирург-имплантолог, пародонтолог",
  },

  {
    id: 7,
    title: {
      uz: "Homiladorlik vaqtida tish og'rig'i: nimaga ruxsat berilgan va nimaga yo'q",
      ru: "Зубная боль при беременности: что можно и что нельзя",
      en: "Toothache during pregnancy: what is allowed and what is not",
    },
    imgSrc: articleTooth7,
    date: "08 мая 2024",
    views: 3195,
    category: "вопросики",
    author: "Стоматолог",
  },
  {
    id: 8,
    title: {
      uz: "Kronalar yoki implantlar – qaysi birini o'rnatish yaxshiroq?",
      ru: "Коронки или импланты – что лучше установить?",
      en: "Crowns or implants – which is better to install?",
    },
    imgSrc: articleTooth8,
    date: "10 апр 2024",
    views: 5257,
    category: "вопросики",
  },
  {
    id: 9,
    title: {
      uz: "Aftozli stomatit (Og'iz yaralari)",
      ru: "Афтозный стоматит",
      en: "Aphthous Stomatitis (Canker Sores)",
    },
    imgSrc: articleTooth6,
    date: "28 фев 2024",
    views: 2123,
    category: "вопросики",
    author: "Дрик Ирина Валерьевна",
    role: "Отвечает стоматолог хирург-имплантолог, пародонтолог",
  },
];

export const articleSingle = [
  {
    id: 1,
    title: {
      uz: "Aql tishim og'riyapti - rostdan ham uni olib tashlash kerakmi?",
      ru: "У меня болит зуб мудрости – действительно ли его нужно удалять?",
      en: "My wisdom tooth hurts – do I really need to remove it?",
    },
    date: "22 mar 2024",
    thumbnailImage:
      "https://avatars.mds.yandex.net/get-altay/11400795/2a0000018d836894ed9fdf007cbf534b24e5/XXL_height",
    featuredImage:
      "https://avatars.mds.yandex.net/get-altay/11400795/2a0000018d836894ed9fdf007cbf534b24e5/XXL_height",
    intro: {
      uz: "Aql tishi og'rig'i odatda juda noqulay bo'lishi mumkin. Ko'pchilik aql tishlarini olib tashlash kerak deb o'ylaydi, lekin bu har doim ham to'g'ri emas. Bu maqolada biz aql tishlari va ularni qachon olib tashlash kerak yoki kerak emasligini muhokama qilamiz.",
      ru: "Боль в зубе мудрости может быть весьма неприятной. Многие считают, что зубы мудрости нужно удалять, но это не всегда так. В этой статье мы обсудим зубы мудрости и когда их действительно стоит удалять, а когда — нет.",
      en: "Wisdom tooth pain can be quite uncomfortable. Many people believe that wisdom teeth should always be removed, but that is not always the case. In this article, we will discuss wisdom teeth and when they should or should not be removed.",
    },
    content: [
      {
        heading: {
          uz: "Aql tishlari nima?",
          ru: "Что такое зубы мудрости?",
          en: "What are wisdom teeth?",
        },
        paragraphs: [
          {
            uz: "Aql tishlari (uchinchi molyarlar) odamning og'zidagi eng oxirgi tishlardir. Ular odatda 17-25 yoshlar orasida chiqadi. Ko'pchilik odamlarda to'rtta aql tishi bor - har bir jag' tomonida bittadan.",
            ru: "Зубы мудрости (третьи моляры) – это самые последние зубы в ротовой полости человека. Они обычно появляются в возрасте от 17 до 25 лет. У большинства людей четыре зуба мудрости – по одному с каждой стороны челюсти.",
            en: "Wisdom teeth (third molars) are the last teeth in a person's mouth. They usually emerge between the ages of 17 and 25. Most people have four wisdom teeth – one on each side of the jaw.",
          },
          {
            uz: "Aql tishlari nomini ularning kech chiqishidan olgan, bu vaqtga kelib inson \"aqlli\" bo'lib qoladi degan tushunchadan kelib chiqqan. Ammo hozirgi kunda ko'pchilik stomatologlar aql tishlarini muammoli deb hisoblashadi, chunki ularning chiqish jarayoni ko'pincha og'riqli bo'ladi va boshqa tishlar uchun muammolar keltirib chiqarishi mumkin.",
            ru: "Зубы мудрости получили своё название из-за позднего прорезывания, так как считается, что к этому возрасту человек становится «мудрым». Однако в настоящее время многие стоматологи считают зубы мудрости проблемными, так как их рост часто сопровождается болью и может вызывать проблемы с другими зубами.",
            en: "Wisdom teeth got their name due to their late emergence, as it is believed that by this age a person becomes 'wise.' However, nowadays, many dentists consider wisdom teeth problematic because their eruption is often painful and can cause issues for other teeth.",
          },
        ],
      },
      {
        heading: {
          uz: "Aql tishlari og'rig'ining sabablari",
          ru: "Причины боли зубов мудрости",
          en: "Causes of wisdom tooth pain",
        },
        paragraphs: [
          {
            uz: "Aql tishlarining og'rig'i turli sabablar tufayli yuzaga kelishi mumkin:",
            ru: "Боль зубов мудрости может возникать по разным причинам:",
            en: "Wisdom tooth pain can occur due to various reasons:",
          },
          {
            uz: "Agar aql tishi to'liq chiqa olmasa yoki qiyshiq chiqsa, u qisman milkda qolishi mumkin. Bu perikoronit (milkning yallig'lanishi) deb ataladigan holatga olib kelishi mumkin.",
            ru: "Если зуб мудрости не может полностью прорезаться или растёт криво, он может частично остаться в десне. Это может привести к перикорониту (воспалению десны).",
            en: "If a wisdom tooth cannot fully emerge or grows at an angle, it may remain partially trapped in the gum. This can lead to pericoronitis (gum inflammation).",
          },
          {
            uz: "Aql tishlari ko'pincha og'izning eng orqa qismida joylashgani sababli, ularni to'g'ri tozalash qiyin bo'lishi mumkin, bu esa kariyes va milk kasalliklariga olib kelishi mumkin.",
            ru: "Так как зубы мудрости находятся в самом конце рта, их трудно правильно чистить, что может привести к кариесу и заболеваниям дёсен.",
            en: "Since wisdom teeth are located at the very back of the mouth, they can be difficult to clean properly, which may lead to cavities and gum diseases.",
          },
          {
            uz: "Ba'zi hollarda, aql tishi yaqinidagi to'qimalar yoki nerv tolalarini bosishi mumkin, bu esa og'riqqa olib keladi.",
            ru: "В некоторых случаях зуб мудрости может давить на окружающие ткани или нервные волокна, вызывая боль.",
            en: "In some cases, a wisdom tooth may press against surrounding tissues or nerve fibers, causing pain.",
          },
        ],
        image:
          "https://umid-dentist.uz/images/articles/wisdom-tooth-pain-causes.jpg",
        imageAlt: {
          uz: "Aql tishi og'rig'i sabablari",
          ru: "Причины боли зубов мудрости",
          en: "Causes of wisdom tooth pain",
        },
        imageCaption: {
          uz: "Aql tishi og'rig'ining asosiy sabablari",
          ru: "Основные причины боли зубов мудрости",
          en: "Main causes of wisdom tooth pain",
        },
      },
      {
        heading: {
          uz: "Aql tishlarini olib tashlash kerakmi?",
          ru: "Нужно ли удалять зубы мудрости?",
          en: "Should wisdom teeth be removed?",
        },
        paragraphs: [
          {
            uz: "Har bir holatda aql tishlarini olib tashlash kerak yoki yo'qligi alohida qaror qilinadi. Quyidagi hollarda aql tishlarini olib tashlash tavsiya etiladi:",
            ru: "В каждом случае решение об удалении зубов мудрости принимается индивидуально. В следующих случаях рекомендуется их удаление:",
            en: "In each case, the decision to remove wisdom teeth is made individually. In the following situations, their removal is recommended:",
          },
        ],
        bulletPoints: [
          {
            uz: "Tish to'liq chiqa olmasa va milkda qolsa (impacted wisdom tooth)",
            ru: "Если зуб не может полностью прорезаться и остаётся в десне (ретинированный зуб мудрости)",
            en: "If the tooth cannot fully emerge and remains in the gum (impacted wisdom tooth)",
          },
          {
            uz: "Aql tishi boshqa tishlarni siqib qo'ysa yoki tishlarning joylashishiga ta'sir qilsa",
            ru: "Если зуб мудрости давит на другие зубы или влияет на их расположение",
            en: "If the wisdom tooth puts pressure on other teeth or affects their alignment",
          },
          {
            uz: "Tish atrofida tez-tez infeksiya bo'lsa",
            ru: "Если вокруг зуба часто возникают инфекции",
            en: "If frequent infections occur around the tooth",
          },
          {
            uz: "Aql tishi atrofida kistalar yoki o'smalar paydo bo'lsa",
            ru: "Если вокруг зуба мудрости образуются кисты или опухоли",
            en: "If cysts or tumors develop around the wisdom tooth",
          },
          {
            uz: "Aql tishi kariyes bilan zararlangan bo'lsa va uni davolash imkoni bo'lmasa",
            ru: "Если зуб мудрости поражён кариесом и не подлежит лечению",
            en: "If the wisdom tooth is affected by decay and cannot be treated",
          },
        ],
        paragraphs: [
          {
            uz: "Agar aql tishlari to'g'ri chiqsa, yaxshi holatda bo'lsa va og'riq yoki muammolar tug'dirmasa, ularni olib tashlash shart emas. Ko'pgina stomatologlar profilaktika maqsadida aql tishlarini olib tashlashni tavsiya qilishsa-da, bu haqida aniq ilmiy dalillar yo'q.",
            ru: "Если зубы мудрости прорезались правильно, находятся в хорошем состоянии и не вызывают боли или проблем, их удалять не обязательно. Хотя многие стоматологи рекомендуют удаление в профилактических целях, научных доказательств этому нет.",
            en: "If wisdom teeth emerge correctly, are in good condition, and do not cause pain or problems, removal is not necessary. While many dentists recommend removing them for preventive reasons, there is no solid scientific evidence for this.",
          },
        ],
      },
      {
        heading: {
          uz: "Aql tishini olib tashlash jarayoni",
          ru: "Процесс удаления зуба мудрости",
          en: "Wisdom tooth extraction process",
        },
        paragraphs: [
          {
            uz: "Aql tishini olib tashlash odatda quyidagi bosqichlarni o'z ichiga oladi:",
            ru: "Процесс удаления зуба мудрости обычно включает следующие этапы:",
            en: "The wisdom tooth extraction process typically involves the following steps:",
          },
          {
            uz: "1. Mahalliy yoki umumiy og'riqsizlantirish qo'llaniladi.",
            ru: "1. Применяется местная или общая анестезия.",
            en: "1. Local or general anesthesia is applied.",
          },
          {
            uz: "2. Tish atrofidagi milkda kesma qilinadi (agar kerak bo'lsa).",
            ru: "2. Делается разрез в области десны вокруг зуба (если необходимо).",
            en: "2. An incision is made in the gum tissue around the tooth (if necessary).",
          },
          {
            uz: "3. Agar tish suyakda bo'lsa, unga yetish uchun suyak olib tashlanadi.",
            ru: "3. Если зуб находится в кости, часть кости удаляется, чтобы к нему добраться.",
            en: "3. If the tooth is embedded in the bone, some bone is removed to access it.",
          },
          {
            uz: "4. Tish bir necha bo'laklarga bo'linishi mumkin, bu uni olib tashlashni osonlashtiradi.",
            ru: "4. Зуб может быть разделен на несколько частей для облегчения удаления.",
            en: "4. The tooth may be divided into sections to facilitate removal.",
          },
          {
            uz: "5. Tish olib tashlanadi va yarani tozalanadi.",
            ru: "5. Зуб удаляется, а рана очищается.",
            en: "5. The tooth is removed, and the wound is cleaned.",
          },
          {
            uz: "6. Kerak bo'lsa, yara tikib qo'yiladi.",
            ru: "6. При необходимости накладываются швы.",
            en: "6. If necessary, the wound is stitched.",
          },
        ],
        image:
          "https://umid-dentist.uz/images/articles/wisdom-tooth-extraction.jpg",
        imageAlt: {
          uz: "Aql tishini olib tashlash jarayoni",
          ru: "Процесс удаления зуба мудрости",
          en: "Wisdom tooth extraction process",
        },
        imageCaption: {
          uz: "Aql tishini olib tashlash jarayoni tasvirlangan",
          ru: "Изображен процесс удаления зуба мудрости",
          en: "Illustration of the wisdom tooth extraction process",
        },
      },
      {
        heading: {
          uz: "Aql tishini olib tashlashdan keyin parvarish",
          ru: "Уход после удаления зуба мудрости",
          en: "Post-extraction care for wisdom teeth",
        },
        paragraphs: [
          {
            uz: "Aql tishini olib tashlashdan so'ng tuzalish jarayoni odatda bir necha kundan bir necha haftagacha davom etadi. Tezroq tuzalish uchun quyidagi tavsiyalarga amal qilish muhim:",
            ru: "Процесс заживления после удаления зуба мудрости обычно занимает от нескольких дней до нескольких недель. Для быстрого восстановления важно соблюдать следующие рекомендации:",
            en: "The healing process after wisdom tooth extraction usually takes from a few days to a few weeks. To recover faster, it is important to follow these recommendations:",
          },
        ],
        bulletPoints: [
          {
            uz: "Og'riqni kamaytirish uchun shifokor tomonidan tavsiya etilgan dori-darmonlarni qabul qiling",
            ru: "Принимайте лекарства, рекомендованные врачом, для уменьшения боли",
            en: "Take the medications prescribed by your doctor to reduce pain",
          },
          {
            uz: "Operatsiyadan keyin birinchi 24 soat ichida muzni 20 daqiqa davomida yuzga qo'ying, 20 daqiqa tanaffus qiling",
            ru: "В течение первых 24 часов после операции прикладывайте лёд к щеке на 20 минут, затем делайте перерыв на 20 минут",
            en: "For the first 24 hours after surgery, apply ice to your cheek for 20 minutes, then take a 20-minute break",
          },
          {
            uz: "Tish oldirilgandan keyin birinchi 24 soat ichida qattiq ovqat yemang, issiq ichimliklar ichmang va tamaki chekishdan saqlaning",
            ru: "В первые 24 часа после удаления зуба избегайте твёрдой пищи, горячих напитков и курения",
            en: "Avoid hard foods, hot drinks, and smoking for the first 24 hours after tooth extraction",
          },
          {
            uz: "Tish oldirilgan joyni chayqamang yoki cho'tka bilan tozalamang, bu qon quyqasini olib tashlashi va qon ketishiga sabab bo'lishi mumkin",
            ru: "Не полощите рот и не чистите место удаления зуба щёткой, так как это может удалить кровяной сгусток и вызвать кровотечение",
            en: "Do not rinse your mouth or brush the extraction site, as this may dislodge the blood clot and cause bleeding",
          },
          {
            uz: "Ikki kun davomida og'ir jismoniy mashqlardan saqlaning",
            ru: "Избегайте интенсивных физических нагрузок в течение двух дней",
            en: "Avoid heavy physical activity for two days",
          },
        ],
      },
    ],
    infoBox: {
      title: {
        uz: "Diqqat!",
        ru: "Внимание!",
        en: "Attention!",
      },
      content: {
        uz: "Agar aql tishingiz og'rig'i kuchli bo'lsa, yuzda shish paydo bo'lsa yoki 38°C dan yuqori harorat kuzatilsa, zudlik bilan shifokorga murojaat qiling. Bu infeksiya belgilari bo'lishi mumkin va tezkor tibbiy yordam talab qiladi.",
        ru: "Если у вас сильная боль в зубе мудрости, отёк на лице или температура выше 38°C, немедленно обратитесь к врачу. Это могут быть признаки инфекции, требующие срочной медицинской помощи.",
        en: "If you experience severe wisdom tooth pain, facial swelling, or a temperature above 38°C, seek medical attention immediately. These may be signs of an infection requiring urgent care.",
      },
    },
  },
  {
    id: 2,
    title: {
      uz: "Tish implantlari qancha muddat xizmat qiladi?",
      ru: "Как долго служат зубные импланты?",
      en: "How long do dental implants last?",
    },
    date: "07 may 2024",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/dental-implants-thumb.jpg",
    featuredImage:
      "https://umid-dentist.uz/images/articles/dental-implants.jpg",
    intro: {
      uz: "Tish implantlari zamonaviy stomatologiyaning eng muhim yutuqlaridan biri hisoblanadi. Ular yo'qolgan tishlar o'rnini to'ldirish uchun eng yaxshi va uzoq muddatli yechim hisoblanadi. Ammo ko'pchilik bemorlar implantlar qancha muddat xizmat qilishi haqida savol berishadi. Bu maqolada implantlarning xizmat muddati va uni uzaytirish usullari haqida batafsil ma'lumot beramiz.",
      ru: "Зубные импланты являются одним из самых значительных достижений современной стоматологии. Они считаются лучшим и наиболее долговечным решением для замены отсутствующих зубов. Однако многие пациенты интересуются, сколько служат импланты. В этой статье мы подробно расскажем о сроке службы имплантов и способах его продления.",
      en: "Dental implants are one of the most significant advancements in modern dentistry. They are considered the best and most long-lasting solution for replacing missing teeth. However, many patients ask how long implants last. In this article, we will provide detailed information on the lifespan of implants and ways to extend it.",
    },
    content: [
      {
        heading: {
          uz: "Tish implantlari nima?",
          ru: "Что такое зубные импланты?",
          en: "What are dental implants?",
        },
        paragraphs: [
          {
            uz: "Tish implanti - bu yo'qolgan tishning ildizi o'rnini bosuvchi titanli vint. U jag' suyagiga o'rnatilib, sun'iy tish (koronka) uchun mustahkam asos vazifasini bajaradi.",
            ru: "Зубной имплант - это титановый винт, который заменяет корень отсутствующего зуба. Он устанавливается в челюстную кость и служит прочной основой для искусственного зуба (коронки).",
            en: "A dental implant is a titanium screw that replaces the root of a missing tooth. It is placed in the jawbone and serves as a strong foundation for an artificial tooth (crown).",
          },
        ],
        image:
          "https://umid-dentist.uz/images/articles/dental-implant-structure.jpg",
        imageAlt: {
          uz: "Tish implantining tuzilishi",
          ru: "Структура зубного импланта",
          en: "Structure of a dental implant",
        },
        imageCaption: {
          uz: "Tish implantining asosiy qismlari: implant, abutment va koronka",
          ru: "Основные части зубного импланта: имплант, абатмент и коронка",
          en: "Main parts of a dental implant: implant, abutment, and crown",
        },
      },
    ],
    infoBox: {
      title: {
        uz: "Muhim eslatma",
        ru: "Важное примечание",
        en: "Important note",
      },
      content: {
        uz: "Implant o'rnatilgandan so'ng doimiy nazorat va parvarish muhim. Implantingiz bilan bog'liq har qanday muammo yoki savollar bo'lsa, klinikamizga murojaat qiling. Biz sizga malakali maslahat va yordam berishdan mamnun bo'lamiz.",
        ru: "После установки импланта важен постоянный контроль и уход. Если у вас возникли вопросы или проблемы с имплантом, обратитесь в нашу клинику. Мы будем рады предоставить вам квалифицированную консультацию и помощь.",
        en: "After implant placement, regular check-ups and proper care are essential. If you have any issues or questions regarding your implant, feel free to contact our clinic. We will be happy to provide expert advice and assistance.",
      },
    },
  },
  {
    id: 3,
    title: {
      uz: "Odamlar breket qo‘yishdan qo‘rqishning 7 sababi",
      ru: "7 причин, почему люди боятся ставить брекеты",
      en: "7 reasons why people are afraid of getting braces",
    },
    date: "25 fevral 2025",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/braces-fear-thumb.jpg",
    featuredImage: "https://umid-dentist.uz/images/articles/braces-fear.jpg",
    intro: {
      uz: "Breketlar nafaqat chiroyli tabassum, balki sog‘lom tishlar uchun ham juda muhim. Ammo ko‘pchilik breket qo‘yishdan turli sabablarga ko‘ra qo‘rqadi. Ushbu maqolada odamlar breket qo‘yishdan nimalardan qo‘rqishi va bu qo‘rquvlarni qanday yengish mumkinligi haqida gaplashamiz.",
      ru: "Брекеты важны не только для красивой улыбки, но и для здоровья зубов. Однако многие боятся ставить брекеты по разным причинам. В этой статье мы разберем, чего люди боятся и как преодолеть эти страхи.",
      en: "Braces are important not only for a beautiful smile but also for healthy teeth. However, many people fear getting braces for various reasons. In this article, we will discuss what people are afraid of and how to overcome these fears.",
    },
    content: [
      {
        heading: {
          uz: "1. Breketlar og‘riqli bo‘ladi deb o‘ylash",
          ru: "1. Думают, что брекеты будут болезненными",
          en: "1. Thinking braces will be painful",
        },
        paragraphs: [
          {
            uz: "Ko‘pchilik breket qo‘yish juda og‘riqli jarayon deb o‘ylaydi. Aslida esa, breket o‘rnatish jarayoni og‘riqsiz kechadi, faqat dastlabki kunlarda yengil noqulaylik sezilishi mumkin.",
            ru: "Многие считают, что установка брекетов – это очень болезненный процесс. На самом деле установка проходит без боли, только в первые дни может ощущаться небольшой дискомфорт.",
            en: "Many people think getting braces is a very painful process. In reality, the installation is painless, and only slight discomfort may be felt in the first few days.",
          },
          {
            uz: "Biroq, zamonaviy breket tizimlari og‘riqni minimal darajaga tushirish uchun ishlab chiqilgan va organizm ularga tezda moslashadi.",
            ru: "Однако современные брекет-системы разработаны для минимизации боли, и организм быстро адаптируется к ним.",
            en: "However, modern braces are designed to minimize pain, and the body quickly adapts to them.",
          },
        ],
        image: "https://umid-dentist.uz/images/articles/braces-pain.jpg",
        imageAlt: {
          uz: "Breket taqishdagi noqulaylik",
          ru: "Дискомфорт при ношении брекетов",
          en: "Discomfort when wearing braces",
        },
        imageCaption: {
          uz: "Dastlabki kunlarda yengil noqulaylik bo‘lishi mumkin, ammo tezda o‘tib ketadi.",
          ru: "В первые дни может быть небольшой дискомфорт, но он быстро проходит.",
          en: "There may be slight discomfort in the first few days, but it quickly passes.",
        },
      },
    ],
    infoBox: {
      title: {
        uz: "Muhim maslahat",
        ru: "Важный совет",
        en: "Important advice",
      },
      content: {
        uz: "Breketlardan qo‘rqishning hojati yo‘q! Ular nafaqat tishlaringizni to‘g‘rilaydi, balki kelajakda sog‘lom tabassumga ega bo‘lishingizni ta’minlaydi. Agar sizda savollar bo‘lsa, ortodont shifokoringiz bilan maslahat qiling.",
        ru: "Бояться брекетов не стоит! Они не только выравнивают зубы, но и помогают вам обрести здоровую улыбку в будущем. Если у вас есть вопросы, проконсультируйтесь с вашим ортодонтом.",
        en: "There is no need to fear braces! They not only straighten your teeth but also help you achieve a healthy smile in the future. If you have any questions, consult your orthodontist.",
      },
    },
  },
  {
    id: 4,
    languages: {
      uz: {
        title: "Qiyshiq tishlar – kimda bo‘lmagan?",
        date: "25 fevral 2025",
        thumbnailImage:
          "https://umid-dentist.uz/images/articles/crooked-teeth-thumb.jpg",
        featuredImage:
          "https://umid-dentist.uz/images/articles/crooked-teeth.jpg",
        intro:
          "Ko‘pchilikda tishlarning notekis joylashuvi – ya’ni qiyshiq tishlar uchraydi...",
        content: [
          {
            heading: "Qiyshiq tishlar nega paydo bo‘ladi?",
            paragraphs: [
              "Qiyshiq tishlar genetika, bolalikdagi odatlar va boshqa omillar ta’sirida shakllanishi mumkin...",
            ],
            bulletPoints: [
              "Genetik omillar – ota-onadan meros bo‘lib o‘tishi mumkin",
              "Bolalikda barmoqlarni so‘rish yoki duduk taqish odati",
            ],
            image:
              "https://umid-dentist.uz/images/articles/crooked-teeth-causes.jpg",
            imageAlt: "Qiyshiq tishlarning sabablari",
            imageCaption:
              "Genetika va odatlar qiyshiq tishlarga sabab bo‘lishi mumkin.",
          },
        ],
        infoBox: {
          title: "Muhim eslatma",
          content:
            "Qiyshiq tishlarni davolash uchun imkon qadar erta shifokorga murojaat qiling.",
        },
      },
      ru: {
        title: "Кривые зубы – у кого их не было?",
        date: "25 февраля 2025",
        thumbnailImage:
          "https://umid-dentist.uz/images/articles/crooked-teeth-thumb.jpg",
        featuredImage:
          "https://umid-dentist.uz/images/articles/crooked-teeth.jpg",
        intro:
          "У многих людей зубы расположены неровно – так называемые кривые зубы...",
        content: [
          {
            heading: "Почему появляются кривые зубы?",
            paragraphs: [
              "Кривые зубы могут формироваться под влиянием генетики, детских привычек и других факторов...",
            ],
            bulletPoints: [
              "Генетические факторы – могут передаваться от родителей",
              "Привычка сосать пальцы или пустышку в детстве",
            ],
            image:
              "https://umid-dentist.uz/images/articles/crooked-teeth-causes.jpg",
            imageAlt: "Причины кривых зубов",
            imageCaption:
              "Генетика и привычки могут стать причиной кривых зубов.",
          },
        ],
        infoBox: {
          title: "Важное замечание",
          content:
            "Для исправления кривых зубов обращайтесь к врачу как можно раньше.",
        },
      },
      en: {
        title: "Crooked Teeth – Who Hasn’t Had Them?",
        date: "February 25, 2025",
        thumbnailImage:
          "https://umid-dentist.uz/images/articles/crooked-teeth-thumb.jpg",
        featuredImage:
          "https://umid-dentist.uz/images/articles/crooked-teeth.jpg",
        intro:
          "Many people have misaligned teeth, also known as crooked teeth...",
        content: [
          {
            heading: "Why Do Crooked Teeth Develop?",
            paragraphs: [
              "Crooked teeth can develop due to genetics, childhood habits, and other factors...",
            ],
            bulletPoints: [
              "Genetic factors – may be inherited from parents",
              "Thumb sucking or pacifier use in childhood",
            ],
            image:
              "https://umid-dentist.uz/images/articles/crooked-teeth-causes.jpg",
            imageAlt: "Causes of crooked teeth",
            imageCaption:
              "Genetics and habits can contribute to crooked teeth.",
          },
        ],
        infoBox: {
          title: "Important Note",
          content:
            "To treat crooked teeth, visit a dentist as early as possible.",
        },
      },
    },
  },
  {
    id: 5,
    title: {
      uz: "Tish sezuvchanligi bezovta qilyaptimi?",
      ru: "Беспокоит чувствительность зубов?",
      en: "Is Tooth Sensitivity Bothering You?",
    },
    date: "25 fevral 2025",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/tooth-sensitivity-thumb.jpg",
    featuredImage:
      "https://umid-dentist.uz/images/articles/tooth-sensitivity.jpg",
    intro: {
      uz: "Issiq choy yoki sovuq muzqaymoq yeganingizda tishlaringizda keskin og‘riq seziladimi? Agar shunday bo‘lsa, sizda tish sezuvchanligi bor bo‘lishi mumkin...",
      ru: "Чувствуете резкую боль в зубах при употреблении горячего чая или холодного мороженого? Если да, возможно, у вас повышенная чувствительность зубов...",
      en: "Do you feel a sharp pain in your teeth when drinking hot tea or eating cold ice cream? If so, you may have tooth sensitivity...",
    },
    content: [
      {
        heading: {
          uz: "Tish sezuvchanligi nima va nega paydo bo‘ladi?",
          ru: "Что такое чувствительность зубов и почему она возникает?",
          en: "What is Tooth Sensitivity and Why Does It Occur?",
        },
        paragraphs: {
          uz: [
            "Tish sezuvchanligi – bu tish nervlari tashqi ta’sirlarga sezgir bo‘lib qolishi natijasida paydo bo‘ladigan holatdir...",
            "Buning asosiy sabablari quyidagilardir:",
          ],
          ru: [
            "Чувствительность зубов возникает из-за повышенной реакции нервов на внешние раздражители...",
            "Основные причины чувствительности зубов:",
          ],
          en: [
            "Tooth sensitivity occurs when the nerves in your teeth become overly reactive to external stimuli...",
            "The main causes of tooth sensitivity are:",
          ],
        },
        bulletPoints: {
          uz: [
            "Tish emalining yupqalashishi",
            "Tish go‘shtining chekinishi",
            "Kariyes yoki tishning yorilishi",
            "Tishlarning haddan tashqari oqartirilishi",
            "Gazlangan ichimliklar yoki nordon taomlarni ortiqcha iste’mol qilish",
            "Bruksizm (tishlarni g‘ichirlatish)",
          ],
          ru: [
            "Истощение эмали зубов",
            "Рецессия десен",
            "Кариес или трещины на зубах",
            "Чрезмерное отбеливание зубов",
            "Чрезмерное потребление кислых продуктов и газированных напитков",
            "Бруксизм (скрежет зубами)",
          ],
          en: [
            "Tooth enamel thinning",
            "Gum recession",
            "Cavities or tooth cracks",
            "Excessive teeth whitening",
            "Excessive consumption of acidic foods and fizzy drinks",
            "Bruxism (teeth grinding)",
          ],
        },
        image: "https://umid-dentist.uz/images/articles/tooth-structure.jpg",
        imageAlt: {
          uz: "Tish sezuvchanligining sabablari",
          ru: "Причины чувствительности зубов",
          en: "Causes of Tooth Sensitivity",
        },
        imageCaption: {
          uz: "Emal yupqalashishi yoki tish go‘shtining chekinishi sezuvchanlikni oshirishi mumkin.",
          ru: "Истощение эмали или рецессия десен могут увеличить чувствительность.",
          en: "Thinning enamel or gum recession can increase sensitivity.",
        },
      },
    ],
    infoBox: {
      title: {
        uz: "Muhim eslatma",
        ru: "Важное замечание",
        en: "Important Note",
      },
      content: {
        uz: "Agar tish sezuvchanligi hayotingizga ta’sir qilayotgan bo‘lsa, uni e’tiborsiz qoldirmang...",
        ru: "Если чувствительность зубов мешает вашей повседневной жизни, не игнорируйте это...",
        en: "If tooth sensitivity is affecting your daily life, don’t ignore it...",
      },
    },
  },
  {
    id: 6,
    title: {
      uz: "Kariyes – hamma qo'rqadigan narsa",
      ru: "Кариес – то, чего все боятся",
      en: "Cavities – Everyone's Fear",
    },
    date: "25 fevral 2025",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/tooth-decay-thumb.jpg",
    featuredImage: "https://umid-dentist.uz/images/articles/tooth-decay.jpg",
    intro: {
      uz: "Kariyes – dunyodagi eng keng tarqalgan tish kasalliklaridan biri bo'lib, har bir inson hayotida kamida bir marta u bilan duch keladi...",
      ru: "Кариес – одно из самых распространенных заболеваний зубов в мире, и почти каждый человек сталкивается с ним хотя бы раз в жизни...",
      en: "Cavities are one of the most common dental diseases in the world, and almost everyone experiences them at least once in their life...",
    },
    content: [
      {
        heading: {
          uz: "Kariyes nima va qanday paydo bo‘ladi?",
          ru: "Что такое кариес и как он появляется?",
          en: "What is Tooth Decay and How Does It Develop?",
        },
        paragraphs: {
          uz: [
            "Kariyes – tish emalining yemirilishi natijasida hosil bo‘ladigan tish kasalligi...",
            "Asosiy sabab – og‘iz bo‘shlig‘ida to‘planadigan bakteriyalar...",
          ],
          ru: [
            "Кариес – это заболевание зубов, возникающее из-за разрушения эмали...",
            "Основная причина – бактерии, накапливающиеся в ротовой полости...",
          ],
          en: [
            "Tooth decay is a dental disease caused by the breakdown of enamel...",
            "The main cause is bacteria that accumulate in the mouth...",
          ],
        },
        image:
          "https://umid-dentist.uz/images/articles/tooth-decay-process.jpg",
        imageAlt: {
          uz: "Kariyesning rivojlanish jarayoni",
          ru: "Процесс развития кариеса",
          en: "The Process of Tooth Decay Development",
        },
        imageCaption: {
          uz: "Kariyes dastlab mayda dog‘lar shaklida paydo bo‘ladi va asta-sekin ichkariga kirib boradi.",
          ru: "Кариес сначала появляется в виде небольших пятен и постепенно проникает внутрь.",
          en: "Cavities first appear as small spots and gradually penetrate deeper.",
        },
      },
      {
        heading: {
          uz: "Kariyesning rivojlanish bosqichlari",
          ru: "Стадии развития кариеса",
          en: "Stages of Tooth Decay",
        },
        bulletPoints: {
          uz: [
            "❶ Dastlabki bosqich – tish emalida oq yoki jigarrang dog‘lar paydo bo‘ladi.",
            "❷ Yuzaki kariyes – emal yemirilib, tish yuzasida yoriqlar hosil bo‘ladi.",
            "❸ O‘rta kariyes – emaldan tashqari, dentin ham zarar ko‘radi.",
            "❹ Chuqur kariyes – bakteriyalar tishning ichki qatlamiga yetib boradi.",
            "❺ Pulpa zararlanishi – agar kariyes davolanmasa, tish nervlari yallig‘lanadi.",
          ],
          ru: [
            "❶ Начальная стадия – появляются белые или коричневые пятна на эмали.",
            "❷ Поверхностный кариес – разрушение эмали, образование трещин.",
            "❸ Средний кариес – повреждается не только эмаль, но и дентин.",
            "❹ Глубокий кариес – бактерии проникают в глубокие слои зуба.",
            "❺ Поражение пульпы – воспаление нервов, если кариес не лечить.",
          ],
          en: [
            "❶ Early stage – white or brown spots appear on the enamel.",
            "❷ Surface decay – enamel breaks down, forming small cracks.",
            "❸ Moderate decay – both enamel and dentin are affected.",
            "❹ Deep decay – bacteria reach the inner layers of the tooth.",
            "❺ Pulp damage – nerve inflammation occurs if decay is untreated.",
          ],
        },
        image: "https://umid-dentist.uz/images/articles/tooth-decay-stages.jpg",
        imageAlt: {
          uz: "Kariyesning rivojlanish bosqichlari",
          ru: "Стадии развития кариеса",
          en: "Stages of Tooth Decay",
        },
        imageCaption: {
          uz: "Kariyesning dastlabki bosqichida u oson davolanadi.",
          ru: "На ранних стадиях кариес легко лечится.",
          en: "At early stages, cavities are easily treatable.",
        },
      },
    ],
    infoBox: {
      title: {
        uz: "Muhim eslatma",
        ru: "Важное замечание",
        en: "Important Note",
      },
      content: {
        uz: "Agar tishlaringizda og‘riq yoki sezuvchanlik paydo bo‘lsa, kechiktirmasdan stomatologga murojaat qiling...",
        ru: "Если у вас появилась боль или чувствительность зубов, не откладывайте визит к стоматологу...",
        en: "If you experience tooth pain or sensitivity, don’t delay visiting a dentist...",
      },
    },
  },
  {
    id: 7,
    title: {
      uz: "Homiladorlik vaqtida tish og‘rig‘i: nimaga ruxsat berilgan va nimaga yo‘q?",
      ru: "Зубная боль при беременности: что разрешено, а что нет?",
      en: "Toothache During Pregnancy: What is Allowed and What is Not?",
    },
    date: "25 fevral 2025",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/pregnancy-toothache-thumb.jpg",
    featuredImage:
      "https://umid-dentist.uz/images/articles/pregnancy-toothache.jpg",
    intro: {
      uz: "Homiladorlik vaqtida ayol organizmida katta o‘zgarishlar sodir bo‘ladi...",
      ru: "Во время беременности в организме женщины происходят значительные изменения...",
      en: "During pregnancy, a woman's body undergoes significant changes...",
    },
    content: [
      {
        heading: {
          uz: "Homiladorlik va tish og‘rig‘i – sabablar",
          ru: "Беременность и зубная боль – причины",
          en: "Pregnancy and Toothache – Causes",
        },
        paragraphs: {
          uz: [
            "Homiladorlik davrida tish va milk muammolari ko‘pincha gormonal o‘zgarishlar bilan bog‘liq...",
            "Tish og‘rig‘ining asosiy sabablari quyidagilar bo‘lishi mumkin:",
          ],
          ru: [
            "Во время беременности проблемы с зубами и деснами часто связаны с гормональными изменениями...",
            "Основные причины зубной боли могут быть следующими:",
          ],
          en: [
            "During pregnancy, dental and gum problems are often linked to hormonal changes...",
            "The main causes of toothache can include:",
          ],
        },
        bulletPoints: {
          uz: [
            "Gormonal o‘zgarishlar – milklarning sezuvchanligi oshadi.",
            "Kariyes – immunitetning pasayishi natijasida rivojlanishi mumkin.",
            "Gingivit va parodontoz – milklarning yallig‘lanishi tez-tez uchraydi.",
          ],
          ru: [
            "Гормональные изменения – повышенная чувствительность десен.",
            "Кариес – может развиться из-за снижения иммунитета.",
            "Гингивит и пародонтоз – воспаление и отечность десен.",
          ],
          en: [
            "Hormonal changes – increased gum sensitivity.",
            "Cavities – can develop due to decreased immunity.",
            "Gingivitis and periodontitis – inflammation and swelling of the gums.",
          ],
        },
        image: "https://umid-dentist.uz/images/articles/pregnancy-gums.jpg",
        imageAlt: {
          uz: "Homiladorlikda milk shishi",
          ru: "Опухание десен при беременности",
          en: "Swollen gums during pregnancy",
        },
        imageCaption: {
          uz: "Gormonal o‘zgarishlar tufayli milklar sezgir va yallig‘langan bo‘lishi mumkin.",
          ru: "Из-за гормональных изменений десны могут быть чувствительными и воспаленными.",
          en: "Due to hormonal changes, gums can become sensitive and inflamed.",
        },
      },
      {
        heading: {
          uz: "Homiladorlikda tish davolashga ruxsat beriladimi?",
          ru: "Можно ли лечить зубы во время беременности?",
          en: "Is Dental Treatment Allowed During Pregnancy?",
        },
        bulletPoints: {
          uz: [
            "2-trimestrda plombalash va tozalash mumkin.",
            "Xavfsiz lokal og‘riqsizlantiruvchi vositalardan foydalanish mumkin.",
            "Rentgen faqat shoshilinch holatlarda maxsus himoya bilan bajariladi.",
          ],
          ru: [
            "Во 2-м триместре можно проводить пломбирование и чистку.",
            "Разрешены безопасные местные анестетики.",
            "Рентген выполняется только в экстренных случаях с защитой.",
          ],
          en: [
            "During the 2nd trimester, fillings and cleanings are allowed.",
            "Safe local anesthetics can be used.",
            "X-rays are only performed in emergencies with protection.",
          ],
        },
        image:
          "https://umid-dentist.uz/images/articles/pregnancy-dental-treatment.jpg",
        imageAlt: {
          uz: "Homiladorlikda tish davolash",
          ru: "Лечение зубов при беременности",
          en: "Dental treatment during pregnancy",
        },
        imageCaption: {
          uz: "2-trimestr – tish davolash uchun eng xavfsiz davr hisoblanadi.",
          ru: "2-й триместр – самый безопасный период для лечения зубов.",
          en: "The 2nd trimester is the safest period for dental treatment.",
        },
      },
    ],
    infoBox: {
      title: {
        uz: "Muhim eslatma",
        ru: "Важное замечание",
        en: "Important Note",
      },
      content: {
        uz: "Agar tish og‘rig‘i sizni juda bezovta qilsa, shifokor tavsiyasisiz dorilar qabul qilmang...",
        ru: "Если зубная боль сильно беспокоит, не принимайте лекарства без рекомендации врача...",
        en: "If toothache is severe, do not take medication without a doctor’s recommendation...",
      },
    },
  },
  {
    id: 8,
    title: {
      uz: "Koronalar yoki implantlar – qaysi birini o‘rnatish yaxshiroq?",
      ru: "Коронки или импланты – что лучше установить?",
      en: "Crowns or Implants – Which is the Better Option?",
    },
    date: "25 fevral 2025",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/crowns-vs-implants-thumb.jpg",
    featuredImage:
      "https://umid-dentist.uz/images/articles/crowns-vs-implants.jpg",
    intro: {
      uz: "Tish yo‘qolganda yoki kuchli shikastlanganda bemorlar oldida ikki asosiy tanlov paydo bo‘ladi...",
      ru: "Когда зуб утерян или сильно поврежден, перед пациентом встают два основных выбора...",
      en: "When a tooth is lost or severely damaged, patients face two main options...",
    },
    content: [
      {
        heading: {
          uz: "Tish koronkasi nima?",
          ru: "Что такое зубная коронка?",
          en: "What is a Dental Crown?",
        },
        paragraphs: {
          uz: [
            "Tish koronkasi – bu shikastlangan yoki kuchsizlangan tishni himoya qilish uchun o‘rnatiladigan maxsus qoplama...",
            "Koronkalar quyidagi materiallardan tayyorlanishi mumkin:",
          ],
          ru: [
            "Зубная коронка – это специальное покрытие, которое защищает поврежденный или ослабленный зуб...",
            "Коронки могут быть изготовлены из следующих материалов:",
          ],
          en: [
            "A dental crown is a special covering that protects a damaged or weakened tooth...",
            "Crowns can be made from the following materials:",
          ],
        },
        bulletPoints: {
          uz: [
            "Metall-keramika – mustahkam va nisbatan arzon variant.",
            "Zirkoniy – tabiiy ko‘rinish va yuqori chidamlilikka ega.",
            "To‘liq keramika – eng estetik va allergiyaga sabab bo‘lmaydi.",
          ],
          ru: [
            "Металлокерамика – прочный и относительно недорогой вариант.",
            "Цирконий – естественный вид и высокая прочность.",
            "Полная керамика – самый эстетичный и гипоаллергенный вариант.",
          ],
          en: [
            "Metal-ceramic – durable and relatively affordable.",
            "Zirconia – natural appearance and high durability.",
            "Full ceramic – most aesthetic and hypoallergenic.",
          ],
        },
        image: "https://umid-dentist.uz/images/articles/dental-crown.jpg",
        imageAlt: {
          uz: "Tish koronkasi",
          ru: "Зубная коронка",
          en: "Dental Crown",
        },
        imageCaption: {
          uz: "Zamonaviy tish koronkalarining turlari.",
          ru: "Виды современных зубных коронок.",
          en: "Types of modern dental crowns.",
        },
      },
      {
        heading: {
          uz: "Tish implantlari nima?",
          ru: "Что такое зубной имплант?",
          en: "What is a Dental Implant?",
        },
        paragraphs: {
          uz: [
            "Tish implanti – bu jag‘ suyagiga o‘rnatiladigan sun’iy ildiz bo‘lib...",
            "Implantlar titan yoki zirkoniy materialidan tayyorlanib, jag‘ suyaklari bilan mustahkam birlashadi.",
          ],
          ru: [
            "Зубной имплант – это искусственный корень, который устанавливается в кость челюсти...",
            "Импланты изготавливаются из титана или циркония и надежно соединяются с костью.",
          ],
          en: [
            "A dental implant is an artificial root placed in the jawbone...",
            "Implants are made of titanium or zirconia and integrate securely with the bone.",
          ],
        },
        image: "https://umid-dentist.uz/images/articles/dental-implant.jpg",
        imageAlt: {
          uz: "Tish implanti",
          ru: "Зубной имплант",
          en: "Dental Implant",
        },
        imageCaption: {
          uz: "Tish implantining asosiy qismlari: implant, abutment va koronka.",
          ru: "Основные части зубного импланта: имплант, абатмент и коронка.",
          en: "Main parts of a dental implant: implant, abutment, and crown.",
        },
      },
      {
        heading: {
          uz: "Koronka va implant: taqqoslash",
          ru: "Сравнение коронок и имплантов",
          en: "Comparison of Crowns and Implants",
        },
        paragraphs: {
          uz: [
            "Koronka va implant orasidagi asosiy farqlarni quyidagi jadval orqali ko‘rib chiqish mumkin:",
          ],
          ru: [
            "Основные различия между коронками и имплантами можно увидеть в таблице ниже:",
          ],
          en: [
            "The main differences between crowns and implants can be seen in the table below:",
          ],
        },
        table: {
          headers: {
            uz: ["Xususiyat", "Koronka", "Implant"],
            ru: ["Характеристика", "Коронка", "Имплант"],
            en: ["Feature", "Crown", "Implant"],
          },
          rows: [
            {
              uz: [
                "Qo‘llash sohasi",
                "Shikastlangan tishni tiklash",
                "Yo‘qolgan tish o‘rnini to‘ldirish",
              ],
              ru: [
                "Область применения",
                "Восстановление поврежденного зуба",
                "Замена отсутствующего зуба",
              ],
              en: [
                "Application",
                "Restoring a damaged tooth",
                "Replacing a missing tooth",
              ],
            },
            {
              uz: ["Chidamlilik", "10-15 yil", "25 yil va undan ortiq"],
              ru: ["Срок службы", "10-15 лет", "25 лет и более"],
              en: ["Durability", "10-15 years", "25 years or more"],
            },
            {
              uz: ["Narxi", "Nisbatan arzon", "Ko‘proq xarajat talab qiladi"],
              ru: ["Цена", "Относительно недорогая", "Требует больше затрат"],
              en: ["Cost", "Relatively affordable", "More expensive"],
            },
          ],
        },
      },
    ],
    infoBox: {
      title: {
        uz: "Muhim eslatma",
        ru: "Важное замечание",
        en: "Important Note",
      },
      content: {
        uz: "Tish yo‘qolgan yoki shikastlangan taqdirda, vaqtni cho‘zmasdan stomatologga murojaat qilish muhim...",
        ru: "Если зуб утрачен или поврежден, важно не откладывать визит к стоматологу...",
        en: "If a tooth is lost or damaged, it is important not to delay a visit to the dentist...",
      },
    },
  },
  {
    id: 9,
    title: {
      uz: "Aftozli stomatit (og'iz yaralari): sabablari, alomatlari va davolash usullari",
      ru: "Афтозный стоматит (язвы во рту): причины, симптомы и методы лечения",
      en: "Aphthous Stomatitis (Mouth Ulcers): Causes, Symptoms, and Treatment Methods",
    },
    date: "25 fevral 2025",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/aphthous-stomatitis-thumb.jpg",
    featuredImage:
      "https://umid-dentist.uz/images/articles/aphthous-stomatitis.jpg",
    intro: {
      uz: "Og'iz ichidagi og'riqli yaralar ko'pchilik uchun bezovtalik tug'diradi...",
      ru: "Болезненные язвы во рту доставляют дискомфорт многим людям...",
      en: "Painful ulcers inside the mouth cause discomfort for many people...",
    },
    content: [
      {
        heading: {
          uz: "Aftozli stomatit nima?",
          ru: "Что такое афтозный стоматит?",
          en: "What is Aphthous Stomatitis?",
        },
        paragraphs: {
          uz: [
            "Aftozli stomatit (aftalar) – bu og'iz shilliq qavatida paydo bo‘ladigan kichik, oq yoki sarg‘ish tusli yaralar.",
            "Aftalar yuqumli emas va odatda 7-14 kun ichida o‘z-o‘zidan tuzalib ketadi.",
          ],
          ru: [
            "Афтозный стоматит (афта) – это небольшие, беловатые или желтоватые язвы на слизистой оболочке рта.",
            "Афты не заразны и обычно заживают самостоятельно в течение 7-14 дней.",
          ],
          en: [
            "Aphthous stomatitis (aphthae) are small, whitish or yellowish ulcers on the mucous membrane of the mouth.",
            "Aphthae are not contagious and usually heal on their own within 7-14 days.",
          ],
        },
        image: "https://umid-dentist.uz/images/articles/mouth-ulcer.jpg",
        imageAlt: {
          uz: "Og'iz ichida aftozli yara",
          ru: "Афта во рту",
          en: "Aphthous ulcer in the mouth",
        },
        imageCaption: {
          uz: "Aftozli stomatit odatda yumshoq to‘qimalarda paydo bo‘ladi.",
          ru: "Афтозный стоматит обычно появляется на мягких тканях.",
          en: "Aphthous stomatitis usually appears on soft tissues.",
        },
      },
    ],
    infoBox: {
      title: {
        uz: "Muhim eslatma",
        ru: "Важное примечание",
        en: "Important Note",
      },
      content: {
        uz: "Og‘iz yaralari uzoq davom etsa yoki og‘riq kuchli bo‘lsa, albatta mutaxassisga murojaat qiling!",
        ru: "Если язвы во рту долго не проходят или вызывают сильную боль, обязательно обратитесь к специалисту!",
        en: "If mouth ulcers persist for a long time or cause severe pain, be sure to consult a specialist!",
      },
    },
  },
];
