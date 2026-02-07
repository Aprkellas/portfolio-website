import "./terminalshell.css";

export const TerminalShell = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="page">
            <div className="terminal">
                <img className="green" src={'../../styles/images/Green.png'} alt="Logo" />
                <img className="blue" src={'../../styles/images/Blue.png'} alt="Logo" />
                <div className="terminal-content">
                    {children}
                </div>
            </div>
        </div>

    );
};