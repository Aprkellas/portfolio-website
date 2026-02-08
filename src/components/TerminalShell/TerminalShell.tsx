import "./terminalshell.css";
import { TopBar } from "../TopBar/TopBar.tsx";
import { Footer } from "../Footer/Footer.tsx";
import { MobileTopBar } from "../TopBar/MobileTopBar.tsx";
import { MobileFooter } from "../Footer/MobileFooter.tsx";

export const TerminalShell = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="page">
            <div className="terminal">
                <img className="green" src={'../../styles/images/Green.png'} alt="Logo" />
                <img className="blue" src={'../../styles/images/Blue.png'} alt="Logo" />

                <div className="desktop-header">
                    <TopBar />
                </div>
                <div className="mobile-header">
                    <MobileTopBar/>
                </div>

                <div className="terminal-content">
                    {children}
                </div>
                
                <div className="footer-mobile">
                    <MobileFooter/>
                </div>
                <div className="desktop-footer">
                    <Footer />
                </div>
            </div>

        </div>

    );
};