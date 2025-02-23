import { createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [lang, setLang] = useState("ENG");
  return (
    <LanguageContext.Provider value={[lang, setLang]}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
