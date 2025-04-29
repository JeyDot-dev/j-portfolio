import { useToggle } from "../../hooks/useToggle";
import { createContext, useContext, useEffect } from "react";
import { content } from "./content";

const LANG_KEY = "preferred-language";
const ContentContext = createContext();
function detectLanguage() {
  const language = navigator.language || navigator.userLanguage;
  return language.startsWith("fr") ? "fr" : "en";
}
function getStorageLanguage() {
  if (typeof window === "undefined") return detectLanguage();
  else return localStorage.getItem(LANG_KEY) ?? detectLanguage();
}
function updateLanguage(language) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LANG_KEY, language);
}

export function ContentProvider({ children }) {
  const [language, toggleLanguage, setLanguage] = useToggle(
    "fr",
    "en",
    getStorageLanguage(),
  );
  useEffect(() => {
    updateLanguage(language);
  }, [language]);
  return (
    <ContentContext.Provider
      value={{
        language: language,
        toggleLanguage: toggleLanguage,
        content,
        setLanguage: setLanguage,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}
export const useContentContext = () => useContext(ContentContext);
