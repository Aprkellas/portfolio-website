import { LanguageProvider } from "./context/LanguageContext.tsx";
import { TerminalShell } from "./components/TerminalShell/TerminalShell.tsx";
import { TopBar } from "./components/TopBar/TopBar.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { Footer } from "./components/Footer/Footer.tsx";

function App() {
  return (
    <LanguageProvider>
      <TerminalShell>
        <TopBar />
        <Home />
        <Footer />
      </TerminalShell>
    </LanguageProvider>
  );
}

export default App;
