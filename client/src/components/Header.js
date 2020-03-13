import React from "react"
import { useDarkMode } from "../hooks/useDarkMode"

const Header = () => {
    
    const [darkMode, setDarkMode] = useDarkMode(false)
    const toggleMode = e => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }

    return (
        <div className="nav-bar">
            <div
                onClick={toggleMode}
            >toggle darkmode</div>
        </div>
    )
}

export default Header