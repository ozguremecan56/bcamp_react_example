import React from "react";
import { Content } from "./components/Content";
import { LanguageSelect } from "./components/LanguageSelect";
import { ConfigContextProvider } from "./contexts/ConfigContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ConfigContextProvider>
        <LanguageSelect />
        <Content />
      </ConfigContextProvider>
    </div>
  );
}
