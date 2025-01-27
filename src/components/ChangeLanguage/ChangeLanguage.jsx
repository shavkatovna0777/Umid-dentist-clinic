import React, { useState, useEffect, useRef } from "react";
import uzbekFlag from "../../assets/images/uzbekistan-flag.png";
import russianFlag from "../../assets/images/russian-flag.png";
import USFlag from "../../assets/images/united-states-flag.png";
import { useTranslation } from "react-i18next";
import Img from "../LazyLoadImg/Img";

const ChangeLanguage = ({ selectedLang, setSelectedLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const { i18n } = useTranslation();

  const languages = [
    { code: "Uz", name: "Uzbek", flagImg: uzbekFlag },
    { code: "Ru", name: "Russian", flagImg: russianFlag },
    { code: "En", name: "English", flagImg: USFlag },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (langCode) => {
    setSelectedLang(langCode);
    i18n.changeLanguage(langCode.toLowerCase());
    setIsOpen(false);
  };

  const selectedLanguage = languages.find((lang) => lang.code === selectedLang);

  return (
    <div className="relative inline-block z-10 text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 bg-lightBlue text-white px-3 py-2 rounded-[5px] transition-colors"
      >
        <Img
          src={selectedLanguage.flagImg}
          alt={selectedLanguage.name}
          className="w-5 h-5"
        />
        <span>{selectedLanguage.code}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang.code)}
                className={`
                  flex items-center space-x-2 w-full px-4 py-1 text-sm
                  ${
                    selectedLang === lang.code
                      ? "bg-lightBlue text-white"
                      : "hover:bg-[#98d0f1] hover:transition-all hover:duration-300 hover:ease-in-out"
                  }
                `}
              >
                <img src={lang.flagImg} alt={lang.name} className="w-5 h-5" />
                <span>{lang.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
