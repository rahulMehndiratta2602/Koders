import React, { useState } from 'react'


const useDarkMode = () => {
    const [mode, setMode] = useState('light')
    const changeMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.documentElement.style.setProperty('--font-color', '#ffffff')
            document.documentElement.style.setProperty('--background', '#000909')
        }
        else {
            setMode('light')
            document.documentElement.style.setProperty('--font-color', '#000000')
            document.documentElement.style.setProperty('--background', '#f2f3f5')

        }
    }
    return [mode, changeMode]

}

export default useDarkMode
