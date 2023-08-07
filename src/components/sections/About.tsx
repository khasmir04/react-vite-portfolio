import { BsGithub, BsLinkedin } from 'react-icons/bs'
import styled from 'styled-components'
import Button from '../common/Button'
import image from './../../assets/me.jpg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AiOutlineDownload } from 'react-icons/ai'

const StyledContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`

const About = () => {
  const [imageRef, inView] = useInView()
  return (
    <StyledContainer
      id='about'
      className='h-screen flex-col-reverse p-6 md:flex-row md:p-6'
    >
      <div className='flex text-left md:w-3/5'>
        <motion.div className='my-auto'>
          <div
            className='mb-9 text-4xl md:text-6xl'
            style={{ whiteSpace: 'pre-line' }}
          >
            <p>Khasmir Caluscusao</p>
            <p className='text-3xl text-burnt-sienna'>Frontend Developer</p>
          </div>
          <p className='mb-9 text-xl font-extralight'>
            I'm a very passionate Front-end React Developer based in
            Philippines.
          </p>
          <p className='mb-9 text-xl font-extralight'>
            I have a passion for creating beautiful and functional websites.
            Have a strong background in <b>HTML</b>, <b>CSS</b>,{' '}
            <b>TypeScript</b> and <b>JavaScript</b>. I also have experience with{' '}
            <b>React</b>, <b>Next.js</b>, <b>Express</b>, <b>MongoDB</b> and{' '}
            <b>Tailwind CSS</b>.
          </p>
          <div className='flex items-center text-base'>
            <a
              href='https://github.com/khasmir04'
              target='_blank'
              className='mr-4 text-3xl transition ease-in-out hover:scale-125'
            >
              <BsGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/khasmir/'
              target='_blank'
              className='mr-4 text-3xl transition ease-in-out hover:scale-125'
            >
              <BsLinkedin />
            </a>
            <Button
              href='/docs/CV080323.pdf'
              className='mr-4 border border-burnt-sienna'
            >
              <span className='flex items-center'>
                Download CV
                <AiOutlineDownload
                  className='ml-2 inline'
                  size={24}
                  fontWeight='bold'
                />
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className='m-auto flex flex-auto items-center justify-center p-6 md:w-2/5'>
        <div>
          {/* Removed w-[500px] */}
          <motion.img
            ref={imageRef}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 1 }}
            src={image}
            alt='Image of Dev KJ'
            className='animate-image_morph rounded-full'
          />
        </div>
      </div>
    </StyledContainer>
  )
}

export default About
