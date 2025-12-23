import { useExperiment } from "../store/useExperiment"
import { de } from "../i18n/de"
import { en } from "../i18n/en"

export default function Welcome() {
  const { language, setLanguage } = useExperiment()
  const t = language === "de" ? de : en

  return (
    <div>
      <button onClick={() => setLanguage("de")}>DE</button>
      <button onClick={() => setLanguage("en")}>EN</button>

      <h1>{t.welcomeTitle}</h1>
      <p>{t.welcomeText}</p>
    </div>
  )
}
