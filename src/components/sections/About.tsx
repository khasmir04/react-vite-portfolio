import { BsGithub, BsLinkedin } from 'react-icons/bs'
import styled from 'styled-components'
import Button from '../common/Button'
import image from './../../assets/me.jpg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AiOutlineDownload } from 'react-icons/ai'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`

const About = () => {
  const [imageRef, inView] = useInView()
  return (
    <StyledContainer
      id='about'
      className='mx-auto mt-20 h-full flex-col-reverse p-6 md:h-[calc(100vh-5rem)] md:flex-row md:p-6'
    >
      <div className='flex md:w-3/5 md:text-left'>
        <motion.div className='my-auto'>
          <div
            className='mb-9 text-4xl md:text-6xl'
            style={{ whiteSpace: 'pre-line' }}
          >
            <p>Khasmir Caluscusao</p>
            <p className='text-3xl text-burnt-sienna'>Full-stack Engineer</p>
          </div>
          <p className='mb-9 text-xl font-extralight'>
            I'm a dedicated Full-stack Engineer based in the Philippines, with a keen interest in
            crafting visually appealing and functional websites.
          </p>
          <p className='mb-9 text-xl font-extralight'>
            My expertise includes a solid foundation in <b>HTML</b>, <b>CSS</b>, <b>TypeScript</b>{' '}
            and <b>JavaScript</b>, along with hands-on experience in <b>React</b>, <b>Next.js</b>,{' '}
            <b>Express</b>, <b>MongoDB</b> and <b>Tailwind CSS</b>.
          </p>
          <div className='flex items-center justify-center text-base md:justify-start'>
            <a
              href='https://github.com/khasmir04'
              target='_blank'
              className='mr-4 text-3xl transition duration-500 ease-in-out hover:scale-125'
            >
              <BsGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/khasmir/'
              target='_blank'
              className='mr-4 text-3xl transition duration-500 ease-in-out hover:scale-125'
            >
              <BsLinkedin />
            </a>
            {/* <Button
              href='/docs/CV071924.pdf'
              target='_blank'
              className='mr-4 border border-burnt-sienna'
            >
              <span className='flex items-center'>
                DOWNLOAD CV
                <AiOutlineDownload
                  className='ml-2 inline'
                  size={24}
                  fontWeight='bold'
                />
              </span>
            </Button> */}
            <a
              href='/docs/CV071924.pdf'
              className='group relative inline-flex items-center justify-start overflow-hidden rounded-sm border border-burnt-sienna bg-white/5 px-4 py-1 font-medium transition-all hover:bg-white/5'
            >
              <span className='absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded-sm bg-burnt-sienna transition-all duration-500 ease-out group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
              <span className='relative flex w-full items-center text-left text-white transition-colors duration-300 ease-in-out group-hover:text-mine-shaft'>
                Download CV
                <AiOutlineDownload
                  className='ml-2 inline font-bold'
                  size={22}
                />
              </span>
            </a>
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
            className='w-[30vh] animate-image_morph rounded-full md:w-full'
          />
        </div>
      </div>
    </StyledContainer>
  )
}

export default About
