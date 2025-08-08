import { ReactNode } from 'react'
import terpImg from '../../assets/img/icons/terp.png'
import styled from 'styled-components'

const StyledContent = styled.div`
  padding: 24px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.5);
  }
`

const ExperienceCard = ({
  timeLine,
  position,
  company,
  description,
  logo,
}: {
  timeLine: ReactNode
  position: string
  company: ReactNode
  description: ReactNode
  logo: string
}): JSX.Element => {
  return (
    <li className='mb-10 ml-6'>
      <div className='mb-2'>
        <div className='border-white-900 absolute -left-[0.55rem] mt-1.5 h-4 w-4 rounded-full border bg-white' />
        <time className='text-md mb-1 font-normal leading-none text-gray-500'>{timeLine}</time>
      </div>
      {/* Card here */}
      <StyledContent>
        <h3 className='text-2xl font-semibold text-white'>{position}</h3>
        <div className='mb-4 flex items-center gap-2 text-lg font-normal text-gray-500'>
          <div className='my-2 rounded-full border border-gray-300'>
            <img
              className='aspect-square h-5 w-5 rounded-full object-contain'
              src={logo || terpImg}
              alt='project-cover-image'
            />
          </div>
          {company}
        </div>
        {description}
      </StyledContent>
    </li>
  )
}

export default ExperienceCard
