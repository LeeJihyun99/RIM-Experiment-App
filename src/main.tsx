import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { ExperimentProvider } from "./store/ExperimentProvider"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ExperimentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExperimentProvider>
  </React.StrictMode>
)
