import React from "react";
import { useTranslate } from "../contexts/TranslateContext";
import { useConfig } from "../contexts/ConfigContext";

export const Content = () => {
  const { language, translate } = useTranslate();
  const { config } = useConfig();

  return (
    <div>
      Message in {language}: {translate("welcome")}
      {Boolean(config.SHOW_VAT_TEXT) ? translate("vat_info") : null}
    </div>
  );
};
