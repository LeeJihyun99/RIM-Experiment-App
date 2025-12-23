import LanguageToggle from "../components/LanguageToggle"
import { useExperiment } from "../store/useExperiment"
import "./ExperimentLayout.css"

export default function Experiment() {
  const { language } = useExperiment()

  return (
    <div className="page">
      {/* 상단 토글 */}
      <div className="top-bar">
        <LanguageToggle />
      </div>

      {/* 중앙 카드 */}
      <div className="content-card">
        <h1 className="title">
          {language === "de" ? "Willkommen" : "Welcome"}
        </h1>

        <p className="content">
          {language === "de"
            ? "Dies ist der Inhalt des Experiments. Hier können weitere Informationen stehen."
            : "This is the content of the experiment. More information can go here."}
        </p>
      </div>
    </div>
  )
}
