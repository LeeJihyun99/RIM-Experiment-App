import React, { createContext, useContext, useState } from "react"

// ReactNode 직접 정의
type ReactNode =
  | React.ReactElement
  | string
  | number
  | boolean
  | null
  | undefined
  | ReactNode[]

type Step =
  | "welcome"
  | "consent"
  | "demographics"
  | "instruction"
  | "practice"
  | "taskA"
  | "postA"
  | "taskB"
  | "postB"
  | "done"

type ExperimentContextType = {
  language: "de" | "en"
  step: Step
  toolOrder: ("chatgpt" | "google")[]
  startTime: number | null
  taskResults: Record<string, any>
  setLanguage: (lang: "de" | "en") => void
  nextStep: () => void
  startTaskTimer: () => void
  stopTaskTimer: () => void
  recordTaskResult: (key: string, value: any) => void
}

const ExperimentContext = createContext<ExperimentContextType | undefined>(undefined)

export const ExperimentProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"de" | "en">("de")
  const [step, setStep] = useState<Step>("welcome")
  const [toolOrder] = useState<("chatgpt" | "google")[]>(() =>
    Math.random() > 0.5 ? ["chatgpt", "google"] : ["google", "chatgpt"]
  )
  const [startTime, setStartTime] = useState<number | null>(null)
  const [taskResults, setTaskResults] = useState<Record<string, any>>({})

  const nextStep = () => {
    const steps: Step[] = [
      "welcome",
      "consent",
      "demographics",
      "instruction",
      "practice",
      "taskA",
      "postA",
      "taskB",
      "postB",
      "done",
    ]
    const currentIndex = steps.indexOf(step)
    if (currentIndex < steps.length - 1) setStep(steps[currentIndex + 1])
  }

  const startTaskTimer = () => setStartTime(Date.now())
  const stopTaskTimer = () => {
    if (startTime) {
      const duration = Date.now() - startTime
      console.log(`Task duration: ${duration}ms`)
      setStartTime(null)
    }
  }

  const recordTaskResult = (key: string, value: any) =>
    setTaskResults((prev) => ({ ...prev, [key]: value }))

  // JSX 대신 React.createElement 사용
  return React.createElement(
    ExperimentContext.Provider,
    {
      value: {
        language,
        step,
        toolOrder,
        startTime,
        taskResults,
        setLanguage,
        nextStep,
        startTaskTimer,
        stopTaskTimer,
        recordTaskResult,
      },
    },
    children
  )
}

// Hook
export const useExperiment = () => {
  const context = useContext(ExperimentContext)
  if (!context)
    throw new Error("useExperiment must be used within ExperimentProvider")
  return context
}
