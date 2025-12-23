import React from "react"
import CenterCard from "../layout/CenterCard"
import { useExperiment } from "../../store/useExperiment"

export default function PostSurveyStep() {
  const { language, nextStep } = useExperiment()

  return React.createElement(
    CenterCard,
    { title: language === "de" ? "Nachbefragung" : "Post-Survey" },
    React.createElement(
      "div",
      {},
      language === "de"
        ? "Bitte füllen Sie den Fragebogen aus."
        : "Please fill out the post-survey.",
      React.createElement(
        "button",
        { onClick: nextStep, style: { marginTop: 20, padding: "10px 20px" } },
        language === "de" ? "Weiter" : "Next"
      )
    )
  )
}
