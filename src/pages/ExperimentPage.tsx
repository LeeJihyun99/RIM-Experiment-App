import React from "react"
import { useExperiment } from "../store/useExperiment"
import WelcomeStep from "../components/steps/WelcomeStep"
import ConsentStep from "../components/steps/ConsentStep"
import DemographicsStep from "../components/steps/DemographicsStep"
import PreSurveyStep from "../components/steps/PreSurveyStep.tsx"
import PracticeStep from "../components/steps/PracticeStep"
import TaskStep from "../components/steps/TaskStep"
import PostSurveyStep from "../components/steps/PostSurveyStep"
import ThankYouStep from "../components/steps/ThankYouStep"
import TopBar from "../components/layout/TopBar"

export default function ExperimentPage() {
  const { step, currentTask } = useExperiment()

  let StepComponent: React.ReactNode = null

  switch (step) {
    case "welcome":
      StepComponent = React.createElement(WelcomeStep)
      break
    case "consent":
      StepComponent = React.createElement(ConsentStep)
      break
    case "demographics":
      StepComponent = React.createElement(DemographicsStep)
      break
    case "preSurvey":
      StepComponent = React.createElement(PreSurveyStep)
      break
    case "practice":
      StepComponent = React.createElement(PracticeStep)
      break
    case "task":
      if (currentTask) StepComponent = React.createElement(TaskStep, { task: currentTask })
      break
    case "postSurvey":
      StepComponent = React.createElement(PostSurveyStep)
      break
    case "thankYou":
      StepComponent = React.createElement(ThankYouStep)
      break
  }

  return React.createElement(
    "div",
    { style: { width: "100%", maxWidth: 900, margin: "0 auto" } },
    React.createElement(TopBar),
    StepComponent
  )
}
