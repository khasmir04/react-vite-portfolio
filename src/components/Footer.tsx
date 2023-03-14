import { AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineHome } from 'react-icons/ai'
import { BsGithub, BsBriefcase, BsTelephone } from 'react-icons/bs'
import NavButton from './common/NavButton'

const Footer = () => {
  return (
    <div className='w-100 h-[80px] p-5 bg-[#6320ee]'>
      <div className='container m-auto flex justify-between items-center'>
        <p className='text-3xl'>{`< Dev KJ />`}</p>
      </div>
    </div>
  )
}

export default Footer