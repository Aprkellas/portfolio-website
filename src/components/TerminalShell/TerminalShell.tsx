import "./terminalshell.css";

export const TerminalShell = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="page">
            <div className="terminal">
                {children}
            </div>
        </div>
    );
};