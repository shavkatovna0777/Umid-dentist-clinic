import { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import uzbekFlag from "../../assets/images/uzbekistan-flag.png";
import russianFlag from "../../assets/images/russian-flag.png";
import USFlag from "../../assets/images/united-states-flag.png";
import Img from "../LazyLoadImg/Img";

const ChangeLanguage = ({ onChangeLanguage }) => {
  const [selectedLang, setSelectedLang] = useState("Uz");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { i18n } = useTranslation();

  const languages = useMemo(
    () => [
      { code: "Uz", name: "Uzbek", flagImg: uzbekFlag },
      { code: "Ru", name: "Russian", flagImg: russianFlag },
      { code: "En", name: "English", flagImg: USFlag },
    ],
    []
  );
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setSelectedLang(savedLanguage);
      i18n.changeLanguage(savedLanguage.toLowerCase());

      if (onChangeLanguage) {
        onChangeLanguage(savedLanguage.toLowerCase());
      }
    }
  }, []);

  const selectLanguage = (langCode) => {
    setSelectedLang(langCode);
    i18n.changeLanguage(langCode.toLowerCase());
    localStorage.setItem("selectedLanguage", langCode);
    setIsOpen(false);
    onChangeLanguage(langCode.toLowerCase()); 
  };

  const selectedLanguage = useMemo(
    () => languages.find((lang) => lang.code === selectedLang) || languages[0],
    [selectedLang, languages]
  );

  return (
    <div className="relative inline-block z-10 text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-lightBlue text-white px-3 py-2 rounded-[5px]"
      >
        <Img
          src={selectedLanguage.flagImg}
          alt={selectedLanguage.name}
          className="w-5 h-5 object-cover rounded-sm"
        />
        <span className="font-medium">{selectedLanguage.code}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className="flex items-center space-x-2 w-full px-4 py-2 text-sm hover:bg-[#98d0f1]"
            >
              <Img
                src={lang.flagImg}
                alt={lang.name}
                className="w-5 h-5 object-cover rounded-sm"
              />
              <span>{lang.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
