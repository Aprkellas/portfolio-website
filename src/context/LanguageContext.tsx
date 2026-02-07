import { createContext, useContext, useState } from "react";
import en from "../i18n/en.ts";
import es from "../i18n/es.ts";

type Lang = "en" | "es";

const languages = { en, es };

const LanguageContext = createContext({
  lang: "en" as Lang,
  t: en,
  toggle: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = () => {
    setLang((l) => (l === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, t: languages[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
