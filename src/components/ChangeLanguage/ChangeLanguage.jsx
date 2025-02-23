import { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../slices/LanguageSlice.js";
import { useTranslation } from "react-i18next";
import uzbekFlag from "../../assets/images/uzbekistan-flag.png";
import russianFlag from "../../assets/images/russian-flag.png";
import USFlag from "../../assets/images/united-states-flag.png";
import Img from "../LazyLoadImg/Img";

const ChangeLanguage = () => {
  const dispatch = useDispatch();
  const selectedLang = useSelector((state) => state.language.selectedLang);
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
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      dispatch(setLanguage(savedLanguage));
      i18n.changeLanguage(savedLanguage.toLowerCase());
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectLanguage = (langCode) => {
    dispatch(setLanguage(langCode));
    i18n.changeLanguage(langCode.toLowerCase());
    localStorage.setItem('selectedLanguage', langCode);
    setIsOpen(false);
  };

  const selectedLanguage = useMemo(
    () => languages.find((lang) => lang.code === selectedLang) || languages[0],
    [selectedLang, languages]
  );

  return (
    <div className="relative inline-block z-10 text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 bg-lightBlue text-white px-3 py-2 rounded-[5px] transition-colors  focus:outline-none "
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Img
          src={selectedLanguage.flagImg}
          alt={selectedLanguage.name}
          className="w-5 h-5 object-cover rounded-sm"
        />
        <span className="font-medium">{selectedLanguage.code}</span>
      </button>

      {isOpen && (
        <div
          className="absolute mt-2 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform origin-top transition-transform"
          role="menu"
          aria-orientation="vertical"
        >
          {languages.map((lang) => {
            const isActive = lang.code === selectedLang;
            return (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang.code)}
                className={`flex items-center space-x-2 w-full px-4 py-2 text-sm transition-colors first:rounded-t-md last:rounded-b-md focus:outline-none
                  ${isActive ? 'bg-[#98d0f1] text-white' : 'hover:bg-[#98d0f1] hover:bg-opacity-50'}`}
                role="menuitem"
              >
                <Img
                  src={lang.flagImg}
                  alt={lang.name}
                  className="w-5 h-5 object-cover rounded-sm"
                />
                <span>{lang.code}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;