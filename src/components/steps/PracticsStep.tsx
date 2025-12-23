import React, { useEffect } from "react"
import CenterCard from "../layout/CenterCard"
import { useExperiment } from "../../store/useExperiment"

export default function PracticeStep() {
  const { nextStep, startTaskTimer, stopTaskTimer } = useExperiment()

  useEffect(() => {
    startTaskTimer()
    return () => stopTaskTimer()
  }, [])

  return (
    <CenterCard title="Practice Task">
      <p>Use this step to get familiar with the interface. No results will be recorded.</p>
      <button onClick={nextStep} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Next
      </button>
    </CenterCard>
  )
}
