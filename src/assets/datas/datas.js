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

export const articleSingle = [
  {
    id: "aql-tishim-ogriyapti",
    title: "Aql tishim og'riyapti - rostdan ham uni olib tashlash kerakmi?",
    date: "22 mar 2024",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/wisdom-tooth-pain-thumb.jpg",
    featuredImage:
      "https://umid-dentist.uz/images/articles/wisdom-tooth-pain.jpg",
    intro:
      "Aql tishi og'rig'i odatda juda noqulay bo'lishi mumkin. Ko'pchilik aql tishlarini olib tashlash kerak deb o'ylaydi, lekin bu har doim ham to'g'ri emas. Bu maqolada biz aql tishlari va ularni qachon olib tashlash kerak yoki kerak emasligini muhokama qilamiz.",
    content: [
      {
        heading: "Aql tishlari nima?",
        paragraphs: [
          "Aql tishlari (uchinchi molyarlar) odamning og'zidagi eng oxirgi tishlardir. Ular odatda 17-25 yoshlar orasida chiqadi. Ko'pchilik odamlarda to'rtta aql tishi bor - har bir jag' tomonida bittadan.",
          "Aql tishlari nomini ularning kech chiqishidan olgan, bu vaqtga kelib inson \"aqlli\" bo'lib qoladi degan tushunchadan kelib chiqqan. Ammo hozirgi kunda ko'pchilik stomatologlar aql tishlarini muammoli deb hisoblashadi, chunki ularning chiqish jarayoni ko'pincha og'riqli bo'ladi va boshqa tishlar uchun muammolar keltirib chiqarishi mumkin.",
        ],
      },
      {
        heading: "Aql tishlari og'rig'ining sabablari",
        paragraphs: [
          "Aql tishlarining og'rig'i turli sabablar tufayli yuzaga kelishi mumkin:",
          "Agar aql tishi to'liq chiqa olmasa yoki qiyshiq chiqsa, u qisman milkda qolishi mumkin. Bu perikoronit (milkning yallig'lanishi) deb ataladigan holatga olib kelishi mumkin.",
          "Aql tishlari ko'pincha og'izning eng orqa qismida joylashgani sababli, ularni to'g'ri tozalash qiyin bo'lishi mumkin, bu esa kariyes va milk kasalliklariga olib kelishi mumkin.",
          "Ba'zi hollarda, aql tishi yaqinidagi to'qimalar yoki nerv tolalarini bosishi mumkin, bu esa og'riqqa olib keladi.",
        ],
        image:
          "https://umid-dentist.uz/images/articles/wisdom-tooth-pain-causes.jpg",
        imageAlt: "Aql tishi og'rig'i sabablari",
        imageCaption: "Aql tishi og'rig'ining asosiy sabablari",
      },
      {
        heading: "Aql tishlarini olib tashlash kerakmi?",
        paragraphs: [
          "Har bir holatda aql tishlarini olib tashlash kerak yoki yo'qligi alohida qaror qilinadi. Quyidagi hollarda aql tishlarini olib tashlash tavsiya etiladi:",
        ],
        bulletPoints: [
          "Tish to'liq chiqa olmasa va milkda qolsa (impacted wisdom tooth)",
          "Aql tishi boshqa tishlarni siqib qo'ysa yoki tishlarning joylashishiga ta'sir qilsa",
          "Tish atrofida tez-tez infeksiya bo'lsa",
          "Aql tishi atrofida kistalar yoki o'smalar paydo bo'lsa",
          "Aql tishi kariyes bilan zararlangan bo'lsa va uni davolash imkoni bo'lmasa",
        ],
        paragraphs: [
          "Agar aql tishlari to'g'ri chiqsa, yaxshi holatda bo'lsa va og'riq yoki muammolar tug'dirmasa, ularni olib tashlash shart emas. Ko'pgina stomatologlar profilaktika maqsadida aql tishlarini olib tashlashni tavsiya qilishsa-da, bu haqida aniq ilmiy dalillar yo'q.",
        ],
      },
      {
        heading: "Aql tishini olib tashlash jarayoni",
        paragraphs: [
          "Aql tishini olib tashlash odatda quyidagi bosqichlarni o'z ichiga oladi:",
          "1. Mahalliy yoki umumiy og'riqsizlantirish qo'llaniladi.",
          "2. Tish atrofidagi milkda kesma qilinadi (agar kerak bo'lsa).",
          "3. Agar tish suyakda bo'lsa, unga yetish uchun suyak olib tashlanadi.",
          "4. Tish bir necha bo'laklarga bo'linishi mumkin, bu uni olib tashlashni osonlashtiradi.",
          "5. Tish olib tashlanadi va yarani tozalanadi.",
          "6. Kerak bo'lsa, yara tikib qo'yiladi.",
        ],
        image:
          "https://umid-dentist.uz/images/articles/wisdom-tooth-extraction.jpg",
        imageAlt: "Aql tishini olib tashlash jarayoni",
        imageCaption: "Aql tishini olib tashlash jarayoni tasvirlangan",
      },
      {
        heading: "Aql tishini olib tashlashdan keyin parvarish",
        paragraphs: [
          "Aql tishini olib tashlashdan so'ng tuzalish jarayoni odatda bir necha kundan bir necha haftagacha davom etadi. Tezroq tuzalish uchun quyidagi tavsiyalarga amal qilish muhim:",
        ],
        bulletPoints: [
          "Og'riqni kamaytirish uchun shifokor tomonidan tavsiya etilgan dori-darmonlarni qabul qiling",
          "Operatsiyadan keyin birinchi 24 soat ichida muzni 20 daqiqa davomida yuzga qo'ying, 20 daqiqa tanaffus qiling",
          "Tish oldirilgandan keyin birinchi 24 soat ichida qattiq ovqat yemang, issiq ichimliklar ichmang va tamaki chekishdan saqlaning",
          "Tish oldirilgan joyni chayqamang yoki cho'tka bilan tozalamang, bu qon quyqasini olib tashlashi va qon ketishiga sabab bo'lishi mumkin",
          "Ikki kun davomida og'ir jismoniy mashqlardan saqlaning",
        ],
      },
      {
        heading: "Xulosa",
        paragraphs: [
          "Aql tishi og'rig'i jiddiy muammo bo'lishi mumkin, lekin har doim ham tishni olib tashlash kerak degani emas. Agar aql tishingiz og'risa, albatta malakali stomatologga murojaat qiling. Shifokor sizning alohida holatlaringizni ko'rib chiqadi va eng yaxshi davolash usulini tavsiya qiladi.",
          "Umid-Dentist klinikamizda tajribali stomatologlar aql tishlari bilan bog'liq barcha muammolarga yechim topishda yordam beradi. Biz zamonaviy uskunalar va og'riqsiz tish olish texnikalaridan foydalanamiz.",
        ],
      },
    ],
    infoBox: {
      title: "Diqqat!",
      content:
        "Agar aql tishingiz og'rig'i kuchli bo'lsa, yuzda shish paydo bo'lsa yoki 38°C dan yuqori harorat kuzatilsa, zudlik bilan shifokorga murojaat qiling. Bu infeksiya belgilari bo'lishi mumkin va tezkor tibbiy yordam talab qiladi.",
    },
  },
  {
    id: "tish-implantlari-qancha-muddat",
    title: "Tish implantlari qancha muddat xizmat qiladi?",
    date: "07 may 2024",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/dental-implants-thumb.jpg",
    featuredImage:
      "https://umid-dentist.uz/images/articles/dental-implants.jpg",
    intro:
      "Tish implantlari zamonaviy stomatologiyaning eng muhim yutuqlaridan biri hisoblanadi. Ular yo'qolgan tishlar o'rnini to'ldirish uchun eng yaxshi va uzoq muddatli yechim hisoblanadi. Ammo ko'pchilik bemorlar implantlar qancha muddat xizmat qilishi haqida savol berishadi. Bu maqolada implantlarning xizmat muddati va uni uzaytirish usullari haqida batafsil ma'lumot beramiz.",
    content: [
      {
        heading: "Tish implantlari nima?",
        paragraphs: [
          "Tish implanti - bu yo'qolgan tishning ildizi o'rnini bosuvchi titanli vint. U jag' suyagiga o'rnatilib, sun'iy tish (koronka) uchun mustahkam asos vazifasini bajaradi. Implantlar tishning tabiiy funktsiyasini va estetikasini qayta tiklashning eng samarali usuli hisoblanadi.",
          "Implantatsiya jarayoni odatda bir necha bosqichdan iborat bo'lib, jag' suyagiga implant o'rnatilgandan so'ng, u bilan suyak to'qimasi birlashishi (osteointegration) uchun bir necha oy kerak bo'ladi. Shundan so'ng implant ustiga sun'iy tish o'rnatiladi.",
        ],
        image:
          "https://umid-dentist.uz/images/articles/dental-implant-structure.jpg",
        imageAlt: "Tish implantining tuzilishi",
        imageCaption:
          "Tish implantining asosiy qismlari: implant, abutment va koronka",
      },
      {
        heading: "Tish implantlarining o'rtacha xizmat muddati",
        paragraphs: [
          "Ko'pgina ilmiy tadqiqotlar tish implantlarining 25 yil va undan ortiq muddat xizmat qilishini ko'rsatadi. Ba'zi hollarda implantlar butun umr davomida xizmat qilishi mumkin. Statistik ma'lumotlarga ko'ra, to'g'ri o'rnatilgan va parvarish qilingan implantlarning 90-95% 10 yildan ortiq vaqt davomida muammosiz ishlaydi.",
          "Implantning xizmat muddati quyidagi omillarga bog'liq:",
        ],
        bulletPoints: [
          "Bemorning umumiy sog'lig'i holati",
          "Og'iz bo'shlig'i gigiyenasi",
          "Suyak zichligi va sifati",
          "Implantning joylashuvi (old tishlar yoki jag'ning orqa qismi)",
          "Implantatsiologning malakasi va tajribasi",
          "Implant sifati va ishlab chiqaruvchisi",
        ],
      },
      {
        heading: "Implant koronkasining xizmat muddati",
        paragraphs: [
          "Implant tizimining titanli qismi (jag' suyagiga o'rnatiladigan vint) odatda uzoq muddat xizmat qiladi. Ammo koronka (sun'iy tish) qismi vaqt o'tishi bilan eskirishi va almashtirilishi kerak bo'lishi mumkin.",
          "Ko'pchilik hollarda, keramik koronkalarning o'rtacha xizmat muddati 10-15 yilni tashkil qiladi. Zamonaviy materiallardan tayyorlangan yuqori sifatli koronkalar undan ham uzoqroq xizmat qilishi mumkin. Koronkalarning eskirishi asosan chaynovchi kuchlar, ovqatlanish odatlari va og'iz bo'shlig'i gigiyenasiga bog'liq.",
        ],
        image:
          "https://umid-dentist.uz/images/articles/dental-implant-crown.jpg",
        imageAlt: "Implant koronkasi",
        imageCaption: "Zamonaviy keramik implant koronkasi",
      },
      {
        heading: "Implantlarning xizmat muddatiga ta'sir qiluvchi omillar",
        paragraphs: [
          "Quyidagi omillar implantlarning xizmat muddatini sezilarli darajada qisqartirishi mumkin:",
        ],
        bulletPoints: [
          "Tamaki chekish: Chekuvchilarda implant muvaffaqiyatsizligi ehtimoli 2-3 barobar yuqori",
          "Diabetes: Nazorat qilinmagan qandli diabet implant atrofidagi to'qimalarga qon yetkazib berishni kamaytiradi",
          "Og'iz bo'shlig'i gigiyenasiga rioya qilmaslik: Bu periimplantit (implant atrofidagi to'qimalarning yallig'lanishi) xavfini oshiradi",
          "Bruksizm (tishlarni g'ichirlatish): Bu implantga ortiqcha bosim beradi va mexanik shikastlanishga olib kelishi mumkin",
          "Suyak zichligi va sifatining past bo'lishi: Bu implantning osteointegratsiasi va barqarorligiga ta'sir qiladi",
        ],
        paragraphs: [
          "Shuningdek, implantolog shifokorning tajribasi va malakasi, hamda ishlatiladigan implant tizimining sifati ham muhim rol o'ynaydi. Sifatli va zamonaviy implant tizimlari uzoqroq xizmat qiladi va kamroq muammo tug'diradi.",
        ],
      },
      {
        heading: "Implantlarning xizmat muddatini uzaytirish usullari",
        paragraphs: [
          "Implantlarning xizmat muddatini maksimal darajada uzaytirish uchun quyidagi tavsiyalarga amal qilish muhim:",
        ],
        bulletPoints: [
          "Kunlik og'iz bo'shlig'i gigiyenasiga qat'iy rioya qilish - tishlarni kuniga ikki marta cho'tkalash, tish ipi va maxsus implant cho'tkalari bilan tozalash",
          "Shifokor ko'rigiga muntazam borish - kamida har 6 oyda bir marta",
          "Professional tish tozalash protseduralarini o'tkazish - yiliga 1-2 marta",
          "Tamaki chekishdan voz kechish",
          "Qattiq ovqatlarni chaynashda ehtiyot bo'lish",
          "Tishlar uchun qo'riqlovchi kapa taqish (agar bruksizm bo'lsa)",
        ],
        image: "https://umid-dentist.uz/images/articles/implant-care.jpg",
        imageAlt: "Implant parvarishi",
        imageCaption:
          "Implantlarni to'g'ri parvarish qilish ularning xizmat muddatini uzaytiradi",
      },
      {
        heading: "Implantlarning muammolari va ularni bartaraf etish",
        paragraphs: [
          "Implantlar bilan bog'liq ba'zi muammolar paydo bo'lishi mumkin:",
          "Periimplantit - implant atrofidagi to'qimalarning yallig'lanishi. Bu holatni o'z vaqtida davolash implantni saqlashga yordam beradi.",
          "Implantning bo'shashi - bu implant va suyak orasidagi birlashuvning buzilishidan dalolat beradi. Ba'zi hollarda implantni qayta o'rnatish talab etilishi mumkin.",
          "Koronkaning sinishi yoki yeyilishi - koronkani almashtirish orqali hal qilinadi, implantning o'zi zarar ko'rmaydi.",
          "Agar siz implantingiz bilan bog'liq qandaydir muammo sezsangiz (og'riq, qizarish, shish yoki implantning harakatchanligi), zudlik bilan stomatologga murojaat qilishingiz kerak. Ko'pchilik muammolarni erta bosqichda bartaraf etish mumkin.",
        ],
      },
      {
        heading: "Xulosa",
        paragraphs: [
          "Tish implantlari - bu yo'qolgan tishlarni almashtirish uchun eng samarali, estetik va uzoq muddatli yechim. To'g'ri o'rnatilgan va parvarish qilingan implantlar o'n yillar davomida muammosiz xizmat qilishi mumkin.",
          "Umid-Dentist klinikamizda biz faqat yuqori sifatli, xalqaro sertifikatlarga ega bo'lgan implant tizimlaridan foydalanamiz. Bizning tajribali implantatsiologlarimiz har bir bemor uchun individual yondashib, eng optimal davolash rejasini tuzadi va implantatsiya jarayonini yuqori darajada amalaga oshiradi.",
        ],
      },
    ],
    infoBox: {
      title: "Muhim eslatma",
      content:
        "Implant o'rnatilgandan so'ng doimiy nazorat va parvarish muhim. Implantingiz bilan bog'liq har qanday muammo yoki savollar bo'lsa, klinikamizga murojaat qiling. Biz sizga malakali maslahat va yordam berishdan mamnun bo'lamiz.",
    },
  },
  {
    id: "odamlar-breket-qo'yishdan-qo'rqishning-7-sababi",
    title: "Odamlar breket qo‘yishdan qo‘rqishning 7 sababi",
    date: "25 fevral 2025",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/braces-fear-thumb.jpg",
    featuredImage: "https://umid-dentist.uz/images/articles/braces-fear.jpg",
    intro:
      "Breketlar nafaqat chiroyli tabassum balki, sog‘lom tishlar uchun ham juda muhim. Ammo ko‘pchilik breket qo‘yishdan turli sabablarga ko‘ra qo‘rqadi. Ushbu maqolada odamlar breket qo‘yishdan nimalardan qo‘rqishi va bu qo‘rquvlarni qanday yengish mumkinligi haqida gaplashamiz.",
    content: [
      {
        heading: "1. Breketlar og‘riqli bo‘ladi deb o‘ylash",
        paragraphs: [
          "Ko‘pchilik breket qo‘yish juda og‘riqli jarayon deb o‘ylaydi. Aslida esa, breket o‘rnatish jarayoni og‘riqsiz kechadi, faqat dastlabki kunlarda yengil noqulaylik sezilishi mumkin.",
          "Biroq, zamonaviy breket tizimlari og‘riqni minimal darajaga tushirish uchun ishlab chiqilgan va organizm ularga tezda moslashadi.",
        ],
        image: "https://umid-dentist.uz/images/articles/braces-pain.jpg",
        imageAlt: "Breket taqishdagi noqulaylik",
        imageCaption:
          "Dastlabki kunlarda yengil noqulaylik bo‘lishi mumkin, ammo tezda o‘tib ketadi.",
      },
      {
        heading: "2. Breketlar chiroyga ta’sir qiladi",
        paragraphs: [
          "Ba’zi odamlar breket taqish estetik jihatdan chiroyli ko‘rinmasligini o‘ylashadi. Bugungi kunda esa shaffof yoki ichki (lingval) breket turlari mavjud bo‘lib, ular deyarli sezilmaydi.",
          "Shuningdek, zamonaviy metall breketlar ham kichikroq va qulayroq bo‘lib, ularni odatiy holat sifatida qabul qilish mumkin.",
        ],
        image: "https://umid-dentist.uz/images/articles/invisible-braces.jpg",
        imageAlt: "Shaffof breketlar",
        imageCaption: "Shaffof yoki ichki breketlar deyarli sezilmaydi.",
      },
      {
        heading: "3. Ovqat yeyishda noqulaylik bo‘ladi",
        paragraphs: [
          "Ha, ba’zi mahsulotlarni iste’mol qilishda ehtiyot bo‘lish kerak, masalan, juda qattiq yoki yopishqoq ovqatlar tavsiya etilmaydi.",
          "Lekin, odatiy ratsionga moslashish juda oson. Shifokor tavsiyalari asosida turli yeguliklarni iste’mol qilish mumkin.",
        ],
        bulletPoints: [
          "Breketlar bilan yemaslik kerak bo‘lgan mahsulotlar: juda qattiq yong‘oqlar, yopishqoq konfetlar.",
          "Yumshoq va foydali taomlarni tanlash breketlar uchun ideal.",
        ],
      },
      {
        heading: "4. Breketlar gapirishga ta’sir qiladi",
        paragraphs: [
          "Dastlabki kunlarda biroz noqulaylik sezilishi mumkin, lekin til va og‘iz mushaklari tezda moslashadi.",
          "Ko‘p odamlar bir necha kundan keyin oddiy holatda gapirishni davom ettiradilar.",
        ],
        image: "https://umid-dentist.uz/images/articles/braces-talking.jpg",
        imageAlt: "Breket bilan gapirish",
        imageCaption:
          "Breketlar til harakatiga biroz ta’sir qilishi mumkin, ammo bu vaqtinchalik.",
      },
      {
        heading: "5. Juda uzoq vaqt taqish kerak bo‘ladi",
        paragraphs: [
          "Har bir bemorning tish holatiga qarab davolash muddati farq qiladi. O‘rtacha 1.5 - 2 yil davom etishi mumkin.",
          "Eng muhimi, shifokor tavsiyalariga amal qilish va davolash jarayonini tezlashtirish uchun kerakli qoidalarga rioya qilish.",
        ],
      },
      {
        heading: "6. Breketlar juda qimmat",
        paragraphs: [
          "Breketlar narxi ularning turiga va klinikaning xizmatlariga bog‘liq. Biroq, ko‘plab stomatologik markazlar to‘lovni bo‘lib-bo‘lib to‘lash imkoniyatini ham taklif qilishadi.",
          "Eng muhimi, breketlar kelajakda sog‘lom tishlarga ega bo‘lishingizga yordam beradi, bu esa katta investitsiya hisoblanadi.",
        ],
      },
      {
        heading: "7. Breketlarni parvarish qilish qiyin",
        paragraphs: [
          "Breket taqish bilan gigiyena muhimroq bo‘ladi, lekin uni to‘g‘ri bajarish unchalik qiyin emas. Tish cho‘tkasi, maxsus ip va og‘iz yuvish vositalaridan foydalanish kifoya.",
          "Shuningdek, shifokor ko‘rigiga borish orqali breketlarni to‘g‘ri parvarish qilish bo‘yicha qo‘shimcha tavsiyalar olish mumkin.",
        ],
        image: "https://umid-dentist.uz/images/articles/braces-care.jpg",
        imageAlt: "Breketlarni parvarish qilish",
        imageCaption:
          "To‘g‘ri gigiyena breketlar bilan bog‘liq muammolarni oldini oladi.",
      },
    ],
    infoBox: {
      title: "Muhim maslahat",
      content:
        "Breketlardan qo‘rqishning hojati yo‘q! Ular nafaqat tishlaringizni to‘g‘rilaydi, balki kelajakda sog‘lom tabassumga ega bo‘lishingizni ta’minlaydi. Agar sizda savollar bo‘lsa, ortodont shifokoringiz bilan maslahat qiling.",
    },
  },
  {
    id: "qiyshiq-tishlar-kimda-bolmagan",
    title: "Qiyshiq tishlar – kimda bo‘lmagan?",
    date: "25 fevral 2025",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/crooked-teeth-thumb.jpg",
    featuredImage: "https://umid-dentist.uz/images/articles/crooked-teeth.jpg",
    intro:
      "Ko‘pchilikda tishlarning notekis joylashuvi – ya’ni qiyshiq tishlar uchraydi. Ba’zi hollarda bu faqat estetik muammo bo‘lsa, ayrim vaziyatlarda sog‘liq bilan bog‘liq muammolarni ham keltirib chiqarishi mumkin. Ushbu maqolada qiyshiq tishlarning sabablari, ularning salomatlikka ta’siri va yechimlari haqida gaplashamiz.",
    content: [
      {
        heading: "Qiyshiq tishlar nega paydo bo‘ladi?",
        paragraphs: [
          "Qiyshiq tishlar genetika, bolalikdagi odatlar va boshqa omillar ta’sirida shakllanishi mumkin. Ko‘pincha odamlar o‘z tishlarining qiyshiqligini irsiy deb o‘ylashadi, ammo bu har doim ham to‘g‘ri emas.",
          "Boshqa sabablar ham mavjud bo‘lib, ular orasida noto‘g‘ri odatlar, ortiqcha yoki yetishmayotgan tishlar, jag‘ning noto‘g‘ri rivojlanishi kabilar bor.",
        ],
        bulletPoints: [
          "Genetik omillar – ota-onadan meros bo‘lib o‘tishi mumkin",
          "Bolalikda barmoqlarni so‘rish yoki duduk taqish odati",
          "Burundan nafas olish muammolari (doimiy og‘iz orqali nafas olish)",
          "Jag‘ning noto‘g‘ri rivojlanishi yoki ortiqcha tishlar",
          "Yoshligida ba’zi tishlarning erta tushishi yoki yo‘qligi",
        ],
        image:
          "https://umid-dentist.uz/images/articles/crooked-teeth-causes.jpg",
        imageAlt: "Qiyshiq tishlarning sabablari",
        imageCaption:
          "Genetika va odatlar qiyshiq tishlarga sabab bo‘lishi mumkin.",
      },
      {
        heading: "Qiyshiq tishlar sog‘liq uchun xavfli emasmi?",
        paragraphs: [
          "Qiyshiq tishlar nafaqat estetik muammo, balki tish sog‘lig‘i va umumiy salomatlik uchun ham xavf tug‘dirishi mumkin. Ular tish yuvish jarayonini qiyinlashtiradi va natijada karies yoki milk kasalliklari rivojlanishiga sabab bo‘lishi mumkin.",
          "Shuningdek, noto‘g‘ri joylashgan tishlar chaynov jarayoniga ta’sir qilib, jag‘ bo‘g‘imida muammolar, bosh og‘rig‘i va hatto hazm muammolarini keltirib chiqarishi mumkin.",
        ],
        bulletPoints: [
          "Tishlarning noto‘g‘ri joylashuvi karies va milk yallig‘lanishiga sabab bo‘lishi mumkin",
          "Noto‘g‘ri chaynov jag‘ bo‘g‘imi og‘rig‘iga olib keladi",
          "Tishlarning noto‘g‘ri yopilishi (okklyuziya) bo‘g‘im muammolarini keltirib chiqarishi mumkin",
          "Ba’zan qiyshiq tishlar tovushlarni noto‘g‘ri talaffuz qilishga ham sabab bo‘ladi",
        ],
        image:
          "https://umid-dentist.uz/images/articles/crooked-teeth-effects.jpg",
        imageAlt: "Qiyshiq tishlarning salomatlikka ta’siri",
        imageCaption:
          "Tishlarning noto‘g‘ri joylashuvi ko‘plab muammolarga sabab bo‘lishi mumkin.",
      },
      {
        heading: "Qiyshiq tishlarni qanday to‘g‘rilash mumkin?",
        paragraphs: [
          "Qiyshiq tishlarni to‘g‘rilashning eng samarali usuli – ortodontik davolash. Breketlar va elaynerlar (shaffof plastinkalar) yordamida tishlar asta-sekin to‘g‘ri holatga keltiriladi.",
          "Davolash usuli tishlarning egri darajasi, bemorning yoshi va jag‘ning tuzilishiga qarab tanlanadi.",
        ],
        bulletPoints: [
          "Breketlar – eng samarali va ommabop usul",
          "Shaffof elaynerlar – sezilmaydigan, qulay variant",
          "Tish protezlari yoki fanerlash – ayrim hollarda tanlanadigan yechim",
          "Jarrohlik – og‘ir holatlarda jag‘ tuzilishini to‘g‘rilash uchun",
        ],
        image: "https://umid-dentist.uz/images/articles/braces-treatment.jpg",
        imageAlt: "Breketlar va elaynerlar",
        imageCaption:
          "Breketlar va elaynerlar yordamida qiyshiq tishlarni to‘g‘rilash mumkin.",
      },
      {
        heading: "Qiyshiq tishlarni oldini olish mumkinmi?",
        paragraphs: [
          "Ba’zi hollarda qiyshiq tishlarning oldini olish mumkin, ayniqsa bolalik davrida. Buning uchun jag‘ rivojlanishini kuzatish, zararli odatlardan voz kechish va shifokorga muntazam borish muhim.",
          "Shuningdek, bolalikda burundan nafas olish muammolari bo‘lsa, uni vaqtida hal qilish kerak.",
        ],
        bulletPoints: [
          "Bolalarda duduk yoki barmoq so‘rish odatidan voz kechish",
          "Tish tushish jarayonini nazorat qilish",
          "Burundan nafas olishni yaxshilash",
          "Bolalikdan muntazam stomatologga borish",
        ],
        image:
          "https://umid-dentist.uz/images/articles/prevent-crooked-teeth.jpg",
        imageAlt: "Qiyshiq tishlarning oldini olish",
        imageCaption:
          "Bolalikdan ortodont shifokor nazorati ostida bo‘lish muhim.",
      },
      {
        heading: "Xulosa",
        paragraphs: [
          "Qiyshiq tishlar – bu keng tarqalgan muammo bo‘lib, u nafaqat tashqi ko‘rinishga, balki tish va jag‘ salomatligiga ham ta’sir qilishi mumkin. Zamonaviy ortodontik davolash usullari yordamida tishlarni to‘g‘rilash va chiroyli tabassumga ega bo‘lish mumkin.",
          "Agar siz yoki farzandingizda qiyshiq tishlar muammosi bo‘lsa, ortodont shifokoriga murojaat qilish tavsiya etiladi.",
        ],
      },
    ],
    infoBox: {
      title: "Muhim eslatma",
      content:
        "Qiyshiq tishlarni davolash uchun imkon qadar erta shifokorga murojaat qiling. Breket yoki elaynerlar orqali bemalol chiroyli tabassumga erishish mumkin!",
    },
  },
  {
    id: "tish-sezuvchanligi",
    title: "Tish sezuvchanligi bezovta qilyaptimi?",
    date: "25 fevral 2025",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/tooth-sensitivity-thumb.jpg",
    featuredImage:
      "https://umid-dentist.uz/images/articles/tooth-sensitivity.jpg",
    intro:
      "Issiq choy yoki sovuq muzqaymoq yeganingizda tishlaringizda keskin og‘riq seziladimi? Agar shunday bo‘lsa, sizda tish sezuvchanligi bor bo‘lishi mumkin. Bu holat ko‘plab odamlarda uchraydi va turli sabablarga ega. Ushbu maqolada tish sezuvchanligining sabablarini va uni davolash usullarini ko‘rib chiqamiz.",
    content: [
      {
        heading: "Tish sezuvchanligi nima va nega paydo bo‘ladi?",
        paragraphs: [
          "Tish sezuvchanligi – bu tish nervlari tashqi ta’sirlarga (issiq, sovuq, shirin yoki nordon taomlar) sezgir bo‘lib qolishi natijasida paydo bo‘ladigan holatdir. Bu odatda emal yupqalashganda yoki tish go‘shti chekinganda yuzaga keladi.",
          "Buning asosiy sabablari quyidagilardir:",
        ],
        bulletPoints: [
          "Tish emalining yupqalashishi – noto‘g‘ri tish yuvish yoki qattiq ovqatlar iste’moli tufayli",
          "Tish go‘shtining chekinishi – parodontal kasalliklar yoki noto‘g‘ri gigiyena sababli",
          "Kariyes yoki tishning yorilishi",
          "Tishlarning haddan tashqari oqartirilishi",
          "Gazlangan ichimliklar yoki nordon taomlarni ortiqcha iste’mol qilish",
          "Bruksizm (tishlarni g‘ichirlatish)",
        ],
        image: "https://umid-dentist.uz/images/articles/tooth-structure.jpg",
        imageAlt: "Tish sezuvchanligining sabablari",
        imageCaption:
          "Emal yupqalashishi yoki tish go‘shtining chekinishi sezuvchanlikni oshirishi mumkin.",
      },
      {
        heading: "Tish sezuvchanligi qanday belgilar bilan namoyon bo‘ladi?",
        paragraphs: [
          "Agar sizda tish sezuvchanligi bo‘lsa, quyidagi belgilarni sezishingiz mumkin:",
        ],
        bulletPoints: [
          "Sovuq yoki issiq ovqat va ichimliklarga nisbatan noqulaylik",
          "Shirin yoki nordon mahsulotlarni iste’mol qilganda keskin og‘riq",
          "Tish yuvish vaqtida yoki sovuq havoda tishlarning achishishi",
          "Ba’zi hollarda o‘tkir yoki pulsatsiyalanuvchi og‘riq",
        ],
        image:
          "https://umid-dentist.uz/images/articles/tooth-sensitivity-symptoms.jpg",
        imageAlt: "Tish sezuvchanligi belgilar",
        imageCaption:
          "Sovuq va shirin mahsulotlar sezuvchan tishlarda og‘riqni chaqirishi mumkin.",
      },
      {
        heading: "Tish sezuvchanligining oldini olish va davolash",
        paragraphs: [
          "Agar sizda tish sezuvchanligi bo‘lsa, muammoni hal qilish uchun bir nechta samarali usullar mavjud. Eng muhimi – og‘iz gigiyenasiga e’tibor qaratish va tish shifokorining tavsiyalariga amal qilish.",
          "Davolash usullari quyidagicha:",
        ],
        bulletPoints: [
          "Sezuvchan tishlar uchun maxsus pastalardan foydalanish",
          "Nordonga boy ovqat va ichimliklarni kamaytirish",
          "Tish cho‘tkasini yumshoqroq turlarga almashtirish",
          "Tish go‘shti va emalni himoya qilish uchun remineralizatsiya qiluvchi vositalardan foydalanish",
          "Shifokor tomonidan tavsiya etilgan ftoridli yoki himoya qoplamali muolajalar",
        ],
        image: "https://umid-dentist.uz/images/articles/tooth-care.jpg",
        imageAlt: "Tish sezuvchanligini kamaytirish usullari",
        imageCaption:
          "Maxsus tish pastalari va shifokor tavsiyalari yordamida sezuvchanlikni kamaytirish mumkin.",
      },
      {
        heading: "Qachon stomatologga murojaat qilish kerak?",
        paragraphs: [
          "Agar tish sezuvchanligi uzoq davom etsa va oddiy choralar yordam bermasa, albatta stomatologga murojaat qilish kerak. Ayrim hollarda sezuvchanlik jiddiy muammolar – masalan, tish emalining kuchli zararlanishi yoki nervlarning ochilishi bilan bog‘liq bo‘lishi mumkin.",
          "Shifokor sizga mos muolajani tavsiya qiladi va zaruriy hollarda professional davolash usullarini qo‘llaydi.",
        ],
        image:
          "https://umid-dentist.uz/images/articles/dentist-consultation.jpg",
        imageAlt: "Tish shifokoriga murojaat qilish",
        imageCaption:
          "Sezuvchanlik uzoq davom etsa, shifokorga murojaat qilish kerak.",
      },
      {
        heading: "Xulosa",
        paragraphs: [
          "Tish sezuvchanligi ko‘pchilikda uchraydigan muammo bo‘lib, noto‘g‘ri parvarish yoki tish shikastlanishlari sababli paydo bo‘lishi mumkin. Biroq, maxsus pastalar, yumshoq tish cho‘tkasi va stomatolog tavsiyalariga amal qilish orqali bu muammoni kamaytirish mumkin.",
          "Agar sezuvchanlik uzoq davom etsa, Umid-Dentist klinikamizga tashrif buyuring – biz sizga eng samarali yechimni taklif qilamiz!",
        ],
      },
    ],
    infoBox: {
      title: "Muhim eslatma",
      content:
        "Agar tish sezuvchanligi hayotingizga ta’sir qilayotgan bo‘lsa, uni e’tiborsiz qoldirmang. Erta davolash kelajakda jiddiy muammolarning oldini oladi!",
    },
  },
  {
    id: "kariyes-hamma-qorqadigan-narsa",
    title: "Kariyes – hamma qo'rqadigan narsa",
    date: "25 fevral 2025",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/tooth-decay-thumb.jpg",
    featuredImage: "https://umid-dentist.uz/images/articles/tooth-decay.jpg",
    intro:
      "Kariyes – dunyodagi eng keng tarqalgan tish kasalliklaridan biri bo'lib, har bir inson hayotida kamida bir marta u bilan duch keladi. Lekin ko'pchilik kariyes qanday paydo bo'lishini, uni qanday oldini olish va davolash mumkinligini bilmaydi. Ushbu maqolada kariyesning sabablari, bosqichlari va davolash usullari haqida batafsil ma’lumot beramiz.",
    content: [
      {
        heading: "Kariyes nima va qanday paydo bo‘ladi?",
        paragraphs: [
          "Kariyes – tish emalining yemirilishi natijasida hosil bo‘ladigan tish kasalligi bo‘lib, u asta-sekin tish to‘qimalarining buzilishiga olib keladi.",
          "Asosiy sabab – og‘iz bo‘shlig‘ida to‘planadigan bakteriyalar bo‘lib, ular ovqat qoldiqlari va shakar bilan o‘zaro ta’sirlashib, kislota hosil qiladi. Bu kislotalar tish emalini yemirib, kariyes paydo bo‘lishiga sabab bo‘ladi.",
        ],
        image:
          "https://umid-dentist.uz/images/articles/tooth-decay-process.jpg",
        imageAlt: "Kariyesning rivojlanish jarayoni",
        imageCaption:
          "Kariyes dastlab tish yuzasida mayda dog‘lar shaklida paydo bo‘ladi va asta-sekin ichkariga kirib boradi.",
      },
      {
        heading: "Kariyesning rivojlanish bosqichlari",
        paragraphs: [
          "Kariyes bir necha bosqichda rivojlanadi va har bir bosqichda davolash usullari farq qiladi.",
        ],
        bulletPoints: [
          "❶ Dastlabki bosqich – tish emalida oq yoki jigarrang dog‘lar paydo bo‘ladi, lekin og‘riq sezilmaydi.",
          "❷ Yuzaki kariyes – emal yemirilib, tish yuzasida mayda yoriqlar hosil bo‘ladi.",
          "❸ O‘rta kariyes – emaldan tashqari, dentin ham zarar ko‘radi va tish sezuvchanligi oshadi.",
          "❹ Chuqur kariyes – bakteriyalar tishning ichki qatlamiga yetib boradi, bu esa kuchli og‘riq va infeksiyaga olib kelishi mumkin.",
          "❺ Pulpa zararlanishi – agar kariyes o‘z vaqtida davolanmasa, tish nervlari yallig‘lanadi va endodontik davolash (kanal tozalash) talab qilinadi.",
        ],
        image: "https://umid-dentist.uz/images/articles/tooth-decay-stages.jpg",
        imageAlt: "Kariyesning rivojlanish bosqichlari",
        imageCaption:
          "Kariyesning dastlabki bosqichida u oson davolanadi, lekin kechiktirilsa, jiddiy muammolar paydo bo‘lishi mumkin.",
      },
      {
        heading: "Kariyesning oldini olish usullari",
        paragraphs: [
          "Kariyesni oldini olish uchun og‘iz gigiyenasiga e’tibor berish va quyidagi tavsiyalarga amal qilish lozim.",
        ],
        bulletPoints: [
          "Kuniga kamida 2 marta tishlarni floridli tish pastasi bilan tozalash.",
          "Har kuni tish ipi yoki interdental cho‘tkadan foydalanish.",
          "Shirin va kislota ko‘p bo‘lgan mahsulotlarni cheklash.",
          "Muntazam ravishda stomatologga borib, tishlarni professional tozalashdan o‘tkazish.",
          "Florid yoki remineralizatsiya gelidan foydalanish.",
        ],
        image: "https://umid-dentist.uz/images/articles/tooth-care.jpg",
        imageAlt: "Tishlarni parvarish qilish",
        imageCaption:
          "To‘g‘ri parvarish qilish kariyes rivojlanish xavfini sezilarli darajada kamaytiradi.",
      },
      {
        heading: "Kariyesni davolash usullari",
        paragraphs: [
          "Kariyes bosqichiga qarab turli xil davolash usullari qo‘llaniladi:",
        ],
        bulletPoints: [
          "Dastlabki bosqich – remineralizatsiya yoki florid qoplamalar bilan davolash.",
          "O‘rta va chuqur bosqich – plombalar yordamida tish tuzilishini tiklash.",
          "Juda chuqur kariyes – agar zararlanish juda jiddiy bo‘lsa, tish nervlarini olib tashlash (kanal davolash) talab qilinadi.",
          "Agar tishni saqlab qolish imkoni bo‘lmasa – uni olib tashlash va implantatsiya yoki protezlar orqali tiklash tavsiya etiladi.",
        ],
        image: "https://umid-dentist.uz/images/articles/dental-filling.jpg",
        imageAlt: "Tish plombalash jarayoni",
        imageCaption:
          "Zamonaviy plombalar tish tuzilishini tiklab, uni yana yillar davomida saqlashga yordam beradi.",
      },
      {
        heading: "Xulosa",
        paragraphs: [
          "Kariyes – juda keng tarqalgan bo‘lsa-da, uni oldini olish va davolash mumkin. Eng muhimi – muntazam og‘iz gigiyenasi va stomatolog ko‘rigiga qatnashish.",
          "Umid-Dentist klinikasida biz kariyesni zamonaviy usullar bilan tez va og‘riqsiz davolaymiz. Tish sog‘lig‘ingizni saqlash uchun muntazam profilaktik tekshiruvlardan o‘tishni unutmang!",
        ],
      },
    ],
    infoBox: {
      title: "Muhim eslatma",
      content:
        "Agar tishlaringizda og‘riq yoki sezuvchanlik paydo bo‘lsa, kechiktirmasdan stomatologga murojaat qiling. Erta bosqichda davolangan kariyes tishingizni uzoq muddat saqlashga yordam beradi.",
    },
  },
  {
    id: "homiladorlik-vaqti-tish-ogrig-i",
    title:
      "Homiladorlik vaqtida tish og‘rig‘i: nimaga ruxsat berilgan va nimaga yo‘q?",
    date: "25 fevral 2025",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/pregnancy-toothache-thumb.jpg",
    featuredImage:
      "https://umid-dentist.uz/images/articles/pregnancy-toothache.jpg",
    intro:
      "Homiladorlik vaqtida ayol organizmida katta o‘zgarishlar sodir bo‘ladi, shu jumladan tish va milklar ham sezgir bo‘lib qolishi mumkin. Ko‘pchilik homilador ayollar tish og‘rig‘idan shikoyat qilishadi, lekin bu davrda qaysi muolajalarga ruxsat berilgan va qaysilaridan saqlanish kerakligi haqida aniq ma’lumotga ega emaslar. Ushbu maqolada homiladorlik davrida tish muammolariga qarshi qanday xavfsiz yechimlar mavjudligini ko‘rib chiqamiz.",
    content: [
      {
        heading: "Homiladorlik va tish og‘rig‘i – sabablar",
        paragraphs: [
          "Homiladorlik davrida tish va milk muammolari ko‘pincha gormonal o‘zgarishlar, immun tizimining zaiflashishi va kalsiy tanqisligi bilan bog‘liq bo‘ladi.",
          "Tish og‘rig‘ining asosiy sabablari quyidagilar bo‘lishi mumkin:",
        ],
        bulletPoints: [
          "Gormonal o‘zgarishlar – milklarning sezuvchanligi va qon ketishga moyilligi oshadi.",
          "Kariyes – immunitetning pasayishi va o‘zgaruvchan taomlanish natijasida rivojlanishi mumkin.",
          "Gingivit va parodontoz – milklarning yallig‘lanishi va shishishi homiladorlik davrida tez-tez uchraydi.",
          "Mineral moddalar yetishmovchiligi – ayniqsa, kalsiy va D vitamini tanqisligi tishlarning zaiflashishiga olib keladi.",
          "Ko‘ngil aynishi va qusish – homiladorlik toksikozi tufayli oshqozon kislotasi tish emalini yemirishi mumkin.",
        ],
        image: "https://umid-dentist.uz/images/articles/pregnancy-gums.jpg",
        imageAlt: "Homiladorlikda milk shishi",
        imageCaption:
          "Gormonal o‘zgarishlar tufayli milklar sezgir va yallig‘langan bo‘lishi mumkin.",
      },
      {
        heading: "Tish muammolarini oldini olish uchun maslahatlar",
        paragraphs: [
          "Homiladorlik vaqtida tish og‘rig‘ini oldini olish uchun quyidagi tavsiyalarga amal qilish kerak:",
        ],
        bulletPoints: [
          "Kuniga kamida 2 marta yumshoq tish cho‘tkasi bilan tishlarni tozalash.",
          "Milklarni mustahkamlash uchun antiseptik chayqov vositalaridan foydalanish.",
          "Shirin va kislota ko‘p bo‘lgan mahsulotlarni cheklash.",
          "Kalsiy va D vitamini yetarli miqdorda qabul qilish.",
          "Homiladorlikning 2-trimestrida tish shifokoriga profilaktik ko‘rikdan o‘tish.",
        ],
        image:
          "https://umid-dentist.uz/images/articles/dental-care-pregnancy.jpg",
        imageAlt: "Homiladorlikda tish parvarishi",
        imageCaption:
          "Homiladorlikda to‘g‘ri parvarish qilish tish muammolarining oldini oladi.",
      },
      {
        heading: "Homiladorlikda tish davolashga ruxsat beriladimi?",
        paragraphs: [
          "Ko‘pchilik homilador ayollar tish davolash xavfsiz yoki xavfli ekanligiga ishonch hosil qilmagan bo‘ladi. Aslida, tish muammolarini e’tiborsiz qoldirish homilaga ham zarar yetkazishi mumkin. Quyidagilarga ruxsat beriladi:",
        ],
        bulletPoints: [
          "Anesteziyasiz oddiy tish tozalash va plombalash (2-trimestrda tavsiya etiladi).",
          "Zarurat bo‘lsa, homiladorlik uchun xavfsiz lokal og‘riqsizlantiruvchi vositalardan foydalanish (masalan, artikain asosidagi dorilar).",
          "Rentgen tekshiruvi – faqat shoshilinch holatlarda, maxsus himoya qalqoni bilan bajariladi.",
          "Tish tozalash va kariyesni davolash – lekin faqat shifokor tavsiyasi bilan amalga oshiriladi.",
        ],
        image:
          "https://umid-dentist.uz/images/articles/pregnancy-dental-treatment.jpg",
        imageAlt: "Homiladorlikda tish davolash",
        imageCaption:
          "2-trimestr – tish davolash uchun eng xavfsiz davr hisoblanadi.",
      },
      {
        heading: "Homiladorlikda ruxsat berilmagan muolajalar",
        paragraphs: [
          "Homiladorlik paytida ba’zi stomatologik muolajalar tavsiya etilmaydi yoki kechiktirilishi kerak:",
        ],
        bulletPoints: [
          "Og‘riq qoldiruvchi dorilarni o‘z bilgancha qabul qilish.",
          "Homiladorlikning 1-trimestrida yoki 3-trimestrning oxirlarida og‘ir stomatologik muolajalar.",
          "Dental implantatsiya va ortodontik muolajalar.",
          "Oqsil yoki lazer yordamida tish oqartirish.",
          "Kuchli antibiotiklar yoki og‘riqsizlantiruvchi dorilarni shifokor tavsiyasisiz qabul qilish.",
        ],
        image:
          "https://umid-dentist.uz/images/articles/no-dental-treatment.jpg",
        imageAlt: "Homiladorlikda xavfli tish muolajalari",
        imageCaption:
          "Ba’zi stomatologik muolajalar homiladorlik davrida tavsiya etilmaydi.",
      },
      {
        heading: "Xulosa",
        paragraphs: [
          "Homiladorlikda tish og‘rig‘i ko‘p uchraydi, lekin uni xavfsiz davolash mumkin. Muhimi – og‘iz gigiyenasiga e’tibor berish, shifokor ko‘rigiga borish va zarur muolajalarni kechiktirmaslik.",
          "Agar siz homiladorlik vaqtida tish muammolari bilan duch kelsangiz, **Umid-Dentist** klinikamizga murojaat qiling. Biz sizga xavfsiz va samarali davolash usullarini taklif qilamiz!",
        ],
      },
    ],
    infoBox: {
      title: "Muhim eslatma",
      content:
        "Agar tish og‘rig‘i sizni juda bezovta qilsa, shifokor tavsiyasisiz dorilar qabul qilmang. Tezroq stomatologga murojaat qiling!",
    },
  },
  {
    id: "koronalar-implantlar-qaysi-yaxshi",
    title: "Koronalar yoki implantlar – qaysi birini o‘rnatish yaxshiroq?",
    date: "25 fevral 2025",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/crowns-vs-implants-thumb.jpg",
    featuredImage:
      "https://umid-dentist.uz/images/articles/crowns-vs-implants.jpg",
    intro:
      "Tish yo‘qolganda yoki kuchli shikastlanganda bemorlar oldida ikki asosiy tanlov paydo bo‘ladi: tish implantatsiyasi yoki tish koronkasi. Ikkala usul ham estetik va funktsional jihatdan tishni tiklashga yordam beradi, ammo ularning har biri o‘ziga xos afzallik va kamchiliklarga ega. Ushbu maqolada implant va koronkalarni solishtirib, qaysi holatda qaysi biri yaxshiroq ekanligini ko‘rib chiqamiz.",
    content: [
      {
        heading: "Tish koronkasi nima?",
        paragraphs: [
          "Tish koronkasi – bu shikastlangan yoki kuchsizlangan tishni himoya qilish va tiklash uchun uning ustiga o‘rnatiladigan maxsus qoplama. Koronka tish shaklini, mustahkamligini va chaynash funktsiyasini tiklashga yordam beradi.",
          "Koronkalar quyidagi materiallardan tayyorlanishi mumkin:",
        ],
        bulletPoints: [
          "Metall-keramika – mustahkam va nisbatan arzon variant.",
          "Zirkoniy – tabiiy ko‘rinish va yuqori chidamlilikka ega.",
          "To‘liq keramika – eng estetik va allergiyaga sabab bo‘lmaydi.",
        ],
        image: "https://umid-dentist.uz/images/articles/dental-crown.jpg",
        imageAlt: "Tish koronkasi",
        imageCaption: "Zamonaviy tish koronkalarining turlari.",
      },
      {
        heading: "Tish implantlari nima?",
        paragraphs: [
          "Tish implanti – bu jag‘ suyagiga o‘rnatiladigan sun’iy ildiz bo‘lib, uning ustiga koronkalar yoki protezlar joylashtiriladi. Implant tabiiy tishga eng yaqin bo‘lgan yechim hisoblanadi.",
          "Implantlar titan yoki zirkoniy materialidan tayyorlanib, jag‘ suyaklari bilan mustahkam birlashadi (osteointegratsiya jarayoni).",
        ],
        image: "https://umid-dentist.uz/images/articles/dental-implant.jpg",
        imageAlt: "Tish implanti",
        imageCaption:
          "Tish implantining asosiy qismlari: implant, abutment va koronka.",
      },
      {
        heading: "Qachon koronka o‘rnatish kerak?",
        paragraphs: ["Koronka quyidagi holatlarda tavsiya etiladi:"],
        bulletPoints: [
          "Tish sinishi yoki kuchli shikastlanganda.",
          "Katta plombalangan tish zaiflashganda.",
          "Tishning tabiiy shakli va rangi buzilganda.",
          "Kanal davolashdan keyin tishni mustahkamlash uchun.",
        ],
        image: "https://umid-dentist.uz/images/articles/crown-treatment.jpg",
        imageAlt: "Koronka o‘rnatish jarayoni",
        imageCaption: "Koronka zaiflashgan tabiiy tishni himoya qiladi.",
      },
      {
        heading: "Qachon implant qo‘yish kerak?",
        paragraphs: [
          "Agar tish butunlay yo‘qolgan yoki olib tashlash kerak bo‘lsa, implant eng yaxshi yechim hisoblanadi. Quyidagi holatlarda implantatsiya tavsiya etiladi:",
        ],
        bulletPoints: [
          "Tish ildizi yo‘q bo‘lganda.",
          "Tish protezidan foydalanishni istamagan bemorlar uchun.",
          "Yonidagi sog‘lom tishlarni qirqishdan saqlanish uchun.",
          "Tish qatoridagi bo‘shliqni uzoq muddatga yopish kerak bo‘lganda.",
        ],
        image: "https://umid-dentist.uz/images/articles/implant-procedure.jpg",
        imageAlt: "Implant qo‘yish jarayoni",
        imageCaption:
          "Tish yo‘qolganida implant eng optimal yechim hisoblanadi.",
      },
      {
        heading: "Koronka va implant: taqqoslash",
        paragraphs: [
          "Koronka va implant orasidagi asosiy farqlarni quyidagi jadval orqali ko‘rib chiqish mumkin:",
        ],
        table: {
          headers: ["Xususiyat", "Koronka", "Implant"],
          rows: [
            [
              "Qo‘llash sohasi",
              "Shikastlangan tishni tiklash",
              "Yo‘qolgan tish o‘rnini to‘ldirish",
            ],
            [
              "Sog‘lom tishlarga ta’siri",
              "Yonidagi tishlar qirqilishi mumkin",
              "Yon tishlarga ta’sir qilmaydi",
            ],
            ["Chidamlilik", "10-15 yil", "25 yil va undan ortiq"],
            [
              "Estetika",
              "Yaxshi, lekin implantga qaraganda kamroq tabiiy",
              "Tabiiy tish ko‘rinishini mukammal taqlid qiladi",
            ],
            ["Narxi", "Nisbatan arzon", "Ko‘proq xarajat talab qiladi"],
            ["Davolash muddati", "2-3 kun", "3-6 oy"],
          ],
        },
      },
      {
        heading: "Xulosa: qaysi birini tanlash kerak?",
        paragraphs: [
          "Koronka va implantning har biri turli holatlar uchun mos keladi. Agar tish ildizi sog‘lom bo‘lsa, uni saqlab qolish uchun koronkadan foydalanish maqsadga muvofiq. Agar tish ildizi shikastlangan yoki butunlay olib tashlangan bo‘lsa, implant yaxshiroq tanlov hisoblanadi.",
          "**Umid-Dentist** klinikamizda biz sizning holatingizga qarab eng mos yechimni tavsiya qilamiz. Mutaxassislarimiz siz uchun eng qulay va samarali davolash usulini tanlashda yordam beradi.",
        ],
      },
    ],
    infoBox: {
      title: "Muhim eslatma",
      content:
        "Tish yo‘qolgan yoki shikastlangan taqdirda, vaqtni cho‘zmasdan stomatologga murojaat qilish muhim. Har bir kechikkan kun tish holatini yomonlashtirishi mumkin!",
    },
  },
  {
    id: "aftozli-stomatit-ogiz-yaralari",
    title:
      "Aftozli stomatit (og'iz yaralari): sabablari, alomatlari va davolash usullari",
    date: "25 fevral 2025",
    thumbnailImage:
      "https://umid-dentist.uz/images/articles/aphthous-stomatitis-thumb.jpg",
    featuredImage:
      "https://umid-dentist.uz/images/articles/aphthous-stomatitis.jpg",
    intro:
      "Og'iz ichidagi og'riqli yaralar ko'pchilik uchun bezovtalik tug'diradi. Aftozli stomatit – til, milk, lab ichki qismi va yonoqlarda yuzaga keladigan kichik, ammo sezilarli noqulaylik tug'diruvchi yaralar bo‘lib, odatda bir necha kun ichida yo‘qoladi. Ushbu maqolada aftozli stomatit sabablari, uning turlari va samarali davolash usullari haqida ma’lumot beramiz.",
    content: [
      {
        heading: "Aftozli stomatit nima?",
        paragraphs: [
          "Aftozli stomatit (aftalar) – bu og'iz shilliq qavatida paydo bo‘ladigan kichik, oq yoki sarg‘ish tusli yaralar bo‘lib, ularning atrofi qizargan bo‘ladi. Ular ko‘pincha og‘riqli bo‘lib, ovqatlanish yoki gapirishda noqulaylik tug‘diradi.",
          "Aftalar yuqumli emas va odatda 7-14 kun ichida o‘z-o‘zidan tuzalib ketadi, lekin ba’zan ular qayta-qayta paydo bo‘lishi mumkin.",
        ],
        image: "https://umid-dentist.uz/images/articles/mouth-ulcer.jpg",
        imageAlt: "Og'iz ichida aftozli yara",
        imageCaption:
          "Aftozli stomatit odatda yumshoq to‘qimalarda paydo bo‘ladi.",
      },
      {
        heading: "Aftozli stomatit sabablari",
        paragraphs: [
          "Aftozli stomatitning aniq sabablari hali to‘liq o‘rganilmagan, lekin quyidagi omillar uni keltirib chiqarishi mumkin:",
        ],
        bulletPoints: [
          "Stress va charchoq",
          "Immun tizimining zaiflashishi",
          "Vitamin B12, temir yoki foliy kislotasi yetishmovchiligi",
          "Og‘iz shilliq qavatining jarohatlanishi (masalan, tish cho‘tkasi yoki tish protezlari tufayli)",
          "Allergik reaksiyalar yoki ovqatga sezuvchanlik (masalan, achchiq yoki kislotali mahsulotlar)",
          "Gormonal o‘zgarishlar (masalan, ayollarda hayz sikli vaqtida)",
          "Ba’zi dorilar va tibbiy muolajalar",
          "Genetik moyillik",
        ],
        image: "https://umid-dentist.uz/images/articles/stomatitis-causes.jpg",
        imageAlt: "Stomatit sabablarini tushuntiruvchi diagramma",
        imageCaption: "Stomatit turli omillarga bog‘liq bo‘lishi mumkin.",
      },
      {
        heading: "Aftozli stomatit turlari",
        paragraphs: ["Aftozli stomatit quyidagi uch asosiy turga bo‘linadi:"],
        bulletPoints: [
          "**Oddiy aftalar** – kichik o‘lchamli (5 mm gacha), og‘iz ichki qismida paydo bo‘ladi va 7-10 kun ichida tuzaladi.",
          "**Katta aftalar** – katta o‘lchamli (1 sm dan kattaroq) bo‘lib, ular uzoqroq vaqt davomida (2-4 hafta) davolanadi va iz qoldirishi mumkin.",
          "**Gerpetiform aftalar** – juda kichik, lekin guruh-guruh bo‘lib paydo bo‘ladigan yaralar. Ular 10-14 kun ichida yo‘qoladi.",
        ],
        image:
          "https://umid-dentist.uz/images/articles/aphthous-stomatitis-types.jpg",
        imageAlt: "Aftozli stomatit turlari",
        imageCaption:
          "Aftalar kattaligi va shakliga qarab turlicha bo‘lishi mumkin.",
      },
      {
        heading: "Aftozli stomatitning alomatlari",
        paragraphs: [
          "Aftozli stomatitning asosiy alomatlari quyidagilar:",
          "- Og‘iz ichida 1 yoki bir nechta yaralarning paydo bo‘lishi",
          "- Ovqatlanish va gapirishda noqulaylik va og‘riq",
          "- Yarani o‘rab turgan qizarish",
          "- Ba’zan umumiy holsizlik yoki isitma (kuchli aftozli stomatitda)",
        ],
      },
      {
        heading: "Aftozli stomatitni qanday davolash mumkin?",
        paragraphs: [
          "Ko‘pchilik hollarda aftozli stomatit o‘z-o‘zidan tuzalib ketadi, ammo og‘riqni kamaytirish va bitish jarayonini tezlashtirish uchun quyidagi usullardan foydalanish mumkin:",
        ],
        bulletPoints: [
          "Antiseptik og‘iz chayqovchi suyuqliklar (xlorgeksidin, miramistin)",
          "Og‘riqni kamaytiruvchi gel va malhamlar (lidokain, holisal)",
          "Vitamin va minerallar (B12, temir, foliy kislotasi)",
          "Tabiiy davolash usullari (romashka yoki kalendula eritmalari bilan og‘iz chayqash)",
          "Allergik mahsulotlardan voz kechish",
          "Ovqatlanishda yumshoq va achchiq bo‘lmagan mahsulotlarni iste’mol qilish",
        ],
        image:
          "https://umid-dentist.uz/images/articles/stomatitis-treatment.jpg",
        imageAlt: "Aftozli stomatitni davolash usullari",
        imageCaption:
          "Og'iz gigiyenasi va antiseptik chayqovlar yaralarning tezroq bitishiga yordam beradi.",
      },
      {
        heading: "Aftozli stomatit oldini olish",
        paragraphs: [
          "Agar aftozli stomatit tez-tez takrorlansa, uni oldini olish uchun quyidagi tavsiyalarga amal qilish kerak:",
        ],
        bulletPoints: [
          "Kunlik og‘iz gigiyenasiga rioya qilish",
          "Sog‘lom va balanslangan ovqatlanish",
          "Stressni kamaytirish",
          "Og‘iz shilliq qavatini jarohatlanishdan saqlash",
          "Ba’zi mahsulotlarga (shokolad, tsitrus mevalar, achchiq taomlar) ehtiyot bo‘lish",
        ],
      },
      {
        heading: "Qachon shifokorga murojaat qilish kerak?",
        paragraphs: [
          "Quyidagi hollarda stomatolog yoki terapevtga murojaat qilish lozim:",
          "- Yara 2 haftadan ko‘proq vaqt davomida tuzalmayapti",
          "- Yaralar juda og‘riqli va ovqatlanishni qiyinlashtirmoqda",
          "- Aftalar bilan birga yuqori isitma yoki umumiy holsizlik kuzatilmoqda",
          "- Yaralar juda katta yoki juda ko‘p bo‘lib ketgan",
        ],
      },
      {
        heading: "Xulosa",
        paragraphs: [
          "Aftozli stomatit keng tarqalgan muammo bo‘lib, ko‘pchilik odamlar hayotida kamida bir marta undan aziyat chekadi. Ko‘pincha u o‘z-o‘zidan tuzaladi, ammo agar tez-tez takrorlansa, og‘riqli bo‘lsa yoki uzoq vaqt bitmasa, shifokorga murojaat qilish muhim.",
          "**Umid-Dentist** klinikamizda stomatit bilan bog‘liq muammolarni hal qilish va individual davolash rejasini ishlab chiqish uchun tajribali mutaxassislar xizmat ko‘rsatadi.",
        ],
      },
    ],
    infoBox: {
      title: "Muhim eslatma",
      content:
        "Og‘iz yaralari uzoq davom etsa yoki og‘riq kuchli bo‘lsa, albatta mutaxassisga murojaat qiling!",
    },
  },
];
