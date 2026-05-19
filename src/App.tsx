import { LanguageProvider } from "./context/LanguageContext.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TerminalShell } from "./components/TerminalShell/TerminalShell.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { AboutMe } from "./pages/AboutMe/AboutMe.tsx";
import { Projects } from "./pages/Projects/Projects.tsx";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<TerminalShell />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
