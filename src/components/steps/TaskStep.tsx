import React, { useEffect } from "react"
import { useExperiment } from "../../store/useExperiment"
import type { TaskConfig } from "../../store/useExperiment"
import CenterCard from "../layout/CenterCard"

interface TaskStepProps {
  task: TaskConfig
}

export default function TaskStep({ task }: TaskStepProps) {
  const { step, startTaskTimer, stopTaskTimer, recordTaskResult, nextStep } = useExperiment()

  useEffect(() => {
    startTaskTimer()
    return () => stopTaskTimer()
  }, [])

  const handleComplete = () => {
    stopTaskTimer()
    recordTaskResult(step, { task, completed: true, timestamp: new Date().toISOString() })
    nextStep()
  }

  return React.createElement(
    CenterCard,
    { title: `Task ${task.name}: ${task.tool.toUpperCase()}` },
    React.createElement(
      "div",
      {},
      `Use ${task.tool} to complete Task ${task.name}.`,
      React.createElement(
        "button",
        { onClick: handleComplete, style: { marginTop: 20, padding: "10px 20px" } },
        "Complete Task"
      )
    )
  )
}
