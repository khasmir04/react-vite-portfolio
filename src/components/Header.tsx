import { AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineHome } from 'react-icons/ai'
import { BsGithub, BsBriefcase, BsTelephone } from 'react-icons/bs'
import NavButton from './common/NavButton'

const Header = () => {
  return (
    <div className='w-100 h-[80px] p-5 bg-[#6320ee]'>
      <div className='container m-auto flex justify-between items-center'>
        <p className='text-3xl'>{`< Dev KJ >`}</p>
        <ul className='flex gap-9 justify-end'>
          <li>
            <NavButton href='#'>
              <div className='flex items-center gap-2'>
                <AiOutlineHome />
                Home
              </div>
            </NavButton>
          </li>
          <li>
            <NavButton href='#about'>
              <div className='flex items-center gap-2'>
                <AiOutlineUser />
                About
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
  )
}

export default Header