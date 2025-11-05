import { useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

/**
 * Component that updates the HTML lang attribute based on current language
 * This improves SEO and accessibility
 */
const LanguageAttribute: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update the HTML lang attribute
    document.documentElement.lang = language;

    // Also update the dir attribute if needed (for RTL languages in the future)
    // document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return null; // This component doesn't render anything
};

export default LanguageAttribute;
