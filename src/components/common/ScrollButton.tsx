import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import styled from 'styled-components'

const Button = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 40px;
  font-size: 3rem;
  z-index: 1;
`

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 80) {
      setVisible(true)
    } else if (scrolled <= 80) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <Button>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          bounce: 0.4,
          duration: 0.8,
        }}
      >
        <FaArrowCircleUp
          onClick={scrollToTop}
          className='cursor-pointer rounded-full border-2 text-burnt-sienna'
          style={{ display: visible ? 'inline' : 'none' }}
        />
      </motion.div>
    </Button>
  )
}

export default ScrollButton
