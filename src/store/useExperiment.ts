import React, { createContext, useContext, useState } from "react"

// ReactNode 직접 정의
export type ReactNode =
  | React.ReactElement
  | string
  | number
  | boolean
  | null
  | undefined
  | ReactNode[]

export type Step =
  | "welcome"
  | "consent"
  | "demographics"
  | "preSurvey"
  | "practice"
  | "task"
  | "postSurvey"
  | "thankYou"

// TaskConfig 정의 및 named export
export type TaskConfig = {
  name: "A" | "B"
  tool: "chatgpt" | "google"
}

export type ExperimentContextType = {
  step: Step
  language: "de" | "en"
  taskSequence: TaskConfig[]
  currentTaskIndex: number
  currentTask: TaskConfig | null
  consentGiven: boolean | null
  startTime: number | null
  taskResults: Record<string, any>
  setLanguage: (lang: "de" | "en") => void
  setConsent: (agree: boolean) => void
  setStep: (step: Step) => void      // ← 추가
  nextStep: () => void
  goBack: () => void
  startTaskTimer: () => void
  stopTaskTimer: () => void
  recordTaskResult: (key: string, value: any) => void
}

// Context 생성
export const ExperimentContext = createContext<ExperimentContextType | undefined>(undefined)

// Provider
export const ExperimentProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"de" | "en">("de")
  const [step, setStep] = useState<Step>("welcome")
  const [consentGiven, setConsent] = useState<boolean | null>(null)
  const [taskSequence] = useState<TaskConfig[]>([
    { name: "A", tool: "chatgpt" },
    { name: "B", tool: "google" },
  ])
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0)
  const [currentTask, setCurrentTask] = useState<TaskConfig | null>(null)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [taskResults, setTaskResults] = useState<Record<string, any>>({})

  const nextStep = () => {
    if (step === "welcome") {
      setStep("consent")
      return
    }
    if (step === "consent") {
      // consentGiven는 비동기 상태이므로 nextStep에서 사용하지 않음
      return
    }
    if (step === "demographics") {
      setStep("preSurvey")
      return
    }
    if (step === "preSurvey") {
      setStep("practice")
      return
    }
    if (step === "practice") {
      setCurrentTaskIndex(0)
      setCurrentTask(taskSequence[0])
      setStep("task")
      return
    }
    if (step === "task") {
      setStep("postSurvey")
      return
    }
    if (step === "postSurvey") {
      const nextIndex = currentTaskIndex + 1
      if (nextIndex < taskSequence.length) {
        setCurrentTaskIndex(nextIndex)
        setCurrentTask(taskSequence[nextIndex])
        setStep("task")
      } else {
        setStep("thankYou")
      }
      return
    }
  }

  const goBack = () => {
    const order: Step[] = ["welcome", "consent", "demographics", "preSurvey", "practice"]
    const idx = order.indexOf(step)
    if (idx > 0) setStep(order[idx - 1])
  }

  const startTaskTimer = () => setStartTime(Date.now())
  const stopTaskTimer = () => {
    if (startTime) {
      const duration = Date.now() - startTime
      console.log(`Step ${step} duration: ${duration}ms`)
      setStartTime(null)
    }
  }

  const recordTaskResult = (key: string, value: any) =>
    setTaskResults((prev) => ({ ...prev, [key]: value }))

  // ReactNode를 children으로 감싸고 createElement 사용
  return React.createElement(
    ExperimentContext.Provider,
    {
      value: {
        step,
        language,
        taskSequence,
        currentTaskIndex,
        currentTask,
        consentGiven,
        startTime,
        taskResults,
        setLanguage,
        setConsent,
        setStep,          // ← 추가
        nextStep,
        goBack,
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
  if (!context) throw new Error("useExperiment must be used within ExperimentProvider")
  return context
}
