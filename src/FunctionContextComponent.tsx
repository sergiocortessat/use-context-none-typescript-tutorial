import React, { useContext } from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';

const FunctionContextComponent = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem',
        width: '200px',
    }
    return (
        <>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div style={themeStyles}>
            FunctionContextComponent
        </div>
    </>
    )
}

export default FunctionContextComponent;