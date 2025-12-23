import React from "react"
import CenterCard from "../layout/CenterCard"
import { useExperiment } from "../../store/useExperiment"
import { de } from "../../content/de"
import { en } from "../../content/en"

export default function WelcomeStep() {
  const { language, nextStep } = useExperiment()
  const content = language === "de" ? de.welcome : en.welcome

  return (
    <CenterCard title={content.title}>
      <p>{content.text}</p>
      <button onClick={nextStep} style={{ marginTop: "20px", padding: "10px 20px" }}>
        {language === "de" ? "Weiter" : "Next"}
      </button>
    </CenterCard>
  )
}