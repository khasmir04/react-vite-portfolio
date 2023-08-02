import React from 'react'
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
  background-color: #1b1919;
  border: 1px solid #878787;
`

const Card = (props: CardProps) => {
  const { title, description, image, githubUrl, liveUrl } = props
  return (
    <div className='border-gray-200 border-gray-700 mx-auto max-w-lg rounded-lg border bg-[#0c0b0b90] text-left shadow'>
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
        <h5 className='text-gray-900 text-white mb-2 text-2xl font-bold tracking-tight'>
          {title}
        </h5>
        <p className='text-[#e5e7eb ] text-gray-400 mb-3 font-normal'>
          {description}
        </p>
        <div>
          <StyledLink
            href={githubUrl}
            target='_blank'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium focus:outline-none focus:ring-4'
          >
            Github
            <HiExternalLink style={{ fontSize: '18px', marginLeft: '4px' }} />
          </StyledLink>
          <StyledLink
            href={liveUrl}
            target='_blank'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 ml-2 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium focus:outline-none focus:ring-4'
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
