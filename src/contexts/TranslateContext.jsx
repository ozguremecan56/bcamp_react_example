import React from "react";
import translations from "../translations.json";
import { ConfigContextProvider } from "./ConfigContext";

export const TranslateContext = React.createContext({ language: "tr" });

TranslateContext.displayName = "TranslateContext";

export const useTranslate = () => React.useContext(TranslateContext);

export const TranslateContextProvider = ({ children }) => {
  const defaultLanguage = "tr";
  const languages = [
    { code: "tr", text: "Turkce" },
    { code: "en", text: "English" },
    { code: "de", text: "Deutsch" }
  ];

  const [language, setLanguage] = React.useState("tr");
  const translate = (key) => {
    if (!translations[language] || translations[language][key]) {
      return translations[defaultLanguage][key];
    }

    return translations[language][key];
  };

  const contextValue = {
    language,
    setLanguage,
    translate,
    languages,
    defaultLanguage
  };

  return (
    <TranslateContext.Provider value={contextValue}>
      {children}
    </TranslateContext.Provider>
  );
};
