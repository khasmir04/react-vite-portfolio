import { ReactNode } from 'react'

const ExperienceCard = ({
  timeLine,
  position,
  company,
  description,
}: {
  timeLine: ReactNode
  position: string
  company: ReactNode
  description: ReactNode
}): JSX.Element => {
  return (
    <li className='mb-10 ml-4'>
      <div className='bg-gray-200 border-white border-gray-900 bg-gray-700 absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border' />
      <time className='text-md text-gray-400 text-gray-500 mb-1 font-normal leading-none'>
        {timeLine}
      </time>
      <h3 className='text-gray-900 text-white text-2xl font-semibold'>
        {position}
      </h3>
      <p className='text-gray-500 text-gray-400 text-lg font-normal'>
        {company}
      </p>
      {description}
    </li>
  )
}

export default ExperienceCard
