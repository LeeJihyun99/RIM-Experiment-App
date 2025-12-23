import React from "react"
import CenterCard from "../layout/CenterCard"
import { useExperiment } from "../../store/useExperiment"

export default function PreSurveyStep() {
  const { language, nextStep } = useExperiment()

  return React.createElement(
    CenterCard,
    { title: language === "de" ? "Vorbefragung" : "Pre-Survey" },
    React.createElement(
      "div",
      {},
      language === "de"
        ? "Bitte beantworten Sie die Fragen zur Nutzung von Tools."
        : "Please answer the pre-survey questions.",
      React.createElement(
        "button",
        { onClick: nextStep, style: { marginTop: 20, padding: "10px 20px" } },
        language === "de" ? "Weiter" : "Next"
      )
    )
  )
}
