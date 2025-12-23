import { useState } from "react"
import { ExperimentContext } from "./ExperimentContext"

export const ExperimentProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [language, setLanguage] = useState<"de" | "en">("de")

  return (
    <ExperimentContext.Provider value={{ language, setLanguage }}>
      {children}
    </ExperimentContext.Provider>
  )
}
