import LanguageToggle from "../components/LanguageToggle"
import { useExperiment } from "../store/useExperiment"
import "../styles/Welcome.css"

export default function Welcome() {
  const { language } = useExperiment()

  return (
    <main className="welcome-page">
      {/* 상단 컨트롤 */}
      <header className="welcome-header">
        <LanguageToggle />
      </header>

      {/* 가운데 무대 */}
      <section className="welcome-stage">
        <div className="welcome-card">
          <h1 className="welcome-title">
            {language === "de" ? "Willkommen" : "Welcome"}
          </h1>

          <p className="welcome-content">
            {language === "de"
              ? "Dies ist der Inhalt der Willkommensseite."
              : "This is the content of the welcome page."}
          </p>
        </div>
      </section>
    </main>
  )
}

