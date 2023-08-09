import styled from 'styled-components'
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai'
import { BsGithub, BsBriefcase, BsTelephone } from 'react-icons/bs'
import { HiExternalLink } from 'react-icons/hi'

const StyledContainer = styled.div`
  flex-direction: column;
  transition: all 1s;
  /* height: calc(100vh - 160px); */
  height: 100vh;
  background-color: #1b1919;
  padding: 18px;
`

const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  svg {
    margin: 0 24px;
  }
`

const Labels = {
  github: 'Github',
  about: 'About',
  projects: 'Projects',
  experience: 'Experience',
  contact: 'Contact',
}

const SideBar = (props: {
  isLabeled: boolean
  handleEnter: () => void
  handleLeave: () => void
}) => {
  const { isLabeled, handleEnter, handleLeave } = props
  return (
    <StyledContainer
      className='fixed hidden md:flex'
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className='text-5xl'>{isLabeled ? '< KJ />' : 'KJ'}</div>
      <div className='m-auto'>
        <ul className='flex flex-col gap-[46px] text-2xl'>
          <li>
            <StyledAnchor
              href='https://github.com/khasmir04'
              target='_blank'
            >
              <BsGithub />
              {isLabeled && Labels['github']}
              {isLabeled && <HiExternalLink />}
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href='#'>
              <AiOutlineUser />
              {isLabeled && Labels['about']}
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href='#projects'>
              <AiOutlineFundProjectionScreen />
              {isLabeled && Labels['projects']}
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href='#experience'>
              <BsBriefcase />
              {isLabeled && Labels['experience']}
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href='#contact'>
              <BsTelephone />
              {isLabeled && Labels['contact']}
            </StyledAnchor>
          </li>
        </ul>
      </div>
    </StyledContainer>
  )
}

export default SideBar
