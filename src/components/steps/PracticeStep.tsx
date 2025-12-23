import React from "react"
import CenterCard from "../layout/CenterCard"
import { useExperiment } from "../../store/useExperiment"

export default function PracticeStep() {
  const { language, nextStep } = useExperiment()

  return React.createElement(
    CenterCard,
    { title: language === "de" ? "Übungsaufgabe" : "Practice Task" },
    React.createElement(
      "div",
      {},
      language === "de"
        ? "Bearbeiten Sie eine Übungsaufgabe, um sich mit der Oberfläche vertraut zu machen."
        : "Complete a practice task to get familiar with the interface.",
      React.createElement(
        "button",
        { onClick: nextStep, style: { marginTop: 20, padding: "10px 20px" } },
        language === "de" ? "Weiter" : "Next"
      )
    )
  )
}
