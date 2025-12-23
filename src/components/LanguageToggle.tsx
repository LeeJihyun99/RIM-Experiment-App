import { useExperiment } from "../store/useExperiment"
import "../styles/LanguageToggle.css"

export default function LanguageToggle() {
  const { language, setLanguage } = useExperiment()
  const isEn = language === "en"

  return (
    <div className="lang-toggle">
      <button
        className={!isEn ? "active" : ""}
        onClick={() => setLanguage("de")}
      >
        DE
      </button>

      <button
        className={isEn ? "active" : ""}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>

      <div className={`indicator ${isEn ? "right" : "left"}`} />
    </div>
  )
}
