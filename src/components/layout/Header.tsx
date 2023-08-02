import { useState } from 'react'
import {
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlinePhone,
  AiOutlineContacts,
} from 'react-icons/ai'
import styled from 'styled-components'
import NavButton from '../common/NavButton'

const StyledDiv = styled.div<{ $toggled: boolean }>`
  > ul {
    ${({ $toggled }) =>
      $toggled
        ? `display: block;
    position: absolute;
    width: calc(100% - 15px);`
        : `display: none;`}
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
      <nav className='fixed z-10 hidden h-[80px] w-full bg-mine-shaft p-5 shadow-lg md:block'>
        <div className='container m-auto flex items-center justify-between'>
          <p className='text-3xl font-bold'>
            <StyledSpan>{`<`}</StyledSpan> Dev KJ<StyledSpan> {`>`}</StyledSpan>
          </p>
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
      <nav className='z-10 rounded bg-mine-shaft px-2 py-2.5 shadow-lg sm:px-4 md:hidden'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <p className='text-3xl'>{`< Dev KJ >`}</p>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            onClick={() => setToggle((prev) => !prev)}
            className='ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 text-gray-400 hover:bg-gray-100 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-gray-600 md:hidden'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
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
            </svg>
          </button>
          <StyledDiv
            $toggled={toggle}
            className='w-full md:block md:w-auto'
            id='navbar-default'
          >
            <ul className='left-1/2 z-10 mt-4 flex -translate-x-2/4 transform flex-col rounded-lg border border-secondary border-opacity-50 bg-mine-shaft bg-mine-shaft p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:bg-gray-900 md:text-sm md:font-medium'>
              <li onClick={() => setToggle(false)}>
                <a
                  href='#'
                  className='block rounded py-2 pl-3 pr-4 uppercase text-white text-gray-400 hover:bg-gray-100 hover:bg-gray-700 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:bg-transparent md:hover:text-blue-700 md:hover:text-white'
                >
                  Home
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href='#projects'
                  className='block rounded py-2 pl-3 pr-4 uppercase text-white text-gray-400 hover:bg-gray-100 hover:bg-gray-700 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:bg-transparent md:hover:text-blue-700 md:hover:text-white'
                >
                  Projects
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href='#experience'
                  className='block rounded py-2 pl-3 pr-4 uppercase text-white text-gray-400 hover:bg-gray-100 hover:bg-gray-700 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:bg-transparent md:hover:text-blue-700 md:hover:text-white'
                >
                  Experience
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href='#contact'
                  className='block rounded py-2 pl-3 pr-4 uppercase text-white text-gray-400 hover:bg-gray-100 hover:bg-gray-700 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:bg-transparent md:hover:text-blue-700 md:hover:text-white'
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
