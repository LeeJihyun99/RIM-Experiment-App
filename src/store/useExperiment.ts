import { useContext } from "react"
import { ExperimentContext } from "./ExperimentContext"

export const useExperiment = () => {
  const context = useContext(ExperimentContext)
  if (!context) {
    throw new Error(
      "useExperiment must be used within an ExperimentProvider"
    )
  }
  return context
}
