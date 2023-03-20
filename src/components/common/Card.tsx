import React from 'react'
import { HiExternalLink } from 'react-icons/hi'
import styled from 'styled-components'

interface CardProps {
  title: string
  description: string
  image: string,
  githubUrl: string,
  liveUrl: string
}

const StyledLink = styled.a`
  background-color:#1b1919;
  border: 1px solid #878787;
`

const Card = (props: CardProps) => {
  const { title, description, image, githubUrl, liveUrl } = props
  return (
    <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow bg-[#0c0b0b90] border-gray-700 text-left">
      <a href={liveUrl}>
        <img className="rounded-t-lg" src={image} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-gray-400">{description}</p>
        <StyledLink href={githubUrl} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
          Github
          <HiExternalLink style={{ fontSize: '18px', marginLeft: '4px' }} />
        </StyledLink>
        <StyledLink href={liveUrl} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 ml-2">
          Live
          <HiExternalLink style={{ fontSize: '18px', marginLeft: '4px' }} />
        </StyledLink>
      </div>
    </div>

  )
}

export default Card