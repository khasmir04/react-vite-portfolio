import { BsGithub, BsLinkedin } from 'react-icons/bs'
import styled from 'styled-components'
import Button from '../common/Button'
import image from './../../assets/me.jpg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const StyledContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 24px;
`

const SpecialText = styled.span`
  color: #eb8258;
`

const About = () => {
  const [ref, inView] = useInView()
  return (
    <StyledContainer
      id=''
      className='flex-col-reverse md:h-screen md:flex-row'
    >
      <div className='flex flex-auto flex-col justify-center gap-9 text-left text-3xl md:w-3/5 md:text-7xl'>
        <p style={{ whiteSpace: 'pre-line' }}>
          I'm <SpecialText className='text-4xl md:text-7xl'>Dev KJ</SpecialText>
          ,{'\n'}a <SpecialText>Frontend Developer</SpecialText>
        </p>
        <div className='text-xl'>
          Hello, I'm <b>Khasmir Jhon Caluscusao</b>. A very passionate Front-end
          React Developer based in Philippines.
        </div>
        <p className='text-xl'>
          I have a passion for creating beautiful and functional websites. Have
          a strong background in <b>HTML</b>, <b>CSS</b>, <b>TypeScript</b> and{' '}
          <b>JavaScript</b>. I also have experience with <b>React</b>,{' '}
          <b>Next.js</b>, <b>Express</b>, <b>MongoDB</b> and <b>Tailwind CSS</b>
          .
        </p>
        <div className='flex items-center gap-4 text-base'>
          <Button
            href='#projects'
            className='text-base'
          >
            See my work
          </Button>
          <a
            href='https://github.com/khasmir04'
            target='_blank'
            className='text-3xl transition ease-in-out hover:scale-125'
          >
            <BsGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/khasmir/'
            target='_blank'
            className='text-3xl transition ease-in-out hover:scale-125'
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
      <div className='m-auto flex w-4/5 flex-auto items-center justify-center p-6 md:w-2/5'>
        <div>
          <motion.img
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 1 }}
            src={image}
            alt='Image of Dev KJ'
            className='w-[350px] animate-image_morph rounded-full'
          />
        </div>
      </div>
    </StyledContainer>
  )
}

export default About
