import React, { useState, useEffect } from "react"
import { useExperiment } from "../../store/useExperiment"
import CenterCard from "../layout/CenterCard"

interface SurveyStepProps {
  type: "demographics" | "preSurvey" | "postSurvey"
}

export default function SurveyStep({ type }: SurveyStepProps) {
  const { step, startTaskTimer, stopTaskTimer, recordTaskResult, nextStep, language } =
    useExperiment()
  const [answers, setAnswers] = useState<Record<string, any>>({})

  useEffect(() => {
    startTaskTimer()
    return () => stopTaskTimer()
  }, [])

  const handleChange = (key: string, value: string) =>
    setAnswers((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = () => {
    stopTaskTimer()
    recordTaskResult(step, { answers, timestamp: new Date().toISOString() })
    nextStep()
  }

  return React.createElement(
    CenterCard,
    { title: type },
    React.createElement(
      "div",
      {},
      React.createElement(
        "label",
        {},
        "Question 1:",
        React.createElement("input", {
          type: "text",
          value: answers.q1 || "",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("q1", e.target.value),
        })
      ),
      React.createElement(
        "button",
        { onClick: handleSubmit, style: { marginTop: 20, padding: "10px 20px" } },
        language === "de" ? "Absenden" : "Submit"
      )
    )
  )
}
