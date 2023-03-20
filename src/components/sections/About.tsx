import { BsGithub, BsLinkedin } from 'react-icons/bs'
import styled from 'styled-components'
import Button from '../common/Button'
import image from './../../assets/me.jpg'

const StyledContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  height: calc(100vh - 80px);
  padding: 24px;
`

const SpecialText = styled.span`
  color: #eb8258;
`

const About = () => {
  return (
    <StyledContainer id='' className='flex-col-reverse md:flex-row md:h-[calc(100vh-80px)]'>
      <div className='flex-auto md:w-3/5 text-3xl md:text-7xl text-left flex flex-col justify-center gap-9'>
        <p style={{ whiteSpace: 'pre-line' }}>I'm <SpecialText className='text-4xl md:text-7xl'>Dev KJ</SpecialText>,{"\n"}a <SpecialText>Frontend Developer</SpecialText></p>
        <div className='text-xl'>
          Hello, I'm Khasmir Jhon Caluscusao. A very passionate Front-end React Developer based in Philippines.
        </div>
        <p className='text-xl'>
          I have a passion for creating beautiful and functional websites. Have a strong background in HTML, CSS, TypeScript and JavaScript. I also have experience with React, Next.js, Express, MongoDB and Tailwind CSS.
        </p>
        <div className='flex text-base items-center gap-4'>
          <Button href='#projects' className='text-base'>See my work</Button>
          <a href='https://github.com/khasmir04' target='_blank' className='text-3xl'><BsGithub /></a>
          <a href='https://www.linkedin.com/in/khasmir/' target='_blank' className='text-3xl'><BsLinkedin /></a>
        </div>
      </div>
      <div className='flex-auto w-3/5 md:w-2/5 p-6 flex items-center justify-center m-auto'>
        <div>
          <img src={image} alt="Image of Dev KJ" />
        </div>
      </div>
    </StyledContainer>
  )
}

export default About
