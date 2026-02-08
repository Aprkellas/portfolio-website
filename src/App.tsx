import { LanguageProvider } from "./context/LanguageContext.tsx";
import { TerminalShell } from "./components/TerminalShell/TerminalShell.tsx";
import { Home } from "./pages/Home/Home.tsx";

function App() {
  return (
    <LanguageProvider>
      <TerminalShell>
        <Home />
      </TerminalShell>
    </LanguageProvider>
  );
}

export default App;
