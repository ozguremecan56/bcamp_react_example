import React from "react";
import { useTranslate } from "../contexts/TranslateContext";

export const LanguageSelect = () => {
  const { languages, language, setLanguage, translate } = useTranslate();

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <React.Fragment>
      <select
        onChange={handleChange}
        value={language}
        name="language"
        id="language"
      >
        {languages.map(({ code, text }) => (
          <option key={`languageSelector@${code}`} value={code}>
            {text}
          </option>
        ))}
      </select>
      {translate("logout")}
    </React.Fragment>
  );
};
