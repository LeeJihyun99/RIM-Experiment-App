import React from "react"
import CenterCard from "../layout/CenterCard"
import { useExperiment } from "../../store/useExperiment"
import { de } from "../../content/de"
import { en } from "../../content/en"

type SurveyStepProps = {
  type: "demographics" | "A1" | "A2"
}

export default function SurveyStep({ type }: SurveyStepProps) {
  const { language, nextStep } = useExperiment()
  const content = language === "de" ? de.surveys[type] : en.surveys[type]

  return (
    <CenterCard title={content.title}>
      <a href={content.link} target="_blank" rel="noreferrer">
        {language === "de" ? "Formular öffnen" : "Open form"}
      </a>
      <br />
      <button onClick={nextStep} style={{ marginTop: "20px", padding: "10px 20px" }}>
        {language === "de" ? "Weiter" : "Next"}
      </button>
    </CenterCard>
  )
}
