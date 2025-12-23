import React from "react"
import { useExperiment } from "../../store/useExperiment"
import LanguageToggle from "../LanguageToggle"

export default function TopBar() {
  const { step, goBack, language } = useExperiment()

  return React.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "10px 20px",
        borderBottom: "1px solid #ccc",
        marginBottom: "20px",
      },
    },
    React.createElement(
      "button",
      {
        onClick: goBack,
        style: {
          padding: "6px 12px",
          borderRadius: "8px",
          border: "1px solid #888",
          cursor: step === "welcome" ? "not-allowed" : "pointer",
          opacity: step === "welcome" ? 0.5 : 1,
        },
        disabled: step === "welcome",
      },
      `← ${language === "de" ? "Zurück" : "Back"}`
    ),
    React.createElement(LanguageToggle)
  )
}
