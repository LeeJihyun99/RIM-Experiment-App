import React from "react"
import { useExperiment } from "../store/useExperiment"
import LanguageToggle from "../components/LanguageToggle"

// Steps
import WelcomeStep from "../components/steps/WelcomeStep"
import ConsentStep from "../components/steps/ConsentStep"
import SurveyStep from "../components/steps/SurveyStep"
import InstructionStep from "../components/steps/InstructionStep"
import PracticeStep from "../components/steps/PracticsStep"
import TaskStep from "../components/steps/TaskStep"
import ThankYouStep from "../components/steps/ThankyouStep"

export default function ExperimentPage() {
  const { step, toolOrder } = useExperiment()

  const renderStep = () => {
    switch (step) {
      case "welcome":
        return <WelcomeStep />
      case "consent":
        return <ConsentStep />
      case "demographics":
        return <SurveyStep type="demographics" />
      case "instruction":
        return <InstructionStep />
      case "practice":
        return <PracticeStep />
      case "taskA":
        return <TaskStep tool={toolOrder[0]} />
      case "postA":
        return <SurveyStep type="A1" />
      case "taskB":
        return <TaskStep tool={toolOrder[1]} />
      case "postB":
        return <SurveyStep type="A2" />
      case "done":
        return <ThankYouStep />
      default:
        return <div>Unknown step</div>
    }
  }

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* 상단 Language Toggle */}
      <header style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
        <LanguageToggle />
      </header>

      {/* 현재 Step 렌더링 */}
      {renderStep()}
    </div>
  )
}
