import { createContext } from "react"

export type ExperimentContextType = {
  language: "de" | "en"
  setLanguage: (lang: "de" | "en") => void
}

export const ExperimentContext =
  createContext<ExperimentContextType | undefined>(undefined)
