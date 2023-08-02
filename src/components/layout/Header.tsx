import { useState } from 'react'
import {
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineContacts,
} from 'react-icons/ai'
import { BsGithub, BsBriefcase, BsTelephone } from 'react-icons/bs'
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

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <>
      <nav className='fixed z-10 hidden h-[80px] w-full bg-custom-100 p-5 shadow-lg md:block'>
        <div className='container m-auto flex items-center justify-between'>
          <p className='text-3xl font-bold'>{`< Dev KJ >`}</p>
          <ul className='flex justify-end gap-9 font-bold uppercase'>
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
                <div className='flex items-center gap-2'>
                  <AiOutlineUser size={24} />
                  Home
                </div>
              </NavButton>
            </li>
            <li>
              <NavButton href='#projects'>
                <div className='flex items-center gap-2'>
                  <AiOutlineFundProjectionScreen size={24} />
                  Projects
                </div>
              </NavButton>
            </li>
            <li>
              <NavButton href='#experience'>
                <div className='flex items-center gap-2'>
                  <AiOutlineContacts size={24} />
                  Experience
                </div>
              </NavButton>
            </li>
            <li>
              <NavButton href='#contact'>
                <div className='flex items-center gap-2'>
                  <BsTelephone size={18} />
                  Contact
                </div>
              </NavButton>
            </li>
          </ul>
        </div>
      </nav>
      <nav className='z-10 rounded bg-custom-100 px-2 py-2.5 shadow-lg sm:px-4 md:hidden'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          {/* <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Flowbite</span>
          </a> */}
          <p className='text-3xl'>{`< Dev KJ >`}</p>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            onClick={() => setToggle((prev) => !prev)}
            className='text-gray-500 hover:bg-gray-100 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 ml-3 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden'
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
            <ul className='md:bg-white md:bg-gray-900 left-1/2 z-10 mt-4 flex -translate-x-2/4 transform flex-col rounded-lg border border-secondary border-opacity-50 bg-custom-100 bg-custom-100 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium'>
              <li onClick={() => setToggle(false)}>
                <a
                  href='#'
                  className='text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent block rounded py-2 pl-3 pr-4 uppercase md:border-0 md:p-0'
                >
                  Home
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href='#projects'
                  className='text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent block rounded py-2 pl-3 pr-4 uppercase md:border-0 md:p-0'
                >
                  Projects
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href='#experience'
                  className='text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent block rounded py-2 pl-3 pr-4 uppercase md:border-0 md:p-0'
                >
                  Experience
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href='#contact'
                  className='text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent block rounded py-2 pl-3 pr-4 uppercase md:border-0 md:p-0'
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
