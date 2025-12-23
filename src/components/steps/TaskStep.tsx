import React, { useEffect } from "react"
import CenterCard from "../layout/CenterCard"
import { useExperiment } from "../../store/useExperiment"

type TaskStepProps = {
  tool: "chatgpt" | "google"
}

export default function TaskStep({ tool }: TaskStepProps) {
  const { nextStep, startTaskTimer, stopTaskTimer, recordTaskResult } = useExperiment()

  useEffect(() => {
    startTaskTimer()
    return () => stopTaskTimer()
  }, [])

  const finishTask = () => {
    recordTaskResult(tool, { completed: true })
    nextStep()
  }

  return (
    <CenterCard title={`Task with ${tool}`}>
      <p>Perform the assigned information task using {tool}.</p>
      <button onClick={finishTask} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Finish Task
      </button>
    </CenterCard>
  )
}
