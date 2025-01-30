import { useState } from 'react'
import {
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlinePhone,
  AiOutlineContacts,
} from 'react-icons/ai'
import styled from 'styled-components'
import NavButton from '../common/NavButton'
import AnimatedHamburgerButton from '../common/HamburgerButton'
import { motion } from 'framer-motion'

const StyledDiv = styled.div<{ $toggled: boolean }>`
  > ul {
    ${({ $toggled }) =>
      $toggled
        ? `visiblity: visible;
    position: absolute;
    top: 3.125rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 15px);
    animation: slideIn 0.75s ease-out;`
        : `visibility: hidden;
    position: absolute;
    top: 3.125rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 15px);
    animation: slideOut 0.75s ease-out;`}
  }

  @keyframes slideIn {
    from {
      transform: translateY(-100%) translateX(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0) translateX(-50%);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0) translateX(-50%);
      opacity: 1;
    }
    to {
      transform: translateY(-100%) translateX(-50%);
      opacity: 0;
    }
  }
`

const StyledSpan = styled.span`
  color: #eb8258;
`

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <>
      {/* DESKTOP */}
      <nav className='fixed top-0 z-10 hidden h-[80px] w-full bg-mine-shaft p-5 shadow-lg md:block'>
        <div className='container m-auto flex items-center justify-between'>
          <a
            href='#'
            className='text-3xl font-bold'
          >
            <StyledSpan>{`<`}</StyledSpan> Dev KJ<StyledSpan> {`>`}</StyledSpan>
          </a>
          <ul className='flex justify-end font-bold uppercase'>
            {/* <li>
              <NavButton href='#'>
                <div className='flex items-center gap-2'>
                  <AiOutlineHome />
                  Home
                </div>
              </NavButton>
            </li> */}
            <li>
              <NavButton href='#'>
                <div className='flex items-center gap-2 text-base font-semibold'>
                  <AiOutlineUser size={24} />
                  Home
                </div>
              </NavButton>
            </li>
            <li>
              <NavButton href='#projects'>
                <div className='ml-9 flex items-center gap-2 text-base font-semibold'>
                  <AiOutlineFundProjectionScreen size={24} />
                  Projects
                </div>
              </NavButton>
            </li>
            <li>
              <NavButton href='#experience'>
                <div className='ml-9 flex items-center gap-2 text-base font-semibold'>
                  <AiOutlineContacts size={24} />
                  Experience
                </div>
              </NavButton>
            </li>
            <li>
              <NavButton href='#contact'>
                <div className='ml-9 flex items-center gap-2 text-base font-semibold'>
                  <AiOutlinePhone
                    size={24}
                    style={{ rotate: '90deg' }}
                  />
                  Contact
                </div>
              </NavButton>
            </li>
          </ul>
        </div>
      </nav>
      {/* MOBILE */}
      <nav className='fixed top-0 z-10 w-full rounded bg-mine-shaft px-2 py-2.5 shadow-lg sm:px-4 md:hidden'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <a
            href='#'
            className='text-2xl font-bold'
          >
            <StyledSpan>{`<`}</StyledSpan> Dev KJ<StyledSpan> {`>`}</StyledSpan>
          </a>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            onClick={() => setToggle((prev) => !prev)}
            className='ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-400 focus:outline-none md:hidden'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            {/* <span className='sr-only'>Open main menu</span>
            <svg
              className='h-6 w-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg> */}
            <motion.div
              className='h-6 w-6 cursor-pointer'
              aria-hidden='true'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <motion.path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                  animate={toggle ? { rotate: 45, y: 5, x: 0 } : { rotate: 0, y: 0, x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  fillRule='evenodd'
                  d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                  animate={toggle ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  fillRule='evenodd'
                  d='M3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                  animate={toggle ? { rotate: -45, y: -5, x: 0 } : { rotate: 0, y: 0, x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.div>
          </button>
          <StyledDiv
            $toggled={toggle}
            className='w-full md:block md:w-auto'
            id='navbar-default'
          >
            <ul className='left-1/2 z-10 mt-4 flex -translate-x-2/4 transform flex-col rounded-sm border border-t-0 border-secondary border-opacity-50 bg-mine-shaft p-4 transition-all duration-300'>
              <li onClick={() => setToggle(false)}>
                <a
                  href='#'
                  className='block rounded py-2 pl-3 pr-4 uppercase text-white/75'
                >
                  Home
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href='#projects'
                  className='block rounded py-2 pl-3 pr-4 uppercase text-white/75'
                >
                  Projects
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href='#experience'
                  className='block rounded py-2 pl-3 pr-4 uppercase text-white/75'
                >
                  Experience
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href='#contact'
                  className='block rounded py-2 pl-3 pr-4 uppercase text-white/75'
                >
                  Contact
                </a>
              </li>
            </ul>
          </StyledDiv>
        </div>
      </nav>
    </>
  )
}

export default Header
