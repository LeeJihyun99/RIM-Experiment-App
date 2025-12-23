import { useExperiment } from "../store/useExperiment"

export default function LanguageToggle() {
  const { language, setLanguage } = useExperiment()

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de")
  }

  return (
    <button
      onClick={toggleLanguage}
      style={{
        padding: "8px 16px",
        borderRadius: "20px",
        border: "1px solid #ccc",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      {language === "de" ? "DE 🇩🇪" : "EN 🇬🇧"}
    </button>
  )
}
