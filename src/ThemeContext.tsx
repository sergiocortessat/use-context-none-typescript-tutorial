import React, { useState, useContext } from "react";

const ThemeContext = React.createContext<boolean | undefined>(undefined);
const ThemeUpdateContext = React.createContext(() => {});

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children}:{children: React.ReactNode}) {
    const [darkTheme, setDarkTheme] = useState(true);
    
    function toggleTheme() {
        setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}
