import React from "react"
import CenterCard from "../layout/CenterCard"
import { useExperiment } from "../../store/useExperiment"

export default function DemographicsStep() {
  const { language, nextStep } = useExperiment()

  return React.createElement(
    CenterCard,
    { title: language === "de" ? "Demografische Daten" : "Demographics" },
    React.createElement(
      "div",
      {},
      language === "de"
        ? "Bitte füllen Sie die demografischen Angaben aus."
        : "Please fill out your demographics.",
      React.createElement(
        "button",
        { onClick: nextStep, style: { marginTop: 20, padding: "10px 20px" } },
        language === "de" ? "Weiter" : "Next"
      )
    )
  )
}
