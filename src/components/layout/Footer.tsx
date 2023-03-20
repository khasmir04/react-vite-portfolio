import { AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineHome } from 'react-icons/ai'
import { BsGithub, BsBriefcase, BsTelephone } from 'react-icons/bs'
import NavButton from '../common/NavButton'

const Footer = () => {
  return (
    <div className='w-100 h-[80px] p-5 bg-[#1b1919]'>
      <div className='container m-auto flex justify-between items-center'>
        <p className='text-3xl ml-auto'>{`< Dev KJ />`}</p>
      </div>
    </div>
  )
}

export default Footer