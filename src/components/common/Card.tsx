import { HiExternalLink } from 'react-icons/hi'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface CardProps {
  title: string
  description: string
  image: string
  githubUrl: string
  liveUrl: string
  tech: string[]
}

const StyledLink = styled.a`
  border: 1px solid #878787;
`

const Card = (props: CardProps) => {
  const { title, description, image, githubUrl, liveUrl, tech } = props
  return (
    <motion.div
      className='shadow-surface-elevation-low hover:shadow-surface-elevation-medium mx-auto max-w-lg rounded-sm border border-cod-gray bg-cod-gray text-left shadow hover:bg-white/5'
      whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95, rotate: -2 }}
    >
      <div>
        <a href={liveUrl}>
          <img
            className='rounded-t-sm'
            src={image}
            alt='project-cover-image'
          />
        </a>
      </div>
      <div>
        <div className='flex flex-wrap gap-2 p-3'>
          {tech.map((item, key) => (
            <span
              key={key}
              className='rounded-sm bg-gray-700/40 px-2 py-1 text-xs font-medium text-white'
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className='px-5 pb-5'>
        <h5 className='mb-2 text-2xl tracking-tight text-white'>{title}</h5>
        <p className='mb-3 font-normal text-gray-400'>{description}</p>
        <div>
          <StyledLink
            href={githubUrl}
            target='_blank'
            className='inline-flex items-center rounded-sm bg-cod-gray px-3 py-2 text-center text-sm font-medium text-white hover:bg-white/20 focus:outline-none'
          >
            Github
            <HiExternalLink style={{ fontSize: '18px', marginLeft: '4px' }} />
          </StyledLink>
          <StyledLink
            href={liveUrl}
            target='_blank'
            className='ml-2 inline-flex items-center rounded-sm bg-cod-gray px-3 py-2 text-center text-sm font-medium text-white hover:bg-white/20 focus:outline-none'
          >
            Live
            <HiExternalLink style={{ fontSize: '18px', marginLeft: '4px' }} />
          </StyledLink>
        </div>
      </div>
    </motion.div>
  )
}

export default Card
