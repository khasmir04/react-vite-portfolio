import styled from 'styled-components'
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsGithub, BsBriefcase, BsTelephone } from 'react-icons/bs'

const StyledContainer = styled.div`
  flex-direction: column;
  height: calc(100vh - 80px);
  position: fixed;
  background-color: #6320ee;
  padding: 18px;
  margin-left: 100px;
`

const SideBar = () => {
  return (
    <StyledContainer className='hidden md:flex'>
      <div className='text-5xl'>KJ</div>
      <div className='m-auto'>
        <ul className='flex flex-col gap-9 text-4xl'>
          <li><a href='https://github.com/khasmir04' target='_blank'><BsGithub /></a></li>
          <li><a href='#'><AiOutlineUser /></a></li>
          <li><a href='#'><AiOutlineFundProjectionScreen /></a></li>
          <li><a href='#'><BsBriefcase /></a></li>
          <li><a href='#'><BsTelephone /></a></li>
        </ul>
      </div>
    </StyledContainer>
  )
}

export default SideBar