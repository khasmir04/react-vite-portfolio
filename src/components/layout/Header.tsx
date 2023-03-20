import { useState } from 'react'
import { AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineHome } from 'react-icons/ai'
import { BsGithub, BsBriefcase, BsTelephone } from 'react-icons/bs'
import styled from 'styled-components'
import NavButton from '../common/NavButton'

const StyledDiv = styled.div<{ $toggled: boolean }>`
  > ul {
    ${({ $toggled }) => $toggled
    ? `display: block;
    position: absolute;
    width: 100%;`
    : `display: none;`
  }
  }
`

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <>
      <div className='hidden md:block w-100 h-[80px] p-5 bg-[#1b1919]'>
        <div className='container m-auto flex justify-between items-center'>
          <p className='text-3xl'>{`< Dev KJ >`}</p>
          <ul className='flex gap-9 justify-end'>
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
                  <AiOutlineUser />
                  Home
                </div>
              </NavButton>
            </li>
            <li>
              <NavButton href='#projects'>
                <div className='flex items-center gap-2'>
                  <AiOutlineFundProjectionScreen />
                  Projects
                </div>
              </NavButton>
            </li>
            <li>
              <NavButton href='#experience'>
                <div className='flex items-center gap-2'>
                  <AiOutlineFundProjectionScreen />
                  Experience
                </div>
              </NavButton>
            </li>
            <li>
              <NavButton href='#contact'>
                <div className='flex items-center gap-2'>
                  <BsTelephone />
                  Contact
                </div>
              </NavButton>
            </li>

          </ul>
        </div>
      </div>
      <nav className="md:hidden bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Flowbite</span>
          </a> */}
          <p className='text-3xl'>{`< Dev KJ >`}</p>
          <button data-collapse-toggle="navbar-default" type="button" onClick={() => setToggle(prev => !prev)} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <StyledDiv $toggled={toggle} className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
              <li onClick={() => setToggle(false)}>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Home</a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a href="#projects" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Projects</a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a href="#experience" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Experience</a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </StyledDiv>
        </div>
      </nav>
    </>
  )
}

export default Header