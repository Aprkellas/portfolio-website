import "./terminalshell.css";
import { TopBar } from "../TopBar/TopBar.tsx";
import { Footer } from "../Footer/Footer.tsx";

export const TerminalShell = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="page">
            <div className="terminal">
                <img className="green" src={'../../styles/images/Green.png'} alt="Logo" />
                <img className="blue" src={'../../styles/images/Blue.png'} alt="Logo" />

                <TopBar />
                <div className="terminal-content">
                    {children}
                </div>
                <Footer />
            </div>

        </div>

    );
};