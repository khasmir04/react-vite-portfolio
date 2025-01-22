import { useState, useEffect } from 'react'

const GlareEffect = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (event: any) => {
        const maxHeight = document.documentElement.scrollHeight
        const yPosition = Math.min(event.clientY + window.scrollY, maxHeight)
        setCursorPosition({ x: event.clientX + window.scrollX, y: yPosition })
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div
            className="glare"
            style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
        ></div>
    )
}

export default GlareEffect
