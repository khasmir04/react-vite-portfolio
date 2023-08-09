import { useState, useEffect } from 'react'

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  )

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString())
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <div>
      <button
        className='rounded bg-gray-800 py-2 px-4 text-white'
        onClick={handleToggleDarkMode}
      >
        Toggle Dark Mode
      </button>
      <p>Dark Mode: {isDarkMode ? 'Enabled' : 'Disabled'}</p>
    </div>
  )
}

export default DarkModeButton
