import React from "react"
import { useExperiment } from "../../store/useExperiment"
import CenterCard from "../layout/CenterCard"
import * as XLSX from "xlsx"

export default function ThankYouStep() {
  const { taskResults } = useExperiment()

  const handleExport = () => {
    const wb = XLSX.utils.book_new()
    const wsData = Object.entries(taskResults).map(([step, data]: any) => ({
      step,
      ...data.answers,
      task: data.task?.name || "",
      tool: data.task?.tool || "",
      completed: data.completed || "",
      timestamp: data.timestamp,
    }))
    const ws = XLSX.utils.json_to_sheet(wsData)
    XLSX.utils.book_append_sheet(wb, ws, "ExperimentData")
    XLSX.writeFile(wb, "experiment_results.xlsx")
  }

  return React.createElement(
    CenterCard,
    { title: "Thank You" },
    React.createElement(
      "div",
      {},
      "Thank you for participating in the study!",
      React.createElement(
        "button",
        { onClick: handleExport, style: { marginTop: 20, padding: "10px 20px" } },
        "Export Data"
      )
    )
  )
}
