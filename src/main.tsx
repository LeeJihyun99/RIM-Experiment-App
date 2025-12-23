import React from "react"
import ReactDOM from "react-dom/client"
import { ExperimentProvider } from "./store/useExperiment"
import ExperimentPage from "./pages/ExperimentPage"
import "./app.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ExperimentProvider>
      <ExperimentPage />
    </ExperimentProvider>
  </React.StrictMode>
)
