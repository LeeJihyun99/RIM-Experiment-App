import React from "react"
import CenterCard from "../layout/CenterCard"
import { useExperiment } from "../../store/useExperiment"

export default function ConsentStep() {
  const { language, setConsent, setStep } = useExperiment()

  const handleAgree = () => {
    setConsent(true)
    setStep("demographics")
  }

  const handleDisagree = () => {
    setConsent(false)
    setStep("thankYou")
  }

  return React.createElement(
    CenterCard,
    { title: language === "de" ? "Einverständnis" : "Consent" },
    React.createElement(
      "div",
      {},
      language === "de"
        ? "Bitte stimmen Sie der Teilnahme zu."
        : "Please agree to participate.",
      React.createElement(
        "div",
        { style: { marginTop: 20 } },
        React.createElement(
          "button",
          { onClick: handleAgree, style: { marginRight: 10, padding: "10px 20px" } },
          language === "de" ? "Zustimmen" : "Agree"
        ),
        React.createElement(
          "button",
          { onClick: handleDisagree, style: { padding: "10px 20px" } },
          language === "de" ? "Nicht zustimmen" : "Disagree"
        )
      )
    )
  )
}
