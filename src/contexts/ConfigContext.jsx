import React from "react";
import { TranslateContextProvider, useTranslate } from "./TranslateContext";
import configs from "../config.json";

export const ConfigContext = React.createContext({});

ConfigContext.displayName = "ConfigContext";

export const useConfig = () => React.useContext(ConfigContext);

export const ConfigContextProvider = ({ children }) => {
  const { language, defaultLanguage } = useTranslate();
  const [config, setConfig] = React.useState({});
  const contextValue = { config };

  React.useEffect(() => {
    const currentConfig = configs[language]
      ? configs[language]
      : configs[defaultLanguage];
    setConfig(currentConfig);
  }, [language, defaultLanguage]);

  return (
    <TranslateContextProvider>
      <ConfigContext.Provider value={contextValue}>
        {children}
      </ConfigContext.Provider>
    </TranslateContextProvider>
  );
};
