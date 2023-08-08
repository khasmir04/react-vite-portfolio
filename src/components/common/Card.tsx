import { HiExternalLink } from 'react-icons/hi'
import styled from 'styled-components'

interface CardProps {
  title: string
  description: string
  image: string
  githubUrl: string
  liveUrl: string
}

const StyledLink = styled.a`
  border: 1px solid #878787;
`

const Card = (props: CardProps) => {
  const { title, description, image, githubUrl, liveUrl } = props
  return (
    <div className='mx-auto max-w-lg rounded-lg border border-gray-200 border-gray-700 bg-cod-gray text-left shadow'>
      <div>
        <a href={liveUrl}>
          <img
            className='rounded-t-lg'
            src={image}
            alt='project-cover-image'
          />
        </a>
      </div>
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white'>
          {title}
        </h5>
        <p className='mb-3 font-normal text-gray-400'>{description}</p>
        <div>
          <StyledLink
            href={githubUrl}
            target='_blank'
            className='inline-flex items-center rounded-lg bg-cod-gray px-3 py-2 text-center text-sm font-medium text-white hover:bg-burnt-sienna-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-blue-800'
          >
            Github
            <HiExternalLink style={{ fontSize: '18px', marginLeft: '4px' }} />
          </StyledLink>
          <StyledLink
            href={liveUrl}
            target='_blank'
            className='ml-2 inline-flex items-center rounded-lg bg-cod-gray px-3 py-2 text-center text-sm font-medium text-white hover:bg-burnt-sienna-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-blue-800'
          >
            Live
            <HiExternalLink style={{ fontSize: '18px', marginLeft: '4px' }} />
          </StyledLink>
        </div>
      </div>
    </div>
  )
}

export default Card
