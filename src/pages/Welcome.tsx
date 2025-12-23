import LanguageToggle from "../components/LanguageToggle"
import { useExperiment } from "../store/useExperiment"
import { de } from "../i18n/de"
import { en } from "../i18n/en"

export default function Welcome() {
  const { language } = useExperiment()
  const t = language === "de" ? de : en

  return (
    <div>
      {/* 오른쪽 상단 토글 */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <LanguageToggle />
      </div>

      <h1>{t.welcomeTitle}</h1>
      <p>{t.welcomeText}</p>
    </div>
  )
}
